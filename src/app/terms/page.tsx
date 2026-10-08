import { Eyebrow } from "@/components/ui/Eyebrow";

export default function TermsPage() {
    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="space-y-4 mb-12">
                    <Eyebrow>Legal</Eyebrow>
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Terms & Conditions</h1>
                    <p className="text-muted-foreground">Last updated: {new Date().getFullYear()}</p>
                </div>

                <div className="space-y-8 text-muted-foreground leading-relaxed">
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">Use of This Website</h2>
                        <p>
                            This website provides general information about real estate projects and consultancy
                            services offered by Universal Holdings. It is intended to help you research and get in
                            touch with our team — it is not itself an offer of sale.
                        </p>
                    </section>
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">Property & Map Information</h2>
                        <p>
                            Plot maps, boundaries, availability, and pricing shown on this site are sourced from
                            third parties and provided for general guidance only. Always confirm current
                            availability, pricing, and legal status directly with our consultants before making any
                            decision.
                        </p>
                    </section>
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">No Investment Advice</h2>
                        <p>
                            Nothing on this site constitutes financial or legal advice. You should perform your own
                            due diligence, or consult an independent advisor, before making any property investment.
                        </p>
                    </section>
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white">Contact Us</h2>
                        <p>
                            Questions about these terms can be sent to{" "}
                            <a href="mailto:universalholding12@gmail.com" className="text-primary underline underline-offset-2">
                                universalholding12@gmail.com
                            </a>
                            .
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
