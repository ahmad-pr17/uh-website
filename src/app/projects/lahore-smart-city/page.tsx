"use client";

import { MapPin, CheckCircle2, TrendingUp, ShieldCheck, Building2, Zap, Wifi, Recycle } from "lucide-react";
import dynamic from "next/dynamic";

const DynamicMap = dynamic<{ activeProject?: string; zoom?: number }>(() => import("@/components/modules/ProjectMap"), {
    ssr: false,
    loading: () => <div className="w-full h-[400px] bg-secondary/10 animate-pulse rounded-3xl" />
});

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
                <div className="relative rounded-3xl overflow-hidden h-[500px] mb-16 border border-border">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510793305331-e89e9188632b?auto=format&fit=crop&q=80&w=1200')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
                    <div className="absolute bottom-12 left-8 md:left-12 space-y-4">
                        <div className="px-4 py-1.5 bg-primary text-black text-xs font-bold uppercase tracking-widest rounded-full inline-block">
                            Revolutionizing Urban Living
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">
                            Lahore Smart <span className="text-primary">City</span>
                        </h1>
                        <p className="text-lg text-white/80 max-w-2xl font-medium">
                            Pakistan’s first smart city. A collaboration between Habib Rafiq and FDHL,
                            featuring a dedicated interchange on the Lahore Ring Road.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-16">
                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">The Smart Advantage</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Lahore Smart City (LSC) is designed as a next-generation urban project based on <span className="text-white font-semibold">smart infrastructure principles</span>.
                                From smart traffic management to sustainable waste systems, LSC offers an efficient and eco-friendly environment.
                                The dedicated interchange at Kala Shah Kaku is a game-changer, reducing travel time to Lahore's center to under 20 minutes.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 pb-6">
                                {[
                                    { icon: Zap, title: "Smart Traffic", desc: "Automated traffic management and surveillance." },
                                    { icon: Wifi, title: "Fiber Internet", desc: "High-speed underground fiber optic connectivity." },
                                    { icon: Recycle, title: "Sustainable", desc: "Eco-friendly waste and water management systems." },
                                    { icon: MapPin, title: "Dedicated Interchange", desc: "Direct access to Lahore Ring Road & GT Road." },
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
                            <div className="h-[400px] w-full">
                                <DynamicMap activeProject="Lahore Smart City" zoom={13} />
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">Development Progress</h2>
                            <div className="p-8 bg-secondary/10 rounded-3xl border border-border space-y-4">
                                <ul className="space-y-4 text-white/90">
                                    <li className="flex gap-3"><CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" /> Dedicated interchange expected within months.</li>
                                    <li className="flex gap-3"><CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" /> Saudi-German Hospital branch confirmed.</li>
                                    <li className="flex gap-3"><CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" /> Parks, mosques, and supermarts already operational.</li>
                                    <li className="flex gap-3"><CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" /> Families have already begun moving into Overseas Prime.</li>
                                </ul>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">Plot & Villa Options</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {PLOTS.map((plot) => (
                                    <div key={plot.size} className="p-8 bg-secondary/10 rounded-3xl border border-border hover:border-primary/40 transition-all space-y-4">
                                        <h4 className="text-2xl font-bold text-white">{plot.size}</h4>
                                        <p className="text-primary font-bold">{plot.status}</p>
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
                            <h3 className="text-2xl font-bold text-white">Join the Future</h3>
                            <form className="space-y-4">
                                <input type="text" placeholder="Full Name" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white" />
                                <input type="tel" placeholder="Mobile Number" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white" />
                                <button className="w-full py-4 bg-primary text-black font-bold rounded-xl hover:scale-105 active:scale-95 transition-all">
                                    Check Availability
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
