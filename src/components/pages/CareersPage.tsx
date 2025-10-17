import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

interface CareersPageProps {
  onPageChange: (page: string) => void;
}

export function CareersPage({ onPageChange }: CareersPageProps) {
  const positions = [
    {
      title: 'Project Manager',
      department: 'Operations',
      location: 'On-site',
      type: 'Full-time',
      description: 'Lead construction projects from planning through completion, ensuring quality, safety, and timely delivery.',
      requirements: ['5+ years project management experience', 'Construction industry background', 'PMP certification preferred', 'Strong leadership skills']
    },
    {
      title: 'Site Supervisor',
      department: 'Operations',
      location: 'On-site',
      type: 'Full-time',
      description: 'Oversee daily construction activities, manage crews, and ensure compliance with safety regulations and project specifications.',
      requirements: ['3+ years construction experience', 'OSHA 30 certification', 'Team management skills', 'Strong communication abilities']
    },
    {
      title: 'Civil Engineer',
      department: 'Engineering',
      location: 'Hybrid',
      type: 'Full-time',
      description: 'Design and oversee construction projects, prepare technical drawings, and ensure structural integrity and code compliance.',
      requirements: ['Bachelor\'s degree in Civil Engineering', 'PE license preferred', '3+ years experience', 'AutoCAD proficiency']
    },
    {
      title: 'Estimator',
      department: 'Pre-Construction',
      location: 'Office',
      type: 'Full-time',
      description: 'Prepare accurate cost estimates for construction projects, analyze bid documents, and support the proposal process.',
      requirements: ['Construction estimating experience', 'Knowledge of construction methods', 'Strong analytical skills', 'Proficient in estimating software']
    },
    {
      title: 'Safety Manager',
      department: 'Safety & Compliance',
      location: 'On-site',
      type: 'Full-time',
      description: 'Develop and implement safety programs, conduct site inspections, and ensure OSHA compliance across all projects.',
      requirements: ['OSHA certification required', 'Safety management experience', 'Knowledge of construction regulations', 'Training and presentation skills']
    },
    {
      title: 'Skilled Carpenter',
      department: 'Field Operations',
      location: 'On-site',
      type: 'Full-time',
      description: 'Perform skilled carpentry work on residential and commercial projects, read blueprints, and maintain quality standards.',
      requirements: ['5+ years carpentry experience', 'Ability to read blueprints', 'Own tools preferred', 'Valid driver\'s license']
    }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries with performance bonuses and profit sharing opportunities.'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive medical, dental, and vision insurance for you and your family.'
    },
    {
      title: 'Retirement Plans',
      description: '401(k) with company match to help you plan for your future.'
    },
    {
      title: 'Professional Development',
      description: 'Training programs, certifications, and career advancement opportunities.'
    },
    {
      title: 'Work-Life Balance',
      description: 'Generous PTO, paid holidays, and flexible work arrangements where applicable.'
    },
    {
      title: 'Safety First',
      description: 'State-of-the-art safety equipment and comprehensive training programs.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-medium mb-6">Join Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Build your career with a company that values excellence, safety, and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">Why Work With Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At BP Construction, we invest in our people and create an environment where talent thrives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground">
              Explore current opportunities to join our growing team
            </p>
          </div>
          <div className="space-y-6">
            {positions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-medium mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{position.department}</Badge>
                        <Badge variant="outline">{position.location}</Badge>
                        <Badge variant="outline">{position.type}</Badge>
                      </div>
                    </div>
                    <button
                      onClick={() => onPageChange('contact')}
                      className="rounded-lg bg-accent px-6 py-2 font-medium text-white hover:bg-accent/90 transition-colors duration-200 whitespace-nowrap"
                    >
                      Apply Now
                    </button>
                  </div>
                  <p className="text-muted-foreground mb-4">{position.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, reqIdx) => (
                        <li key={reqIdx} className="flex items-start text-sm text-muted-foreground">
                          <span className="text-accent mr-2">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium text-white mb-4">Don't See the Right Position?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
          </p>
          <button
            onClick={() => onPageChange('contact')}
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-medium text-white shadow-sm transition-all duration-200 hover:bg-primary/90"
          >
            Submit Your Resume
          </button>
        </div>
      </section>
    </div>
  );
}
