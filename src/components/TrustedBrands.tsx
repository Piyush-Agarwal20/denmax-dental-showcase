const TrustedBrands = () => {
  const brands = [
    { name: "DentCorp", logo: "DC" },
    { name: "Smile Tech", logo: "ST" },
    { name: "Dental Plus", logo: "DP" },
    { name: "Care Dental", logo: "CD" },
    { name: "Bright Clinic", logo: "BC" },
    { name: "Prime Dental", logo: "PD" }
  ];

  return (
    <section className="py-16 bg-medical-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Trusted by Leading Dental Practices
          </h2>
          <p className="text-muted-foreground text-lg">
            Over 2,500+ dental professionals rely on Denmax for their daily operations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-background rounded-lg card-shadow smooth-transition hover:scale-105"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                <span className="text-primary font-bold text-lg">{brand.logo}</span>
              </div>
              <span className="text-muted-foreground text-sm font-medium">{brand.name}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2,500+</div>
            <div className="text-muted-foreground">Dental Practices</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50M+</div>
            <div className="text-muted-foreground">Products Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
            <div className="text-muted-foreground">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;