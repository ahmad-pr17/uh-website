"use server";

export interface MapData {
    tileUrl: string | null;
    center: [number, number] | null;
    zoom: number | null;
    bounds: [[number, number], [number, number]] | null;
}

const FETCH_TIMEOUT_MS = 8000;
const MAX_ATTEMPTS = 3;

async function fetchHtmlWithRetry(mapUrl: string): Promise<string | null> {
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

        try {
            const response = await fetch(mapUrl, {
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
                },
                cache: "no-store",
                signal: controller.signal,
            });

            if (response.ok) return await response.text();
        } catch (error) {
            console.error(`fetchTileUrl attempt ${attempt}/${MAX_ATTEMPTS} failed for ${mapUrl}:`, error);
        } finally {
            clearTimeout(timeout);
        }

        // Brief backoff before the next attempt — a cold serverless function or a
        // momentarily slow upstream is usually fine on the second or third try.
        if (attempt < MAX_ATTEMPTS) {
            await new Promise((resolve) => setTimeout(resolve, 400 * attempt));
        }
    }
    return null;
}

export async function fetchTileUrl(mapUrl: string): Promise<MapData | null> {
    try {
        const html = await fetchHtmlWithRetry(mapUrl);
        if (!html) return null;

        let tileUrl: string | null = null;
        let center: [number, number] | null = null;
        let zoom: number | null = null;
        let bounds: [[number, number], [number, number]] | null = null;

        // Extract Custom Tile URL
        // Match all tile layers and filter out standard openstreetmap
        const tileMatches = [...html.matchAll(/L\.tileLayer\(['"](https:\/\/[^'"]+?\/{z}\/{x}\/{y}\.png)['"]/g)];
        for (const match of tileMatches) {
            if (!match[1].includes('openstreetmap.org')) {
                tileUrl = match[1];
                break;
            }
        }
        
        // Sometimes the URL is configured in a JS object instead, fallback check
        if (!tileUrl) {
            const jsMatches = [...html.matchAll(/['"](https:\/\/[^'"]+?\/{z}\/{x}\/{y}\.png)['"]/g)];
            for (const match of jsMatches) {
                if (!match[1].includes('openstreetmap.org')) {
                    tileUrl = match[1];
                    break;
                }
            }
        }

        // Primary: ilaaqa.com renders every map with `var bounds = L.latLngBounds(L.latLng(lat1,lng1), L.latLng(lat2,lng2));
        // map.fitBounds(bounds);`. Grab every bounds literal, and prefer the one actually passed to fitBounds
        // (the last one declared before the fitBounds() call) since a page can define per-layer bounds too.
        const boundsRegex = /(?:new\s+)?L\.latLngBounds\(\s*(?:new\s+)?L\.latLng\(([\d.-]+)\s*,\s*([\d.-]+)\)\s*,\s*(?:new\s+)?L\.latLng\(([\d.-]+)\s*,\s*([\d.-]+)\)\s*\)/gi;
        const fitBoundsIndex = html.indexOf('.fitBounds(');
        let lastMatchBeforeFit: RegExpExecArray | null = null;
        let firstMatch: RegExpExecArray | null = null;
        let m: RegExpExecArray | null;
        while ((m = boundsRegex.exec(html)) !== null) {
            if (!firstMatch) firstMatch = m;
            if (fitBoundsIndex !== -1 && m.index < fitBoundsIndex) lastMatchBeforeFit = m;
        }
        const boundsMatch = lastMatchBeforeFit || firstMatch;

        if (boundsMatch) {
            const lat1 = parseFloat(boundsMatch[1]);
            const lng1 = parseFloat(boundsMatch[2]);
            const lat2 = parseFloat(boundsMatch[3]);
            const lng2 = parseFloat(boundsMatch[4]);

            bounds = [[lat1, lng1], [lat2, lng2]];
            center = [(lat1 + lat2) / 2, (lng1 + lng2) / 2];
            // No fixed zoom - the map fits itself to these bounds on the client, matching the source site exactly.
        }

        // Fallback: older map pages use L.map(...).setView([lat, lng], zoom) instead of fitBounds
        if (!bounds) {
            const setViewIndex = html.indexOf('setView');
            if (setViewIndex !== -1) {
                const setViewStr = html.substring(setViewIndex, setViewIndex + 100);
                const cMatch = setViewStr.match(/\[\s*([\d.-]+)\s*,\s*([\d.-]+)\s*\]/);
                const zMatch = setViewStr.match(/\]\s*,\s*(\d+)/);

                if (cMatch) {
                    center = [parseFloat(cMatch[1]), parseFloat(cMatch[2])];
                }
                if (zMatch) {
                    zoom = parseInt(zMatch[1]);
                }
            }
        }

        // Final fallback: just use Lahore generalized if absolutely nothing worked
        if (!center) {
            const genCenterMatch = html.match(/\[\s*(31\.[\d]+)\s*,\s*(74\.[\d]+)\s*\]/);
            if (genCenterMatch) {
                center = [parseFloat(genCenterMatch[1]), parseFloat(genCenterMatch[2])];
                zoom = 15;
            }
        }

        return { tileUrl, center, zoom, bounds };
    } catch (error) {
        console.error("Failed to fetch map tile URL from:", mapUrl, error);
        return null;
    }
}
