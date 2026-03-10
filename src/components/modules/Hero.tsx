import Link from "next/link";
import { Search, Map as MapIcon, ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000')",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-primary font-bold tracking-widest uppercase text-sm md:text-base animate-in fade-in slide-in-from-bottom-4 duration-700">
                            Trusted Real Estate Consultancy
                        </h2>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                            Where Property Dreams <br />
                            <span className="text-primary italic">Come True</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
                            Expert guidance in DHA Lahore, DHA Multan, and premium projects across Pakistan. Secure your future with authentic property investments.
                        </p>
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
