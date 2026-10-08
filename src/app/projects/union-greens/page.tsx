import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Mail, MapPin, Phone, ShieldCheck, Trees } from "lucide-react";
import { formatPkr } from "@/data/unionTown";
import { UG_PHASES } from "@/data/unionGreens";

export const metadata = {
    title: "Union Greens | Affordable Gated Communities in Lahore",
    description:
        "Union Greens Phase II on Pine Avenue offers 3, 5 and 10 Marla residential plots and 2 Marla commercial plots on easy quarterly installments. Phase I on College Road is fully delivered.",
};

const fmt = (n: number) => n.toLocaleString("en-US");

export default function UnionGreensPage() {
    return (
        <div className="pt-32 pb-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
                    <ArrowLeft className="w-4 h-4" /> All Projects
                </Link>

                {/* Hero */}
                <div className="on-dark relative rounded-3xl overflow-hidden h-[500px] mb-16 border border-border">
                    <Image
                        src="/union-greens/phase1-hero.jpg"
                        alt="Union Greens entrance"
                        fill
                        priority
                        quality={90}
                        sizes="(min-width: 1280px) 1200px, 100vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute bottom-12 left-8 md:left-12 right-8 space-y-4">
                        <span className="inline-flex px-4 py-1.5 bg-primary text-black text-xs font-bold uppercase tracking-widest rounded-full">
                            Phase II Now Selling
                        </span>
                        <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">
                            Union <span className="text-primary">Greens</span>
                        </h1>
                        <p className="text-lg text-white/80 max-w-2xl font-medium">
                            Affordable, exceptional living in gated communities by Union Developers — Phase II on Pine Avenue and fully delivered Phase I on College Road.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-20">
                        {/* Quick facts */}
                        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { icon: ShieldCheck, title: "Gated & Secure", desc: "24/7 security and underground utilities." },
                                { icon: Trees, title: "Green Living", desc: "Parks, walking tracks and a Jamia mosque." },
                                { icon: MapPin, title: "2 Locations", desc: "Pine Avenue (Phase II) and College Road (Phase I)." },
                            ].map((item) => (
                                <div key={item.title} className="flex gap-4 p-4 bg-secondary/20 rounded-2xl border border-border/50">
                                    <div className="mt-1"><item.icon className="w-6 h-6 text-primary" /></div>
                                    <div>
                                        <h4 className="font-bold text-white">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </section>

                        {UG_PHASES.map((phase) => (
                            <section key={phase.id} className="space-y-8">
                                <div className="flex flex-wrap items-center gap-3 border-b border-white/5 pb-4">
                                    <h2 className="text-3xl font-bold text-white">Union Greens {phase.name}</h2>
                                    <span
                                        className={
                                            "px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border " +
                                            (phase.soldOut
                                                ? "bg-red-500/10 border-red-500/30 text-red-500"
                                                : "bg-primary/10 border-primary/30 text-primary")
                                        }
                                    >
                                        {phase.status}
                                    </span>
                                    <span className="text-sm text-muted-foreground">{phase.location}</span>
                                </div>

                                <div className="relative aspect-[1920/800] rounded-3xl overflow-hidden border border-border">
                                    <Image
                                        src={phase.hero}
                                        alt={`Union Greens ${phase.name}`}
                                        fill
                                        quality={85}
                                        sizes="(min-width: 1024px) 800px, 100vw"
                                        className="object-cover"
                                    />
                                </div>

                                <p className="text-muted-foreground text-lg leading-relaxed">{phase.summary}</p>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-5 bg-secondary/10 rounded-2xl border border-border">
                                        <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Residential Plots</p>
                                        <p className="text-white font-bold text-lg mt-1">{phase.residential}</p>
                                    </div>
                                    <div className="p-5 bg-secondary/10 rounded-2xl border border-border">
                                        <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Commercial Plots</p>
                                        <p className="text-white font-bold text-lg mt-1">{phase.commercial}</p>
                                    </div>
                                </div>

                                {/* Payment plan */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-white">{phase.soldOut ? "Original Payment Plan" : "Payment Plan"}</h3>
                                    <div className="overflow-x-auto rounded-3xl border border-primary/20 bg-secondary/10">
                                        <table className="w-full text-sm text-white min-w-[560px]">
                                            <thead>
                                                <tr className="border-b border-border text-[10px] uppercase tracking-widest text-muted-foreground">
                                                    <th className="px-4 py-4 text-left">Plot</th>
                                                    <th className="px-4 py-4 text-right">{phase.soldOut ? "Booking" : "Down Payment"}</th>
                                                    <th className="px-4 py-4 text-right">Quarterly Installments</th>
                                                    <th className="px-4 py-4 text-right">Total (PKR)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="[&>tr]:border-b [&>tr]:border-border/50">
                                                {phase.plan.map((row) => (
                                                    <tr key={row.size + row.kind}>
                                                        <td className="px-4 py-4 font-semibold">
                                                            {row.size} <span className="text-xs text-muted-foreground font-normal">({row.kind})</span>
                                                        </td>
                                                        <td className="px-4 py-4 text-right">{fmt(row.down)}</td>
                                                        <td className="px-4 py-4 text-right">
                                                            {row.installmentCount} × {fmt(row.installments)}
                                                        </td>
                                                        <td className="px-4 py-4 text-right text-primary font-bold">{fmt(row.total)}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-xs text-muted-foreground">{phase.planNote} Prices and terms are subject to change; confirm with our team.</p>
                                </div>

                                {/* Amenities + location */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-6 bg-secondary/10 rounded-3xl border border-border space-y-3">
                                        <h4 className="text-white font-bold">Amenities</h4>
                                        <ul className="space-y-2">
                                            {phase.amenities.map((a) => (
                                                <li key={a} className="text-sm text-muted-foreground flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60" /> {a}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="p-6 bg-secondary/10 rounded-3xl border border-border space-y-3">
                                        <h4 className="text-white font-bold">Location</h4>
                                        <ul className="space-y-2">
                                            {phase.nearby.map((n) => (
                                                <li key={n.place} className="text-sm text-muted-foreground flex items-center gap-3">
                                                    <Clock className="w-4 h-4 text-primary shrink-0" />
                                                    <span><span className="text-white font-semibold">{n.mins} mins</span> from {n.place}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Gallery */}
                                <div className={"grid gap-3 " + (phase.gallery.length > 2 ? "grid-cols-2 md:grid-cols-3" : "grid-cols-1 sm:grid-cols-2")}>
                                    {phase.gallery.map((src) => (
                                        <div key={src} className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                                            <Image src={src} alt={`Union Greens ${phase.name} gallery`} fill sizes="(min-width: 768px) 260px, 50vw" className="object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}

                        <p className="text-xs text-muted-foreground">
                            Project details and imagery courtesy of Union Developers. Renders are for illustration.
                        </p>
                    </div>

                    {/* Sidebar */}
                    <div>
                        <div className="sticky top-32 p-8 bg-secondary/30 rounded-3xl border border-primary/20 backdrop-blur-xl space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-white">Book in Phase II</h3>
                                <p className="text-sm text-muted-foreground">
                                    5 Marla from <span className="text-primary font-bold">{formatPkr(3_495_000)}</span> down payment. Talk to our team for availability and maps.
                                </p>
                            </div>
                            <a
                                href="tel:+923210000777"
                                className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-black font-bold rounded-xl hover:scale-[1.02] transition-transform active:scale-95 shadow-lg shadow-primary/20"
                            >
                                <Phone className="w-5 h-5" /> Call 0321 0000777
                            </a>
                            <a
                                href="mailto:universalholding12@gmail.com?subject=Union%20Greens%20inquiry"
                                className="flex items-center justify-center gap-2 w-full py-4 border border-border text-white font-bold rounded-xl hover:border-primary/50 transition-colors"
                            >
                                <Mail className="w-5 h-5 text-primary" /> Email Us
                            </a>
                            <Link href="/projects/union-town-lahore" className="block text-center text-sm text-muted-foreground hover:text-primary transition-colors">
                                Also see Union Town Lahore →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
