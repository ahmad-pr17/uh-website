import Hero from "@/components/modules/Hero";
import FeaturedProjects from "@/components/modules/FeaturedProjects";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 pb-32">
      <Hero />
      <FeaturedProjects />

      {/* About / Why Choose Us Section Placeholder */}
      <section className="container mx-auto px-4 md:px-6 py-20 bg-secondary/20 rounded-3xl border border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Our Expertise</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Pakistan's Most Trusted <br />
                <span className="text-primary">Real Estate Experts</span>
              </h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Universal Holdings, we specialize in DHA Lahore, DHA Multan, and other prestige projects. Our mission is to provide transparent, secure, and highly profitable investment opportunities for our clients.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold">01</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Verified Listings</h4>
                  <p className="text-muted-foreground">Every property we recommend is thoroughly verified for authenticity.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800')" }}
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </div>
        </div>
      </section>
    </div>
  );
}
