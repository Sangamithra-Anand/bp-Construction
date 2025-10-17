import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export function Footer({ onPageChange }: FooterProps) {
  const navigation = {
    main: [
      { name: 'About Us', href: 'about' },
      { name: 'Services', href: 'services' },
      { name: 'Projects', href: 'projects' },
      { name: 'Careers', href: 'careers' },
      { name: 'Blog', href: 'blog' },
      { name: 'Contact', href: 'contact' },
    ],
    services: [
      { name: 'Residential Construction' },
      { name: 'Commercial Projects' },
      { name: 'Industrial Solutions' },
      { name: 'Infrastructure Development' },
      { name: 'Project Management' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: (props: any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: (props: any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        ),
      },
      {
        name: 'Twitter',
        href: '#',
        icon: (props: any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
    ],
  };

  return (
    <footer className="bg-[#0A2540]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-20 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-[#FF6B35]">
                <span className="text-sm font-bold text-white">BP</span>
              </div>
              <span className="ml-3 text-xl font-medium text-white">BP Construction</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-300">
              Building excellence since 1985. Your trusted construction partner for residential, commercial, and industrial projects.
            </p>
            <div className="mt-6 flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-200">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold leading-6 text-white">Quick Links</h3>
            <ul role="list" className="mt-4 space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => onPageChange(item.href)}
                    className="text-sm leading-6 text-gray-300 hover:text-[#FF6B35] transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
            <ul role="list" className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <span className="text-sm leading-6 text-gray-300">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold leading-6 text-white">Stay Updated</h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              Get industry insights and company updates.
            </p>
            <form className="mt-4 flex flex-col gap-3">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:bg-white/10 focus:ring-2 focus:ring-inset focus:ring-[#FF6B35]"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md bg-[#FF6B35] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#E55A28] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6B35] transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs leading-5 text-gray-400">
              &copy; 2025 BP Construction. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <span className="inline-flex items-center rounded-full bg-[#FF6B35]/10 px-2.5 py-1 text-xs font-medium text-[#FF6B35] ring-1 ring-inset ring-[#FF6B35]/20">
                ISO 9001 Certified
              </span>
              <span className="inline-flex items-center rounded-full bg-[#FF6B35]/10 px-2.5 py-1 text-xs font-medium text-[#FF6B35] ring-1 ring-inset ring-[#FF6B35]/20">
                OSHA Compliant
              </span>
              <span className="inline-flex items-center rounded-full bg-[#FF6B35]/10 px-2.5 py-1 text-xs font-medium text-[#FF6B35] ring-1 ring-inset ring-[#FF6B35]/20">
                LEED Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
