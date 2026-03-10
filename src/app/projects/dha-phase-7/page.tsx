"use client";

import { MapPin, CheckCircle2, TrendingUp, ShieldCheck, Building2, Home, Waves, TreePine, Maximize2 } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";
import PlotMapModal from "@/components/modules/PlotMapModal";

const DynamicMap = dynamic<{ activeProject?: string; zoom?: number }>(() => import("@/components/modules/ProjectMap"), {
    ssr: false,
    loading: () => <div className="w-full h-[400px] bg-secondary/10 animate-pulse rounded-3xl" />
});

export default function DHAPhase7Page() {
    const [isMapModalOpen, setIsMapModalOpen] = useState(false);

    const PLOTS = [
        { size: "5 Marla", status: "Limited", price: "Premium Rates", features: ["Ideal for construction", "Developed sector"] },
        { size: "10 Marla", status: "Popular", price: "Contact for Rates", features: ["Underground utilities", "Near parks"] },
        { size: "1 Kanal", status: "Standard", price: "High Demand", features: ["Major inventory", "Ready for possession"] },
        { size: "2 Kanal", status: "Exclusive", price: "Luxury Plots", features: ["Prime sectors", "Large frontages"] },
    ];

    return (
        <div className="pt-32 pb-20 bg-[#020617]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative rounded-3xl overflow-hidden h-[500px] mb-16 border border-border">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
                    <div className="absolute bottom-12 left-8 md:left-12 space-y-4">
                        <div className="px-4 py-1.5 bg-primary text-black text-xs font-bold uppercase tracking-widest rounded-full inline-block">
                            Fully Developed
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">
                            DHA Phase 7 <span className="text-primary">Lahore</span>
                        </h1>
                        <p className="text-lg text-white/80 max-w-2xl font-medium">
                            A mature oasis of luxury and convenience. Situated near Barki Road and BRB Canal,
                            offering a sophisticated lifestyle with world-class infrastructure.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-16">
                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">Why DHA Phase 7?</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                DHA Phase 7 is one of the most sought-after phases due to its <span className="text-white font-semibold">on-ground readiness</span>.
                                It serves as a bridge between the classic DHA lifestyle and modern infrastructure. With thousands of houses already
                                constructed and families living comfortably, it offers immediate livability and rental potential.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                {[
                                    { icon: ShieldCheck, title: "Secure Living", desc: "24/7 DHA security and gated environment." },
                                    { icon: Waves, title: "Near BRB Canal", desc: "Serene environment with natural breeze." },
                                    { icon: Building2, title: "Modern CCA", desc: "Vibrant commercial centers (CCA 1 - CCA 5)." },
                                    { icon: TreePine, title: "Green Zones", desc: "Large parks and recreational facilities in every sector." },
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
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">Location & Accessibility</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/90 font-medium pb-4">
                                <div className="flex items-center gap-3"><MapPin className="text-primary w-5 h-5" /> Adjacent to DHA Phase 6</div>
                                <div className="flex items-center gap-3"><MapPin className="text-primary w-5 h-5" /> Direct access from Barki Road</div>
                                <div className="flex items-center gap-3"><MapPin className="text-primary w-5 h-5" /> 10 mins from Airport</div>
                                <div className="flex items-center gap-3"><MapPin className="text-primary w-5 h-5" /> Near BRB Canal banks</div>
                            </div>
                            <div className="relative h-[400px] w-full group">
                                <DynamicMap activeProject="DHA Phase 7" zoom={14} />
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
                                mapUrl="https://emap.pk/dha-phase-7-lahore-map"
                                projectName="DHA Phase 7 Lahore"
                            />
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">Plot Categories</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {PLOTS.map((plot) => (
                                    <div key={plot.size} className="p-8 bg-secondary/10 rounded-3xl border border-border hover:border-primary/40 transition-all space-y-4">
                                        <h4 className="text-2xl font-bold text-white">{plot.size}</h4>
                                        <p className="text-primary font-bold">{plot.price}</p>
                                        <ul className="space-y-2 pt-2">
                                            {plot.features.map((f, i) => (
                                                <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-primary/60" /> {f}
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
                            <h3 className="text-2xl font-bold text-white">Project Inquiry</h3>
                            <form className="space-y-4">
                                <input type="text" placeholder="Name" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white" />
                                <input type="tel" placeholder="Phone" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white" />
                                <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white">
                                    <option>Phase 7 - 1 Kanal</option>
                                    <option>Phase 7 - 10 Marla</option>
                                    <option>Commercial CCA</option>
                                </select>
                                <button className="w-full py-4 bg-primary text-black font-bold rounded-xl hover:scale-105 transition-all">
                                    Book Consultation
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
