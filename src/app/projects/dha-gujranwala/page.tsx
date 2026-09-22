"use client";

import { MapPin, CheckCircle2, ShieldCheck, Dumbbell, Users, Waves, ExternalLink } from "lucide-react";

export default function DHAGujranwalaPage() {
    const PLOTS = [
        { size: "5 & 10 Marla", status: "Hot Selling", price: "High Liquidity", features: ["Ideal for end-users", "Fast development"] },
        { size: "1 Kanal", status: "Standard", price: "Investment Pick", features: ["Major appreciation potential", "Prime blocks available"] },
        { size: "DHA Villas", status: "Luxury", price: "Ready to Move", features: ["Premium construction", "Gated sub-community"] },
        { size: "4 & 8 Marla Comm", status: "Commercial", price: "High ROI", features: ["Main GT Road access", "Business hub"] },
    ];

    return (
        <div className="pt-32 pb-20 bg-[#020617]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative rounded-3xl overflow-hidden h-[500px] mb-16 border border-border group text-center md:text-left">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
                    <div className="absolute bottom-12 left-8 md:left-12 space-y-4">
                        <div className="px-4 py-1.5 bg-primary text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full inline-block">
                            Premium Living
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-none">
                            DHA <span className="text-primary italic font-serif">Gujranwala</span>
                        </h1>
                        <p className="text-lg text-white/80 max-w-2xl font-medium leading-relaxed">
                            Located near Rahwali Cantt on the Main Grand Trunk Road.
                            A prestigious housing project offering a high-quality lifestyle and top-notch security.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-16">
                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4 uppercase tracking-tighter">The Standard of Excellence</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                DHA Gujranwala is the most sought-after real estate destination in the region.
                                With its <span className="text-white font-bold underline decoration-primary/30 underline-offset-4">strategic GT Road location</span> and backup by the Defence Housing Authority,
                                it ensures safe and sure-shot investments with a stellar track record.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                {[
                                    { icon: Dumbbell, title: "Modern Gym", desc: "Equipped with latest fitness technology." },
                                    { icon: Users, title: "Community Center", desc: "Vibrant hub for social gatherings." },
                                    { icon: Waves, title: "Water Supply", desc: "Underground and overhead water infrastructure." },
                                    { icon: ShieldCheck, title: "Security", desc: "24/7 guarded and monitored environment." },
                                ].map((item) => (
                                    <div key={item.title} className="flex gap-4 p-5 bg-secondary/20 rounded-2xl border border-white/5 hover:border-primary/40 transition-colors shadow-lg">
                                        <div className="mt-1 p-2 bg-primary/10 rounded-lg"><item.icon className="w-5 h-5 text-primary" /></div>
                                        <div>
                                            <h4 className="font-bold text-white uppercase text-[10px] tracking-widest">{item.title}</h4>
                                            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-white/5 pb-6">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold text-white tracking-tight">Interactive Plot Layout</h2>
                                    <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full w-fit">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                        <p className="text-[10px] text-primary font-black uppercase tracking-widest">
                                            Verified Source: ilaaqa.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[600px] rounded-3xl overflow-hidden border border-primary/20 bg-black/40 relative shadow-2xl">
                                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 bg-[#020617]/90 backdrop-blur-md px-12 text-center">
                                    <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
                                        <MapPin className="w-12 h-12 text-primary animate-bounce-subtle" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Interactive Map Source</h3>
                                        <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                                            We rely exclusively on verified data from ilaaqa.com. Interactive plot markings for DHA Gujranwala are currently being digitized for secure access.
                                        </p>
                                    </div>
                                    <a 
                                        href="https://ilaaqa.com/maps" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="px-8 py-4 bg-primary text-black font-black uppercase tracking-widest text-xs rounded-xl hover:scale-105 transition-all shadow-xl shadow-primary/20 flex items-center gap-2"
                                    >
                                        Explore Maps on Ilaaqa <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/90 font-medium text-sm p-6 bg-secondary/10 rounded-2xl border border-white/5">
                                <div className="flex items-center gap-3"><MapPin className="text-primary w-5 h-5 flex-shrink-0" /> Situated near Rahwali Cantt on Main GT Road</div>
                                <div className="flex items-center gap-3"><MapPin className="text-primary w-5 h-5 flex-shrink-0" /> 8-10 km from Gujranwala City Center</div>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4 tracking-tighter">Plot Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {PLOTS.map((plot) => (
                                    <div key={plot.size} className="p-8 bg-secondary/10 rounded-3xl border border-border group hover:border-primary/40 transition-all space-y-4 shadow-xl">
                                        <h4 className="text-2xl font-bold text-white tracking-tight">{plot.size}</h4>
                                        <p className="text-primary font-black uppercase text-xs tracking-widest">{plot.status}</p>
                                        <ul className="space-y-3 pt-4 border-t border-white/5">
                                            {plot.features.map((f, i) => (
                                                <li key={i} className="text-sm text-muted-foreground flex items-center gap-3">
                                                    <CheckCircle2 className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" /> {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="space-y-8">
                        <div className="sticky top-32 p-8 bg-secondary/30 rounded-3xl border border-primary/20 backdrop-blur-xl space-y-6 shadow-2xl">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-white tracking-tight uppercase">Gujranwala Desk</h3>
                                <p className="text-[10px] text-muted-foreground font-bold tracking-[0.2em] uppercase">Verified Agent Consultation</p>
                            </div>
                            <form className="space-y-4">
                                <input type="text" placeholder="Full Name" className="w-full bg-[#020617] border border-border rounded-xl px-5 py-4 text-white focus:border-primary outline-none transition-all" />
                                <input type="tel" placeholder="Phone Number" className="w-full bg-[#020617] border border-border rounded-xl px-5 py-4 text-white focus:border-primary outline-none transition-all" />
                                <button className="w-full py-5 bg-primary text-black font-black uppercase tracking-[0.2em] text-xs rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20 mt-4">
                                    Get Pricing Details
                                </button>
                            </form>
                            <div className="pt-6 border-t border-white/5 flex items-center gap-3 justify-center opacity-30">
                                <ShieldCheck className="w-5 h-5 text-white" />
                                <span className="text-[9px] font-black uppercase tracking-widest text-white">Authentic DHA Inventory</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
