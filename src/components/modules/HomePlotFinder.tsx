"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Sits beside the virtual tour on the home page; hands the plot number to /maps, which flies to it.
export default function HomePlotFinder() {
    const router = useRouter();
    const [plot, setPlot] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const q = plot.trim();
        router.push(q ? `/maps?plot=${encodeURIComponent(q)}` : "/maps");
    };

    return (
        <div className="h-full flex flex-col justify-center gap-6 p-8 bg-secondary/30 rounded-3xl border border-primary/20 shadow-2xl">
            <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <MapPin className="w-7 h-7 text-primary" />
            </div>
            <div className="space-y-3">
                <p className="text-primary text-xs font-bold uppercase tracking-[0.3em]">New · Plot Finder</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                    Find your plot on the map
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                    Type a plot number and jump straight to its exact spot on the Union Town map.
                </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    <input
                        type="text"
                        value={plot}
                        onChange={(e) => setPlot(e.target.value)}
                        placeholder="Plot number, e.g. 141"
                        aria-label="Plot number"
                        className="w-full bg-white/10 border border-white/20 rounded-full py-4 pl-12 pr-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    />
                </div>
                <Button type="submit" size="lg" className="w-full">
                    Find Plot on Map
                    <ArrowRight className="w-5 h-5" />
                </Button>
            </form>
            <Link href="/maps" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Or browse the full interactive map →
            </Link>
        </div>
    );
}
