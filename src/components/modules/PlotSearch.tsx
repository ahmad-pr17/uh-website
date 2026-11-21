"use client";

import { useState, type FormEvent } from "react";
import { MapPin, Search } from "lucide-react";
import type { MapFocus } from "./LeafletMap";

// Plot positions were read off the society map with OCR (see scripts/plot-index/), so a few
// plots may be missing or misread, and block names are a best guess from the map's layout.
// Each plot is [number, blockIndex, type (0 residential, 1 commercial), lat, lng].
export type PlotIndex = { blocks: string[]; plots: [string, number, number, number, number][] };

const ALL_BLOCKS = -1;

// "Plot # 12-a" -> "12A", matching how numbers are stored in the index.
function normalizePlot(value: string) {
    return value.toUpperCase().replace(/PLOT|NO\.?|#/g, "").replace(/[^0-9A-Z]/g, "");
}

interface PlotSearchProps {
    loadIndex: () => Promise<PlotIndex>;
    onFound: (focus: MapFocus) => void;
}

export default function PlotSearch({ loadIndex, onFound }: PlotSearchProps) {
    const [index, setIndex] = useState<PlotIndex | null>(null);
    const [block, setBlock] = useState(ALL_BLOCKS);
    const [plot, setPlot] = useState("");
    const [results, setResults] = useState<MapFocus[] | null>(null);

    // The index is only fetched once someone starts using the search.
    const ensureIndex = async () => {
        if (index) return index;
        const loaded = await loadIndex();
        setIndex(loaded);
        return loaded;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = await ensureIndex();
        const key = normalizePlot(plot);
        if (!key) return;
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
        const labelled = matches.map((m) => {
            const total = counts.get(m.label) ?? 1;
            if (total === 1) return m;
            const n = (seen.get(m.label) ?? 0) + 1;
            seen.set(m.label, n);
            return { ...m, label: `${m.label} (${n} of ${total})` };
        });
        setResults(labelled);
        if (labelled.length === 1) onFound(labelled[0]);
    };

    return (
        <div className="space-y-3">
            <form onSubmit={handleSubmit} onFocus={ensureIndex} className="space-y-3">
                <h3 className="text-white font-bold flex items-center gap-2">
                    <Search className="w-4 h-4 text-primary" />
                    Find a Plot
                </h3>
                <select
                    value={block}
                    onChange={(e) => setBlock(Number(e.target.value))}
                    aria-label="Block"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50"
                >
                    <option value={ALL_BLOCKS} className="bg-background">All blocks</option>
                    {index?.blocks.map((b, i) => (
                        <option key={b} value={i} className="bg-background">{b}</option>
                    ))}
                </select>
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={plot}
                        onChange={(e) => setPlot(e.target.value)}
                        placeholder="Plot number, e.g. 141"
                        aria-label="Plot number"
                        className="min-w-0 flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
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
                    {results.map((r) => (
                        <button
                            key={`${r.lat},${r.lng}`}
                            type="button"
                            onClick={() => onFound(r)}
                            className="w-full flex items-center gap-2 text-left px-3 py-2 rounded-lg text-xs text-muted-foreground hover:bg-white/5 hover:text-white transition-colors"
                        >
                            <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                            {r.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
