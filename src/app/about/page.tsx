import { Trophy, Target, Shield, Users, User } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <Eyebrow>Our Legacy</Eyebrow>
                            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                                Redefining Real Estate <br />
                                <span className="text-primary">Investment in Pakistan</span>
                            </h1>
                        </div>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Universal Holdings was founded with a singular vision: to bring professional excellence and uncompromising integrity to the real estate market. We specialize in premium projects that offer long-term value and security.
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-4">
                            <div className="space-y-2">
                                <p className="text-3xl font-bold text-white">1000+</p>
                                <p className="text-xs text-muted-foreground uppercase tracking-widest">Happy Families</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-3xl font-bold text-white">PKR 50B+</p>
                                <p className="text-xs text-muted-foreground uppercase tracking-widest">Assets Managed</p>
                            </div>
                        </div>
                    </div>
                    <div className="aspect-square rounded-3xl overflow-hidden border border-border relative">
                        <div
                            role="img"
                            aria-label="Universal Holdings office and team"
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800')" }}
                        />
                        <div className="absolute inset-0 bg-background/20" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {[
                        { icon: Shield, title: "Trust", desc: "Built on decades of honest consultancy and verified deals.", chips: ["Verified Deals", "Secure Titles"] },
                        { icon: Target, title: "Precision", desc: "Data-driven insights to find the most profitable plots.", chips: ["Market Data", "Smart Picks"] },
                        { icon: Trophy, title: "Excellence", desc: "Award-winning service in DHA Lahore and beyond.", chips: ["Top Rated", "Proven Results"] },
                        { icon: Users, title: "Relationship", desc: "We don't just sell plots; we build lifelong partnerships.", chips: ["Long-Term Care", "Client First"] },
                    ].map((item) => (
                        <div key={item.title} className="p-8 bg-secondary/20 rounded-2xl border border-border space-y-4 hover:border-primary/30 transition-all">
                            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h4 className="text-xl font-bold text-white">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {item.chips.map((chip) => (
                                    <span
                                        key={chip}
                                        className="px-2.5 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] text-primary font-bold uppercase tracking-wider"
                                    >
                                        {chip}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center bg-secondary/20 rounded-3xl border border-border p-8 md:p-12">
                    <div
                        role="img"
                        aria-label="Azam Khan, Founder of Universal Holdings"
                        className="aspect-square rounded-2xl overflow-hidden border border-border bg-secondary flex items-center justify-center"
                    >
                        <User className="w-1/3 h-1/3 text-muted-foreground/40" strokeWidth={1} />
                    </div>
                    <div className="lg:col-span-2 space-y-4">
                        <Eyebrow>Our Story</Eyebrow>
                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Meet Azam Khan, Founder</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            With over 15 years in Lahore&apos;s real estate market, Azam built Universal Holdings on a simple
                            principle: never recommend a plot he wouldn&apos;t buy for his own family. That standard now guides
                            every consultant on the team, from first inquiry to final transfer.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            &ldquo;Real estate in Pakistan has a trust problem. Our job is to be the exception — verified maps,
                            honest pricing, and no pressure to close before you&apos;re ready.&rdquo;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
