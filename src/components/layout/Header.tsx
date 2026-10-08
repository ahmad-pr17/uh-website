"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import { CONTACT, mailHref, telHref, whatsappHref } from "@/config/contact";
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
        <>
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md [html.light_&]:bg-background border-b border-border py-4"
                    : "bg-transparent [html.light_&]:bg-background [html.light_&]:border-b [html.light_&]:border-border [html.light_&]:shadow-sm py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <Image 
                            src="/logo.png" 
                            alt="Universal Holdings" 
                            width={180} 
                            height={60} 
                            className="h-12 w-auto object-contain theme-logo"
                            priority
                        />
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
                            href={telHref}
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
        </header>

            {/* Mobile Nav — rendered outside <header>: a backdrop-filter on the header would otherwise make
                this fixed panel size itself to the header instead of the viewport. */}
            <div
                id="mobile-nav"
                inert={!isMobileMenuOpen}
                aria-hidden={!isMobileMenuOpen}
                className={cn(
                    "fixed inset-0 z-40 md:hidden bg-background overflow-y-auto pt-24 transition-transform duration-300 ease-in-out",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col gap-2 p-6 min-h-full">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-semibold text-white hover:text-primary py-3 border-b border-border/60"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-8 mt-auto space-y-3">
                        <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">Contact Us</p>
                        <a href={telHref} className="flex items-center gap-3 p-4 bg-primary text-black font-bold rounded-xl">
                            <Phone className="w-5 h-5" />
                            <span>Call {CONTACT.phoneDisplay}</span>
                        </a>
                        <a
                            href={whatsappHref("Hi, I would like to know more about your projects.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-4 bg-[#25D366] text-black font-bold rounded-xl"
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span>WhatsApp Us</span>
                        </a>
                        <a href={mailHref()} className="flex items-center gap-3 p-4 border border-border text-white font-semibold rounded-xl break-all">
                            <Mail className="w-5 h-5 text-primary shrink-0" />
                            <span>{CONTACT.email}</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
