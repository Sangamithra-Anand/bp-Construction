import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { ServicesPage } from "./components/pages/ServicesPage";
import { ProjectsPage } from "./components/pages/ProjectsPage";
import { TestimonialsPage } from "./components/pages/TestimonialsPage";
import { CareersPage } from "./components/pages/CareersPage";
import { BlogPage } from "./components/pages/BlogPage";
import { ContactPage } from "./components/pages/ContactPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onPageChange={setCurrentPage} />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage onPageChange={setCurrentPage} />;
      case "projects":
        return <ProjectsPage />;
      case "testimonials":
        return <TestimonialsPage />;
      // case "careers":
      //   return <CareersPage onPageChange={setCurrentPage} />;
      case "blog":
        return <BlogPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}