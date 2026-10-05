import Link from "next/link";
import { Building2, Home, Wallet, ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import VirtualTour from "@/components/modules/VirtualTour";
import {
    COMMERCIAL_PLAN,
    COMMERCIAL_SIZES,
    RESIDENTIAL_PLOTS,
    STARTING_PRICE,
    UNION_TOWN_HREF,
    formatPkr,
    planTotal,
} from "@/data/unionTown";

const CELL = "px-4 py-3 text-right whitespace-nowrap";

export default function UnionTownOverview() {
    const stats = [
        { icon: Home, title: RESIDENTIAL_PLOTS.map((p) => p.marla).join(", ") + " Marla", sub: "Residential Plots" },
        { icon: Building2, title: COMMERCIAL_SIZES.join(", ") + " Marla", sub: "Commercial Plots" },
        { icon: Wallet, title: "Starting Price", sub: formatPkr(STARTING_PRICE) },
    ];

    return (
        <section className="container mx-auto px-4 md:px-6 space-y-24">
            {/* Lifestyle intro + stats */}
            <div className="text-center space-y-6">
                <Eyebrow>Your Dream Lifestyle Awaits</Eyebrow>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase">
                    Step into your <span className="text-primary">ideal lifestyle</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                    Union Town is turning your dream lifestyle into reality. Whether you are looking for residential
                    or commercial plots, it gives you the opportunity to secure your future in a community designed
                    to elevate your overall living experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                    {stats.map((s) => (
                        <div key={s.title} className="p-6 bg-secondary/10 rounded-2xl border border-border space-y-2">
                            <s.icon className="w-8 h-8 text-primary mx-auto" />
                            <p className="text-white font-bold">{s.title}</p>
                            <p className="text-sm text-muted-foreground">{s.sub}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Residential marla cards */}
            <div className="space-y-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4">Residential Plots</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {RESIDENTIAL_PLOTS.map((p) => (
                        <Link
                            key={p.marla}
                            href={UNION_TOWN_HREF}
                            className="group p-6 bg-secondary/10 rounded-3xl border border-border hover:border-primary/50 transition-all text-center space-y-3"
                        >
                            <p className="text-5xl font-bold text-primary">{String(p.marla).padStart(2, "0")}</p>
                            <p className="text-white font-bold tracking-widest">MARLA</p>
                            <p className="text-sm text-muted-foreground min-h-5">
                                {p.price ? formatPkr(p.price) : "Contact for rates"}
                            </p>
                            <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-white group-hover:text-primary transition-colors">
                                Explore <ArrowRight className="w-3 h-3" />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Commercial payment plan */}
            <div className="space-y-8">
                <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-primary pl-4">
                        2.5 Year Commercial Payment Plan
                    </h3>
                    <p className="text-muted-foreground pl-5">
                        Commercial plots in {COMMERCIAL_SIZES.join(", ")} Marla. Down payment, 8 quarterly installments, yearly installment and balance on possession.
                    </p>
                </div>
                <div className="overflow-x-auto rounded-3xl border border-primary/20 bg-secondary/10">
                    <table className="w-full text-sm text-white min-w-[720px]">
                        <thead>
                            <tr className="border-b border-border text-[10px] uppercase tracking-widest text-muted-foreground">
                                <th className="px-4 py-4 text-left">Category</th>
                                {COMMERCIAL_PLAN.map((p, i) => (
                                    <th key={i} className="px-4 py-4 text-right">
                                        <span className="block text-white text-xs">{p.label}</span>
                                        {"sub" in p && <span className="block normal-case tracking-normal text-[10px]">{p.sub}</span>}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="[&>tr]:border-b [&>tr]:border-border/50">
                            {[
                                { name: "Down Payment", get: (p: (typeof COMMERCIAL_PLAN)[number]) => p.down },
                                { name: "8 Quarterly Installments", get: (p: (typeof COMMERCIAL_PLAN)[number]) => p.quarterly },
                                { name: "Yearly Installment", get: (p: (typeof COMMERCIAL_PLAN)[number]) => p.yearly },
                                { name: "On Possession", get: (p: (typeof COMMERCIAL_PLAN)[number]) => p.possession },
                            ].map((row) => (
                                <tr key={row.name}>
                                    <td className="px-4 py-3 font-semibold">{row.name}</td>
                                    {COMMERCIAL_PLAN.map((p, i) => (
                                        <td key={i} className={CELL}>{row.get(p).toLocaleString("en-US")}</td>
                                    ))}
                                </tr>
                            ))}
                            <tr className="bg-primary/10 font-bold text-primary">
                                <td className="px-4 py-4">Total Price</td>
                                {COMMERCIAL_PLAN.map((p, i) => (
                                    <td key={i} className={CELL}>{planTotal(p).toLocaleString("en-US")}</td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-xs text-muted-foreground">All amounts in PKR. Prices and schedules are subject to change; confirm with our team at booking.</p>
            </div>

            {/* Virtual tour */}
            <div className="space-y-8">
                <div className="text-center space-y-3">
                    <Eyebrow>360° Experience</Eyebrow>
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Union Town Virtual Tour</h3>
                    <p className="text-muted-foreground">Drag to look around, tap the blocks to move through the project.</p>
                </div>
                <VirtualTour />
            </div>
        </section>
    );
}
