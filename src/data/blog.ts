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
        slug: "pine-residencia-2-bhk-payment-plan-explained",
        title: "Pine Residencia: The 2-BHK Payment Plan Explained",
        excerpt: "A simple walk-through of the 2.5-year installment plan, floor pricing and discounts for Pine Residencia in Union Town...",
        content: [
            "Pine Residencia is a 2-BHK apartment development in Union Town's A Block on Pine Avenue, with booking starting from PKR 15 Lakh. Units are priced by floor: PKR 1.25 Crore on the ground floor, PKR 1.15 Crore on the first floor and PKR 1.05 Crore on the second floor.",
            "The plan runs over two and a half years: a booking amount, a second payment after 45 days, eight quarterly installments, two yearly installments and a final payment on possession. Park-facing and corner units carry a category premium of 10%, or 15% when a unit is both.",
            "Buyers who pay in full can claim a 10% discount on the amount excluding the down payment, and a 5% discount applies when 50% is paid up front. Our consultants can walk you through the exact schedule for the floor you prefer.",
        ],
        date: "Oct 8, 2026",
        author: "Editorial Team",
        time: "4 min read",
        image: "/pine-residencia-building.jpg",
    },
    {
        slug: "union-greens-phase-2-what-to-know",
        title: "Union Greens Phase II: What to Know Before You Book",
        excerpt: "Plot sizes, installments and location details for Union Greens Phase II on Pine Avenue...",
        content: [
            "Union Greens Phase II sits on Pine Avenue and follows the success of Phase I on College Road. It is an on-ground, gated community with underground utilities, 24/7 security, parks, walking tracks and a Jamia mosque, plus a commercial boulevard along its 100-foot main road.",
            "Residential plots are available in 3, 5 and 10 Marla, with 2 Marla commercial plots. On the published plan, a 3 Marla plot is PKR 5,195,000 in total and a 5 Marla plot is PKR 8,995,000, each paid as a down payment followed by ten quarterly installments.",
            "The location is a big part of the appeal: about 2 minutes from the Lahore Ring Road and roughly 8 minutes from the M2 Motorway, Canal Road and Shaukat Khanum Hospital. Talk to our team to confirm current availability and pricing.",
        ],
        date: "Oct 5, 2026",
        author: "Editorial Team",
        time: "4 min read",
        image: "/union-greens/community.jpg",
    },
    {
        slug: "why-union-town-lahore-is-the-current-hot-project",
        title: "Why Union Town Lahore Is the Hot Project Right Now",
        excerpt: "Location, plot sizes and a 2.5-year commercial plan: a quick look at what Union Town offers buyers and investors...",
        content: [
            "Union Town sits at the junction of Abdul Sattar Edhi Road and Pine Avenue, about 3 minutes from the M2 Motorway and 8 minutes from Canal Road. It offers residential plots in 3, 5, 10 and 20 Marla and commercial plots from 2 to 10 Marla.",
            "Residential prices start with the 5 Marla plot at PKR 1.245 Crore, and commercial buyers can use a 2.5-year plan with a down payment, eight quarterly installments, a yearly installment and a final payment on possession.",
            "You can explore the project from home: our Union Town page includes a 360° virtual tour, the interactive plot layout and the official master plan.",
        ],
        date: "Oct 1, 2026",
        author: "Editorial Team",
        time: "3 min read",
        image: "/union-town-hero.jpg",
    },
];
