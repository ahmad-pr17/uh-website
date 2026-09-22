import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
    { label, error, id, className, ...props },
    ref
) {
    const textareaId = id || props.name;

    return (
        <div className="space-y-2">
            {label && (
                <label htmlFor={textareaId} className="block text-sm font-medium text-white">
                    {label}
                </label>
            )}
            <textarea
                ref={ref}
                id={textareaId}
                aria-invalid={!!error}
                aria-describedby={error ? `${textareaId}-error` : undefined}
                className={cn(
                    "w-full bg-background border rounded-xl py-4 px-6 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none",
                    error ? "border-destructive" : "border-border",
                    className
                )}
                {...props}
            />
            {error && (
                <p id={`${textareaId}-error`} className="text-sm text-destructive">
                    {error}
                </p>
            )}
        </div>
    );
});
