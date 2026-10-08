import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BadgePercent, BedDouble, Building2, Mail, MapPin, Phone, ShieldCheck, Flame } from "lucide-react";
import { formatPkr } from "@/data/unionTown";
import {
    PINE_BOOKING_FROM,
    PINE_CATEGORY_FACTORS,
    PINE_DISCOUNTS,
    PINE_PLAN,
    PINE_QUARTERLY_COUNT,
    PINE_YEARLY_COUNT,
} from "@/data/pineResidencia";

export const metadata = {
    title: "Pine Residencia | 2-BHK Apartments in Union Town",
    description: "2-BHK residential units in Union Town A Block, Pine Avenue, Lahore. Booking from PKR 15 Lakh on a 2.5-year installment plan.",
};

const fmt = (n: number) => n.toLocaleString("en-US");
const total = (p: (typeof PINE_PLAN)[number]) =>
    p.booking + p.after45 + p.quarterly * PINE_QUARTERLY_COUNT + p.yearly * PINE_YEARLY_COUNT + p.possession;

export default function PineResidenciaPage() {
    return (
        <div className="pt-32 pb-20 bg-[#020617]">
            <div className="container mx-auto px-4 md:px-6">
                <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
                    <ArrowLeft className="w-4 h-4" /> All Projects
                </Link>

                {/* Hero */}
                <div className="relative rounded-3xl overflow-hidden h-[500px] mb-16 border border-border">
                    <Image
                        src="/pine-residencia-street.jpg"
                        alt="Pine Residencia street view"
                        fill
                        priority
                        sizes="(min-width: 1280px) 1200px, 100vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />
                    <div className="absolute bottom-12 left-8 md:left-12 right-8 space-y-4">
                        <div className="flex flex-wrap gap-3">
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary text-black text-xs font-bold uppercase tracking-widest rounded-full">
                                <Flame className="w-3.5 h-3.5" /> Hot Project
                            </span>
                            <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full">
                                Now Launching in A Block
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">
                            Pine <span className="text-primary">Residencia</span>
                        </h1>
                        <p className="text-lg text-white/80 max-w-2xl font-medium">
                            2-BHK residential units in Union Town, Pine Avenue, Lahore. Modern spaces for luxury living, from PKR {fmt(PINE_BOOKING_FROM)} booking.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-16">
                        {/* Overview */}
                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">Project Overview</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Pine Residencia is an exclusive townhouse-style development inside Union Town (A Block), Pine Avenue.
                                    Designed for families seeking modern living with long-term value, it offers 2-BHK luxury residences on
                                    spacious internal roads with direct connectivity from the 150 ft main Pine Avenue. It follows the success of
                                    Pine Residencia E Block.
                                </p>
                                <div className="relative aspect-[4/4.5] rounded-3xl overflow-hidden border border-border">
                                    <Image
                                        src="/pine-residencia-building.jpg"
                                        alt="Pine Residencia building elevation"
                                        fill
                                        sizes="(min-width: 768px) 400px, 100vw"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { icon: BedDouble, title: "2-BHK Units", desc: "Over 40 sq. ft. of additional bedroom area added to every unit across all floors." },
                                    { icon: ShieldCheck, title: "LDA Approved", desc: "Part of the LDA-approved Union Town project." },
                                    { icon: MapPin, title: "Pine Avenue", desc: "Direct access from the 150 ft main Pine Avenue." },
                                    { icon: Building2, title: "Ground to Second Floor", desc: "Choose your floor — pricing from PKR 1.05 Crore." },
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

                        {/* Payment plan */}
                        <section className="space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold text-white border-l-4 border-primary pl-4">Payment Plan</h2>
                                <p className="text-muted-foreground pl-5">2.5 years easy installment plan. Booking starts from {formatPkr(PINE_BOOKING_FROM)} (launching price).</p>
                            </div>

                            <div className="overflow-x-auto rounded-3xl border border-primary/20 bg-secondary/10">
                                <table className="w-full text-sm text-white min-w-[760px]">
                                    <thead>
                                        <tr className="border-b border-border text-[10px] uppercase tracking-widest text-muted-foreground">
                                            <th className="px-4 py-4 text-left">Type</th>
                                            <th className="px-4 py-4 text-right">Amount (PKR)</th>
                                            <th className="px-4 py-4 text-right">Booking</th>
                                            <th className="px-4 py-4 text-right">After 45 Days</th>
                                            <th className="px-4 py-4 text-right">{PINE_QUARTERLY_COUNT} Quarterly</th>
                                            <th className="px-4 py-4 text-right">{PINE_YEARLY_COUNT} Yearly</th>
                                            <th className="px-4 py-4 text-right">Possession</th>
                                        </tr>
                                    </thead>
                                    <tbody className="[&>tr]:border-b [&>tr]:border-border/50">
                                        {PINE_PLAN.map((p) => (
                                            <tr key={p.floor}>
                                                <td className="px-4 py-4 font-semibold">{p.floor}</td>
                                                <td className="px-4 py-4 text-right text-primary font-bold">{fmt(p.amount)}</td>
                                                <td className="px-4 py-4 text-right">{fmt(p.booking)}</td>
                                                <td className="px-4 py-4 text-right">{fmt(p.after45)}</td>
                                                <td className="px-4 py-4 text-right">{fmt(p.quarterly)}</td>
                                                <td className="px-4 py-4 text-right">{fmt(p.yearly)}</td>
                                                <td className="px-4 py-4 text-right">{fmt(p.possession)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Each floor&apos;s installments add up to its amount ({PINE_PLAN.map((p) => `${p.floor}: ${fmt(total(p))}`).join(" · ")}).
                                Prices and terms are subject to change; confirm with our team at booking.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 bg-secondary/10 rounded-3xl border border-border space-y-4">
                                    <h4 className="flex items-center gap-2 text-white font-bold"><BadgePercent className="w-5 h-5 text-primary" /> Payment Incentives</h4>
                                    {PINE_DISCOUNTS.map((d) => (
                                        <div key={d.pct} className="flex gap-3 items-start">
                                            <span className="text-primary font-bold w-12 shrink-0">{d.pct}</span>
                                            <span className="text-sm text-muted-foreground">{d.text}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-6 bg-secondary/10 rounded-3xl border border-border space-y-4">
                                    <h4 className="flex items-center gap-2 text-white font-bold"><Building2 className="w-5 h-5 text-primary" /> Category Factors</h4>
                                    {PINE_CATEGORY_FACTORS.map((d) => (
                                        <div key={d.text} className="flex gap-3 items-start">
                                            <span className="text-primary font-bold w-12 shrink-0">{d.pct}</span>
                                            <span className="text-sm text-muted-foreground">{d.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div>
                        <div className="sticky top-32 p-8 bg-secondary/30 rounded-3xl border border-primary/20 backdrop-blur-xl space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-white">Book Your Unit</h3>
                                <p className="text-sm text-muted-foreground">
                                    Booking from <span className="text-primary font-bold">{formatPkr(PINE_BOOKING_FROM)}</span>. Talk to our team for availability and floor plans.
                                </p>
                            </div>
                            <a
                                href="tel:+923001234567"
                                className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-black font-bold rounded-xl hover:scale-[1.02] transition-transform active:scale-95 shadow-lg shadow-primary/20"
                            >
                                <Phone className="w-5 h-5" /> Call +92 300 123 4567
                            </a>
                            <a
                                href="mailto:info@example.com?subject=Pine%20Residencia%20inquiry"
                                className="flex items-center justify-center gap-2 w-full py-4 border border-border text-white font-bold rounded-xl hover:border-primary/50 transition-colors"
                            >
                                <Mail className="w-5 h-5 text-primary" /> Email Us
                            </a>
                            <Link href="/projects/union-town-lahore" className="block text-center text-sm text-muted-foreground hover:text-primary transition-colors">
                                Part of Union Town Lahore →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
