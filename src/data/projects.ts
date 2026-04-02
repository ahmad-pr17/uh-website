export interface Project {
    id: string;
    slug: string;
    name: string;
    description: string;
    image: string;
    hot?: boolean;
    isDha?: boolean;
    mapUrl?: string; // ilaaqa map slug or full url
}

export const OTHER_PROJECTS: Project[] = [
    {
        id: "union-town",
        slug: "union-town-lahore",
        name: "Union Town Lahore",
        description: "New hot launch by Union Developers on Abdul Sattar Edhi Road. Prime connectivity and high investment potential.",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800",
        hot: true,
        mapUrl: "https://ilaaqa.com/maps/union-town-lahore"
    },
    {
        id: "lahore-smart-city",
        slug: "lahore-smart-city",
        name: "Lahore Smart City",
        description: "The first smart city of Lahore, offering sustainable and tech-driven urban living.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
        hot: true,
        mapUrl: "https://ilaaqa.com/maps/lahore-smart-city"
    },
    {
        id: "dha-multan",
        slug: "dha-multan",
        name: "DHA Multan",
        description: "A prestigious project in the city of saints, offering modern living standards and high investment returns.",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800",
        hot: true,
        mapUrl: "https://ilaaqa.com/maps/dha-multan"
    },
    {
        id: "dha-gujranwala",
        slug: "dha-gujranwala",
        name: "DHA Gujranwala",
        description: "Developing a world-class lifestyle in Gujranwala with state-of-the-art infrastructure.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
        hot: true,
        mapUrl: "https://ilaaqa.com/maps/dha-gujranwala"
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
        mapUrl: "https://ilaaqa.com/maps/dha-phase-1-lahore"
    },
    {
        id: "dha-p2",
        slug: "phase-2",
        name: "DHA Phase 2",
        description: "Six highly developed sectors next to Phase 1. Fully finished and populated area near LUMS.",
        image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800",
        isDha: true,
        mapUrl: "https://ilaaqa.com/maps/dha-phase-2-lahore"
    },
    {
        id: "dha-p3",
        slug: "phase-3",
        name: "DHA Phase 3",
        description: "Located between Khayaban-e-Jinnah and Ferozpur Road. Includes famous sectors like Y and Z.",
        image: "https://images.unsplash.com/photo-1460317442991-0ec239f33649?auto=format&fit=crop&q=80&w=800",
        isDha: true,
        mapUrl: "https://ilaaqa.com/maps/dha-phase-3-lahore"
    },
    {
        id: "dha-p4",
        slug: "phase-4",
        name: "DHA Phase 4",
        description: "Near Ghazi Road and Lahore Ring Road. Features sectors AA to JJ with comprehensive planning.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
        isDha: true,
        mapUrl: "https://ilaaqa.com/maps/dha-phase-4-lahore"
    },
    {
        id: "dha-p5",
        slug: "phase-5",
        name: "DHA Phase 5",
        description: "Famous for underground electricity and wide roads. Top choice for modern construction.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
        isDha: true,
        mapUrl: "https://ilaaqa.com/maps/dha-phase-5-lahore"
    },
    {
        id: "dha-p6",
        slug: "phase-6",
        name: "DHA Phase 6",
        description: "The best-planned phase with golf club and major shopping malls like Dolmen Square.",
        image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800",
        isDha: true,
        mapUrl: "https://ilaaqa.com/maps/dha-phase-6-lahore"
    },
    {
        id: "dha-p7",
        slug: "phase-7",
        name: "DHA Phase 7",
        description: "Perfectly situated prominent area near BRB canal. Modest prices attracting many investors.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
        isDha: true,
        hot: true,
        mapUrl: "https://ilaaqa.com/maps/dha-phase-7-lahore"
    },
    {
        id: "dha-p8",
        slug: "phase-8",
        name: "DHA Phase 8",
        description: "Main entrance from Airport. Includes Park View, Air Avenue, and IVY Green.",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800",
        isDha: true,
        mapUrl: "https://ilaaqa.com/maps/dha-phase-8-lahore"
    },
    {
        id: "dha-p9-prism",
        slug: "phase-9-prism",
        name: "DHA Phase 9 Prism",
        description: "Over 44,000 kanals with 9 main entrances. The future of modern living in Lahore.",
        image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800",
        isDha: true,
        hot: true,
        mapUrl: "https://ilaaqa.com/maps/dha-phase-9-prism"
    },
    {
        id: "dha-p9-town",
        slug: "phase-9-town",
        name: "DHA Phase 9 Town",
        description: "Also known as Shuhda Town. Highly attractive location between Phase 6 and Phase 9 Prism.",
        image: "https://images.unsplash.com/photo-1460317442991-0ec239f33649?auto=format&fit=crop&q=80&w=800",
        isDha: true,
        mapUrl: "https://ilaaqa.com/maps/dha-phase-9-town-lahore"
    },
    {
        id: "dha-p10",
        slug: "phase-10",
        name: "DHA Phase 10",
        description: "Highly anticipated future project. Secure your future with DHA Phase 10 files.",
        image: "https://images.unsplash.com/photo-1460317442991-0ec239f33649?auto=format&fit=crop&q=80&w=800",
        isDha: true,
        mapUrl: "https://ilaaqa.com/maps/dha-phase-10-files"
    },
    {
        id: "dha-rahbar",
        slug: "rahbar",
        name: "DHA Rahbar (Phase 11)",
        description: "Located on Defence Road. Gained huge importance with Ring Road Interchange connectivity.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
        isDha: true,
        mapUrl: "https://ilaaqa.com/maps/dha-phase-11-rahbar-lahore"
    }
];

export const ALL_PROJECTS = [...OTHER_PROJECTS, ...DHA_PROJECTS];
