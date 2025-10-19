import { ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  HomeIcon,
  BuildingOfficeIcon,
  CogIcon,
} from "@heroicons/react/24/outline";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
  const services = [
    {
      name: "RESIDENTIAL CONSTRUCTION",
      description:
        "Custom homes, renovations, and residential developments built to exceed expectations.",
      icon: HomeIcon,
    },
    {
      name: "COMMERCIAL PROJECTS",
      description:
        "Office buildings, retail spaces, and commercial complexes designed for success.",
      icon: BuildingOfficeIcon,
    },
    {
      name: "INDUSTRIAL SOLUTIONS",
      description:
        "Manufacturing facilities, warehouses, and industrial infrastructure projects.",
      icon: CogIcon,
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Skyline Plaza",
      category: "Commercial",
      imageUrl:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Heritage Homes",
      category: "Residential",
      imageUrl:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Tech Hub Campus",
      category: "Industrial",
      imageUrl:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    },
  ];

  const testimonials = [
    {
      body: "BP Construction delivered our office complex on time and within budget. Their attention to detail is exceptional.",
      author: {
        name: "Sarah Johnson",
        handle: "CEO",
        company: "Tech Solutions Inc.",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108755-2616b9c3f066?w=100&h=100&fit=crop&crop=face",
      },
    },
    {
      body: "Outstanding craftsmanship and professional service. Our custom home exceeded all expectations.",
      author: {
        name: "Mike Rodriguez",
        handle: "Homeowner",
        company: "Heritage Homes Development",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      },
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        {/* Background Image */}
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop"
          alt="Modern construction project"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

        <div className="mx-auto max-w-4xl px-6 py-32 sm:py-48 lg:py-56 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg">
              Building Tomorrow's Infrastructure Today
            </h1>
            <p className="mt-6 text-lg leading-8 text-white drop-shadow-md">
              Professional construction services with 40+ years of excellence in
              residential, commercial, and industrial projects.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={() => onPageChange("projects")}
                className="rounded-md bg-[#FF6B35] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#E55A28] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6B35] transition-colors duration-200"
              >
                View Our Work
              </button>
              <button
                onClick={() => onPageChange("contact")}
                className="text-sm font-semibold leading-6 text-white hover:text-[#FF6B35] transition-colors duration-200"
              >
                Get a Quote <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Company Brief */}
      <div className="bg-[#F1F5F9] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-[#FF6B35]">
              Excellence Since 1985
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl">
              Crafting Trust Through Every Brick
            </p>
            <p className="mt-6 text-lg leading-8 text-[#4A5568]">
              BP Construction leads the way in redefining construction
              excellence, creating enduring projects that reflect quality,
              innovation, and precision. Our steadfast commitment to superior
              craftsmanship and client satisfaction continues to set us apart as
              an industry leader
            </p>
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-[#FF6B35]">
              Our Services
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl">
              Comprehensive solutions
            </p>
            <p className="mt-6 text-lg leading-8 text-[#4A5568]">
              Tailored to your needs with decades of expertise
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#0A2540]">
                    <service.icon
                      className="h-5 w-5 flex-none text-[#FF6B35]"
                      aria-hidden="true"
                    />
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-[#4A5568]">
                    <p className="flex-auto">{service.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-16 flex justify-center">
              <button
                onClick={() => onPageChange("services")}
                className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-[#0A2540] shadow-sm ring-1 ring-inset ring-[#0A2540] hover:bg-[#F1F5F9] transition-colors duration-200"
              >
                View All Services
                <ChevronRightIcon
                  className="-mr-0.5 h-5 w-5"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <section style={{ backgroundColor: "#DAF0F7" }} className="py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          Why BP Construction?
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 text-center">
          <div>
            <div className="text-4xl font-bold text-black">17+</div>
            <div className="mt-2 text-base text-black">Years of Experience</div>
            <div className="mt-6 text-4xl font-bold text-black">4000+</div>
            <div className="mt-2 text-base text-black">
              Construction Workers
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-black">1300+</div>
            <div className="mt-2 text-base text-black">Completed Projects</div>
            <div className="mt-6 text-4xl font-bold text-black">8</div>
            <div className="mt-2 text-base text-black">
              Offices
              <br />
              in 5 Cities
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-black">300+</div>
            <div className="mt-2 text-base text-black">Ongoing Projects</div>
            <div className="mt-6 text-4xl font-bold text-black">10</div>
            <div className="mt-2 text-base text-black">
              Years Structural Warranty
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-black">350+</div>
            <div className="mt-2 text-base text-black">Full Time Employees</div>
            <div className="mt-6 text-4xl font-bold text-black">425+</div>
            <div className="mt-2 text-base text-black">Quality Checks</div>
          </div>
        </div>
      </section>


      {/* Latest Projects */}
      <div className="bg-[#F1F5F9] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl">
              Recent Projects
            </h2>
            <p className="mt-2 text-lg leading-8 text-[#4A5568]">
              Showcasing our latest construction achievements
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <ImageWithFallback
                  src={project.imageUrl}
                  alt={project.title}
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <div className="mr-8">{project.category}</div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <span className="absolute inset-0" />
                  {project.title}
                </h3>
              </article>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => onPageChange("projects")}
              className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-[#0A2540] shadow-sm ring-1 ring-inset ring-[#0A2540] hover:bg-white/70 transition-colors duration-200"
            >
              View All Projects
              <ChevronRightIcon
                className="-mr-0.5 h-5 w-5"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#FF6B35]">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl">
              What Our Clients Say
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-2">
              {testimonials.map((testimonial, testimonialIdx) => (
                <div
                  key={testimonialIdx}
                  className="pt-8 sm:inline-block sm:w-full sm:px-4"
                >
                  <figure className="rounded-2xl bg-[#F1F5F9] p-8 text-sm leading-6">
                    <blockquote className="text-[#4A5568]">
                      <p>{"${testimonial.body}"}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <ImageWithFallback
                        className="h-10 w-10 rounded-full bg-[#F1F5F9]"
                        src={testimonial.author.imageUrl}
                        alt={testimonial.author.name}
                      />
                      <div>
                        <div className="font-semibold text-[#0A2540]">
                          {testimonial.author.name}
                        </div>
                        <div className="text-[#64748B]">
                          {`${testimonial.author.handle}, ${testimonial.author.company}`}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-[#FF6B35]">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Dream?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90">
              Let's discuss how we can bring your construction vision to life.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={() => onPageChange("contact")}
                className="rounded-md bg-[#0A2540] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0D2F54] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2540] transition-colors duration-200"
              >
                Get a Quote Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
