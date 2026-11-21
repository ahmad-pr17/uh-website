"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import PlotSearch, { loadUnionTownPlots } from "@/components/modules/PlotSearch";
import type { MapFocus } from "@/components/modules/LeafletMap";

const IlaaqaMap = dynamic(() => import("@/components/modules/IlaaqaMap"), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-secondary/10 animate-pulse rounded-3xl" />,
});

const UNION_TOWN_MAP_URL = "https://ilaaqa.com/maps/union-town-lahore";

// The Union Town plot map with "Find a Plot" above it: searching flies the map to the plot.
export default function UnionTownPlotMap() {
    const [focus, setFocus] = useState<MapFocus | null>(null);

    return (
        <div className="space-y-4">
            <div className="p-4 md:p-5 bg-secondary/30 rounded-2xl border border-border">
                <PlotSearch layout="inline" loadIndex={loadUnionTownPlots} onFound={setFocus} />
            </div>
            <div className="w-full h-[600px] rounded-3xl overflow-hidden border border-primary/20 shadow-2xl bg-black/40">
                <IlaaqaMap mapUrl={UNION_TOWN_MAP_URL} projectName="Union Town Lahore" focus={focus} />
            </div>
        </div>
    );
}
