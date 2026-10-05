import { Building2 } from "lucide-react";
import { BRAND } from "@/config/brand";
import { cn } from "@/lib/utils";

export default function BrandLogo({ className }: { className?: string }) {
    return (
        <span className={cn("inline-flex items-center gap-2.5", className)}>
            <span className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6 text-black" />
            </span>
            <span className="flex flex-col leading-none">
                <span className="text-white font-bold text-lg tracking-tight">{BRAND.name}</span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground mt-1">{BRAND.tagline}</span>
            </span>
        </span>
    );
}
