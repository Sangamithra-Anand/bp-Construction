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

  return (
    <div className="relative bg-white shadow-md sticky top-0 z-50 border-b border-gray-200 transition-all duration-300 h-24">
      {/* Pop-out Logo */}
      <div className="absolute left-6 -top-10 z-30">
        <img
          src="/bp_logo.jpg"
          alt="BP Construction Logo"
          className="rounded-lg shadow-xl bg-white p-2"
          style={{
            height: "100px",
            width: "100px",
            objectFit: "contain"
          }}
        />
      </div>
      <Disclosure
        as="nav"
        className="w-full h-24 flex items-center"
        style={{
          fontFamily: "'Times New Roman', 'Arial Black', Arial, sans-serif",
        }}
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between h-24 transition-all duration-300 relative">
              {/* Main content (brand, nav, CTA) */}
              <div className="flex items-center h-24 ml-[110px]">
                <span
                  className="font-bold text-black text-3xl transition-all duration-300"
                  style={{
                    letterSpacing: "0.08em",
                    color: "#010203",
                  }}
                >
                  BP Construction
                </span>
                {/* Desktop Menu */}
                <div className="hidden sm:flex sm:ml-10">
                  <div className="flex">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => onPageChange(item.href)}
                        className={`flex-1 relative inline-flex items-center justify-center px-4 py-2 text-xl font-bold transition-all duration-300 nav-anim-btn whitespace-nowrap
                          ${
                            currentPage === item.href
                              ? "text-black after:w-full"
                              : "text-black opacity-80 after:w-0 hover:after:w-full"
                          }
                          after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300
                        `}
                        style={{
                          fontFamily:
                            "'Times New Roman', 'Arial Black', Arial, sans-serif",
                          color: "#010203",
                        }}
                      >
                        <span>{item.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              {/* Right Section (CTA Button) */}
              <div className="hidden sm:flex sm:items-center">
                <button
                  onClick={() => onPageChange("contact")}
                  className="bg-white border-2 border-green-500 text-green-700 font-bold text-lg px-8 py-4 rounded-full shadow-lg whitespace-nowrap hover:bg-green-500 hover:text-white transition-all duration-300"
                  style={{
                    fontFamily:
                      "'Times New Roman', 'Arial Black', Arial, sans-serif",
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
                      fontFamily:
                        "'Cooper Black', 'Arial Black', Arial, sans-serif",
                    }}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <div className="border-t border-gray-800 pt-6">
                  <button
                    onClick={() => onPageChange("contact")}
                    className="bg-white border-2 border-green-500 text-green-700 font-bold text-lg px-8 py-4 rounded-full shadow-lg whitespace-nowrap hover:bg-green-500 hover:text-white transition-all duration-300"
                    style={{
                      fontFamily:
                        "'Times New Roman', 'Arial Black', Arial, sans-serif",
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
    </div>
  );
}
