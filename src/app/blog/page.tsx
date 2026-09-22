import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function BlogPage() {
    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="space-y-4 mb-16 text-center">
                    <Eyebrow>Property Insights</Eyebrow>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Market News & Updates</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {BLOG_POSTS.map((post) => (
                        <div key={post.slug} className="group flex flex-col md:flex-row bg-secondary/20 rounded-3xl border border-border overflow-hidden hover:border-primary/30 transition-all">
                            <div className="md:w-1/2 aspect-video md:aspect-auto relative overflow-hidden">
                                <div
                                    role="img"
                                    aria-label={post.title}
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
                                    <h2 className="text-2xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
                                        {post.title}
                                    </h2>
                                    <p className="text-muted-foreground line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                </div>
                                <Link href={`/blog/${post.slug}`} className="mt-6 flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
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
