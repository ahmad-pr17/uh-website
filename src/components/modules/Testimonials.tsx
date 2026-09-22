import { Star, Quote } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

const TESTIMONIALS = [
    {
        quote: "From the first meeting to the final transfer, everything was handled with complete transparency. They walked me through every document before I signed anything.",
        name: "Ahsan Raza",
        role: "Investor, DHA Phase 9 Prism",
    },
    {
        quote: "I was buying from overseas and nervous about verification. The team sent me the plot map and title documents before I committed a single rupee.",
        name: "Sara Khalid",
        role: "Overseas Client, DHA Phase 6",
    },
    {
        quote: "Best consultancy experience I've had in Lahore real estate. Responsive, knowledgeable about every sector, and never pushy about closing a deal.",
        name: "Faisal Mahmood",
        role: "Homeowner, Union Town Lahore",
    },
];

export default function Testimonials() {
    return (
        <section className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
                <Eyebrow className="mx-auto">Client Stories</Eyebrow>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">What Our Clients Say</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {TESTIMONIALS.map((t) => (
                    <div
                        key={t.name}
                        className="p-8 bg-secondary/20 rounded-3xl border border-border space-y-6 hover:border-primary/30 transition-all flex flex-col"
                    >
                        <Quote className="w-8 h-8 text-primary/40" />
                        <p className="text-white/90 leading-relaxed flex-grow">&ldquo;{t.quote}&rdquo;</p>
                        <div className="space-y-2 pt-4 border-t border-white/5">
                            <div className="flex gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                ))}
                            </div>
                            <p className="text-white font-bold">{t.name}</p>
                            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">{t.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
