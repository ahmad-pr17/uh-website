"use client";

import { MapPin, CheckCircle2, TrendingUp, ShieldCheck, Building2, Home, Waves, TreePine, Maximize2 } from "lucide-react";
import dynamic from "next/dynamic";

const IlaaqaMap = dynamic(() => import("@/components/modules/IlaaqaMap"), {
    ssr: false,
    loading: () => <div className="w-full h-[600px] bg-secondary/10 animate-pulse rounded-3xl" />
});

export default function DHAPhase7Page() {
    const PLOTS = [
        { size: "5 Marla", status: "Limited", price: "Premium Rates", features: ["Ideal for construction", "Developed sector"] },
        { size: "10 Marla", status: "Popular", price: "Contact for Rates", features: ["Underground utilities", "Near parks"] },
        { size: "1 Kanal", status: "Standard", price: "High Demand", features: ["Major inventory", "Ready for possession"] },
        { size: "2 Kanal", status: "Exclusive", price: "Luxury Plots", features: ["Prime sectors", "Large frontages"] },
    ];

    return (
        <div className="pt-32 pb-20 bg-[#020617]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative rounded-3xl overflow-hidden h-[500px] mb-16 border border-border text-center md:text-left">
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
                            DHA Phase 7 <span className="text-primary font-serif italic">Lahore</span>
                        </h1>
                        <p className="text-lg text-white/80 max-w-2xl font-medium leading-relaxed">
                            A mature oasis of luxury and convenience. Situated near Barki Road and BRB Canal,
                            offering a sophisticated lifestyle with world-class infrastructure.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-16">
                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">Premium Living Experience</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                DHA Phase 7 is one of the most sought-after phases due to its <span className="text-white font-semibold underline decoration-primary/30 underline-offset-4">on-ground readiness</span>.
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
                                    <div key={item.title} className="flex gap-4 p-4 bg-secondary/20 rounded-2xl border border-border/50 hover:border-primary/40 transition-colors">
                                        <div className="mt-1"><item.icon className="w-6 h-6 text-primary" /></div>
                                        <div>
                                            <h4 className="font-bold text-white uppercase text-sm tracking-widest">{item.title}</h4>
                                            <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-white/5 pb-6">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold text-white">Interactive Plot Map</h2>
                                    <p className="text-sm text-primary font-bold uppercase tracking-widest flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                        Verified Source: ilaaqa.com
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-[600px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/5">
                                <IlaaqaMap 
                                    mapUrl="https://ilaaqa.com/maps/dha-phase-7-lahore" 
                                    projectName="DHA Phase 7 Lahore" 
                                />
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-secondary/10 rounded-2xl border border-border/50">
                                <MapPin className="text-primary w-5 h-5 flex-shrink-0" />
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    <span className="text-white font-bold">DHA Phase 7</span> is perfectly accessible from <span className="text-primary">Barki Road</span> and <span className="text-primary">DHA Phase 6</span>. Use the interactive map above to find specific plot numbers and sector boundaries.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">Plot Categories</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {PLOTS.map((plot) => (
                                    <div key={plot.size} className="p-8 bg-secondary/10 rounded-3xl border border-border hover:border-primary/40 transition-all space-y-4 shadow-lg hover:shadow-primary/5">
                                        <h4 className="text-2xl font-bold text-white tracking-tight">{plot.size}</h4>
                                        <p className="text-primary font-black uppercase text-xs tracking-widest">{plot.price}</p>
                                        <ul className="space-y-2 pt-2 border-t border-white/5">
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
                        <div className="sticky top-32 p-8 bg-secondary/30 rounded-3xl border border-primary/20 backdrop-blur-xl space-y-6 shadow-2xl shadow-primary/5">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-white">Project Inquiry</h3>
                                <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Connect with Expert Consultants</p>
                            </div>
                            <form className="space-y-4">
                                <input type="text" placeholder="Full Name" className="w-full bg-[#020617] border border-border rounded-xl px-4 py-4 text-white focus:border-primary transition-colors outline-none" />
                                <input type="tel" placeholder="Phone Number" className="w-full bg-[#020617] border border-border rounded-xl px-4 py-4 text-white focus:border-primary transition-colors outline-none" />
                                <select className="w-full bg-[#020617] border border-border rounded-xl px-4 py-4 text-white focus:border-primary transition-colors outline-none">
                                    <option>Phase 7 - 1 Kanal Plots</option>
                                    <option>Phase 7 - 10 Marla Plots</option>
                                    <option>Phase 7 - Commercial Plots</option>
                                    <option>Investment Property Inquiry</option>
                                </select>
                                <button className="w-full py-4 bg-primary text-black font-black uppercase tracking-widest text-xs rounded-xl hover:scale-105 transition-all shadow-xl shadow-primary/20">
                                    Get Quote & Plan Mapping
                                </button>
                            </form>
                            <div className="pt-4 border-t border-white/5 flex items-center gap-3 justify-center opacity-50">
                                <ShieldCheck className="w-4 h-4 text-primary" />
                                <span className="text-[10px] uppercase font-bold text-white tracking-widest">Verified DHA Consultation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
