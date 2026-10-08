// Union Greens — details sourced from uniondevelopers.com (Phase I and Phase II pages and their payment-plan PDFs).
// Confirm against Union Developers' current price list before launch.

export const UG_HREF = "/projects/union-greens";

export interface UgPlanRow {
    size: string;
    kind: "Residential" | "Commercial";
    down: number;
    installments: number;
    installmentCount: number;
    total: number;
}

export const UG_PHASES = [
    {
        id: "phase-2",
        name: "Phase II",
        status: "Now Selling",
        soldOut: false,
        location: "Pine Avenue, Lahore",
        hero: "/union-greens/phase2-hero.jpg",
        summary:
            "Launched after the strong response to Phase I, Phase II is an on-ground, fully developed community on Pine Avenue with a commercial boulevard along its 100-foot main road.",
        residential: "3, 5 & 10 Marla",
        commercial: "2 Marla",
        amenities: ["Gated community", "24/7 security", "Underground utilities", "Community park", "Commercial zone", "Walking tracks", "Jamia mosque"],
        nearby: [
            { mins: 2, place: "Lahore Ring Road" },
            { mins: 8, place: "M2 Motorway" },
            { mins: 8, place: "Canal Road" },
            { mins: 8, place: "Shaukat Khanum Hospital & UCP" },
            { mins: 15, place: "Allama Iqbal International Airport" },
        ],
        plan: [
            { size: "3 Marla", kind: "Residential", down: 1_949_500, installments: 324_550, installmentCount: 10, total: 5_195_000 },
            { size: "5 Marla", kind: "Residential", down: 3_495_000, installments: 550_000, installmentCount: 10, total: 8_995_000 },
            { size: "2 Marla", kind: "Commercial", down: 5_495_000, installments: 850_000, installmentCount: 10, total: 13_995_000 },
        ] as UgPlanRow[],
        planNote: "10 Marla residential plots are also available — contact our team for the current plan.",
        gallery: ["/union-greens/phase2-aerial.jpg", "/union-greens/commercial.jpg"],
    },
    {
        id: "phase-1",
        name: "Phase I",
        status: "Sold Out",
        soldOut: true,
        location: "College Road, Lahore",
        hero: "/union-greens/phase1-hero.jpg",
        summary:
            "A fully delivered sustainable community on College Road with more than 55% of its area dedicated to green space. Sold out by Union Developers; selected resale opportunities may be available from end buyers.",
        residential: "3 Marla",
        commercial: "2.66 & 4 Marla",
        amenities: ["Gated community", "24/7 security", "Underground utilities", "Jamia mosque", "Kids' play area", "Commercial zone", "Green initiative", "International standard school"],
        nearby: [
            { mins: 4, place: "Evercare Hospital" },
            { mins: 8, place: "Shaukat Khanum Hospital & UCP" },
            { mins: 10, place: "Lahore Ring Road" },
            { mins: 10, place: "Thokar Niaz Baig" },
            { mins: 20, place: "Allama Iqbal International Airport" },
        ],
        plan: [
            { size: "3 Marla", kind: "Residential", down: 2_997_500, installments: 749_375, installmentCount: 4, total: 5_995_000 },
        ] as UgPlanRow[],
        planNote: "Original launch plan, inclusive of development charges. Commercial plots (2.66 & 4 Marla) were also offered.",
        gallery: [
            "/union-greens/gallery-3-3.jpg",
            "/union-greens/gallery-4-3.jpg",
            "/union-greens/gallery-1-2.jpg",
            "/union-greens/gallery-5-3.jpg",
            "/union-greens/gallery-2-3.jpg",
            "/union-greens/gallery-6-3.jpg",
        ],
    },
] as const;
