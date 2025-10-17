import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function TestimonialsPage() {
  const testimonials = [
    {
      body: 'BP Construction delivered our office complex on time and within budget. Their attention to detail and professional service exceeded all expectations. The project management team was responsive and kept us informed every step of the way.',
      author: {
        name: 'Sarah Johnson',
        position: 'CEO',
        company: 'Tech Solutions Inc.',
        imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b9c3f066?w=100&h=100&fit=crop&crop=face',
      },
      rating: 5
    },
    {
      body: 'Outstanding craftsmanship and professional service. Our custom home exceeded all expectations. From the initial design phase to final walkthrough, BP Construction demonstrated expertise and dedication.',
      author: {
        name: 'Mike Rodriguez',
        position: 'Homeowner',
        company: 'Heritage Homes Development',
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      },
      rating: 5
    },
    {
      body: 'We\'ve worked with BP Construction on multiple projects. Their commitment to quality and safety is unmatched. They handle complex industrial projects with efficiency and professionalism.',
      author: {
        name: 'Jennifer Chen',
        position: 'Operations Director',
        company: 'Manufacturing Solutions Ltd.',
        imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      },
      rating: 5
    },
    {
      body: 'The team at BP Construction transformed our vision into reality. Their design-build approach saved us time and money while delivering exceptional results. Highly recommended!',
      author: {
        name: 'David Park',
        position: 'Director of Facilities',
        company: 'Riverside Retail Group',
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      },
      rating: 5
    },
    {
      body: 'Professional, reliable, and incredibly skilled. BP Construction handled our commercial renovation with minimal disruption to our business operations. The final result is stunning.',
      author: {
        name: 'Amanda Foster',
        position: 'Business Owner',
        company: 'Downtown Bistro',
        imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
      },
      rating: 5
    },
    {
      body: 'BP Construction built our manufacturing facility to exact specifications. Their expertise in industrial construction is evident in every aspect of the project. Exceptional work!',
      author: {
        name: 'Robert Williams',
        position: 'Plant Manager',
        company: 'Advanced Manufacturing Corp.',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      },
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-medium mb-6">Client Testimonials</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear what our clients have to say about their experience working with BP Construction
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-accent"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-muted-foreground mb-6">
                    <p>"{testimonial.body}"</p>
                  </blockquote>
                  
                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <ImageWithFallback
                      className="h-12 w-12 rounded-full object-cover"
                      src={testimonial.author.imageUrl}
                      alt={testimonial.author.name}
                    />
                    <div>
                      <div className="font-medium">{testimonial.author.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.author.position}, {testimonial.author.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-medium text-accent mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-medium text-accent mb-2">2000+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-medium text-accent mb-2">40+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-medium text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
