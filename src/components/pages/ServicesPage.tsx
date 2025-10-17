import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { HomeIcon, BuildingOfficeIcon, CogIcon, WrenchScrewdriverIcon, TruckIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

interface ServicesPageProps {
  onPageChange: (page: string) => void;
}

export function ServicesPage({ onPageChange }: ServicesPageProps) {
  const services = [
    {
      name: 'Residential Construction',
      description: 'From custom homes to renovations, we bring your vision to life with exceptional craftsmanship and attention to detail.',
      icon: HomeIcon,
      features: ['Custom Home Building', 'Home Renovations', 'Kitchen & Bath Remodeling', 'Home Additions']
    },
    {
      name: 'Commercial Projects',
      description: 'Complete commercial construction solutions for office buildings, retail spaces, and mixed-use developments.',
      icon: BuildingOfficeIcon,
      features: ['Office Buildings', 'Retail Spaces', 'Restaurants', 'Mixed-Use Developments']
    },
    {
      name: 'Industrial Solutions',
      description: 'Specialized construction for manufacturing facilities, warehouses, and industrial complexes.',
      icon: CogIcon,
      features: ['Manufacturing Facilities', 'Warehouses', 'Distribution Centers', 'Industrial Parks']
    },
    {
      name: 'Design-Build Services',
      description: 'Streamlined project delivery combining design and construction expertise under one roof.',
      icon: WrenchScrewdriverIcon,
      features: ['Conceptual Design', 'Value Engineering', 'Construction Management', 'Turnkey Solutions']
    },
    {
      name: 'General Contracting',
      description: 'Full-service general contracting for projects of all sizes and complexities.',
      icon: TruckIcon,
      features: ['Site Development', 'Subcontractor Management', 'Quality Control', 'Schedule Management']
    },
    {
      name: 'Project Management',
      description: 'Comprehensive project oversight ensuring on-time, on-budget delivery with superior quality.',
      icon: ClipboardDocumentCheckIcon,
      features: ['Budget Management', 'Schedule Coordination', 'Risk Management', 'Quality Assurance']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-medium mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive construction solutions tailored to meet your unique project requirements
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <service.icon className="h-8 w-8 text-accent" />
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can bring your construction vision to life.
          </p>
          <button
            onClick={() => onPageChange('contact')}
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-medium text-white shadow-sm transition-all duration-200 hover:bg-primary/90"
          >
            Request a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
