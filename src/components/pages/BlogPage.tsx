import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function BlogPage() {
  const posts = [
    {
      title: '5 Trends Shaping the Future of Construction',
      excerpt: 'Explore the latest innovations and technologies transforming the construction industry, from sustainable materials to AI-powered project management.',
      category: 'Industry Trends',
      date: 'March 15, 2024',
      readTime: '5 min read',
      imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop'
    },
    {
      title: 'Understanding the Design-Build Process',
      excerpt: 'Learn how the design-build approach streamlines construction projects, reduces costs, and ensures better communication between all stakeholders.',
      category: 'Construction Methods',
      date: 'March 10, 2024',
      readTime: '7 min read',
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
    },
    {
      title: 'Sustainable Building Practices for 2024',
      excerpt: 'Discover eco-friendly construction techniques and materials that reduce environmental impact while delivering exceptional results.',
      category: 'Sustainability',
      date: 'March 5, 2024',
      readTime: '6 min read',
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop'
    },
    {
      title: 'Safety First: Best Practices on Construction Sites',
      excerpt: 'A comprehensive guide to maintaining the highest safety standards on construction sites, protecting workers and ensuring project success.',
      category: 'Safety',
      date: 'February 28, 2024',
      readTime: '8 min read',
      imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop'
    },
    {
      title: 'Choosing the Right Materials for Your Project',
      excerpt: 'Expert insights on selecting construction materials that balance quality, durability, cost-effectiveness, and aesthetic appeal.',
      category: 'Materials',
      date: 'February 20, 2024',
      readTime: '6 min read',
      imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop'
    },
    {
      title: 'Project Management Excellence in Construction',
      excerpt: 'How effective project management ensures on-time, on-budget delivery while maintaining quality standards throughout the construction process.',
      category: 'Project Management',
      date: 'February 15, 2024',
      readTime: '7 min read',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-medium mb-6">News & Insights</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed with the latest industry news, construction trends, and expert insights from BP Construction
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <ImageWithFallback
                  src={posts[0].imageUrl}
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-accent text-white">
                  Featured
                </Badge>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4" variant="secondary">
                  {posts[0].category}
                </Badge>
                <h2 className="text-3xl font-medium mb-4">{posts[0].title}</h2>
                <p className="text-muted-foreground mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{posts[0].date}</span>
                  <span>•</span>
                  <span>{posts[0].readTime}</span>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3" variant="secondary">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-medium mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-accent text-white">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-medium mb-4">Stay Updated</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest construction insights, industry news, and company updates delivered directly to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
