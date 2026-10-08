"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

export default function ThemeToggle({ className }: { className?: string }) {
    const [theme, setTheme] = useState<Theme | null>(null);

    // The inline script in layout.tsx has already set the class; just read it back.
    useEffect(() => {
        setTheme(document.documentElement.classList.contains("light") ? "light" : "dark");
    }, []);

    const toggle = () => {
        const next: Theme = theme === "light" ? "dark" : "light";
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(next);
        try {
            localStorage.setItem("theme", next);
        } catch {
            // storage unavailable (private mode) — the choice just won't persist
        }
        setTheme(next);
    };

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            className={
                "w-10 h-10 rounded-full flex items-center justify-center border border-border bg-secondary/40 text-foreground hover:border-primary/50 transition-colors " +
                (className ?? "")
            }
        >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-primary" />}
        </button>
    );
}
