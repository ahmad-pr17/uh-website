import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";

export function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) notFound();

    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm font-semibold">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Market News
                </Link>

                <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest font-bold">
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.time}</span>
                        <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {post.author}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{post.title}</h1>
                </div>

                <div
                    role="img"
                    aria-label={post.title}
                    className="aspect-video rounded-3xl border border-border bg-cover bg-center mb-10"
                    style={{ backgroundImage: `url('${post.image}')` }}
                />

                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                    {post.content.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                </div>

                <div className="mt-12 p-6 bg-secondary/30 rounded-2xl border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-white font-semibold">Have questions about this project?</p>
                    <Link href="/contact" className="px-6 py-3 bg-primary text-black font-bold rounded-xl hover:bg-white transition-all shrink-0">
                        Talk to a Consultant
                    </Link>
                </div>
            </div>
        </div>
    );
}
