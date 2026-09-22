"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface LeafletMapProps {
    tileUrl: string;
    center?: [number, number];
    zoom?: number;
    bounds?: [[number, number], [number, number]];
}

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

export default function LeafletMap({ tileUrl, center, zoom, bounds }: LeafletMapProps) {
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
                opacity={0.9}
            />
        </MapContainer>
    );
}
