"use client";

import { MapPin, CheckCircle2, TrendingUp, ShieldCheck, Building2, Dumbbell, Users, Waves } from "lucide-react";
import dynamic from "next/dynamic";

const DynamicMap = dynamic<{ activeProject?: string; zoom?: number }>(() => import("@/components/modules/ProjectMap"), {
    ssr: false,
    loading: () => <div className="w-full h-[400px] bg-secondary/10 animate-pulse rounded-3xl" />
});

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
                <div className="relative rounded-3xl overflow-hidden h-[500px] mb-16 border border-border">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
                    <div className="absolute bottom-12 left-8 md:left-12 space-y-4">
                        <div className="px-4 py-1.5 bg-primary text-black text-xs font-bold uppercase tracking-widest rounded-full inline-block">
                            Premium Living
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">
                            DHA <span className="text-primary">Gujranwala</span>
                        </h1>
                        <p className="text-lg text-white/80 max-w-2xl font-medium">
                            Located near Rahwali Cantt on the Main Grand Trunk Road.
                            A prestigious housing project offering a high-quality lifestyle and top-notch security.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-16">
                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">The Standard of Excellence</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                DHA Gujranwala is the most sought-after real estate destination in the region.
                                With its <span className="text-white font-semibold">strategic GT Road location</span> and backup by the Defence Housing Authority,
                                it ensures safe and sure-shot investments with a stellar track record.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                {[
                                    { icon: Dumbbell, title: "Modern Gym", desc: "Equipped with latest fitness technology." },
                                    { icon: Users, title: "Community Center", desc: "Vibrant hub for social gatherings." },
                                    { icon: Waves, title: "Water Supply", desc: "Underground and overhead water infrastructure." },
                                    { icon: ShieldCheck, title: "Security", desc: "24/7 guarded and monitored environment." },
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
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">Location Highlights</h2>
                            <div className="space-y-4 text-white/90 font-medium pb-2">
                                <div className="flex items-center gap-3"><MapPin className="text-primary w-5 h-5 flex-shrink-0" /> Situated near Rahwali Cantt on Main GT Road (NH-5)</div>
                                <div className="flex items-center gap-3"><MapPin className="text-primary w-5 h-5 flex-shrink-0" /> 8-10 km from Gujranwala City Center</div>
                            </div>
                            <div className="h-[400px] w-full">
                                <DynamicMap activeProject="DHA Gujranwala" zoom={13} />
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">Plot Options</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {PLOTS.map((plot) => (
                                    <div key={plot.size} className="p-8 bg-secondary/10 rounded-3xl border border-border hover:border-primary/40 transition-all space-y-4">
                                        <h4 className="text-2xl font-bold text-white">{plot.size}</h4>
                                        <p className="text-primary font-bold">{plot.status}</p>
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
                                <button className="w-full py-4 bg-primary text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] transition-all">
                                    Get Pricing Details
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
