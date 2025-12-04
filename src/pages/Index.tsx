import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Coffee, Factory, BarChart3, Users, Globe, Award } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";
import coffeeImage from "@/assets/coffee-beans.jpg";
import coatingImage from "@/assets/coating-center.jpg";
import agriTechImage from "@/assets/agriculture-tech.jpg";

const services = [
  {
    icon: Leaf,
    title: "Agriculture Productivity Enhancement",
    description: "Innovative solutions to boost agricultural yields and sustainable farming practices.",
    image: agriTechImage,
  },
  {
    icon: Coffee,
    title: "Naty's Coffee",
    description: "Premium Ethiopian coffee, expertly roasted and ready for the global market.",
    image: coffeeImage,
  },
  {
    icon: Factory,
    title: "Coating Centers",
    description: "State-of-the-art facilities for seed coating and agricultural treatments.",
    image: coatingImage,
  },
  {
    icon: BarChart3,
    title: "StabilureN Technology",
    description: "Advanced nitrogen stabilization for improved crop nutrition and soil health.",
    image: agriTechImage,
  },
];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "500+", label: "Partner Farmers" },
  { value: "10K+", label: "Hectares Improved" },
  { value: "98%", label: "Client Satisfaction" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Welcome to NTT Business Development
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Growing Tomorrow's
              <br />
              <span className="text-accent">Agriculture Today</span>
            </h1>
            <p
              className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              Pioneering sustainable agricultural solutions and premium coffee production
              to transform Ethiopia's farming landscape.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button asChild variant="hero" size="xl">
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/contact">Work With Us</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-accent rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-semibold mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive agricultural solutions designed to enhance productivity
              and sustainability across the value chain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative rounded-2xl overflow-hidden hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-primary-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm lg:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-accent font-semibold mb-3">Why Choose Us</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                A Partner You Can Trust
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                With over 15 years of experience in agricultural development, we bring
                expertise, innovation, and a commitment to sustainable growth.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    title: "Expert Team",
                    description: "Agricultural specialists with decades of combined experience",
                  },
                  {
                    icon: Globe,
                    title: "Global Reach",
                    description: "Exporting quality products and knowledge worldwide",
                  },
                  {
                    icon: Award,
                    title: "Quality Assured",
                    description: "Certified processes and premium product standards",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="flex gap-4 animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Button asChild size="lg">
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src={agriTechImage}
                  alt="Our team at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-custom-lg">
                <div className="text-4xl font-bold text-primary mb-1">15+</div>
                <div className="text-muted-foreground text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Agricultural Business?
          </h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
            Whether you're looking to partner with us, invest in our ventures,
            or explore our premium coffee offerings, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
