import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, LineChart, FileText, Users, Clock, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";
import agriTechImage from "@/assets/agriculture-tech.jpg";

const platformFeatures = [
  {
    icon: Database,
    title: "Centralized Data Hub",
    description: "Access all your agricultural data in one secure, easy-to-navigate platform.",
  },
  {
    icon: LineChart,
    title: "Performance Analytics",
    description: "Track crop yields, resource utilization, and financial metrics in real-time.",
  },
  {
    icon: FileText,
    title: "Reports & Insights",
    description: "Generate comprehensive reports with actionable insights for decision-making.",
  },
  {
    icon: TrendingUp,
    title: "Trend Analysis",
    description: "Identify patterns and forecast outcomes using historical data analysis.",
  },
];

const metrics = [
  { value: "Real-time", label: "Data Updates" },
  { value: "360°", label: "Farm Visibility" },
  { value: "24/7", label: "Platform Access" },
  { value: "100%", label: "Secure & Private" },
];

const Knowledge = () => {
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
            <p className="text-accent font-semibold mb-4 animate-fade-up">Knowledge & Data</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Data-Driven
              <br />Agricultural Intelligence
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/90 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Our digital platform empowers farmers and stakeholders with actionable 
              insights, performance metrics, and evaluation tools for informed decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-accent font-semibold mb-3">Digital Platform</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Transforming Data Into Growth
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Our comprehensive digital platform brings together cutting-edge technology 
                and agricultural expertise to deliver insights that drive better outcomes 
                for farmers and businesses alike.
              </p>
              <p className="text-muted-foreground mb-8">
                From soil analysis to market trends, crop performance to resource 
                optimization, our platform provides the intelligence you need to make 
                informed decisions and maximize your agricultural potential.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">
                  Request Platform Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-custom-lg">
                <img
                  src={agriTechImage}
                  alt="Digital platform in action"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-custom-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Real-time</div>
                    <div className="text-muted-foreground text-sm">Data Sync</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-muted-foreground text-sm font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-semibold mb-3">Platform Features</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Everything You Need in One Place
            </h2>
            <p className="text-muted-foreground text-lg">
              Our platform combines powerful features to give you complete visibility 
              and control over your agricultural operations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card rounded-2xl p-6 shadow-custom-sm hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Evaluation */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-card rounded-3xl p-8 shadow-custom-md">
                <h3 className="text-xl font-bold text-foreground mb-6">Sample Performance Metrics</h3>
                <div className="space-y-4">
                  {[
                    { label: "Crop Yield Increase", value: 85, color: "bg-primary" },
                    { label: "Resource Efficiency", value: 72, color: "bg-accent" },
                    { label: "Cost Reduction", value: 68, color: "bg-primary" },
                    { label: "Sustainability Score", value: 91, color: "bg-accent" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between mb-2">
                        <span className="text-foreground text-sm font-medium">{item.label}</span>
                        <span className="text-muted-foreground text-sm">{item.value}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-accent font-semibold mb-3">Performance & Evaluation</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Measure What Matters
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Our evaluation framework provides comprehensive insights into every 
                aspect of your agricultural operations, helping you identify opportunities 
                for improvement and track progress over time.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Customizable KPI dashboards",
                  "Automated performance alerts",
                  "Comparative benchmarking",
                  "Historical trend analysis",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Unlock the Power of Agricultural Data
          </h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
            Join leading farms and agricultural businesses who are already leveraging 
            our platform to drive growth and sustainability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Schedule a Demo
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

export default Knowledge;
