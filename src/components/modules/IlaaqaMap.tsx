"use client";

import { Maximize2, ExternalLink, Map as MapIcon, ShieldCheck, Loader2, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";
import { fetchTileUrl, MapData } from "@/actions/mapActions";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./LeafletMap"), { ssr: false });

interface IlaaqaMapProps {
    mapUrl?: string;
    projectName?: string;
}

export default function IlaaqaMap({ mapUrl, projectName }: IlaaqaMapProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [mapData, setMapData] = useState<MapData | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {
        if (!mapUrl) return;

        let isMounted = true;
        setIsLoading(true);
        setMapData(null); // Reset

        fetchTileUrl(mapUrl).then((fetchedData) => {
            if (isMounted) {
                setMapData(fetchedData);
                setIsLoading(false);
            }
        });

        return () => { isMounted = false; };
    }, [mapUrl, retryCount]);

    if (!mapUrl) {
        return (
            <div className="w-full h-full rounded-3xl border border-border bg-secondary/10 flex items-center justify-center text-muted-foreground p-12 text-center">
                <div className="space-y-4">
                    <Maximize2 className="w-12 h-12 mx-auto opacity-20" />
                    <p className="font-medium">Select a project from the sidebar to view the interactive map.</p>
                </div>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="w-full h-full rounded-2xl md:rounded-3xl overflow-hidden border border-primary/20 bg-black/40 relative shadow-2xl flex flex-col items-center justify-center">
                <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
                <p className="text-sm font-bold text-white uppercase tracking-wider animate-pulse">
                    Initializing Geographic Data...
                </p>
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>
        );
    }

    // Interactive Map via Leaflet
    if (mapData && mapData.tileUrl) {
        return (
            <div className="w-full h-full rounded-2xl md:rounded-3xl overflow-hidden border border-primary/20 bg-[#020617] relative shadow-2xl group">
                <LeafletMap
                    key={mapUrl}
                    tileUrl={mapData.tileUrl}
                    center={mapData.center || undefined}
                    zoom={mapData.zoom || undefined}
                    bounds={mapData.bounds || undefined}
                />

                
                {/* Floating Source Label */}
                <div className="absolute bottom-6 left-6 z-[1000] flex items-center gap-2 px-3 py-1.5 bg-background/80 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-white font-bold uppercase tracking-widest">{projectName || 'Project Map'}</span>
                </div>
                <a 
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute flex items-center gap-2 bottom-6 right-6 z-[1000] px-4 py-2 bg-primary text-black font-bold text-[10px] rounded-full uppercase tracking-widest shadow-lg hover:bg-white hover:scale-105 transition-all"
                >
                    Open Live Source <ExternalLink className="w-3 h-3" />
                </a>
            </div>
        );
    }

    // Fallback UI if tileUrl fetch fails or cannot be resolved
    return (
        <div 
            className="w-full h-full rounded-2xl md:rounded-3xl overflow-hidden border border-primary/20 bg-[#020617] relative shadow-2xl shadow-primary/5 group flex flex-col items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

            <div className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${isHovered ? 'opacity-30' : 'opacity-10'}`}>
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <line x1="10%" y1="20%" x2="40%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-primary" />
                    <line x1="40%" y1="50%" x2="70%" y2="30%" stroke="currentColor" strokeWidth="1" className="text-primary" />
                    <line x1="70%" y1="30%" x2="90%" y2="80%" stroke="currentColor" strokeWidth="1" className="text-primary" />
                    <line x1="40%" y1="50%" x2="20%" y2="80%" stroke="currentColor" strokeWidth="1" className="text-primary" />
                    <circle cx="40%" cy="50%" r="6" fill="currentColor" className="text-primary animate-ping" />
                </svg>
            </div>

            <div className="relative z-10 max-w-md w-full mx-auto px-6">
                <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center space-y-8 shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-primary/30">
                    <div className="mx-auto w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center border border-primary/20 relative group-hover:scale-110 transition-transform duration-500">
                        <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-primary" />
                        <MapIcon className="w-10 h-10 text-primary" />
                    </div>
                    
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full">
                            <ShieldCheck className="w-4 h-4 text-amber-500" />
                            <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest">Gateway Verified</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white tracking-tight">
                            {projectName || 'Interactive Map'}
                        </h3>
                        <p className="text-sm text-slate-300 leading-relaxed font-medium">
                            To ensure optimal performance and real-time visualization accuracy, this interactive plot map opens securely via our partner network.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <button
                            type="button"
                            onClick={() => setRetryCount((c) => c + 1)}
                            className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 text-white font-bold text-sm rounded-xl hover:bg-white/10 hover:border-primary/30 transition-all"
                        >
                            <RefreshCw className="w-4 h-4" /> Retry Interactive Map
                        </button>
                        <a
                            href={mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn relative w-full flex items-center justify-center gap-3 py-4 bg-primary text-black font-extrabold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem_rgb(var(--primary))] active:scale-95"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                            <span className="relative z-10 flex items-center gap-2">
                                Launch Interactive View <ExternalLink className="w-4 h-4" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-0 inset-x-0 p-4 border-t border-white/5 bg-black/40 backdrop-blur-md flex justify-between items-center px-6">
                <div className="flex items-center gap-3">
                    <div className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </div>
                    <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mt-0.5">Gateway Active</span>
                </div>
                <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest flex items-center gap-2 mt-0.5">
                    Live Source: <span className="text-primary/80">ilaaqa.com</span>
                </div>
            </div>
        </div>
    );
}
