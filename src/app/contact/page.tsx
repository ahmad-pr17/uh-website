"use client";

import { useState, type FormEvent } from "react";
import dynamic from "next/dynamic";
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

const IlaaqaMap = dynamic(() => import("@/components/modules/IlaaqaMap"), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-secondary/10 animate-pulse rounded-2xl" />,
});

const OFFICE_MAP_URL = "https://ilaaqa.com/maps/dha-phase-6-lahore";
const OFFICE_ADDRESS = "Office #1, Phase 6, DHA Lahore";
const CONTACT_EMAIL = "info@example.com";

interface FormState {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const EMPTY_FORM: FormState = { name: "", email: "", subject: "", message: "" };

function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactPage() {
    const [form, setForm] = useState<FormState>(EMPTY_FORM);
    const [errors, setErrors] = useState<Partial<FormState>>({});
    const [submitted, setSubmitted] = useState(false);

    const updateField = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const nextErrors: Partial<FormState> = {};
        if (!form.name.trim()) nextErrors.name = "Please enter your name.";
        if (!form.email.trim()) nextErrors.email = "Please enter your email.";
        else if (!isValidEmail(form.email)) nextErrors.email = "Please enter a valid email address.";
        if (!form.message.trim()) nextErrors.message = "Please tell us how we can help.";

        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) return;

        const subject = encodeURIComponent(form.subject || `Inquiry from ${form.name}`);
        const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

        setSubmitted(true);
        setForm(EMPTY_FORM);
    };

    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <Eyebrow>Get In Touch</Eyebrow>
                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Contact Our Experts</h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Have questions about property investments? Our team of professional consultants is ready to help you make the right choice.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Phone, label: "Call Us", value: "+92 300 123 4567", href: "tel:+923001234567" },
                            { icon: Mail, label: "Email Us", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                            {
                                icon: MapPin,
                                label: "Visit Us",
                                value: OFFICE_ADDRESS,
                                href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`,
                            },
                        ].map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target={item.href.startsWith("http") ? "_blank" : undefined}
                                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="p-8 bg-secondary/30 rounded-2xl border border-border text-center space-y-4 hover:border-primary/30 transition-all"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">{item.label}</p>
                                    <p className="text-white font-bold">{item.value}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="bg-secondary/20 rounded-3xl border border-border p-8 md:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                    <MessageSquare className="w-6 h-6 text-primary" />
                                    Send a Message
                                </h2>

                                {submitted ? (
                                    <div className="flex items-start gap-3 p-6 bg-primary/10 border border-primary/20 rounded-xl">
                                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                        <div>
                                            <p className="text-white font-bold">Your email app should now be open.</p>
                                            <p className="text-muted-foreground text-sm mt-1">
                                                Just hit send there to reach our team. Didn&apos;t open?{" "}
                                                <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline underline-offset-2">
                                                    Email us directly
                                                </a>
                                                .
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} noValidate className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <Input
                                                name="name"
                                                type="text"
                                                placeholder="Your Name"
                                                aria-label="Your Name"
                                                value={form.name}
                                                onChange={updateField("name")}
                                                error={errors.name}
                                            />
                                            <Input
                                                name="email"
                                                type="email"
                                                placeholder="Email Address"
                                                aria-label="Email Address"
                                                value={form.email}
                                                onChange={updateField("email")}
                                                error={errors.email}
                                            />
                                        </div>
                                        <Input
                                            name="subject"
                                            type="text"
                                            placeholder="Subject"
                                            aria-label="Subject"
                                            value={form.subject}
                                            onChange={updateField("subject")}
                                        />
                                        <Textarea
                                            name="message"
                                            placeholder="Tell us about your requirements..."
                                            aria-label="Message"
                                            rows={4}
                                            value={form.message}
                                            onChange={updateField("message")}
                                            error={errors.message}
                                        />
                                        <Button type="submit" className="w-full group">
                                            Send Inquiry
                                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </Button>
                                    </form>
                                )}
                            </div>
                            <div className="hidden lg:block relative rounded-2xl overflow-hidden border border-border h-full min-h-[320px]">
                                <IlaaqaMap mapUrl={OFFICE_MAP_URL} projectName="Our Office — DHA Phase 6 Lahore" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
