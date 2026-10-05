import { ArrowRight } from "lucide-react";
import { ALL_PROJECTS, projectHref } from "@/data/projects";
import { Button } from "@/components/ui/Button";

// Swap this id to feature a different project on the home page.
const FEATURED_PROJECT_ID = "union-town";

export default function FeaturedShowcase() {
    const project = ALL_PROJECTS.find((p) => p.id === FEATURED_PROJECT_ID);
    if (!project) return null;

    return (
        <section className="container mx-auto px-4 md:px-6">
            <div
                className="group relative h-[70vh] min-h-[480px] overflow-hidden rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-2xl rounded-bl-2xl border border-primary/20 shadow-2xl shadow-primary/5 transition-transform duration-700 ease-out [transform-style:preserve-3d] hover:[transform:perspective(1400px)_rotateX(1deg)]"
            >
                <div
                    role="img"
                    aria-label={project.name}
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

                <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-16 space-y-6 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="px-4 py-1.5 bg-primary text-black text-xs font-bold uppercase tracking-widest rounded-full">
                            Current Project
                        </span>
                        {project.tag && (
                            <p className="text-primary text-xs font-bold uppercase tracking-[0.3em]">
                                ( {project.tag} )
                            </p>
                        )}
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                        {project.name}
                    </h2>
                    <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["3 Marla", "5 Marla", "10 Marla", "1 Kanal"].map((size) => (
                            <span key={size} className="px-3 py-1 text-xs font-semibold text-white bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
                                {size}
                            </span>
                        ))}
                        <span className="px-3 py-1 text-xs font-semibold text-primary bg-primary/10 border border-primary/30 rounded-full">
                            Easy Installment Plans
                        </span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <Button href={projectHref(project)} className="group/btn">
                            Plots, Plans &amp; Virtual Tour
                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                        <Button href="/projects" variant="outline">
                            View All Projects
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
