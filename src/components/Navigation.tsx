import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const navigation = [
    { name: "HOME", href: "home" },
    { name: "ABOUT US", href: "about" },
    { name: "SERVICES", href: "services" },
    { name: "PROJECTS", href: "projects" },
    { name: "BLOG", href: "blog" },
    { name: "CONTACT", href: "contact" },
  ];

  // Removed scrolled state and scroll event listener to fix nav size

  return (
    <Disclosure
      as="nav"
      className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200 transition-all duration-300 h-24"
      style={{
        fontFamily: "'Times New Roman', 'Arial Black', Arial, sans-serif",
      }}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300">
            <div className="flex items-center justify-between h-24 transition-all duration-300">
              {/* Left Section (Logo + Brand) */}
              <div className="flex items-center">
                <img
                  src="/bp_logo.jpg"
                  alt="BP Construction Logo"
                  className="logo-navbar"
                  style={{
                    transition: "height 0.3s, width 0.3s",
                    height: "80px",
                    width: "80px",
            
                  }}
                />
                <span
                  className="ml-4 font-bold text-black text-3xl transition-all duration-300"
                  style={{ letterSpacing: "0.08em",
                  color: "#010203"
                  
                  }}


                >
                  BP Construction
                </span>
                {/* Desktop Menu */}
                <div className="hidden sm:flex sm:ml-10 sm:space-x-20">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => onPageChange(item.href)}
                      className={`relative inline-flex items-center px-2 py-2 text-xl font-bold transition-all duration-300
                        ${
                          currentPage === item.href
                            ? "text-black after:w-full"
                            : "text-black opacity-80 hover:text-yellow-400 after:w-0 hover:after:w-full"
                        }
                        after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300
                      `}
                      style={{
                        fontFamily: "'Times New Roman', 'Arial Black', Arial, sans-serif",
                        color:"#010203"
                      }}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
              {/* Right Section (CTA Button) */}
              <div className="hidden sm:flex sm:items-center">
                <button
                  onClick={() => onPageChange("contact")}
                  className="inline-flex items-center rounded-lg bg-black px-8 py-4 text-lg font-bold text-black shadow-md hover:bg-yellow-300 hover:shadow-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                  style={{
                    fontFamily: "'Times New Roman', 'Arial Black', Arial, sans-serif",
                    color: "#010203"
                  }}
                >
                  Request a Quote
                </button>
              </div>
              {/* Mobile Menu Button */}
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-3 text-black hover:bg-yellow-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-inset">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          {/* Mobile Dropdown Menu */}
          <Disclosure.Panel className="sm:hidden bg-black border-t border-gray-800">
            <div className="space-y-2 pb-5 pt-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="button"
                  onClick={() => onPageChange(item.href)}
                  className={`block w-full text-left border-l-4 py-4 pl-5 pr-4 text-lg font-bold transition-colors duration-300
                    
                    ${

                      currentPage === item.href
                        ? "border-yellow-400 text-yellow-400 bg-black"
                        : "border-transparent text-white hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
                    }`}
                  style={{
                    fontFamily: "'Cooper Black', 'Arial Black', Arial, sans-serif",
                  }}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="border-t border-gray-800 pt-6">
                <button
                  onClick={() => onPageChange("contact")}
                  className="ml-4 inline-flex items-center rounded-xl bg-yellow-400 px-7 py-3 text-lg font-bold text-black shadow-md hover:bg-yellow-300 hover:shadow-lg hover:scale-105 transition-all duration-300"
                  style={{
                    fontFamily: "'Cooper Black', 'Arial Black', Arial, sans-serif",
                  }}
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
