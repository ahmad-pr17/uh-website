"use client";

import Link from "next/link";
import BrandLogo from "@/components/ui/BrandLogo";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Maps", href: "/maps" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!isMobileMenuOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsMobileMenuOpen(false);
        };
        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
                    : "bg-transparent [html.light_&]:bg-background/85 [html.light_&]:backdrop-blur-md [html.light_&]:border-b [html.light_&]:border-border py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <BrandLogo />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <ThemeToggle />
                        <Link
                            href="tel:+923001234567"
                            className="flex items-center gap-2 text-sm font-medium text-white bg-primary/10 hover:bg-primary/20 border border-primary/20 px-4 py-2 rounded-full transition-all"
                        >
                            <Phone className="w-4 h-4 text-primary" />
                            <span>Call Us</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <ThemeToggle className="md:hidden ml-auto mr-3" />
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-nav"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div
                id="mobile-nav"
                inert={!isMobileMenuOpen}
                className={cn(
                    "fixed inset-0 top-[72px] bg-background z-40 md:hidden transition-transform duration-300 ease-in-out",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col gap-6 p-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xl font-medium text-white hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-6 border-t border-border mt-auto">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">Contact Us</p>
                            <div className="flex items-center gap-3 text-white">
                                <Phone className="w-5 h-5 text-primary" />
                                <span>+92 300 123 4567</span>
                            </div>
                            <div className="flex items-center gap-3 text-white">
                                <Mail className="w-5 h-5 text-primary" />
                                <span>info@example.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
