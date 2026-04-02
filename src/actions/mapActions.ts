"use server";

export interface MapData {
    tileUrl: string | null;
    center: [number, number] | null;
    zoom: number | null;
}

export async function fetchTileUrl(mapUrl: string): Promise<MapData | null> {
    try {
        const response = await fetch(mapUrl, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            },
            cache: "no-store"
        });

        if (!response.ok) return null;

        const html = await response.text();
        
        let tileUrl: string | null = null;
        let center: [number, number] | null = null;
        let zoom: number | null = null;

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

        // Extract Center and Zoom with a more robust substring matching technique
        const setViewIndex = html.indexOf('setView');
        if (setViewIndex !== -1) {
            const setViewStr = html.substring(setViewIndex, setViewIndex + 100);
            const cMatch = setViewStr.match(/\[\s*([\d.]+)\s*,\s*([\d.]+)\s*\]/);
            const zMatch = setViewStr.match(/\]\s*,\s*(\d+)/);
            
            if (cMatch) {
                center = [parseFloat(cMatch[1]), parseFloat(cMatch[2])];
            }
            if (zMatch) {
                zoom = parseInt(zMatch[1]);
            }
        }

        // Alternative: some maps use fitBounds with L.LatLngBounds instead of setView
        if (!center) {
            const boundsMatch = html.match(/new L\.LatLngBounds\(\s*new L\.LatLng\(([\d.]+),\s*([\d.]+)\),\s*new L\.LatLng\(([\d.]+),\s*([\d.]+)\)/);
            if (boundsMatch) {
                const lat1 = parseFloat(boundsMatch[1]);
                const lng1 = parseFloat(boundsMatch[2]);
                const lat2 = parseFloat(boundsMatch[3]);
                const lng2 = parseFloat(boundsMatch[4]);
                
                // Calculate the true center of the bounds
                center = [(lat1 + lat2) / 2, (lng1 + lng2) / 2];
                zoom = 14; // Default safe zoom since fitBounds computes zoom automatically based on screen space
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

        return { tileUrl, center, zoom };
    } catch (error) {
        console.error("Failed to fetch map tile URL from:", mapUrl, error);
        return null;
    }
}
