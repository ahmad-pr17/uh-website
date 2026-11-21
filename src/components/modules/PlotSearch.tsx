"use client";

import { useEffect, useState, type FormEvent } from "react";
import { MapPin, Search } from "lucide-react";
import type { MapFocus } from "./LeafletMap";

// Plot positions were read off the society map with OCR (see scripts/plot-index/), so a few
// plots may be missing or misread. Block names come from the official Union Town master plan.
// Each plot is [number, blockIndex, type (0 residential, 1 commercial), lat, lng].
export type PlotIndex = { blocks: string[]; plots: [string, number, number, number, number][] };

// Loaded on demand so the ~100 KB plot list isn't part of every page's bundle.
export const loadUnionTownPlots = () =>
    import("@/data/unionTownPlots.json").then((m) => m.default as PlotIndex);

const ALL_BLOCKS = -1;

// "Plot # 12-a" -> "12A", matching how numbers are stored in the index.
function normalizePlot(value: string) {
    return value.toUpperCase().replace(/PLOT|NO\.?|#/g, "").replace(/[^0-9A-Z]/g, "");
}

function findPlots(data: PlotIndex, plot: string, block: number): MapFocus[] {
    const key = normalizePlot(plot);
    if (!key) return [];
    const matches = data.plots
        .filter(([num, b]) => num === key && (block === ALL_BLOCKS || b === block))
        .map(([num, b, type, lat, lng]) => ({
            lat,
            lng,
            label: `${data.blocks[b]} · ${type ? "Commercial" : "Residential"} Plot ${num}`,
        }));
    // Tell apart plots that share block, type and number (the map reuses numbers within an area).
    const counts = new Map<string, number>();
    matches.forEach((m) => counts.set(m.label, (counts.get(m.label) ?? 0) + 1));
    const seen = new Map<string, number>();
    return matches.map((m) => {
        const total = counts.get(m.label) ?? 1;
        if (total === 1) return m;
        const n = (seen.get(m.label) ?? 0) + 1;
        seen.set(m.label, n);
        return { ...m, label: `${m.label} (${n} of ${total})` };
    });
}

interface PlotSearchProps {
    loadIndex: () => Promise<PlotIndex>;
    onFound: (focus: MapFocus) => void;
    /** "inline" lays the controls out in one row (for use above a map); "stacked" suits a sidebar. */
    layout?: "stacked" | "inline";
    /** A plot number to search for as soon as the component mounts (e.g. from the home page). */
    initialPlot?: string;
}

export default function PlotSearch({ loadIndex, onFound, layout = "stacked", initialPlot }: PlotSearchProps) {
    const inline = layout === "inline";
    const [index, setIndex] = useState<PlotIndex | null>(null);
    const [block, setBlock] = useState(ALL_BLOCKS);
    const [plot, setPlot] = useState(initialPlot ?? "");
    const [results, setResults] = useState<MapFocus[] | null>(null);

    // The index is only fetched once someone starts using the search.
    const ensureIndex = async () => {
        if (index) return index;
        const loaded = await loadIndex();
        setIndex(loaded);
        return loaded;
    };

    const search = (data: PlotIndex, value: string, blockIndex: number) => {
        if (!normalizePlot(value)) return;
        const found = findPlots(data, value, blockIndex);
        setResults(found);
        if (found.length === 1) onFound(found[0]);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        search(await ensureIndex(), plot, block);
    };

    // Deep link from the home page: /maps?plot=141 runs the search straight away, once.
    useEffect(() => {
        if (!initialPlot) return;
        let live = true;
        loadIndex().then((data) => {
            if (!live) return;
            setIndex(data);
            search(data, initialPlot, ALL_BLOCKS);
        });
        return () => { live = false; };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialPlot]);

    const control = "bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50";

    return (
        <div className="space-y-3">
            <form
                onSubmit={handleSubmit}
                onFocus={ensureIndex}
                className={inline ? "flex flex-col md:flex-row md:items-center gap-3" : "space-y-3"}
            >
                <h3 className="text-white font-bold flex items-center gap-2 shrink-0">
                    <Search className="w-4 h-4 text-primary" />
                    Find a Plot
                </h3>
                <select
                    value={block}
                    onChange={(e) => setBlock(Number(e.target.value))}
                    aria-label="Block"
                    className={`${control} ${inline ? "md:w-52" : "w-full"}`}
                >
                    <option value={ALL_BLOCKS} className="bg-background">All blocks</option>
                    {index?.blocks.map((b, i) => (
                        <option key={b} value={i} className="bg-background">{b}</option>
                    ))}
                </select>
                <div className="flex gap-2 md:flex-grow">
                    <input
                        type="text"
                        value={plot}
                        onChange={(e) => setPlot(e.target.value)}
                        placeholder="Plot number, e.g. 141"
                        aria-label="Plot number"
                        className={`${control} min-w-0 flex-grow placeholder:text-muted-foreground`}
                    />
                    <button
                        type="submit"
                        className="shrink-0 px-4 py-3 bg-primary text-black font-bold text-sm rounded-xl hover:bg-white transition-colors"
                    >
                        Go
                    </button>
                </div>
            </form>

            {results && results.length === 0 && (
                <p className="text-xs text-red-400">No plot with that number was found. Try another block, or ask our team.</p>
            )}
            {results && results.length > 1 && (
                <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">{results.length} plots have this number. Pick one:</p>
                    <div className={inline ? "flex flex-wrap gap-2" : "space-y-1"}>
                        {results.map((r) => (
                            <button
                                key={`${r.lat},${r.lng}`}
                                type="button"
                                onClick={() => onFound(r)}
                                className={`flex items-center gap-2 text-left px-3 py-2 rounded-lg text-xs text-muted-foreground hover:bg-white/5 hover:text-white transition-colors ${inline ? "border border-white/10" : "w-full"}`}
                            >
                                <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                                {r.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
