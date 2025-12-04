import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Coffee, Factory, Beaker, Store, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";
import coffeeImage from "@/assets/coffee-beans.jpg";
import coatingImage from "@/assets/coating-center.jpg";
import agriTechImage from "@/assets/agriculture-tech.jpg";

const services = [
  {
    id: "agriculture",
    icon: Leaf,
    title: "Agriculture Productivity Enhancement",
    description: "Comprehensive solutions to maximize crop yields while promoting sustainable farming practices.",
    image: agriTechImage,
    features: [
      "Precision farming techniques",
      "Soil health management",
      "Crop rotation planning",
      "Integrated pest management",
      "Training and capacity building",
    ],
  },
  {
    id: "coffee",
    icon: Coffee,
    title: "Naty's Coffee",
    description: "Premium Ethiopian coffee, sourced from the finest regions and expertly roasted for global markets.",
    image: coffeeImage,
    features: [
      "Single-origin specialty beans",
      "Direct farmer partnerships",
      "Expert roasting profiles",
      "Quality certification",
      "Export-ready packaging",
    ],
  },
  {
    id: "stabiluren",
    icon: Beaker,
    title: "StabilureN Technology",
    description: "Advanced nitrogen stabilization solutions that improve fertilizer efficiency and reduce environmental impact.",
    image: agriTechImage,
    features: [
      "Reduced nitrogen loss",
      "Extended nutrient availability",
      "Improved crop uptake",
      "Environmental protection",
      "Cost-effective application",
    ],
  },
  {
    id: "coating",
    icon: Factory,
    title: "Coating Centers",
    description: "State-of-the-art facilities providing seed coating and treatment services for enhanced germination and protection.",
    image: coatingImage,
    features: [
      "Seed treatment services",
      "Protective coating application",
      "Quality control testing",
      "Custom formulations",
      "High-capacity processing",
    ],
  },
  {
    id: "concept-shop",
    icon: Store,
    title: "Concept Shop",
    description: "Showcase retail spaces featuring our premium coffee and agricultural products for direct consumer experience.",
    image: coffeeImage,
    features: [
      "Product demonstrations",
      "Coffee tasting experiences",
      "Agricultural product showcase",
      "Educational workshops",
      "Direct sales channel",
    ],
  },
];

const Services = () => {
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
            <p className="text-accent font-semibold mb-4 animate-fade-up">What We Do</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Comprehensive Agricultural
              <br />Solutions
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/90 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              From farm to market, we provide end-to-end services that enhance 
              productivity, quality, and sustainability across the agricultural value chain.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg">
                    <Link to="/contact">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-custom-lg hover-lift">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Agricultural Operations?
          </h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
            Contact us to learn how our services can help you achieve your goals 
            and contribute to sustainable agricultural development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Request a Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
