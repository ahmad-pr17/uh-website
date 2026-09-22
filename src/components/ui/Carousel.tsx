"use client";

import { Children, cloneElement, isValidElement, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps {
    children: React.ReactNode;
    className?: string;
    /** Auto-scrolls right-to-left and loops the content seamlessly. Pauses when the cursor is over the carousel. */
    autoPlay?: boolean;
    /** Auto-scroll speed in pixels per second. */
    speed?: number;
}

export function Carousel({ children, className, autoPlay = true, speed = 35 }: CarouselProps) {
    const trackRef = useRef<HTMLDivElement>(null);
    const pausedRef = useRef(false);
    const [isPaused, setIsPaused] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const items = Children.toArray(children);
    // Duplicate the set so the auto-scroll can loop seamlessly — the moment the first
    // copy scrolls fully out of view, we jump back by exactly its width unnoticed.
    const loopedItems = autoPlay
        ? [
              ...items,
              ...items.map((child, i) =>
                  isValidElement(child)
                      ? cloneElement(child as React.ReactElement<Record<string, unknown>>, {
                            key: `dup-${i}`,
                            "aria-hidden": true,
                            tabIndex: -1,
                        })
                      : child
              ),
          ]
        : items;

    const updateScrollState = () => {
        if (autoPlay) return;
        const track = trackRef.current;
        if (!track) return;
        setCanScrollLeft(track.scrollLeft > 8);
        setCanScrollRight(track.scrollLeft + track.clientWidth < track.scrollWidth - 8);
    };

    useEffect(() => {
        if (autoPlay) return;
        updateScrollState();
        const track = trackRef.current;
        if (!track) return;

        const resizeObserver = new ResizeObserver(updateScrollState);
        resizeObserver.observe(track);
        return () => resizeObserver.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [autoPlay]);

    useEffect(() => {
        if (!autoPlay) return;
        const track = trackRef.current;
        if (!track) return;

        let frameId: number;
        let lastTime: number | null = null;

        const step = (time: number) => {
            if (!pausedRef.current) {
                if (lastTime !== null) {
                    const dt = (time - lastTime) / 1000;
                    track.scrollLeft += speed * dt;
                    const loopWidth = track.scrollWidth / 2;
                    if (loopWidth > 0 && track.scrollLeft >= loopWidth) {
                        track.scrollLeft -= loopWidth;
                    }
                }
                lastTime = time;
            } else {
                lastTime = null;
            }
            frameId = requestAnimationFrame(step);
        };

        frameId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frameId);
    }, [autoPlay, speed]);

    const scrollByAmount = (direction: 1 | -1) => {
        const track = trackRef.current;
        if (!track) return;
        const item = track.querySelector<HTMLElement>("[data-carousel-item]");
        const amount = item ? item.offsetWidth + 24 : track.clientWidth * 0.8;
        track.scrollBy({ left: direction * amount, behavior: "smooth" });
    };

    const handleMouseEnter = () => {
        if (!autoPlay) return;
        pausedRef.current = true;
        setIsPaused(true);
    };
    const handleMouseLeave = () => {
        if (!autoPlay) return;
        pausedRef.current = false;
        setIsPaused(false);
    };

    const showLeftFade = autoPlay ? true : canScrollLeft;
    const showRightFade = autoPlay ? true : canScrollRight;
    const leftArrowEnabled = autoPlay ? true : canScrollLeft;
    const rightArrowEnabled = autoPlay ? true : canScrollRight;

    return (
        <div
            className={cn("relative", className)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                ref={trackRef}
                onScroll={updateScrollState}
                className={cn(
                    "flex gap-6 overflow-x-auto pb-2 scrollbar-hide",
                    !autoPlay || isPaused ? "snap-x snap-mandatory scroll-smooth" : ""
                )}
            >
                {loopedItems}
            </div>

            {/* Edge fades signal there's more to scroll */}
            <div
                className={cn(
                    "pointer-events-none absolute left-0 top-0 bottom-2 w-12 bg-gradient-to-r from-background to-transparent transition-opacity duration-300",
                    showLeftFade ? "opacity-100" : "opacity-0"
                )}
            />
            <div
                className={cn(
                    "pointer-events-none absolute right-0 top-0 bottom-2 w-12 bg-gradient-to-l from-background to-transparent transition-opacity duration-300",
                    showRightFade ? "opacity-100" : "opacity-0"
                )}
            />

            <button
                type="button"
                onClick={() => scrollByAmount(-1)}
                disabled={!leftArrowEnabled}
                aria-label="Scroll left"
                className="hidden md:flex absolute -left-4 top-[calc(50%-16px)] -translate-y-1/2 w-10 h-10 rounded-full bg-secondary/90 backdrop-blur border border-border items-center justify-center text-white transition-all z-10 shadow-lg hover:bg-primary hover:text-black hover:border-primary hover:scale-110 disabled:opacity-0 disabled:pointer-events-none"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button
                type="button"
                onClick={() => scrollByAmount(1)}
                disabled={!rightArrowEnabled}
                aria-label="Scroll right"
                className="hidden md:flex absolute -right-4 top-[calc(50%-16px)] -translate-y-1/2 w-10 h-10 rounded-full bg-secondary/90 backdrop-blur border border-border items-center justify-center text-white transition-all z-10 shadow-lg hover:bg-primary hover:text-black hover:border-primary hover:scale-110 disabled:opacity-0 disabled:pointer-events-none"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
}
