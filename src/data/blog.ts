export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string[];
    date: string;
    author: string;
    time: string;
    image: string;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: "dha-phase-10-lahore-development-updates",
        title: "DHA Phase 10 Lahore Development Updates",
        excerpt: "The latest construction and balloting updates for the highly anticipated DHA Phase 10...",
        content: [
            "DHA Phase 10 continues to be one of the most highly anticipated launches in Lahore's real estate market. Development authorities have been progressing on the core infrastructure, with survey and file-issuance activity picking up pace over recent months.",
            "For investors, the appeal of Phase 10 lies in getting in early on a DHA-backed development, following the same pattern of long-term appreciation seen in earlier phases like Phase 8 and Phase 9 Prism.",
            "As with any pre-launch project, file prices and balloting timelines can shift. Our consultants track official DHA announcements closely and can walk you through current file availability, verified pricing, and what to expect at each stage of development.",
        ],
        date: "Feb 24, 2026",
        author: "Universal Admin",
        time: "5 min read",
        image: "https://images.unsplash.com/photo-1590608897129-79da98d15969?auto=format&fit=crop&q=80&w=800",
    },
    {
        slug: "why-invest-in-dha-multan-now",
        title: "Why Invest in DHA Multan Now?",
        excerpt: "Analyzing market trends and price appreciation in DHA Multan sectors for 2026...",
        content: [
            "DHA Multan has seen steady sector development and growing demand from both local and overseas investors looking to diversify beyond Lahore and Islamabad.",
            "Price appreciation across developed sectors has outpaced several comparable housing schemes in the region, driven by improving infrastructure and DHA's established brand for secure titles and planned development.",
            "If you're weighing DHA Multan against other options, our team can share sector-by-sector comparisons, current asking prices, and guidance on which blocks offer the strongest combination of value and livability today.",
        ],
        date: "Feb 20, 2026",
        author: "Zain Ali",
        time: "8 min read",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800",
    },
];
