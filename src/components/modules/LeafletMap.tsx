"use client";

import { useEffect } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export interface MapFocus {
    lat: number;
    lng: number;
    label: string;
}

interface LeafletMapProps {
    tileUrl: string;
    center?: [number, number];
    zoom?: number;
    bounds?: [[number, number], [number, number]];
    focus?: MapFocus | null;
}

// The plot overlay only has tiles up to this zoom; beyond it Leaflet scales the z19 tiles up.
const OVERLAY_NATIVE_ZOOM = 19;

// Center map to Lahore automatically if no center is provided
const DEFAULT_CENTER: [number, number] = [31.4504, 74.2981];
const DEFAULT_ZOOM = 13;

// react-leaflet's MapContainer only reads `center`/`zoom` on the very first render, so switching
// between projects (new bounds/center props on an already-mounted map) would otherwise be ignored.
// This drives the live map instance to the right view whenever the data changes.
function SyncMapView({ bounds, center, zoom }: { bounds?: [[number, number], [number, number]]; center: [number, number]; zoom: number }) {
    const map = useMap();

    useEffect(() => {
        if (bounds) {
            map.fitBounds(bounds, { padding: [24, 24] });
        } else {
            map.setView(center, zoom);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [map, bounds ? bounds.join(",") : null, center.join(","), zoom]);

    return null;
}

// A divIcon avoids Leaflet's default marker images, which don't resolve under the Next.js bundler.
const PLOT_PIN = L.divIcon({
    className: "",
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -28],
    html: '<div style="width:28px;height:28px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:var(--primary);border:3px solid #fff;box-shadow:0 4px 12px rgba(0,0,0,.45)"></div>',
});

function FocusPlot({ focus }: { focus: MapFocus }) {
    const map = useMap();

    useEffect(() => {
        map.flyTo([focus.lat, focus.lng], OVERLAY_NATIVE_ZOOM, { duration: 1.2 });
    }, [map, focus]);

    return (
        <Marker
            position={[focus.lat, focus.lng]}
            icon={PLOT_PIN}
            eventHandlers={{ add: (e) => e.target.openPopup() }}
        >
            <Popup>{focus.label}</Popup>
        </Marker>
    );
}

export default function LeafletMap({ tileUrl, center, zoom, bounds, focus }: LeafletMapProps) {
    const mapCenter = center || DEFAULT_CENTER;
    const mapZoom = zoom || DEFAULT_ZOOM;

    return (
        <MapContainer
            center={mapCenter}
            zoom={mapZoom}
            className="w-full h-full z-0"
            style={{ width: "100%", height: "100%" }}
            zoomControl={false}
        >
            <SyncMapView bounds={bounds} center={mapCenter} zoom={mapZoom} />

            {/* Base Google Map equivalent (OpenStreetMap for legal safety) */}
            <TileLayer
                url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
                attribution="&copy; Google Maps"
                maxZoom={20}
            />
            {/* The Plot Database Layer */}
            <TileLayer
                url={tileUrl}
                maxZoom={22}
                maxNativeZoom={OVERLAY_NATIVE_ZOOM}
                opacity={0.9}
            />
            {focus && <FocusPlot focus={focus} />}
        </MapContainer>
    );
}
