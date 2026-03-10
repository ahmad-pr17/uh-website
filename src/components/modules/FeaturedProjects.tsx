import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
    {
        name: "Union Town Lahore",
        description: "New hot launch by Union Developers on Abdul Sattar Edhi Road. Prime connectivity and high investment potential.",
        href: "/projects/union-town-lahore",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800",
        hot: true,
    },
    {
        name: "DHA Phase 7",
        description: "Premium residential and commercial plots in one of the most developed phases of DHA Lahore.",
        href: "/projects/dha-phase-7",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
        hot: true,
    },
    {
        name: "DHA Phase 9 Prism",
        description: "The next big investment hub in Lahore with state-of-the-art infrastructure and modern living.",
        href: "/projects/dha-phase-9-prism",
        image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800",
        hot: true,
    },
    {
        name: "DHA Phase 10",
        description: "Secure your future with files in the highly anticipated DHA Phase 10 Lahore.",
        href: "/projects/dha-phase-10",
        image: "https://images.unsplash.com/photo-1460317442991-0ec239f33649?auto=format&fit=crop&q=80&w=800",
        hot: false,
    },
    {
        name: "Lahore Smart City",
        description: "The first smart city of Lahore, offering sustainable and tech-driven urban living.",
        href: "/projects/lahore-smart-city",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
        hot: true,
    },
];

export default function FeaturedProjects() {
    return (
        <section className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
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
                {PROJECTS.map((project, index) => (
                    <Link
                        key={project.name}
                        href={project.href}
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
                ))}
            </div>
        </section>
    );
}
