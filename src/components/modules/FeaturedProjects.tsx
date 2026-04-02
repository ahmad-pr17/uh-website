import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { OTHER_PROJECTS, DHA_PROJECTS, Project } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={project.isDha ? `/projects/dha-lahore/${project.slug}` : project.slug.startsWith('/') ? project.slug : `/projects/${project.slug}`}
            className="group relative h-[400px] overflow-hidden rounded-2xl border border-border bg-secondary/20 transition-all hover:-translate-y-2 hover:border-primary/50"
        >
            <div
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${project.image}')` }}
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/20 to-transparent" />

            {project.hot && (
                <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-primary text-black text-[10px] font-bold uppercase tracking-widest rounded-full">
                    Hot
                </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 space-y-2">
                <h4 className="text-xl font-bold text-white">{project.name}</h4>
                <p className="text-sm text-muted-foreground line-clamp-2 transition-all group-hover:line-clamp-none">
                    {project.description}
                </p>
            </div>
        </Link>
    );
}

export default function FeaturedProjects() {
    return (
        <section className="container mx-auto px-4 md:px-6 space-y-16">
            {/* Primary Featured Projects */}
            <div>
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
                    <div className="space-y-4">
                        <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Hot Investment Opportunities</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Featured Projects</h3>
                    </div>
                    <Link
                        href="/projects"
                        className="text-primary hover:text-white transition-colors flex items-center gap-2 font-semibold pb-1 border-b border-primary/20"
                    >
                        View All Projects
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {OTHER_PROJECTS.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>
            </div>

            {/* DHA Specific Projects */}
            <div className="pt-8 border-t border-white/5">
                <div className="mb-8 space-y-4">
                    <div className="flex items-center gap-4">
                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">DHA Lahore</h3>
                        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mt-2">
                            <Search className="w-3.5 h-3.5 text-blue-400" />
                            <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">
                                Live data seamlessly fetched via online websearch
                            </span>
                        </div>
                    </div>
                    <p className="md:hidden text-[10px] text-blue-400 font-bold uppercase tracking-widest flex items-center gap-2">
                        <Search className="w-3.5 h-3.5" />
                        Live data seamlessly fetched via online websearch
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {DHA_PROJECTS.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
