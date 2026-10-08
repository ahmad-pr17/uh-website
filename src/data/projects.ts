export interface Project {
    id: string;
    slug: string;
    name: string;
    description: string;
    image: string;
    hot?: boolean;
    mapUrl?: string; // ilaaqa map slug or full url
    tag?: string; // short standout stat shown as an eyebrow on project cards
}

export function projectHref(project: Project): string {
    return `/projects/${project.slug}`;
}

export const ALL_PROJECTS: Project[] = [
    {
        id: "union-town",
        slug: "union-town-lahore",
        name: "Union Town Lahore",
        description: "New hot launch by Union Developers on Abdul Sattar Edhi Road. Prime connectivity and high investment potential.",
        image: "/union-town-hero.jpg",
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
        id: "union-greens",
        slug: "union-greens",
        name: "Union Greens",
        description: "Affordable gated communities by Union Developers: Phase II on Pine Avenue with 3, 5 & 10 Marla plots, and fully delivered Phase I on College Road.",
        image: "/union-greens/community.jpg",
        mapUrl: "https://ilaaqa.com/maps/union-greens-lahore",
        tag: "Phase II on Pine Avenue"
    },
];

// Kept as an alias so older imports keep working.
export const OTHER_PROJECTS = ALL_PROJECTS;
