import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function ProjectsPage() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Skyline Plaza',
      category: 'Commercial',
      description: 'Modern 12-story office building in downtown district',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
      completion: '2024',
      size: '150,000 sq ft'
    },
    {
      id: 2,
      title: 'Heritage Homes',
      category: 'Residential',
      description: 'Luxury residential community with 45 custom homes',
      imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
      completion: '2023',
      size: '25 acres'
    },
    {
      id: 3,
      title: 'Tech Hub Campus',
      category: 'Industrial',
      description: 'State-of-the-art manufacturing and R&D facility',
      imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      completion: '2024',
      size: '200,000 sq ft'
    },
    {
      id: 4,
      title: 'Riverside Retail Center',
      category: 'Commercial',
      description: 'Mixed-use retail and dining destination',
      imageUrl: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=600&h=400&fit=crop',
      completion: '2023',
      size: '75,000 sq ft'
    },
    {
      id: 5,
      title: 'Mountain View Estates',
      category: 'Residential',
      description: 'Premium single-family homes with mountain views',
      imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop',
      completion: '2024',
      size: '35 homes'
    },
    {
      id: 6,
      title: 'Central Distribution Center',
      category: 'Industrial',
      description: 'Modern logistics and distribution facility',
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
      completion: '2023',
      size: '300,000 sq ft'
    }
  ];

  const categories = ['all', 'Commercial', 'Residential', 'Industrial'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-medium mb-6">Our Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing excellence in construction across residential, commercial, and industrial sectors
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  filter === category
                    ? 'bg-accent text-white'
                    : 'bg-muted text-foreground hover:bg-accent/10'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="relative h-64">
                  <ImageWithFallback
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent text-white">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Completed: {project.completion}</span>
                    <span>{project.size}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
