// Union Town pricing + plan data shared by the home page and the project page.
// NOTE: figures were transcribed from the investandown.pk Union Town listing (Oct 2026) and must be
// confirmed against Union Developers' current price list before launch.

export const UNION_TOWN_HREF = "/projects/union-town-lahore";

export const STARTING_PRICE = 3_995_000;

export const RESIDENTIAL_PLOTS = [
    { marla: 3, price: null },
    { marla: 5, price: 12_495_000 },
    { marla: 10, price: 25_995_000 },
    { marla: 20, price: 45_995_000 },
] as const;

export const COMMERCIAL_SIZES = [2, 4, 6, 8, 10] as const;

// 2.5-year commercial plan: down payment + 8 quarterly installments + 1 yearly + on possession.
export const COMMERCIAL_PLAN = [
    { label: "6 Marla", down: 15_995_000, quarterly: 4_250_000, yearly: 8_750_000, possession: 8_750_000 },
    { label: "8 Marla", down: 39_995_000, quarterly: 9_950_000, yearly: 24_950_000, possession: 24_950_000 },
    { label: "10 Marla", down: 36_495_000, quarterly: 7_500_000, yearly: 16_750_000, possession: 16_750_000 },
    { label: "10 Marla", sub: "Main Blvd — Abdul Sattar Edhi Rd", down: 48_495_000, quarterly: 10_000_000, yearly: 30_750_000, possession: 30_750_000 },
    { label: "10 Marla", sub: "Main Blvd — Pine Avenue", down: 49_995_000, quarterly: 10_500_000, yearly: 33_000_000, possession: 33_000_000 },
];

export const QUARTERLY_COUNT = 8;

export const planTotal = (p: (typeof COMMERCIAL_PLAN)[number]) =>
    p.down + p.quarterly * QUARTERLY_COUNT + p.yearly + p.possession;

export const formatPkr = (n: number) => `PKR ${n.toLocaleString("en-US")}`;
