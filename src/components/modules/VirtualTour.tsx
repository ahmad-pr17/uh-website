import { Maximize2 } from "lucide-react";

// The tour is proxied from uniondevelopers.com via the /vtour rewrite in next.config.ts.
export default function VirtualTour() {
    return (
        <div className="relative w-full aspect-video min-h-[360px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl bg-black">
            <iframe
                src="/vtour/union-town.html"
                title="Union Town virtual tour"
                loading="lazy"
                allow="fullscreen; accelerometer; gyroscope; xr-spatial-tracking"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
            />
            <a
                href="/vtour/union-town.html"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 inline-flex items-center gap-2 px-3 py-2 bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold text-white hover:border-primary/60 transition-colors"
            >
                <Maximize2 className="w-4 h-4 text-primary" />
                Open Full Screen
            </a>
        </div>
    );
}
