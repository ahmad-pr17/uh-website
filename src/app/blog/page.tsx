import Link from "next/link";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";

const POSTS = [
    {
        title: "DHA Phase 10 Lahore Development Updates",
        excerpt: "The latest construction and balloting updates for the highly anticipated DHA Phase 10...",
        date: "Feb 24, 2026",
        author: "Universal Admin",
        time: "5 min read",
        image: "https://images.unsplash.com/photo-1590608897129-79da98d15969?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Why Invest in DHA Multan Now?",
        excerpt: "Analyzing market trends and price appreciation in DHA Multan sectors for 2026...",
        date: "Feb 20, 2026",
        author: "Zain Ali",
        time: "8 min read",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800",
    },
];

export default function BlogPage() {
    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="space-y-4 mb-16 text-center">
                    <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Property Insights</h2>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Market News & Updates</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {POSTS.map((post) => (
                        <div key={post.title} className="group flex flex-col md:flex-row bg-secondary/20 rounded-3xl border border-border overflow-hidden hover:border-primary/30 transition-all">
                            <div className="md:w-1/2 aspect-video md:aspect-auto relative overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url('${post.image}')` }}
                                />
                            </div>
                            <div className="md:w-1/2 p-8 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.time}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted-foreground line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                </div>
                                <Link href="#" className="mt-6 flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                                    Read Full Article
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
