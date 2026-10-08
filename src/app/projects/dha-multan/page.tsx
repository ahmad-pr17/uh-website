"use client";

import { MapPin, ShieldCheck, Trophy, GraduationCap, ShoppingBag, ExternalLink } from "lucide-react";

export default function DHAMultanPage() {
    return (
        <div className="pt-32 pb-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="on-dark relative rounded-3xl overflow-hidden h-[500px] mb-16 border border-border group text-center md:text-left">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute bottom-12 left-8 md:left-12 space-y-4">
                        <div className="px-4 py-1.5 bg-primary text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full inline-block">
                            Southern Punjab&apos;s Pride
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">
                            DHA <span className="text-primary italic font-serif">Multan</span>
                        </h1>
                        <p className="text-lg text-white/80 max-w-2xl font-medium leading-relaxed">
                            A sprawling 75,000 Kanal development on Bosan Road.
                            Home to Pakistan’s first Championship Signature 18-holes Golf Course, Rumanza.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-16">
                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4 uppercase tracking-tighter">A Visionary Community</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                DHA Multan is redefining the landscape of Southern Punjab. Strategically located between Bosan Road and Mattital Road,
                                it offers a unique blend of <span className="text-white font-bold underline decoration-primary/30 underline-offset-4">luxury, education, and recreation</span>.
                            </p>

                            <div className="w-full h-[600px] rounded-3xl overflow-hidden border border-primary/20 bg-black/40 relative shadow-2xl">
                                {/* Fallback/Loading State for unavailable direct map */}
                                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 bg-background/90 backdrop-blur-md px-12 text-center">
                                    <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
                                        <MapPin className="w-12 h-12 text-primary animate-bounce-subtle" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Interactive Map Source</h3>
                                        <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                                            We prioritize verified data from ilaaqa.com. Direct interactive plot markings for DHA Multan are currently being updated on their secure server.
                                        </p>
                                    </div>
                                    <a 
                                        href="https://ilaaqa.com/maps" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="px-8 py-4 bg-primary text-black font-black uppercase tracking-widest text-xs rounded-xl hover:scale-105 transition-all shadow-xl shadow-primary/20 flex items-center gap-2"
                                    >
                                        Browse Multan Maps on Ilaaqa <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                                {[
                                    { icon: Trophy, title: "Rumanza Golf Course", desc: "Designed by Sir Nick Faldo, Pakistan's finest golf experience." },
                                    { icon: GraduationCap, title: "Education City", desc: "Campuses of NUML, FAST, and Roots International." },
                                    { icon: ShoppingBag, title: "Mega Mall", desc: "Planned multi-story high-end commercial & retail hubs." },
                                    { icon: ShieldCheck, title: "Livability", desc: "Possession handed over in sectors like M, H, and Villas." },
                                ].map((item) => (
                                    <div key={item.title} className="flex gap-4 p-5 bg-secondary/20 rounded-2xl border border-white/5 hover:border-primary/40 transition-colors">
                                        <div className="mt-1 p-2 bg-primary/10 rounded-lg"><item.icon className="w-6 h-6 text-primary" /></div>
                                        <div>
                                            <h4 className="font-bold text-white uppercase text-[10px] tracking-widest">{item.title}</h4>
                                            <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4 tracking-tighter">Prime Amenities</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    "The Arena (Event Complex)", "DHA Sports Complex", "Kashmir Park (25 Acres)",
                                    "3D/5D Cinema", "Theme & Water Park", "Community Club"
                                ].map((item, i) => (
                                    <div key={i} className="px-4 py-4 bg-secondary/10 border border-white/5 rounded-xl text-center text-white/80 text-xs font-bold uppercase tracking-widest hover:border-primary/30 transition-all">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4 tracking-tighter">Investment Insight</h2>
                            <div className="p-8 bg-secondary/30 rounded-3xl border border-primary/20 space-y-4 shadow-xl">
                                <h4 className="text-xl font-bold text-white tracking-tight uppercase">The K-Block Opportunity</h4>
                                <p className="text-muted-foreground leading-relaxed italic">
                                    Located between H and M blocks, K-block currently offers lower prices due to its non-possession status.
                                    Similar plots in M-block are valued significantly higher, making K-block a prime target for smart investors
                                    aiming for huge capital gains post-possession.
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="space-y-8">
                        <div className="sticky top-32 p-8 bg-secondary/30 rounded-3xl border border-primary/20 backdrop-blur-xl space-y-6 shadow-2xl">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-white tracking-tight uppercase">Southern Hub Desk</h3>
                                <p className="text-[10px] text-muted-foreground font-bold tracking-[0.2em] uppercase">Verified Property Inquiry</p>
                            </div>
                            <form className="space-y-4">
                                <input type="text" placeholder="Full Name" className="w-full bg-background border border-border rounded-xl px-5 py-4 text-white focus:border-primary outline-none transition-all" />
                                <input type="tel" placeholder="Active Phone" className="w-full bg-background border border-border rounded-xl px-5 py-4 text-white focus:border-primary outline-none transition-all" />
                                <button className="w-full py-5 bg-primary text-black font-black uppercase tracking-[0.2em] text-xs rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20">
                                    Get Pricing Guide
                                </button>
                            </form>
                            <div className="pt-6 border-t border-white/5 flex items-center gap-3 justify-center opacity-30">
                                <ShieldCheck className="w-5 h-5 text-white" />
                                <span className="text-[9px] font-black uppercase tracking-widest text-white">Authentic DHA Consultant</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
