import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary/50 border-t border-border pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 mb-6">
                            <Image 
                                src="/logo.png" 
                                alt="Universal Holdings Logo" 
                                width={160} 
                                height={50} 
                                className="h-10 w-auto object-contain brightness-0 invert"
                            />
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Your trusted partner in premium real estate consultancy. Specializing in DHA Lahore and luxury projects across Pakistan.
                        </p>
                        <div className="flex items-center gap-4">
                            {[
                                { icon: Facebook, label: "Facebook" },
                                { icon: Instagram, label: "Instagram" },
                                { icon: Twitter, label: "Twitter" },
                            ].map((social) => (
                                <span
                                    key={social.label}
                                    aria-label={`${social.label} (coming soon)`}
                                    title={`${social.label} — coming soon`}
                                    className="p-2 bg-background border border-border rounded-lg text-muted-foreground/60 cursor-not-allowed"
                                >
                                    <social.icon className="w-5 h-5" />
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">DHA Phase 7</Link></li>
                            <li><Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">DHA Phase 9 Prism</Link></li>
                            <li><Link href="/maps" className="text-muted-foreground hover:text-primary transition-colors">Plot Finder Map</Link></li>
                            <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Latest Market News</Link></li>
                            <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">Our Team</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Services</h3>
                        <ul className="space-y-4">
                            <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Property Consultancy</Link></li>
                            <li><Link href="/maps" className="text-muted-foreground hover:text-primary transition-colors">Map Analysis</Link></li>
                            <li><Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Plot Sales</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Investment Guidance</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Document Verification</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-muted-foreground">Office #1, Phase 6, DHA Lahore, Pakistan</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-muted-foreground">+92 300 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-muted-foreground">info@universalholdings.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Universal Holdings. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
