import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    { label, error, icon, id, className, ...props },
    ref
) {
    const inputId = id || props.name;

    return (
        <div className="space-y-2">
            {label && (
                <label htmlFor={inputId} className="block text-sm font-medium text-white">
                    {label}
                </label>
            )}
            <div className="relative">
                {icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
                        {icon}
                    </div>
                )}
                <input
                    ref={ref}
                    id={inputId}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${inputId}-error` : undefined}
                    className={cn(
                        "w-full bg-background border rounded-xl py-4 px-6 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors",
                        icon && "pl-10",
                        error ? "border-destructive" : "border-border",
                        className
                    )}
                    {...props}
                />
            </div>
            {error && (
                <p id={`${inputId}-error`} className="text-sm text-destructive">
                    {error}
                </p>
            )}
        </div>
    );
});
