"use client";

import { MapPin, CheckCircle2, TrendingUp, ShieldCheck, Building2, Clock, Car, Hospital, Maximize2 } from "lucide-react";
import dynamic from "next/dynamic";
import VirtualTour from "@/components/modules/VirtualTour";
import { RESIDENTIAL_PLOTS } from "@/data/unionTown";

const IlaaqaMap = dynamic(() => import("@/components/modules/IlaaqaMap"), {
    ssr: false,
    loading: () => <div className="w-full h-[600px] bg-secondary/10 animate-pulse rounded-3xl" />
});

// 5 Marla residential plan: price from the shared Union Town data, booking/tenure as published on this page.
const PLAN = { total: RESIDENTIAL_PLOTS.find((p) => p.marla === 5)!.price!, booking: 1_500_000, tenure: 24 };
const formatPkr = (n: number) =>
    n >= 10_000_000 ? `PKR ${(n / 10_000_000).toFixed(2)} Crore` : `PKR ${(n / 100_000).toFixed(2)} Lakh`;

export default function UnionTownPage() {
    const monthly = (PLAN.total - PLAN.booking) / PLAN.tenure;

    const PLOTS = [
        { size: "3 Marla", status: "Limited Inventory", price: "Highly Competitive", features: ["Map-based allocation", "Fast development"] },
        { size: "5 Marla", status: "Hot Selling", price: "PKR 1.25 Crore", features: ["PKR 15 Lakh Booking", "2-Year Installments", "Official Plot Numbers"] },
        { size: "10 Marla", status: "Premium", price: "Contact for Rates", features: ["Ideal for Residence", "Canal-side options"] },
        { size: "1 Kanal", status: "Luxury", price: "Contact for Rates", features: ["Exclusive Sectors", "High ROI potential"] },
    ];

    return (
        <div className="pt-32 pb-20 bg-[#020617]">
            <div className="container mx-auto px-4 md:px-6">
                {/* Hero section for the project */}
                <div className="relative rounded-3xl overflow-hidden h-[500px] mb-16 border border-border">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1200')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
                    <div className="absolute bottom-12 left-8 md:left-12 space-y-4">
                        <div className="px-4 py-1.5 bg-primary text-black text-xs font-bold uppercase tracking-widest rounded-full inline-block">
                            Hot Project
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">
                            Union Town <span className="text-primary">Lahore</span>
                        </h1>
                        <p className="text-lg text-white/80 max-w-2xl font-medium">
                            A premier residential project by Union Developers on Main Abdul Sattar Edhi Road.
                            Redefining urban living with rapid development and strategic connectivity.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* Virtual Tour */}
                        <section className="space-y-8">
                            <div className="space-y-2 border-b border-white/5 pb-6">
                                <h2 className="text-3xl font-bold text-white tracking-tight">Virtual Tour</h2>
                                <p className="text-muted-foreground">Explore Union Town in 360° — drag to look around.</p>
                            </div>
                            <VirtualTour />
                        </section>

                        {/* Location Section */}
                        <section className="space-y-8">
                            <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-white/5 pb-6">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold text-white tracking-tight">Interactive Plot Layout</h2>
                                    <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full w-fit">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                        <p className="text-[10px] text-primary font-black uppercase tracking-widest">
                                            Live Source: ilaaqa.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[600px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl bg-black/40">
                                <IlaaqaMap 
                                    mapUrl="https://ilaaqa.com/maps/union-town-lahore" 
                                    projectName="Union Town Lahore" 
                                />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-secondary/10 rounded-2xl border border-border/50">
                                {[
                                    { icon: Car, text: "2 mins from Motorway Interchange" },
                                    { icon: Building2, text: "5 mins from Johar Town" },
                                    { icon: Hospital, text: "10 mins from Shaukat Khanum" },
                                    { icon: MapPin, text: "Adjacent to Etihad Town Gate 2" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-white/90 font-medium text-sm">
                                        <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Master Plan */}
                        <section className="space-y-8">
                            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/5 pb-6">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold text-white tracking-tight">Master Plan</h2>
                                    <p className="text-muted-foreground">Official Union Town site plan — Blocks A to E along Abdul Sattar Edhi Road.</p>
                                </div>
                                <a
                                    href="/union-town-map.jpg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary hover:bg-primary/20 transition-colors shrink-0"
                                >
                                    <Maximize2 className="w-4 h-4" />
                                    Open Full Size
                                </a>
                            </div>
                            <a
                                href="/union-town-map.jpg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block overflow-hidden rounded-3xl border border-primary/20 shadow-2xl bg-white"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/union-town-map.jpg"
                                    alt="Union Town master plan showing Blocks A to E"
                                    width={1698}
                                    height={2400}
                                    loading="lazy"
                                    className="w-full h-auto object-top"
                                />
                            </a>
                        </section>

                        {/* Project Overview */}
                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">Project Overview</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Union Town Lahore is the latest masterpiece by <span className="text-white font-semibold">Union Developers</span>.
                                Strategically located in the heart of Lahore's expanding residential grid, it offers a secure and
                                profitable path for both genuine buyers and smart investors. Unlike many speculative schemes,
                                Union Town is a map-based launch with physical development already in progress.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                {[
                                    { icon: ShieldCheck, title: "LDA Approved", desc: "Fully legal and transparent project status." },
                                    { icon: TrendingUp, title: "High ROI", desc: "Expected 20-30% appreciation in 18-24 months." },
                                    { icon: Building2, title: "Rapid Development", desc: "Infrastructure work is active across all blocks." },
                                    { icon: CheckCircle2, title: "Plot Numbers", desc: "Transparent allocation without balloting delays." },
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

                        {/* Plot Options */}
                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">Available Plot Sizes</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {PLOTS.map((plot) => (
                                    <div key={plot.size} className="p-8 bg-secondary/10 rounded-3xl border border-border hover:border-primary/40 transition-all space-y-4">
                                        <div className="flex justify-between items-start">
                                            <h4 className="text-2xl font-bold text-white">{plot.size}</h4>
                                            <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-white/5 border border-white/10 rounded text-muted-foreground">
                                                {plot.status}
                                            </span>
                                        </div>
                                        <p className="text-primary font-bold text-lg">{plot.price}</p>
                                        <ul className="space-y-2 pt-2">
                                            {plot.features.map((f, i) => (
                                                <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Payment Plans */}
                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">Payment Plans</h2>
                            <div className="p-8 bg-secondary/10 rounded-3xl border border-primary/20 space-y-6">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <h4 className="text-2xl font-bold text-white">5 Marla — Hot Selling</h4>
                                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-primary/10 border border-primary/20 rounded text-primary">
                                        {PLAN.tenure} Months Installments
                                    </span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {[
                                        { label: "Total Price", value: formatPkr(PLAN.total) },
                                        { label: "Booking", value: formatPkr(PLAN.booking) },
                                        { label: "Monthly Installment*", value: formatPkr(monthly) },
                                    ].map((s) => (
                                        <div key={s.label} className="p-4 bg-background/60 rounded-2xl border border-border/50">
                                            <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">{s.label}</p>
                                            <p className="text-white font-bold text-lg mt-1">{s.value}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    *Indicative: balance of {formatPkr(PLAN.total - PLAN.booking)} spread evenly over {PLAN.tenure} months.
                                    Final schedule, possession and development charges are confirmed at booking.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {["3 Marla", "10 Marla", "1 Kanal"].map((size) => (
                                    <div key={size} className="p-5 bg-secondary/10 rounded-2xl border border-border space-y-1">
                                        <p className="text-white font-bold">{size}</p>
                                        <p className="text-sm text-muted-foreground">Custom plan — contact our team for the current schedule.</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar / Inquiry */}
                    <div className="space-y-8">
                        <div className="sticky top-32 p-8 bg-secondary/30 rounded-3xl border border-primary/20 backdrop-blur-xl space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-white">Secure Your Plot</h3>
                                <p className="text-sm text-muted-foreground italic">
                                    Booking starts with PKR 15 Lakh for 5 Marla plots.
                                </p>
                            </div>

                            <form className="space-y-4">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Full Name</label>
                                    <input type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Phone Number</label>
                                    <input type="tel" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase text-muted-foreground ml-1">Plot Size Interested</label>
                                    <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 appearance-none">
                                        <option>5 Marla (Hot Selling)</option>
                                        <option>3 Marla</option>
                                        <option>10 Marla</option>
                                        <option>1 Kanal</option>
                                    </select>
                                </div>
                                <button className="w-full py-4 bg-primary text-black font-bold rounded-xl hover:scale-[1.02] transition-transform active:scale-95 shadow-lg shadow-primary/20">
                                    Send Inquiry
                                </button>
                            </form>

                            <div className="pt-6 border-t border-border space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Office Hours</p>
                                        <p className="text-white text-sm font-medium">Mon - Sat: 10AM - 7PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
