const PARTNERS = ["Union Town", "Etihad Town", "Bahria Town", "Union Greens"];

// The track is two identical halves so translating by -50% lines the second half up exactly where
// the first started. Each half must be wider than the viewport, or the right side shows a gap.
const HALF = Array.from({ length: 4 }, () => PARTNERS).flat();
const TRACK = [...HALF, ...HALF];

export default function TrustedByStrip() {
    return (
        <div className="pt-10 pb-2">
            <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-bold mb-4 text-center">
                Proudly Associated With
            </p>
            <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex w-max animate-marquee">
                    {TRACK.map((name, i) => (
                        <span
                            key={`${name}-${i}`}
                            className="shrink-0 px-8 text-white/50 font-serif italic text-lg md:text-xl tracking-tight hover:text-primary transition-colors"
                        >
                            {name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
