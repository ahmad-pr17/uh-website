"use client";

import { MapPin, CheckCircle2, ShieldCheck, Zap, Wifi, Recycle, ExternalLink } from "lucide-react";

export default function LahoreSmartCityPage() {
    const PLOTS = [
        { size: "5 Marla", status: "High Demand", price: "Overseas Prime B", features: ["Ideal for entry level", "Fast appreciation"] },
        { size: "10 Marla", status: "Family Pick", price: "Overseas Prime A", features: ["Near operational parks", "Possession ready"] },
        { size: "1 Kanal", status: "Luxury", price: "Executive Block", features: ["Major investment target", "Premium location"] },
        { size: "Smart Villas", status: "Ready to Move", price: "Easy Installments", features: ["Fully constructed", "Smart home features"] },
    ];

    return (
        <div className="pt-32 pb-20 bg-[#020617]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative rounded-3xl overflow-hidden h-[500px] mb-16 border border-border group text-center md:text-left">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] group-hover:scale-110"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510793305331-e89e9188632b?auto=format&fit=crop&q=80&w=1200')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
                    <div className="absolute bottom-12 left-8 md:left-12 space-y-4">
                        <div className="px-4 py-1.5 bg-primary text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full inline-block">
                            Next-Gen Infrastructure
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-none">
                            Lahore Smart <span className="text-primary italic font-serif">City</span>
                        </h1>
                        <p className="text-lg text-white/80 max-w-2xl font-medium leading-relaxed">
                            Pakistan’s first smart city. A collaboration between Habib Rafiq and FDHL,
                            featuring a dedicated interchange on the Lahore Ring Road.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-16">
                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4 uppercase tracking-tighter">The Smart Advantage</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Lahore Smart City (LSC) is designed as a next-generation urban project based on <span className="text-white font-bold underline decoration-primary/30 underline-offset-4">smart infrastructure principles</span>.
                                From smart traffic management to sustainable waste systems, LSC offers an efficient and eco-friendly environment.
                                The dedicated interchange at Kala Shah Kaku is a game-changer, reducing travel time to Lahore&apos;s center to under 20 minutes.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                {[
                                    { icon: Zap, title: "Smart Traffic", desc: "Automated traffic management and surveillance." },
                                    { icon: Wifi, title: "Fiber Hub", desc: "High-speed underground fiber optic connectivity." },
                                    { icon: Recycle, title: "Eco-Systems", desc: "Sustainable waste and water management systems." },
                                    { icon: MapPin, title: "Direct Access", desc: "Dedicated Interchange on Lahore Ring Road." },
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
                                    <h2 className="text-3xl font-bold text-white tracking-tight">Interactive Smart Layout</h2>
                                    <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full w-fit">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                        <p className="text-[10px] text-primary font-black uppercase tracking-widest">
                                            Live Source: ilaaqa.com
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
                                        <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Smart City Map Access</h3>
                                        <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                                            Official plot partitions for Lahore Smart City are meticulously tracked. We provide direct access to ilaaqa.com&apos;s verified master plans for the most accurate plotting data.
                                        </p>
                                    </div>
                                    <a 
                                        href="https://ilaaqa.com/maps" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="px-8 py-4 bg-primary text-black font-black uppercase tracking-widest text-xs rounded-xl hover:scale-105 transition-all shadow-xl shadow-primary/20 flex items-center gap-2"
                                    >
                                        Explore Smart Maps on Ilaaqa <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4 uppercase tracking-tighter tracking-widest">Growth Markers</h2>
                            <div className="p-8 bg-secondary/10 rounded-3xl border border-white/5 space-y-6 shadow-xl">
                                <ul className="space-y-6 text-white/90">
                                    <li className="flex gap-4 items-start"><CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0 mt-0.5" /> <div><p className="font-bold text-sm">Interchange Completion</p><p className="text-xs text-muted-foreground mt-1">Dedicated ring road access expected to double property value upon completion.</p></div></li>
                                    <li className="flex gap-4 items-start"><CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0 mt-0.5" /> <div><p className="font-bold text-sm">Healthcare Excellence</p><p className="text-xs text-muted-foreground mt-1">Saudi-German Hospital branch confirmed and under early development.</p></div></li>
                                    <li className="flex gap-4 items-start"><CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0 mt-0.5" /> <div><p className="font-bold text-sm">Operational Hub</p><p className="text-xs text-muted-foreground mt-1">Parks, mosques, and supermarts already serving active residents.</p></div></li>
                                </ul>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4 tracking-tighter">Inventory Highlights</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {PLOTS.map((plot) => (
                                    <div key={plot.size} className="p-8 bg-secondary/10 rounded-3xl border border-border group hover:border-primary/40 transition-all space-y-4 shadow-xl">
                                        <h4 className="text-2xl font-bold text-white tracking-tight">{plot.size}</h4>
                                        <p className="text-primary font-black uppercase text-xs tracking-widest">{plot.status}</p>
                                        <ul className="space-y-3 pt-4 border-t border-white/5">
                                            {plot.features.map((f, i) => (
                                                <li key={i} className="text-sm text-muted-foreground flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" /> {f}
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
                                <h3 className="text-2xl font-bold text-white uppercase tracking-tight leading-none">Smart Inquiry</h3>
                                <p className="text-[10px] text-muted-foreground font-bold tracking-[0.2em] uppercase">Join the Future Elite</p>
                            </div>
                            <form className="space-y-4">
                                <input type="text" placeholder="Full Name" className="w-full bg-[#020617] border border-border rounded-xl px-5 py-4 text-white focus:border-primary outline-none transition-all" />
                                <input type="tel" placeholder="Active Mobile" className="w-full bg-[#020617] border border-border rounded-xl px-5 py-4 text-white focus:border-primary outline-none transition-all" />
                                <button className="w-full py-5 bg-primary text-black font-black uppercase tracking-[0.2em] text-xs rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20">
                                    Analyze Availability
                                </button>
                            </form>
                            <div className="flex items-center gap-3 justify-center opacity-30 grayscale pt-2">
                                <ShieldCheck className="w-5 h-5 text-white" />
                                <span className="text-[9px] font-black uppercase tracking-widest text-white">Verified Smart Consultant</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
