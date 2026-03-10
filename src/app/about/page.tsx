import { Trophy, Target, Shield, Users } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Our Legacy</h2>
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
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800')" }}
                        />
                        <div className="absolute inset-0 bg-background/20" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {[
                        { icon: Shield, title: "Trust", desc: "Built on decades of honest consultancy and verified deals." },
                        { icon: Target, title: "Precision", desc: "Data-driven insights to find the most profitable plots." },
                        { icon: Trophy, title: "Excellence", desc: "Award-winning service in DHA Lahore and beyond." },
                        { icon: Users, title: "Relationship", desc: "We don't just sell plots; we build lifelong partnerships." },
                    ].map((item) => (
                        <div key={item.title} className="p-8 bg-secondary/20 rounded-2xl border border-border space-y-4 hover:border-primary/30 transition-all">
                            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h4 className="text-xl font-bold text-white">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
