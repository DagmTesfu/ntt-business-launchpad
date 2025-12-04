import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Heart, Lightbulb, Shield, Sprout } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";
import agriTechImage from "@/assets/agriculture-tech.jpg";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously seeking new solutions to agricultural challenges through research and technology.",
  },
  {
    icon: Sprout,
    title: "Sustainability",
    description: "Committed to environmentally responsible practices that preserve resources for future generations.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Operating with transparency, honesty, and ethical standards in all our business dealings.",
  },
  {
    icon: Heart,
    title: "Community",
    description: "Empowering local farmers and communities through knowledge transfer and partnership.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-95" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold mb-4 animate-fade-up">Who We Are</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Building a Sustainable
              <br />Agricultural Future
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/90 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              NTT Business Development Company Plc is a leading agricultural enterprise 
              dedicated to transforming Ethiopia's farming landscape through innovation, 
              sustainability, and quality.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-accent font-semibold mb-3">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                From Vision to Reality
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a vision to revolutionize Ethiopian agriculture, NTT Business 
                  Development Company has grown from a small enterprise to a comprehensive 
                  agricultural solutions provider.
                </p>
                <p>
                  Our journey began with a simple belief: that modern agricultural practices, 
                  combined with traditional knowledge, can create sustainable prosperity for 
                  farmers and communities across Ethiopia.
                </p>
                <p>
                  Today, we operate across multiple verticals including agricultural 
                  productivity enhancement, premium coffee production under our Naty's Coffee 
                  brand, advanced StabilureN technology, and state-of-the-art coating centers.
                </p>
              </div>
              <Button asChild className="mt-8" size="lg">
                <Link to="/services">
                  Discover Our Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-custom-lg">
                <img
                  src={agriTechImage}
                  alt="Our agricultural work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-custom-md hover-lift animate-fade-up">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To enhance agricultural productivity and sustainability across Ethiopia 
                through innovative solutions, premium products, and strong partnerships 
                with farmers and communities. We strive to be the catalyst for positive 
                change in the agricultural sector.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-custom-md hover-lift animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become Africa's leading agricultural development company, recognized 
                for our commitment to innovation, sustainability, and excellence. We 
                envision a future where every Ethiopian farmer has access to the tools 
                and knowledge needed for success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-semibold mb-3">Our Values</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-muted-foreground text-lg">
              Our core values guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-6 shadow-custom-sm hover-lift text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Join Us in Building a Better Future
          </h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
            Whether you're a farmer looking for solutions, an investor seeking opportunities, 
            or a partner ready to collaborate, we welcome you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
