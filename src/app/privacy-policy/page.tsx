import { Eyebrow } from "@/components/ui/Eyebrow";

export default function PrivacyPolicyPage() {
    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="space-y-4 mb-12">
                    <Eyebrow>Legal</Eyebrow>
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Privacy Policy</h1>
                    <p className="text-muted-foreground">Last updated: {new Date().getFullYear()}</p>
                </div>

                <div className="space-y-8 text-muted-foreground leading-relaxed">
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">Information We Collect</h2>
                        <p>
                            When you contact Universal Holdings through our website, we collect the information you
                            provide directly — such as your name, email address, and the details of your inquiry —
                            so we can respond to you.
                        </p>
                    </section>
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">How We Use Your Information</h2>
                        <p>
                            We use the information you share with us solely to respond to your inquiries, provide
                            property consultancy services, and follow up on requests you have made. We do not sell
                            your personal information to third parties.
                        </p>
                    </section>
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">Third-Party Map Data</h2>
                        <p>
                            Our interactive plot maps display data sourced from ilaaqa.com and satellite imagery
                            from Google Maps. Viewing these maps may be subject to those providers&apos; own privacy
                            practices.
                        </p>
                    </section>
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">Contact Us</h2>
                        <p>
                            If you have questions about this policy, reach out at{" "}
                            <a href="mailto:info@universalholdings.com" className="text-primary underline underline-offset-2">
                                info@universalholdings.com
                            </a>
                            .
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
