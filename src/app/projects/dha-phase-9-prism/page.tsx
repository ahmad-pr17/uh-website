"use client";

import { MapPin, CheckCircle2, TrendingUp, ShieldCheck, Building2, TowerControl, Plane, ExternalLink, Maximize2 } from "lucide-react";
import dynamic from "next/dynamic";

const IlaaqaMap = dynamic(() => import("@/components/modules/IlaaqaMap"), {
    ssr: false,
    loading: () => <div className="w-full h-[600px] bg-secondary/10 animate-pulse rounded-3xl" />
});

export default function DHAPhase9PrismPage() {
    const PLOTS = [
        { size: "5 Marla", status: "High ROI", price: "Starting ~5.5M", features: ["Ring Road access", "J-Block hot pick"] },
        { size: "10 Marla", status: "Sweet Spot", price: "Starting ~12.5M", features: ["K & L Block recommendations", "Near basic amenities"] },
        { size: "1 Kanal", status: "Luxury", price: "High Potential", features: ["Major investment target", "Expected surge post-possession"] },
        { size: "8 Marla Comm", status: "Commercial", price: "Premier Choice", features: ["Civic Zone 1", "Oval Commercial"] },
    ];

    return (
        <div className="pt-32 pb-20 bg-[#020617]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative rounded-3xl overflow-hidden h-[500px] mb-16 border border-border group text-center md:text-left">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=1200')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
                    <div className="absolute bottom-12 left-8 md:left-12 space-y-4">
                        <div className="px-4 py-1.5 bg-primary text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full inline-block">
                            Mega Project of DHA Lahore
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">
                            DHA Phase 9 <span className="text-primary italic font-serif">Prism</span>
                        </h1>
                        <p className="text-lg text-white/80 max-w-2xl font-medium leading-relaxed">
                            The largest phase of DHA Lahore, spanning 44,000 Kanals.
                            A modern masterpiece designed for exponential growth and premium lifestyle.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-16">
                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4 uppercase tracking-tighter">Project Authority</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Phase 9 Prism is not just a housing project; it's a <span className="text-white font-bold underline decoration-primary/30 underline-offset-4">mega-city within DHA</span>.
                                With 16 sectors (A-R) and 9 grand entry points, it is perfectly positioned between Ferozepur Road and Bedian Road,
                                granting effortless access to the Lahore Ring Road.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                {[
                                    { icon: TowerControl, title: "Grand Scale", desc: "44,000 Kanals of meticulously planned sectors." },
                                    { icon: Plane, title: "Airport Access", desc: "Minutes away from Allama Iqbal International." },
                                    { icon: TrendingUp, title: "ROI Potential", desc: "Highest potential for capital appreciation in 2026." },
                                    { icon: Building2, title: "Business Hubs", desc: "Oval Commercial & Main Civic Zone 1." },
                                ].map((item) => (
                                    <div key={item.title} className="flex gap-4 p-5 bg-secondary/30 rounded-2xl border border-white/5 hover:border-primary/50 transition-all shadow-lg hover:shadow-primary/5">
                                        <div className="mt-1 p-2 bg-primary/10 rounded-lg"><item.icon className="w-6 h-6 text-primary" /></div>
                                        <div>
                                            <h4 className="font-bold text-white uppercase text-xs tracking-widest">{item.title}</h4>
                                            <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-white/10 pb-6">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold text-white tracking-tight">Interactive Master Plan</h2>
                                    <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full w-fit">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                        <p className="text-[10px] text-primary font-black uppercase tracking-widest">
                                            Verified Source: ilaaqa.com
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <p className="text-[10px] text-muted-foreground italic max-w-xs text-right">
                                        Use zoom controls on the map to view specific plot markers and sector depths.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-[600px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10 bg-black/40">
                                <IlaaqaMap 
                                    mapUrl="https://ilaaqa.com/maps/dha-phase-9-prism-lahore" 
                                    projectName="DHA Phase 9 Prism Lahore" 
                                />
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="p-3 bg-secondary/20 rounded-xl border border-white/5 text-center">
                                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-1">Entrance</p>
                                    <p className="text-xs text-white font-bold">9 Points</p>
                                </div>
                                <div className="p-3 bg-secondary/20 rounded-xl border border-white/5 text-center">
                                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-1">Sectors</p>
                                    <p className="text-xs text-white font-bold">16 Blocks</p>
                                </div>
                                <div className="p-3 bg-secondary/20 rounded-xl border border-white/5 text-center">
                                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-1">Status</p>
                                    <p className="text-xs text-primary font-bold">In Possession</p>
                                </div>
                                <div className="p-3 bg-secondary/20 rounded-xl border border-white/5 text-center">
                                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-1">Access</p>
                                    <p className="text-xs text-white font-bold">Ring Road</p>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4 tracking-tighter">Hot Inventory</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {PLOTS.map((plot) => (
                                    <div key={plot.size} className="p-8 bg-secondary/10 rounded-3xl border border-border group hover:border-primary/40 transition-all space-y-4 shadow-xl">
                                        <h4 className="text-2xl font-bold text-white tracking-tight">{plot.size}</h4>
                                        <p className="text-primary font-black uppercase text-xs tracking-widest">{plot.price}</p>
                                        <ul className="space-y-3 pt-4 border-t border-white/5">
                                            {plot.features.map((f, i) => (
                                                <li key={i} className="text-sm text-muted-foreground flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" /> {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="space-y-8">
                        <div className="sticky top-32 p-8 bg-secondary/30 rounded-3xl border border-primary/20 backdrop-blur-xl space-y-6 shadow-2xl shadow-primary/10">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-white tracking-tight uppercase">Prism Inquiry</h3>
                                <p className="text-[10px] text-muted-foreground font-bold tracking-[0.2em] uppercase">Professional Real Estate Desk</p>
                            </div>
                            <form className="space-y-4">
                                <input type="text" placeholder="Full Name" className="w-full bg-[#020617] border border-border rounded-xl px-5 py-4 text-white focus:border-primary transition-all outline-none" />
                                <input type="tel" placeholder="Contact Number" className="w-full bg-[#020617] border border-border rounded-xl px-5 py-4 text-white focus:border-primary transition-all outline-none" />
                                <button className="w-full py-5 bg-primary text-black font-black uppercase tracking-[0.15em] text-xs rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20">
                                    Request Pricing Guide
                                </button>
                            </form>
                            <div className="pt-6 border-t border-white/5 space-y-4">
                                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest text-center opacity-40 italic">Direct Consultation Available</p>
                                <div className="flex justify-center gap-6">
                                    <ShieldCheck className="w-5 h-5 text-primary/40 hover:text-primary transition-colors" />
                                    <TrendingUp className="w-5 h-5 text-primary/40 hover:text-primary transition-colors" />
                                    <Building2 className="w-5 h-5 text-primary/40 hover:text-primary transition-colors" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
