"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Map as MapIcon, ArrowRight, Pin, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import TrustedByStrip from "@/components/modules/TrustedByStrip";

const STATS = [
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 5, suffix: "k+", label: "Happy Clients" },
    { value: 50, suffix: "+", label: "Prime Projects" },
    { value: 100, suffix: "%", label: "Secure Deals" },
];

export default function Hero() {
    const router = useRouter();
    const [query, setQuery] = useState("");

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const q = query.trim();
        router.push(q ? `/projects?q=${encodeURIComponent(q)}` : "/projects");
    };

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                role="img"
                aria-label="Modern real estate skyline"
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000')",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="space-y-4">
                        <Eyebrow className="md:text-base animate-in fade-in slide-in-from-bottom-4 duration-700" as="p">
                            Trusted Real Estate Consultancy
                        </Eyebrow>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                            No Compromise on Legitimacy. <br />
                            <span className="text-primary italic">Universal Trust.</span>
                        </h1>
                        <div className="relative max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
                            {/* Decorative Pin/Vertical line from image */}
                            <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-1.5 bg-primary rounded-full hidden md:block" />
                            <div className="absolute -left-4 md:-left-10 -top-6 hidden md:block">
                                <Pin className="w-8 h-8 text-primary fill-primary/20 animate-bounce-subtle" />
                            </div>

                            <p className="text-lg md:text-xl text-white font-medium leading-relaxed tracking-wide drop-shadow-md text-center md:text-left md:pl-10">
                                We are leading in one stop top quality sales in <span className="text-primary font-bold">Commercial & Residential</span> network in Pakistan, working in the Real Estate Industry since <span className="text-primary font-black underline underline-offset-4 decoration-primary/50">2010</span> from <span className="text-primary font-bold">4 offices across Lahore & Islamabad</span>.
                            </p>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSearch}
                        className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200"
                    >
                        <div className="relative flex-grow">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search DHA Phase 7, Union Town..."
                                aria-label="Search projects"
                                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full py-4 pl-12 pr-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                            />
                        </div>
                        <Button type="submit" size="lg" className="shrink-0">
                            Search Projects
                        </Button>
                    </form>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-300">
                        <Button href="/projects" className="w-full sm:w-auto group">
                            Explore Projects
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button href="/maps" variant="outline" className="w-full sm:w-auto">
                            <MapIcon className="w-5 h-5 text-primary" />
                            View Map
                        </Button>
                    </div>

                    {/* Quick Stats */}
                    <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-500">
                        {STATS.map((stat) => (
                            <div key={stat.label} className="space-y-1">
                                <p className="text-3xl font-bold text-white">
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                </p>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative z-10 w-full mt-12 animate-in fade-in duration-700 delay-500">
                <TrustedByStrip />
            </div>

            {/* Hero Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
}
