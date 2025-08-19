import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shirt, Hand, Stethoscope, Truck, Shield, Award } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shirt,
      title: "Premium Dental Bibs",
      description: "Waterproof, comfortable bibs that provide superior protection for patients while maintaining a professional appearance.",
      features: ["Waterproof Protection", "Comfortable Fit", "Eco-Friendly Materials"]
    },
    {
      icon: Hand,
      title: "Medical-Grade Gloves",
      description: "Latex-free, powder-free examination gloves that ensure maximum safety and tactile sensitivity for precise procedures.",
      features: ["Latex-Free", "Powder-Free", "Enhanced Grip"]
    },
    {
      icon: Stethoscope,
      title: "Essential Supplies",
      description: "Complete range of dental accessories including masks, covers, and disposable items for comprehensive practice needs.",
      features: ["Complete Range", "Single-Use Items", "Bulk Options"]
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Reliable nationwide shipping with 24-hour processing and tracking for all orders to keep your practice well-stocked.",
      features: ["24hr Processing", "Nationwide Coverage", "Order Tracking"]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "All products meet FDA standards and undergo rigorous quality control testing to ensure safety and reliability.",
      features: ["FDA Approved", "Quality Tested", "Compliance Certified"]
    },
    {
      icon: Award,
      title: "Professional Support",
      description: "Dedicated account managers and customer service team provide personalized support for your practice's unique needs.",
      features: ["Account Managers", "24/7 Support", "Custom Solutions"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose Denmax?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive solutions for dental practices with premium products, 
            reliable service, and unwavering commitment to quality and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-shadow smooth-transition hover:scale-105 border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;