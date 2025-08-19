import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-light">Denmax</h3>
            <p className="text-background/80">
              Leading supplier of premium dental accessories, serving professionals 
              nationwide with quality, reliability, and exceptional service.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-background/80">
                <Phone className="h-4 w-4" />
                <span>1-800-DENMAX-1</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Mail className="h-4 w-4" />
                <span>info@denmax.com</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <MapPin className="h-4 w-4" />
                <span>123 Medical Plaza, Healthcare City, HC 12345</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Products</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary-light smooth-transition">Dental Bibs</a></li>
              <li><a href="#" className="hover:text-primary-light smooth-transition">Medical Gloves</a></li>
              <li><a href="#" className="hover:text-primary-light smooth-transition">Face Masks</a></li>
              <li><a href="#" className="hover:text-primary-light smooth-transition">Protective Covers</a></li>
              <li><a href="#" className="hover:text-primary-light smooth-transition">Disposable Items</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary-light smooth-transition">Bulk Orders</a></li>
              <li><a href="#" className="hover:text-primary-light smooth-transition">Custom Solutions</a></li>
              <li><a href="#" className="hover:text-primary-light smooth-transition">Express Shipping</a></li>
              <li><a href="#" className="hover:text-primary-light smooth-transition">Account Management</a></li>
              <li><a href="#" className="hover:text-primary-light smooth-transition">Quality Assurance</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Company</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary-light smooth-transition">About Us</a></li>
              <li><a href="#" className="hover:text-primary-light smooth-transition">Quality Standards</a></li>
              <li><a href="#" className="hover:text-primary-light smooth-transition">Certifications</a></li>
              <li><a href="#" className="hover:text-primary-light smooth-transition">Support</a></li>
              <li><a href="#" className="hover:text-primary-light smooth-transition">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/80 mb-4 md:mb-0">
              © 2024 Denmax. All rights reserved.
            </div>
            <div className="flex space-x-6 text-background/80">
              <a href="#" className="hover:text-primary-light smooth-transition">Privacy Policy</a>
              <a href="#" className="hover:text-primary-light smooth-transition">Terms of Service</a>
              <a href="#" className="hover:text-primary-light smooth-transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;