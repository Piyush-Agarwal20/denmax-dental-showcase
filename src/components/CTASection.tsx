import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 primary-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Ready to Elevate Your Practice?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Join thousands of dental professionals who trust Denmax for their essential supplies. 
            Get started today with our premium products and exceptional service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 bg-background text-foreground hover:bg-background/90"
            >
              View Full Catalog
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Request Quote
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8 border-t border-primary-foreground/20">
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <Phone className="h-5 w-5" />
              <span className="text-lg">1-800-DENMAX-1</span>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <Mail className="h-5 w-5" />
              <span className="text-lg">sales@denmax.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;