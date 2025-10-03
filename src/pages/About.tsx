import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Shield, Zap, Heart, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trusted Comparison",
      description: "We aggregate prices from verified stores to ensure you get accurate and up-to-date information."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Our platform delivers instant results, helping you make quick and informed purchasing decisions."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "User-Centric",
      description: "Built with love for shoppers who value their time and money. Your satisfaction is our priority."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Best Deals",
      description: "We highlight the lowest prices and best offers so you never miss a great deal."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About PriceCompare
            </h1>
            <p className="text-lg text-muted-foreground">
              Your trusted companion for smart shopping decisions
            </p>
          </div>

          <Card className="p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At PriceCompare, we believe that everyone deserves to shop smart and save money. 
              Our mission is to empower consumers with transparent price information across 
              multiple online retailers, making it easier than ever to find the best deals on 
              products you love.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We've built a platform that aggregates real-time pricing data from India's top 
              e-commerce stores including Amazon, Flipkart, Croma, and more. Whether you're 
              shopping for electronics, fashion, or home essentials, we've got you covered.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6 hover:shadow-card-hover transition-all">
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-primary text-primary-foreground">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1">✓</span>
                <span>Compare prices across 10+ major online retailers instantly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">✓</span>
                <span>Get real-time price updates and notifications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">✓</span>
                <span>Access detailed product information and user reviews</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">✓</span>
                <span>Free to use - no hidden charges or subscriptions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">✓</span>
                <span>Mobile-friendly interface for shopping on the go</span>
              </li>
            </ul>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default About;
