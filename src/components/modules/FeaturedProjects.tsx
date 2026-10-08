import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ALL_PROJECTS, Project, projectHref } from "@/data/projects";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Carousel } from "@/components/ui/Carousel";

function ProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={projectHref(project)}
            data-carousel-item
            className="group relative h-[400px] w-[280px] sm:w-[320px] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-secondary/20 transition-all hover:-translate-y-2 hover:border-primary/50"
        >
            <div
                role="img"
                aria-label={project.name}
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
                {project.tag && (
                    <p className="text-primary text-[10px] font-bold uppercase tracking-widest">{project.tag}</p>
                )}
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
                        <Eyebrow>Hot Investment Opportunities</Eyebrow>
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Featured Projects</h2>
                    </div>
                    <Link
                        href="/projects"
                        className="text-primary hover:text-white transition-colors flex items-center gap-2 font-semibold pb-1 border-b border-primary/20"
                    >
                        View All Projects
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

                <Carousel>
                    {ALL_PROJECTS.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </Carousel>
            </div>
        </section>
    );
}
