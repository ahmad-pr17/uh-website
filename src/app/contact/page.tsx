import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Get In Touch</h2>
                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Contact Our Experts</h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Have questions about property investments? Our team of professional consultants is ready to help you make the right choice.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Phone, label: "Call Us", value: "+92 300 123 4567", href: "tel:+923001234567" },
                            { icon: Mail, label: "Email Us", value: "info@universalholdings.com", href: "mailto:info@universalholdings.com" },
                            { icon: MapPin, label: "Visit Us", value: "Office #1, Phase 6, DHA Lahore", href: "#" },
                        ].map((item) => (
                            <div key={item.label} className="p-8 bg-secondary/30 rounded-2xl border border-border text-center space-y-4 hover:border-primary/30 transition-all">
                                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">{item.label}</p>
                                    <p className="text-white font-bold">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-secondary/20 rounded-3xl border border-border p-8 md:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                    <MessageSquare className="w-6 h-6 text-primary" />
                                    Send a Message
                                </h3>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input type="text" placeholder="Your Name" className="w-full bg-background border border-border rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary/50 transition-colors" />
                                        <input type="email" placeholder="Email Address" className="w-full bg-background border border-border rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary/50 transition-colors" />
                                    </div>
                                    <input type="text" placeholder="Subject" className="w-full bg-background border border-border rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary/50 transition-colors" />
                                    <textarea placeholder="Tell us about your requirements..." rows={4} className="w-full bg-background border border-border rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none" />
                                    <button className="w-full py-4 bg-primary text-black font-bold rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2 group">
                                        Send Inquiry
                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                            <div className="hidden lg:block relative rounded-2xl overflow-hidden grayscale opacity-50">
                                {/* Placeholder for a map snippet or a nice office image */}
                                <div className="absolute inset-0 bg-primary/20 rounded-2xl border border-primary/30" />
                                <div className="flex items-center justify-center h-full text-muted-foreground italic">Map Location Placeholder</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
