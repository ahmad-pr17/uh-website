export interface Project {
    id: string;
    slug: string;
    name: string;
    description: string;
    image: string;
    hot?: boolean;
    isDha?: boolean;
    mapUrl?: string; // ilaaqa map slug or full url
    tag?: string; // short standout stat shown as an eyebrow on project cards
}

// DHA phases with their own hand-built page (richer content, live map) instead of the generic
// /projects/dha-lahore/[slug] template. Keep in sync with the folders under src/app/projects/.
const DEDICATED_DHA_PAGES = new Set(["phase-7", "phase-9-prism", "phase-10"]);

export function projectHref(project: Project): string {
    if (!project.isDha) return `/projects/${project.slug}`;
    if (DEDICATED_DHA_PAGES.has(project.slug)) return `/projects/dha-${project.slug}`;
    return `/projects/dha-lahore/${project.slug}`;
}

export const OTHER_PROJECTS: Project[] = [
    {
        id: "union-town",
        slug: "union-town-lahore",
        name: "Union Town Lahore",
        description: "New hot launch by Union Developers on Abdul Sattar Edhi Road. Prime connectivity and high investment potential.",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800",
        hot: true,
        mapUrl: "https://ilaaqa.com/maps/union-town-lahore",
        tag: "Prime Connectivity"
    },
    {
        id: "pine-residencia",
        slug: "pine-residencia",
        name: "Pine Residencia — Union Town",
        description: "2-BHK apartments in Union Town A Block on Pine Avenue. Booking from PKR 15 Lakh on a 2.5-year installment plan.",
        image: "/pine-residencia-building.jpg",
        hot: true,
        tag: "2-BHK Apartments"
    },
    {
        id: "lahore-smart-city",
        slug: "lahore-smart-city",
        name: "Lahore Smart City",
        description: "The first smart city of Lahore, offering sustainable and tech-driven urban living.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
        hot: true,
        mapUrl: "https://ilaaqa.com/maps/lahore-smart-city",
        tag: "Tech-Driven Living"
    },
    {
        id: "dha-multan",
        slug: "dha-multan",
        name: "DHA Multan",
        description: "A prestigious project in the city of saints, offering modern living standards and high investment returns.",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800",
        hot: true,
        mapUrl: "https://ilaaqa.com/maps/dha-multan",
        tag: "High Investment Returns"
    },
    {
        id: "dha-gujranwala",
        slug: "dha-gujranwala",
        name: "DHA Gujranwala",
        description: "Developing a world-class lifestyle in Gujranwala with state-of-the-art infrastructure.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
        hot: true,
        mapUrl: "https://ilaaqa.com/maps/dha-gujranwala",
        tag: "World-Class Infrastructure"
    }
];

export const DHA_PROJECTS: Project[] = [
    {
        id: "dha-p1",
        slug: "phase-1",
        name: "DHA Phase 1",
        description: "One of DHA’s first projects. Prime location connecting Defense Chowk, Ghazi Road, and more.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
        isDha: true,
        mapUrl: "https://ilaaqa.com/maps/dha-phase-1-lahore",
        tag: "Near Defence Chowk"
    },
    {
        id: "dha-p2",
        slug: "phase-2",
        name: "DHA Phase 2",
        description: "Six highly developed sectors next to Phase 1. Fully finished and populated area near LUMS.",
        image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800",
        isDha: true,
        mapUrl: "https://ilaaqa.com/maps/dha-phase-2-lahore",
        tag: "Near LUMS"
    },
    {
        id: "dha-p3",
        slug: "phase-3",
        name: "DHA Phase 3",
        description: "Located between Khayaban-e-Jinnah and Ferozpur Road. Includes famous sectors like Y and Z.",
        image: "https://images.unsplash.com/photo-1460317442991-0ec239f33649?auto=format&fit=crop&q=80&w=800",
        isDha: true,
        mapUrl: "https://ilaaqa.com/maps/dha-phase-3-lahore",
        tag: "Sectors Y & Z"
    },
    {
        id: "dha-p4",
        slug: "phase-4",
        name: "DHA Phase 4",
        description: "Near Ghazi Road and Lahore Ring Road. Features sectors AA to JJ with comprehensive planning.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
        isDha: true,
        mapUrl: "https://ilaaqa.com/maps/dha-phase-4-lahore",
        tag: "Sectors AA–JJ"
    },
    {
        id: "dha-p5",
        slug: "phase-5",
        name: "DHA Phase 5",
        description: "Famous for underground electricity and wide roads. Top choice for modern construction.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
        isDha: true,
        mapUrl: "https://ilaaqa.com/maps/dha-phase-5-lahore",
        tag: "Underground Electricity"
    },
    {
        id: "dha-p6",
        slug: "phase-6",
        name: "DHA Phase 6",
        description: "The best-planned phase with golf club and major shopping malls like Dolmen Square.",
        image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800",
        isDha: true,
        mapUrl: "https://ilaaqa.com/maps/dha-phase-6-lahore",
        tag: "Golf Club & Dolmen Square"
    },
    {
        id: "dha-p7",
        slug: "phase-7",
        name: "DHA Phase 7",
        description: "Perfectly situated prominent area near BRB canal. Modest prices attracting many investors.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
        isDha: true,
        hot: true,
        mapUrl: "https://ilaaqa.com/maps/dha-phase-7-lahore",
        tag: "Near BRB Canal"
    },
    {
        id: "dha-p8",
        slug: "phase-8",
        name: "DHA Phase 8",
        description: "Main entrance from Airport. Includes Park View, Air Avenue, and IVY Green.",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800",
        isDha: true,
        mapUrl: "https://ilaaqa.com/maps/dha-phase-8-lahore",
        tag: "Airport Entrance"
    },
    {
        id: "dha-p9-prism",
        slug: "phase-9-prism",
        name: "DHA Phase 9 Prism",
        description: "Over 44,000 kanals with 9 main entrances. The future of modern living in Lahore.",
        image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800",
        isDha: true,
        hot: true,
        mapUrl: "https://ilaaqa.com/maps/dha-phase-9-prism-lahore",
        tag: "44,000+ Kanals"
    },
    {
        id: "dha-p9-town",
        slug: "phase-9-town",
        name: "DHA Phase 9 Town",
        description: "Also known as Shuhda Town. Highly attractive location between Phase 6 and Phase 9 Prism.",
        image: "https://images.unsplash.com/photo-1460317442991-0ec239f33649?auto=format&fit=crop&q=80&w=800",
        isDha: true,
        mapUrl: "https://ilaaqa.com/maps/dha-phase-9-town-lahore",
        tag: "Between Phase 6 & 9"
    },
    {
        id: "dha-p10",
        slug: "phase-10",
        name: "DHA Phase 10",
        description: "Highly anticipated future project. Secure your future with DHA Phase 10 files.",
        image: "https://images.unsplash.com/photo-1460317442991-0ec239f33649?auto=format&fit=crop&q=80&w=800",
        isDha: true,
        mapUrl: "https://ilaaqa.com/maps/dha-phase-10-files",
        tag: "300ft Main Boulevards"
    },
    {
        id: "dha-rahbar",
        slug: "rahbar",
        name: "DHA Rahbar (Phase 11)",
        description: "Located on Defence Road. Gained huge importance with Ring Road Interchange connectivity.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
        isDha: true,
        mapUrl: "https://ilaaqa.com/maps/dha-phase-11-rahbar-lahore",
        tag: "Ring Road Interchange"
    }
];

export const ALL_PROJECTS = [...OTHER_PROJECTS, ...DHA_PROJECTS];
