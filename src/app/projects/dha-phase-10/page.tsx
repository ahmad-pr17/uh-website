"use client";

import { MapPin, CheckCircle2, TrendingUp, ShieldCheck, Building2, FileText, Wallet, Clock, Maximize2 } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";
import PlotMapModal from "@/components/modules/PlotMapModal";

const DynamicMap = dynamic<{ activeProject?: string; zoom?: number }>(() => import("@/components/modules/ProjectMap"), {
    ssr: false,
    loading: () => <div className="w-full h-[400px] bg-secondary/10 animate-pulse rounded-3xl" />
});

export default function DHAPhase10Page() {
    const [isMapModalOpen, setIsMapModalOpen] = useState(false);

    const PLOTS = [
        { size: "5 Marla File", status: "Affordable", price: "Starting ~2.7M", features: ["Low entry point", "High liquidity"] },
        { size: "10 Marla File", status: "Balanced", price: "Starting ~4.3M", features: ["Ideal for mid-term", "Allocation/Affidavit options"] },
        { size: "1 Kanal File", status: "Premium", price: "Starting ~7.8M", features: ["Major capital gain potential", "Long-term legacy investment"] },
        { size: "4 Marla Comm", status: "Commercial", price: "High ROI", features: ["Future business hub", "Strategic placement"] },
    ];

    return (
        <div className="pt-32 pb-20 bg-[#020617]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative rounded-3xl overflow-hidden h-[500px] mb-16 border border-border">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
                    <div className="absolute bottom-12 left-8 md:left-12 space-y-4">
                        <div className="px-4 py-1.5 bg-primary text-black text-xs font-bold uppercase tracking-widest rounded-full inline-block">
                            New Launch
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">
                            DHA Phase 10 <span className="text-primary">Lahore</span>
                        </h1>
                        <p className="text-lg text-white/80 max-w-2xl font-medium">
                            Nestled between Bedian and Ferozepur Roads, Phase 10 is poised to be the most
                            modern phase of DHA Lahore with 300ft wide main boulevards.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-16">
                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">The Investment Goldmine</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                DHA Phase 10 represents the <span className="text-white font-semibold">next frontier</span> of Lahore's real estate.
                                It is designed as a gated community with full-proof security, mirroring the success of Askari 11.
                                For investors, it offers the unique advantage of getting in at the ground floor with file-based investments.
                            </p>

                            <div className="relative h-[400px] w-full py-4 group">
                                <DynamicMap activeProject="DHA Phase 10" zoom={13} />
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
                                mapUrl="https://emap.pk/dha-phase-10-lahore-map"
                                projectName="DHA Phase 10 Lahore"
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                {[
                                    { icon: Building2, title: "Modern Design", desc: "1st Phase with 300-feet wide main boulevards." },
                                    { icon: ShieldCheck, title: "Gated Security", desc: "Dedicated entry and exit points like Askari 11." },
                                    { icon: Wallet, title: "Affordable Entry", desc: "Currently one of the most accessible DHA options." },
                                    { icon: TrendingUp, title: "Future Appreciation", desc: "Expected surge as development roadmap unfolds." },
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
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">Understanding File Types</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-6 bg-secondary/10 rounded-2xl border border-border">
                                    <h4 className="flex items-center gap-2 text-xl font-bold text-white mb-3">
                                        <FileText className="text-primary" /> Affidavit Files
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        Preferred by short-term investors for lower tax burdens, exemption from stamp duty, and reduced transfer fees.
                                    </p>
                                </div>
                                <div className="p-6 bg-secondary/10 rounded-2xl border border-border">
                                    <h4 className="flex items-center gap-2 text-xl font-bold text-white mb-3">
                                        <CheckCircle2 className="text-primary" /> Allocation Files
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        Standard ownership right, usually following the initial affidavit transfer. Secure and officially tracked by DHA.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">Estimated File Rates</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {PLOTS.map((plot) => (
                                    <div key={plot.size} className="p-8 bg-secondary/10 rounded-3xl border border-border hover:border-primary/40 transition-all space-y-4">
                                        <h4 className="text-2xl font-bold text-white">{plot.size}</h4>
                                        <p className="text-primary font-bold">{plot.price}</p>
                                        <ul className="space-y-2 pt-2">
                                            {plot.features.map((f, i) => (
                                                <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                                                    <div className="w-1 h-1 rounded-full bg-primary" /> {f}
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
                            <h3 className="text-2xl font-bold text-white">Secure a File</h3>
                            <form className="space-y-4">
                                <input type="text" placeholder="Your Name" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white" />
                                <input type="tel" placeholder="Phone Number" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white" />
                                <button className="w-full py-4 bg-primary text-black font-bold rounded-xl hover:scale-105 transition-all">
                                    Request File Quote
                                </button>
                                <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest">
                                    Verified DHA Transfers Only
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
