"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, Flame } from "lucide-react";
import { ALL_PROJECTS, projectHref } from "@/data/projects";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
    const [query, setQuery] = useState("");
    const [hotOnly, setHotOnly] = useState(false);

    // Read the initial search term from the URL after mount — avoided during the lazy
    // useState initializer because window.location isn't available during SSR and would
    // cause a hydration mismatch on the controlled input's value.
    useEffect(() => {
        const q = new URLSearchParams(window.location.search).get("q");
        if (q) setQuery(q);
    }, []);

    const filteredProjects = useMemo(() => {
        const q = query.trim().toLowerCase();
        return ALL_PROJECTS.filter((project) => {
            if (hotOnly && !project.hot) return false;
            if (!q) return true;
            return project.name.toLowerCase().includes(q) || project.description.toLowerCase().includes(q);
        });
    }, [query, hotOnly]);

    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="space-y-4 mb-12">
                    <Eyebrow>Our Portfolio</Eyebrow>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Prime Projects</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Explore our current projects by Union Developers: Union Town, Pine Residencia and Union Greens.
                    </p>
                </div>

                {/* Search & Filter Bar */}
                <div className="flex flex-col md:flex-row gap-4 mb-10 p-4 bg-secondary/30 rounded-2xl border border-border">
                    <div className="flex-grow">
                        <Input
                            type="text"
                            aria-label="Search projects"
                            placeholder="Search projects (e.g. Union Greens)..."
                            icon={<Search className="w-5 h-5" />}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="py-3"
                        />
                    </div>
                    <Button
                        type="button"
                        variant={hotOnly ? "primary" : "ghost"}
                        size="md"
                        onClick={() => setHotOnly((v) => !v)}
                        aria-pressed={hotOnly}
                    >
                        <Flame className="w-5 h-5" />
                        <span>Hot Only</span>
                    </Button>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                    {filteredProjects.length} project{filteredProjects.length === 1 ? "" : "s"} found
                </p>

                {filteredProjects.length === 0 ? (
                    <div className="text-center py-20 text-muted-foreground">
                        No projects match your search. Try a different keyword.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="group bg-secondary/20 rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all">
                                <div className="aspect-video bg-muted relative overflow-hidden">
                                    <div
                                        role="img"
                                        aria-label={project.name}
                                        className={cn(
                                            "absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        )}
                                        style={{ backgroundImage: `url('${project.image}')` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="flex justify-between items-start gap-3">
                                        <div className="space-y-1">
                                            {project.tag && (
                                                <p className="text-primary text-[10px] font-bold uppercase tracking-widest">{project.tag}</p>
                                            )}
                                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.name}</h3>
                                        </div>
                                        {project.hot && (
                                            <span className="px-2 py-0.5 bg-primary text-black text-[10px] font-bold uppercase tracking-widest rounded-full shrink-0">Hot</span>
                                        )}
                                    </div>
                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                        {project.description}
                                    </p>
                                    <Link
                                        href={projectHref(project)}
                                        className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all"
                                    >
                                        <span>Learn More</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
