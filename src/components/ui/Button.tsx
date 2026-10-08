import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const VARIANT_STYLES = {
    primary: "bg-primary text-black hover:bg-[#ffffff]",
    outline: "bg-white/10 text-white border border-white/20 hover:bg-[#ffffff]/20",
    ghost: "bg-white/5 text-white border border-border hover:bg-[#ffffff]/10",
} as const;

const SIZE_STYLES = {
    md: "px-6 py-3 text-sm rounded-xl gap-2",
    lg: "px-8 py-4 text-base rounded-full gap-2",
} as const;

type ButtonVariant = keyof typeof VARIANT_STYLES;
type ButtonSize = keyof typeof SIZE_STYLES;

const baseStyles =
    "inline-flex items-center justify-center font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

interface SharedProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    loading?: boolean;
    children: React.ReactNode;
}

type ButtonAsButton = SharedProps &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps> & {
        href?: undefined;
    };

type ButtonAsLink = SharedProps & {
    href: string;
    external?: boolean;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    { variant = "primary", size = "lg", className, loading, children, ...props },
    ref
) {
    const classes = cn(baseStyles, VARIANT_STYLES[variant], SIZE_STYLES[size], className);

    if ("href" in props && props.href) {
        const { href, external, ...rest } = props as ButtonAsLink;
        if (external) {
            return (
                <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
                    {children}
                </a>
            );
        }
        return (
            <Link href={href} className={classes} {...rest}>
                {children}
            </Link>
        );
    }

    const { disabled, ...rest } = props as ButtonAsButton;
    return (
        <button ref={ref} className={classes} disabled={disabled || loading} {...rest}>
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {children}
        </button>
    );
});
