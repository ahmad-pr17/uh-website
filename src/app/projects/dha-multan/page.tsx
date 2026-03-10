"use client";

import { MapPin, CheckCircle2, TrendingUp, ShieldCheck, Building2, Trophy, GraduationCap, ShoppingBag, Maximize2 } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";
import PlotMapModal from "@/components/modules/PlotMapModal";

const DynamicMap = dynamic<{ activeProject?: string; zoom?: number }>(() => import("@/components/modules/ProjectMap"), {
    ssr: false,
    loading: () => <div className="w-full h-[400px] bg-secondary/10 animate-pulse rounded-3xl" />
});

export default function DHAMultanPage() {
    const [isMapModalOpen, setIsMapModalOpen] = useState(false);

    const PLOTS = [
        { size: "5 & 8 Marla", status: "Active Construction", price: "Highly Liquid", features: ["V-Block hot pick", "Possession coming soon"] },
        { size: "12 Marla", status: "Residential", price: "Premium Living", features: ["Ideal for villas", "Near main office"] },
        { size: "1 Kanal", status: "Investment", price: "High ROI", features: ["I & K Block recommendations", "Massive appreciation potential"] },
        { size: "Golf Community", status: "Luxury", price: "Exclusive Rates", features: ["Rumanza Golf Course", "Gated within DHA"] },
    ];

    return (
        <div className="pt-32 pb-20 bg-[#020617]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative rounded-3xl overflow-hidden h-[500px] mb-16 border border-border">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
                    <div className="absolute bottom-12 left-8 md:left-12 space-y-4">
                        <div className="px-4 py-1.5 bg-primary text-black text-xs font-bold uppercase tracking-widest rounded-full inline-block">
                            Southern Punjab's Pride
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">
                            DHA <span className="text-primary">Multan</span>
                        </h1>
                        <p className="text-lg text-white/80 max-w-2xl font-medium">
                            A sprawling 75,000 Kanal development on Bosan Road.
                            Home to Pakistan’s first Championship Signature 18-holes Golf Course, Rumanza.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-16">
                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">A Visionary Community</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                DHA Multan is redefining the landscape of Southern Punjab. Strategically located between Bosan Road and Mattital Road,
                                it offers a unique blend of <span className="text-white font-semibold">luxury, education, and recreation</span>.
                            </p>

                            <div className="relative h-[400px] w-full py-4 group">
                                <DynamicMap activeProject="DHA Multan" zoom={13} />
                                <div className="absolute top-8 right-4 z-10">
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
                                mapUrl="https://emap.pk/dha-multan-map"
                                projectName="DHA Multan"
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                {[
                                    { icon: Trophy, title: "Rumanza Golf Course", desc: "Designed by Sir Nick Faldo, Pakistan's finest golf experience." },
                                    { icon: GraduationCap, title: "Education City", desc: "Campuses of NUML, FAST, and Roots International." },
                                    { icon: ShoppingBag, title: "Mega Mall", desc: "Planned multi-story high-end commercial & retail hubs." },
                                    { icon: ShieldCheck, title: "Livability", desc: "Possession handed over in sectors like M, H, and Villas." },
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
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">Prime Amenities</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    "The Arena (Event Complex)", "DHA Sports Complex", "Kashmir Park (25 Acres)",
                                    "3D/5D Cinema", "Theme & Water Park", "Community Club"
                                ].map((item, i) => (
                                    <div key={i} className="px-4 py-3 bg-secondary/10 border border-border rounded-xl text-center text-white/80 text-sm font-medium">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">Investment Insight</h2>
                            <div className="p-8 bg-secondary/10 rounded-3xl border border-border space-y-4">
                                <h4 className="text-xl font-bold text-white">The K-Block Opportunity</h4>
                                <p className="text-muted-foreground">
                                    Located between H and M blocks, K-block currently offers lower prices due to its non-possession status.
                                    Similar plots in M-block are valued significantly higher, making K-block a prime target for smart investors
                                    aiming for huge capital gains post-possession.
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="space-y-8">
                        <div className="sticky top-32 p-8 bg-secondary/30 rounded-3xl border border-primary/20 backdrop-blur-xl space-y-6">
                            <h3 className="text-2xl font-bold text-white">Book Your Visit</h3>
                            <form className="space-y-4">
                                <input type="text" placeholder="Name" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white" />
                                <input type="tel" placeholder="Contact" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white" />
                                <button className="w-full py-4 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition-all">
                                    Get Current Rates
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
