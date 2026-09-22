"use client";

import { MapPin, CheckCircle2, TrendingUp, ShieldCheck, Building2, FileText, Wallet, ExternalLink } from "lucide-react";

export default function DHAPhase10Page() {
    const PLOTS = [
        { size: "5 Marla File", status: "Affordable", price: "Starting ~2.7M", features: ["Low entry point", "High liquidity"] },
        { size: "10 Marla File", status: "Balanced", price: "Starting ~4.3M", features: ["Ideal for mid-term", "Allocation/Affidavit options"] },
        { size: "1 Kanal File", status: "Premium", price: "Starting ~7.8M", features: ["Major capital gain potential", "Long-term legacy investment"] },
        { size: "4 Marla Comm", status: "Commercial", price: "High ROI", features: ["Future business hub", "Strategic placement"] },
    ];

    return (
        <div className="pt-32 pb-20 bg-[#020617]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative rounded-3xl overflow-hidden h-[500px] mb-16 border border-border group text-center md:text-left">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
                    <div className="absolute bottom-12 left-8 md:left-12 space-y-4">
                        <div className="px-4 py-1.5 bg-primary text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full inline-block">
                            New Frontier
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-none">
                            DHA Phase 10 <span className="text-primary italic font-serif">Lahore</span>
                        </h1>
                        <p className="text-lg text-white/80 max-w-2xl font-medium leading-relaxed">
                            Nestled between Bedian and Ferozepur Roads, Phase 10 is poised to be the most
                            modern phase of DHA Lahore with 300ft wide main boulevards.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-16">
                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4 uppercase tracking-tighter">The Investment Goldmine</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                DHA Phase 10 represents the <span className="text-white font-bold underline decoration-primary/30 underline-offset-4">next frontier</span> of Lahore&apos;s real estate.
                                It is designed as a gated community with full-proof security, mirroring the success of Askari 11.
                                For investors, it offers the unique advantage of getting in at the ground floor with file-based investments.
                            </p>

                            <div className="w-full h-[600px] rounded-3xl overflow-hidden border border-primary/20 bg-black/40 relative shadow-2xl">
                                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 bg-[#020617]/90 backdrop-blur-md px-12 text-center">
                                    <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
                                        <MapPin className="w-12 h-12 text-primary animate-bounce-subtle" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Phase 10 Map Access</h3>
                                        <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                                            As Phase 10 is in its early plotting stages, we ensure all map data is sourced directly from ilaaqa.com for the latest revisions.
                                        </p>
                                    </div>
                                    <a 
                                        href="https://ilaaqa.com/maps" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="px-8 py-4 bg-primary text-black font-black uppercase tracking-widest text-xs rounded-xl hover:scale-105 transition-all shadow-xl shadow-primary/20 flex items-center gap-2"
                                    >
                                        View Live Map Portal <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                                {[
                                    { icon: Building2, title: "Modern Design", desc: "1st Phase with 300-feet wide main boulevards." },
                                    { icon: ShieldCheck, title: "Gated Security", desc: "Dedicated entry and exit points like Askari 11." },
                                    { icon: Wallet, title: "Affordability", desc: "Currently one of the most accessible DHA options." },
                                    { icon: TrendingUp, title: "Future Surge", desc: "Expected appreciation as development roadmap unfolds." },
                                ].map((item) => (
                                    <div key={item.title} className="flex gap-4 p-5 bg-secondary/20 rounded-2xl border border-white/5 hover:border-primary/40 transition-colors shadow-lg">
                                        <div className="mt-1 p-2 bg-primary/10 rounded-lg"><item.icon className="w-6 h-6 text-primary" /></div>
                                        <div>
                                            <h4 className="font-bold text-white uppercase text-[10px] tracking-widest">{item.title}</h4>
                                            <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4 uppercase tracking-tighter">Understanding File Types</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-8 bg-secondary/10 rounded-3xl border border-white/5 shadow-xl group hover:border-primary/30 transition-all">
                                    <h4 className="flex items-center gap-3 text-xl font-bold text-white mb-4 tracking-tight uppercase">
                                        <FileText className="text-primary w-6 h-6" /> Affidavit Files
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Preferred by short-term investors for lower tax burdens, exemption from stamp duty, and reduced transfer fees. Perfect for quick turnovers.
                                    </p>
                                </div>
                                <div className="p-8 bg-secondary/10 rounded-3xl border border-white/5 shadow-xl group hover:border-primary/30 transition-all">
                                    <h4 className="flex items-center gap-3 text-xl font-bold text-white mb-4 tracking-tight uppercase">
                                        <CheckCircle2 className="text-primary w-6 h-6" /> Allocation Files
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Standard ownership right, usually following the initial affidavit transfer. More secure for long-term holds and officially tracked by DHA systems.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4 tracking-tighter">Current File Estimates</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {PLOTS.map((plot) => (
                                    <div key={plot.size} className="p-8 bg-secondary/10 rounded-3xl border border-border group hover:border-primary/40 transition-all space-y-4 shadow-xl">
                                        <h4 className="text-2xl font-bold text-white tracking-tight">{plot.size}</h4>
                                        <p className="text-primary font-black uppercase text-xs tracking-widest">{plot.price}</p>
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
                                <h3 className="text-2xl font-bold text-white tracking-tight uppercase">File Strategy Desk</h3>
                                <p className="text-[10px] text-muted-foreground font-bold tracking-[0.2em] uppercase">Verified DHA Transfers</p>
                            </div>
                            <form className="space-y-4">
                                <input type="text" placeholder="Full Name" className="w-full bg-[#020617] border border-border rounded-xl px-5 py-4 text-white focus:border-primary transition-all outline-none" />
                                <input type="tel" placeholder="Contact Number" className="w-full bg-[#020617] border border-border rounded-xl px-5 py-4 text-white focus:border-primary transition-all outline-none" />
                                <button className="w-full py-5 bg-primary text-black font-black uppercase tracking-[0.2em] text-xs rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20">
                                    Request Official Quote
                                </button>
                            </form>
                            <div className="pt-6 border-t border-white/5 space-y-4">
                                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest text-center opacity-40 italic font-serif leading-relaxed">No Compromise on Legitimacy. Universal Trust.</p>
                                <div className="flex justify-center gap-6">
                                    <ShieldCheck className="w-5 h-5 text-primary/40" />
                                    <TrendingUp className="w-5 h-5 text-primary/40" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
