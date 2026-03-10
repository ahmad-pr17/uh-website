"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Leaflet + Next.js
const DefaultIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const PROJECTS = [
    { name: "Union Town Lahore", position: [31.4420, 74.2350], description: "Main Abdul Sattar Edhi Road" },
    { name: "DHA Phase 7", position: [31.4582, 74.4654], description: "Near Barki Road & BRB Canal" },
    { name: "DHA Phase 9 Prism", position: [31.3952, 74.4251], description: "Largest Phase, Ring Road Access" },
    { name: "DHA Phase 10", position: [31.3815, 74.4102], description: "Future Modern Hub" },
    { name: "Lahore Smart City", position: [31.7407, 74.2531], description: "Kala Shah Kaku Interchange" },
    { name: "DHA Multan", position: [30.2957, 71.5670], description: "Southern Punjab's Premium Destination" },
    { name: "DHA Gujranwala", position: [32.1691, 74.2259], description: "Main GT Road Excellence" },
];

function RecenterMap({ position, zoom }: { position: [number, number]; zoom?: number }) {
    const map = useMap();
    useEffect(() => {
        map.setView(position, zoom || 13);
    }, [position, zoom, map]);
    return null;
}

export default function ProjectMap({ activeProject, zoom = 11 }: { activeProject?: string; zoom?: number }) {
    const [currentPosition, setCurrentPosition] = useState<[number, number]>([31.45, 74.35]); // Default Lahore center

    useEffect(() => {
        if (activeProject) {
            const project = PROJECTS.find(p => p.name === activeProject);
            if (project) {
                setCurrentPosition(project.position as [number, number]);
            }
        }
    }, [activeProject]);

    return (
        <div className="w-full h-full rounded-2xl overflow-hidden border border-border bg-secondary/10">
            {/* @ts-ignore */}
            <MapContainer
                center={currentPosition}
                zoom={zoom}
                scrollWheelZoom={false}
                className="w-full h-full z-0"
            >
                {/* @ts-ignore */}
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                />
                {PROJECTS.map((project) => (
                    /* @ts-ignore */
                    <Marker key={project.name} position={project.position as [number, number]}>
                        {/* @ts-ignore */}
                        <Popup className="custom-popup">
                            <div className="p-2">
                                <h3 className="font-bold text-gray-900">{project.name}</h3>
                                <p className="text-xs text-gray-600">{project.description}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
                {activeProject && <RecenterMap position={currentPosition} zoom={zoom === 11 ? 13 : zoom} />}
            </MapContainer>
        </div>
    );
}
