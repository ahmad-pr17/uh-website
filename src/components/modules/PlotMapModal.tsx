"use client";

import { X, Maximize2, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

interface PlotMapModalProps {
    isOpen: boolean;
    onClose: () => void;
    mapUrl: string;
    projectName: string;
}

export default function PlotMapModal({ isOpen, onClose, mapUrl, projectName }: PlotMapModalProps) {
    const [isLoading, setIsLoading] = useState(true);

    // Reset loading state when mapUrl changes or modal opens
    useEffect(() => {
        if (isOpen) {
            setIsLoading(true);
        }
    }, [isOpen, mapUrl]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-6xl h-[80vh] bg-[#020617] border border-primary/20 rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 animate-in zoom-in-95 duration-300 flex flex-col">

                {/* Header */}
                <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/5 bg-secondary/20">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <Maximize2 className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white leading-tight">{projectName}</h3>
                            <p className="text-[10px] uppercase font-bold text-primary tracking-widest">Detailed Plot Map via eMap.pk</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-3 hover:bg-white/5 rounded-full transition-colors group"
                    >
                        <X className="w-6 h-6 text-muted-foreground group-hover:text-white transition-colors" />
                    </button>
                </div>

                {/* Map Iframe Container */}
                <div className="relative flex-1 bg-black/40">
                    {isLoading && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-primary">
                            <Loader2 className="w-10 h-10 animate-spin" />
                            <p className="text-sm font-medium animate-pulse text-muted-foreground">Loading interactive master plan...</p>
                        </div>
                    )}
                    <iframe
                        src={mapUrl}
                        className={`w-full h-full border-none transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                        onLoad={() => setIsLoading(false)}
                        allow="geolocation"
                        title={`${projectName} Detailed Map`}
                    />
                </div>

                {/* Footer / Context */}
                <div className="p-4 bg-secondary/10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground italic">
                        * Use mouse wheel or pinch to zoom. Data provided by eMap.pk
                    </p>
                    <div className="flex gap-4">
                        <a
                            href={mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] uppercase font-bold text-white hover:text-primary transition-colors flex items-center gap-2"
                        >
                            Open External <Maximize2 className="w-3 h-3" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
