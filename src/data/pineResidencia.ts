// Pine Residencia (Union Town, A Block) — figures transcribed from the project flyer; confirm before launch.

export const PINE_HREF = "/projects/pine-residencia";

export const PINE_BOOKING_FROM = 1_500_000;

export const PINE_QUARTERLY_COUNT = 8;
export const PINE_YEARLY_COUNT = 2;

// 2.5 year plan: booking + after 45 days + 8 quarterly + 2 yearly + possession.
export const PINE_PLAN = [
    { floor: "Ground Floor", amount: 12_500_000, booking: 2_000_000, after45: 2_700_000, quarterly: 500_000, yearly: 1_000_000, possession: 1_800_000 },
    { floor: "First Floor", amount: 11_500_000, booking: 1_500_000, after45: 2_700_000, quarterly: 450_000, yearly: 1_000_000, possession: 1_700_000 },
    { floor: "Second Floor", amount: 10_500_000, booking: 1_500_000, after45: 1_900_000, quarterly: 425_000, yearly: 1_000_000, possession: 1_700_000 },
] as const;

export const PINE_DISCOUNTS = [
    { pct: "10%", text: "Discount on 100% payment (excluding down payment)" },
    { pct: "5%", text: "Discount on 50% payment (excluding down payment)" },
];

export const PINE_CATEGORY_FACTORS = [
    { pct: "+10%", text: "Park-facing units" },
    { pct: "+10%", text: "Corner units" },
    { pct: "+15%", text: "Park-facing + corner units" },
];
