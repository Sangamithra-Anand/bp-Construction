import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function AboutPage() {
  const leadership = [
    {
      name: "John Mitchell",
      position: "CEO & Founder",
      experience: "25+ years",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Sarah Chen",
      position: "Chief Operations Officer",
      experience: "18+ years",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b9c3f066?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Michael Rodriguez",
      position: "Head of Engineering",
      experience: "22+ years",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Emily Foster",
      position: "Project Director",
      experience: "15+ years",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    },
  ];

  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management Systems" },
    // { name: "OSHA Compliance", description: "Occupational Safety & Health" },
    {
      name: "SSL Certification",
      description: "Secure Sockets Layer Certification",
    }
    // {
    //   name: "NAHB Member",
    //   description: "National Association of Home Builders",
    // }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-medium mb-6">About BP Construction</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four decades of construction excellence, innovation, and
              unwavering commitment to quality
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 1985 by John Mitchell, BP Construction began as a
                  small residential construction company with a simple mission:
                  to build homes and structures that families and businesses
                  could trust for generations.
                </p>
                <p>
                  Over the past four decades, we've grown into one of the
                  region's most respected construction firms, completing over
                  2,000 projects ranging from custom homes to large-scale
                  commercial developments.
                </p>
                <p>
                  Our success is built on three pillars: exceptional
                  craftsmanship, transparent communication, and an unwavering
                  commitment to safety and sustainability in every project we
                  undertake.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-medium text-primary">2000+</div>
                  <div className="text-sm text-muted-foreground">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-medium text-primary">40+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-medium text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">
                    Team Members
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop"
                alt="Construction team at work"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">MISSION</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To execute exceptional construction projects with
                  uncompromising quality, precise delivery, and strategic value.
                  We forge enduring client partnerships through integrity,
                  transparency, and a relentless pursuit of excellence in every
                  structure we create.{" "}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">VISION</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the distinguished leader in construction excellence,
                  delivering innovative and sustainable solutions that shape
                  communities while setting new standards in safety and
                  environmental stewardship.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              Experienced professionals leading our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <ImageWithFallback
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="font-medium mb-1">{leader.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {leader.position}
                  </p>
                  <Badge variant="secondary">{leader.experience}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">
              Certifications & Awards
            </h2>
            <p className="text-lg text-muted-foreground">
              Recognized for excellence in construction and safety standards
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
