"use client";

import { MapPin, CheckCircle2, TrendingUp, ShieldCheck, Building2, TowerControl, Plane, ExternalLink, Maximize2 } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";
import PlotMapModal from "@/components/modules/PlotMapModal";

const DynamicMap = dynamic<{ activeProject?: string; zoom?: number }>(() => import("@/components/modules/ProjectMap"), {
    ssr: false,
    loading: () => <div className="w-full h-[400px] bg-secondary/10 animate-pulse rounded-3xl" />
});

export default function DHAPhase9PrismPage() {
    const [isMapModalOpen, setIsMapModalOpen] = useState(false);

    const PLOTS = [
        { size: "5 Marla", status: "High ROI", price: "Starting ~5.5M", features: ["Ring Road access", "J-Block hot pick"] },
        { size: "10 Marla", status: "Sweet Spot", price: "Starting ~12.5M", features: ["K & L Block recommendations", "Near basic amenities"] },
        { size: "1 Kanal", status: "Luxury", price: "High Potential", features: ["Major investment target", "Expected surge post-possession"] },
        { size: "8 Marla Comm", status: "Commercial", price: "Premier Choice", features: ["Civic Zone 1", "Oval Commercial"] },
    ];

    return (
        <div className="pt-32 pb-20 bg-[#020617]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative rounded-3xl overflow-hidden h-[500px] mb-16 border border-border">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=1200')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
                    <div className="absolute bottom-12 left-8 md:left-12 space-y-4">
                        <div className="px-4 py-1.5 bg-primary text-black text-xs font-bold uppercase tracking-widest rounded-full inline-block">
                            The Future of DHA
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">
                            DHA Phase 9 <span className="text-primary">Prism</span>
                        </h1>
                        <p className="text-lg text-white/80 max-w-2xl font-medium">
                            The largest phase of DHA Lahore, spanning 44,000 Kanals.
                            A modern masterpiece designed for exponential growth and premium lifestyle.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-16">
                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">Project Scope</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Phase 9 Prism is not just a housing project; it's a <span className="text-white font-semibold">mega-city within DHA</span>.
                                With 16 sectors (A-R) and 9 grand entry points, it is perfectly positioned between Ferozepur Road and Bedian Road,
                                granting effortless access to the Lahore Ring Road.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                {[
                                    { icon: TowerControl, title: "Grand Infrastructure", desc: "44,000 Kanals of meticulously planned sectors." },
                                    { icon: Plane, title: "Airport Proximity", desc: "Minutes away from Allama Iqbal International." },
                                    { icon: TrendingUp, title: "Growth Engine", desc: "Highest potential for capital appreciation in 2026." },
                                    { icon: Building2, title: "Commercial Zones", desc: "Oval Commercial & Main Civic Zone 1." },
                                ].map((item) => (
                                    <div key={item.title} className="flex gap-4 p-4 bg-secondary/20 rounded-2xl border border-border/50">
                                        <div className="mt-1"><item.icon className="w-6 h-6 text-primary" /></div>
                                        <div>
                                            <h4 className="font-bold text-white">{item.title}</h4>
                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">Location & Connectivity</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/90 font-medium pb-4">
                                <div className="flex items-center gap-3"><MapPin className="text-primary w-5 h-5 flex-shrink-0" /> Near Ferozepur & Bedian Road</div>
                                <div className="flex items-center gap-3"><MapPin className="text-primary w-5 h-5 flex-shrink-0" /> Direct access to Ring Road</div>
                                <div className="flex items-center gap-3"><MapPin className="text-primary w-5 h-5 flex-shrink-0" /> 5 mins from Airport</div>
                                <div className="flex items-center gap-3"><MapPin className="text-primary w-5 h-5 flex-shrink-0" /> Proximity to Phase 5 & 6</div>
                            </div>
                            <div className="relative h-[400px] w-full group">
                                <DynamicMap activeProject="DHA Phase 9 Prism" zoom={14} />
                                <div className="absolute top-4 right-4 z-10">
                                    <button
                                        onClick={() => setIsMapModalOpen(true)}
                                        className="flex items-center gap-2 px-4 py-2 bg-[#020617]/90 backdrop-blur-md border border-primary/30 rounded-xl text-white text-xs font-bold hover:bg-primary hover:text-black transition-all shadow-xl"
                                    >
                                        <Maximize2 className="w-4 h-4" />
                                        View Detailed Plot Map
                                    </button>
                                </div>
                            </div>

                            <PlotMapModal
                                isOpen={isMapModalOpen}
                                onClose={() => setIsMapModalOpen(false)}
                                mapUrl="https://emap.pk/dha-phase-9-prism-lahore-map"
                                projectName="DHA Phase 9 Prism Lahore"
                            />
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">Plot Options</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {PLOTS.map((plot) => (
                                    <div key={plot.size} className="p-8 bg-secondary/10 rounded-3xl border border-border hover:border-primary/40 transition-all space-y-4">
                                        <h4 className="text-2xl font-bold text-white">{plot.size}</h4>
                                        <p className="text-primary font-bold">{plot.price}</p>
                                        <ul className="space-y-2 pt-2">
                                            {plot.features.map((f, i) => (
                                                <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="space-y-8">
                        <div className="sticky top-32 p-8 bg-secondary/30 rounded-3xl border border-primary/20 backdrop-blur-xl space-y-6">
                            <h3 className="text-2xl font-bold text-white">Prism Inquiry</h3>
                            <form className="space-y-4">
                                <input type="text" placeholder="Full Name" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white" />
                                <input type="tel" placeholder="Contact Number" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white" />
                                <button className="w-full py-4 bg-primary text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all">
                                    Get Pricing Guide
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
