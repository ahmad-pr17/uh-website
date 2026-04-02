"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface LeafletMapProps {
    tileUrl: string;
    center?: [number, number];
    zoom?: number;
}

// Center map to Lahore automatically if no center is provided
const DEFAULT_CENTER: [number, number] = [31.4504, 74.2981];
const DEFAULT_ZOOM = 13;

export default function LeafletMap({ tileUrl, center, zoom }: LeafletMapProps) {
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
