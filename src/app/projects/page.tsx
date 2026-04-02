import Link from "next/link";
import { Search, Filter, ArrowRight } from "lucide-react";
import { ALL_PROJECTS } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="space-y-4 mb-12">
                    <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Our Portfolio</h2>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Prime Projects</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Explore our curated selection of high-yield real estate projects across Pakistan's most developed regions.
                    </p>
                </div>

                {/* Search & Filter Bar Placeholder */}
                <div className="flex flex-col md:flex-row gap-4 mb-16 p-4 bg-secondary/30 rounded-2xl border border-border">
                    <div className="relative flex-grow">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search projects (e.g. DHA Phase 7)..."
                            className="w-full bg-background border border-border rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                        />
                    </div>
                    <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-border rounded-xl text-white hover:bg-white/10 transition-all font-medium">
                        <Filter className="w-5 h-5" />
                        <span>Filters</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ALL_PROJECTS.map((project) => (
                        <div key={project.id} className="group bg-secondary/20 rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all">
                            <div className="aspect-video bg-muted relative overflow-hidden">
                                <div 
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url('${project.image}')` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.name}</h3>
                                    {project.hot && (
                                        <span className="px-2 py-0.5 bg-primary text-black text-[10px] font-bold uppercase tracking-widest rounded-full">Hot</span>
                                    )}
                                </div>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {project.description}
                                </p>
                                <Link
                                    href={project.isDha ? `/projects/dha-lahore/${project.slug}` : `/projects/${project.slug}`}
                                    className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all"
                                >
                                    <span>Learn More</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
