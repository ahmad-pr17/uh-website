import Hero from "@/components/modules/Hero";
import FeaturedShowcase from "@/components/modules/FeaturedShowcase";
import UnionTownOverview from "@/components/modules/UnionTownOverview";
import FeaturedProjects from "@/components/modules/FeaturedProjects";
import Testimonials from "@/components/modules/Testimonials";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 pb-32">
      <Hero />
      <FeaturedShowcase />
      <UnionTownOverview />
      <FeaturedProjects />

      <section className="container mx-auto px-4 md:px-6 py-20 bg-secondary/20 rounded-3xl border border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Eyebrow>Our Expertise</Eyebrow>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Pakistan&apos;s Most Trusted <br />
                <span className="text-primary">Real Estate Experts</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Universal Holdings, we specialize in Union Developers' projects — Union Town, Pine Residencia and Union Greens. Our mission is to provide transparent, secure, and highly profitable investment opportunities for our clients.
            </p>
            <div className="space-y-4">
              {[
                { num: "01", title: "Verified Listings", desc: "Every property we recommend is thoroughly verified for authenticity." },
                { num: "02", title: "Transparent Pricing", desc: "No hidden costs — you see the true market value before you commit." },
                { num: "03", title: "Dedicated Consultants", desc: "A single point of contact who guides you from search to sale." },
                { num: "04", title: "Secure Documentation", desc: "Legal and title checks handled end-to-end for total peace of mind." },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">{item.num}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border">
            <div
              role="img"
              aria-label="Universal Holdings real estate consultants at work"
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800')" }}
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
