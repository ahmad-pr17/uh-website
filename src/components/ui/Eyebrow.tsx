import { cn } from "@/lib/utils";

interface EyebrowProps {
    children: React.ReactNode;
    className?: string;
    as?: "p" | "span";
}

export function Eyebrow({ children, className, as: Tag = "p" }: EyebrowProps) {
    return (
        <Tag className={cn("text-primary font-bold tracking-widest uppercase text-sm", className)}>
            <span className="opacity-60 mr-1">(</span>
            {children}
            <span className="opacity-60 ml-1">)</span>
        </Tag>
    );
}
