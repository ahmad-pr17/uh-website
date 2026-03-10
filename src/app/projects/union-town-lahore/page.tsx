"use client";

import { MapPin, CheckCircle2, TrendingUp, ShieldCheck, Building2, Clock, Car, Hospital, Maximize2 } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";
import PlotMapModal from "@/components/modules/PlotMapModal";

const DynamicMap = dynamic<{ activeProject?: string; zoom?: number }>(() => import("@/components/modules/ProjectMap"), {
    ssr: false,
    loading: () => <div className="w-full h-[400px] bg-secondary/10 animate-pulse rounded-3xl" />
});

export default function UnionTownPage() {
    const [isMapModalOpen, setIsMapModalOpen] = useState(false);

    const PLOTS = [
        { size: "3 Marla", status: "Limited Inventory", price: "Highly Competitive", features: ["Map-based allocation", "Fast development"] },
        { size: "5 Marla", status: "Hot Selling", price: "PKR 1.15 Crore", features: ["PKR 15 Lakh Booking", "2-Year Installments", "Official Plot Numbers"] },
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

                        {/* Location Section */}
                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">Prime Location</h2>
                            <p className="text-muted-foreground text-lg">
                                Situated on <span className="text-white font-semibold">Main Abdul Sattar Edhi Road</span>, Union Town
                                provides unmatched connectivity to Lahore's major hubs.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Car, text: "2 mins from Motorway Interchange" },
                                    { icon: Building2, text: "5 mins from Johar Town" },
                                    { icon: Hospital, text: "10 mins from Shaukat Khanum Hospital" },
                                    { icon: MapPin, text: "Right next to Etihad Town Gate 2" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-white/90 font-medium">
                                        <item.icon className="w-5 h-5 text-primary" />
                                        <span>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="relative h-[400px] w-full group">
                                <DynamicMap activeProject="Union Town Lahore" zoom={15} />
                                <div className="absolute top-4 right-4 z-10">
                                    <button
                                        onClick={() => setIsMapModalOpen(true)}
                                        className="flex items-center gap-2 px-4 py-2 bg-[#020617]/90 backdrop-blur-md border border-primary/30 rounded-xl text-white text-xs font-bold hover:bg-primary hover:text-black transition-all shadow-xl"
                                    >
                                        <Maximize2 className="w-4 h-4" />
                                        View Detailed Plot Map
                                    </button>
                                </div>
                            </div>

                            {/* Detailed Map Modal */}
                            <PlotMapModal
                                isOpen={isMapModalOpen}
                                onClose={() => setIsMapModalOpen(false)}
                                mapUrl="https://emap.pk/union-town-lahore-map"
                                projectName="Union Town Lahore"
                            />
                        </section>

                        {/* Plot Options */}
                        <section className="space-y-8">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">Available Inventory</h2>
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
