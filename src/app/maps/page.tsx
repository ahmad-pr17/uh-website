"use client";

import { Layers } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

const IlaaqaMap = dynamic(() => import("@/components/modules/IlaaqaMap"), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-secondary/10 animate-pulse rounded-3xl" />
});

const SOCIETY_MAPS = [
    { name: "Union Town Lahore", url: "https://ilaaqa.com/maps/union-town-lahore" },
    { name: "Union Greens", url: "https://ilaaqa.com/maps/union-greens-lahore" },
];

export default function MapsPage() {
    const [selectedProject, setSelectedProject] = useState(SOCIETY_MAPS[0]);

    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="container mx-auto px-4 md:px-6 h-full flex flex-col">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div className="space-y-4">
                        <Eyebrow>Society Guides</Eyebrow>
                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Interactive Plot Maps</h1>
                    </div>
                </div>

                <div className="flex-grow grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar for Selectors */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="p-6 bg-secondary/30 rounded-2xl border border-border space-y-6 max-h-[80vh] overflow-y-auto">
                            <div>
                                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                    <Layers className="w-4 h-4 text-primary" />
                                    Choose Project
                                </h3>
                                <div className="space-y-2">
                                    {SOCIETY_MAPS.map((project) => (
                                        <button
                                            key={project.name}
                                            onClick={() => setSelectedProject(project)}
                                            className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all border border-transparent ${selectedProject.name === project.name
                                                ? "bg-primary text-black font-bold shadow-lg shadow-primary/20 border-primary"
                                                : "text-muted-foreground hover:bg-white/5 hover:text-white hover:border-white/10"
                                                }`}
                                        >
                                            {project.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-border/50">
                                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-2 opacity-50 underline decoration-primary/30 underline-offset-4">Source Authenticity</p>
                                <p className="text-[10px] text-muted-foreground italic leading-relaxed">
                                    All interactive plot maps are provided directly from ilaaqa.com database for real-time accuracy and verified plot markings.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Map Viewer Area */}
                    <div className="lg:col-span-3 h-[700px] relative">
                        <IlaaqaMap 
                            mapUrl={selectedProject.url} 
                            projectName={selectedProject.name} 
                        />

                        {/* Visual Accent */}
                        <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full backdrop-blur-md">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[9px] text-green-500 font-black uppercase tracking-[0.2em]">Verified Source</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
