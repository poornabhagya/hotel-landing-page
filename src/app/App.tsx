import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Accommodation from "../pages/Accommodation";
import Experience from "../pages/Experience";
import ContactUs from "../pages/ContactUs";
import Reserve from "../pages/Reserve";

export type PageType = "home" | "gallery" | "accommodation" | "contact" | "experience" | "reserve";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  // Automatically scroll to the top of the window on page transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [currentPage]);

  return (
    <div
      className="min-h-screen flex flex-col justify-between"
      style={{
        backgroundColor: "#F5F2EB",
        color: "#222222",
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 300,
      }}
    >
      {/* Navigation Header */}
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* Dynamic Content View Area */}
      <main className="flex-grow">
        {currentPage === "home" && <Home onNavigate={setCurrentPage} />}
        {currentPage === "gallery" && <Gallery />}
        {currentPage === "accommodation" && <Accommodation onNavigate={setCurrentPage} />}
        {currentPage === "experience" && <Experience onNavigate={setCurrentPage} />}
        {currentPage === "contact" && <ContactUs />}
        {currentPage === "reserve" && <Reserve />}
      </main>

      {/* Footer Layout wrapper */}
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
