import Link from "next/link";
import { Search, Map as MapIcon, ArrowRight, Pin } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
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
                        <h2 className="text-primary font-bold tracking-widest uppercase text-sm md:text-base animate-in fade-in slide-in-from-bottom-4 duration-700">
                            Trusted Real Estate Consultancy
                        </h2>
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
                            
                            <p className="text-lg md:text-xl text-white font-medium leading-relaxed font-normal tracking-wide drop-shadow-md text-center md:text-left md:pl-10">
                                We are leading in one stop top quality sales in <span className="text-primary font-bold">Commercial & Residential</span> network in Pakistan working in the Real Estate Industry since <span className="text-primary font-black underline underline-offset-4 decoration-primary/50">2010</span>. The company operates 4 offices in <span className="text-primary font-bold text-lg">Lahore & Islamabad</span>. We proudly associate ourselves with some of the biggest and most trustworthy names in modern real estate development including <span className="text-primary font-bold">Bahria Town</span>, <span className="text-primary font-bold">DHA</span>, <span className="text-primary font-bold">Lake City</span>, <span className="text-primary font-bold">Etihad Town</span>, <span className="text-primary font-bold">Liberty Lands</span>, <span className="text-primary font-bold">Soul City</span> and other major development societies.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-300">
                        <Link
                            href="/projects"
                            className="w-full sm:w-auto px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-white transition-all flex items-center justify-center gap-2 group"
                        >
                            Explore Projects
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/maps"
                            className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 border border-white/20 transition-all flex items-center justify-center gap-2"
                        >
                            <MapIcon className="w-5 h-5 text-primary" />
                            View Map
                        </Link>
                    </div>

                    {/* Quick Stats/Search Placeholder */}
                    <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-500">
                        <div className="space-y-1">
                            <p className="text-3xl font-bold text-white">15+</p>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Years Experience</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl font-bold text-white">5k+</p>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Happy Clients</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl font-bold text-white">50+</p>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Prime Projects</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-3xl font-bold text-white">100%</p>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Secure Deals</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
}
