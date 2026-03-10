"use client";

import { Map as MapIcon, Layers, Maximize, MousePointer2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";

const DynamicMap = dynamic<{ activeProject?: string; zoom?: number }>(() => import("@/components/modules/ProjectMap"), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-secondary/10 animate-pulse rounded-3xl" />
});

export default function MapsPage() {
    const [selectedProject, setSelectedProject] = useState<string | undefined>();
    const PROJECTS = ["Union Town Lahore", "DHA Phase 7", "DHA Phase 9 Prism", "DHA Phase 10", "DHA Multan", "DHA Gujranwala", "Lahore Smart City"];

    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="container mx-auto px-4 md:px-6 h-full flex flex-col">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div className="space-y-4">
                        <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Visual Guide</h2>
                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Interactive Maps</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="px-4 py-2 bg-primary text-black font-bold rounded-lg text-sm">Download Map</button>
                    </div>
                </div>

                <div className="flex-grow grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar for Selectors */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="p-6 bg-secondary/30 rounded-2xl border border-border space-y-6">
                            <div>
                                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                    <Layers className="w-4 h-4 text-primary" />
                                    Select Phase
                                </h3>
                                <div className="space-y-2">
                                    {PROJECTS.map((phase) => (
                                        <button
                                            key={phase}
                                            onClick={() => setSelectedProject(phase)}
                                            className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${selectedProject === phase
                                                ? "bg-primary text-black font-bold shadow-lg shadow-primary/20"
                                                : "text-muted-foreground hover:bg-white/5 hover:text-white"
                                                }`}
                                        >
                                            {phase}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                    <MousePointer2 className="w-4 h-4 text-primary" />
                                    Tools
                                </h3>
                                <div className="grid grid-cols-2 gap-2">
                                    <button className="p-3 bg-background border border-border rounded-lg flex flex-col items-center gap-2 text-[10px] text-muted-foreground hover:border-primary transition-all">
                                        <Maximize className="w-4 h-4" />
                                        Zoom
                                    </button>
                                    <button className="p-3 bg-background border border-border rounded-lg flex flex-col items-center gap-2 text-[10px] text-muted-foreground hover:border-primary transition-all">
                                        <MapIcon className="w-4 h-4" />
                                        View Full
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Viewer Area */}
                    <div className="lg:col-span-3 h-[600px] relative">
                        <DynamicMap activeProject={selectedProject} />

                        {/* Visual Accent */}
                        <div className="absolute top-8 right-8 z-20 flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full backdrop-blur-md">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                            <span className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Realtime Maps</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
