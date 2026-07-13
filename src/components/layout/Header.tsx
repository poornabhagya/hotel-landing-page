import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: "home" | "gallery" | "accommodation" | "contact" | "experience" | "reserve") => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = currentPage === "home";
  const scrolledState = !isHome || scrolled;

  const handleLinkClick = (
    e: React.MouseEvent,
    page: "home" | "gallery" | "accommodation" | "contact" | "experience" | "reserve",
    hash?: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    onNavigate(page);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const navLinks = [
    { label: "Gallery", page: "gallery" as const },
    { label: "Accommodation", page: "accommodation" as const },
    { label: "Experience", page: "experience" as const },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolledState ? "rgba(245, 242, 235, 0.96)" : "transparent",
        backdropFilter: scrolledState ? "blur(12px)" : "none",
        borderBottom: scrolledState ? "1px solid rgba(42,37,32,0.10)" : "none",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Nav links – left */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              onClick={(e) => handleLinkClick(e, link.page)}
              className={`text-xs tracking-[0.22em] uppercase transition-opacity duration-200 hover:opacity-50 ${
                currentPage === link.page ? "font-normal opacity-100 border-b border-current pb-0.5" : ""
              }`}
              style={{ color: scrolledState ? "#222222" : "#F9F6F0" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Logo – center */}
        <div className="flex-1 md:flex-none text-center md:absolute md:left-1/2 md:-translate-x-1/2">
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "home")}
            className="text-2xl tracking-[0.14em] inline-block hover:opacity-80 transition-opacity"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 300,
              letterSpacing: "0.16em",
              color: scrolledState ? "#2A2520" : "#F9F6F0",
            }}
          >
            Luna Laguna
          </a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "contact")}
            className={`hidden md:inline-block text-xs tracking-[0.22em] uppercase transition-opacity duration-200 hover:opacity-50 ${
              currentPage === "contact" ? "font-normal opacity-100 border-b border-current pb-0.5" : ""
            }`}
            style={{ color: scrolledState ? "#222222" : "#F9F6F0" }}
          >
            Contact Us
          </a>
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "reserve")}
            className="hidden md:inline-flex items-center px-5 py-2.5 text-xs tracking-[0.2em] uppercase transition-opacity duration-200 hover:opacity-75"
            style={{
              backgroundColor: "#2A2520",
              color: "#F5F2EB",
              borderRadius: 0,
            }}
          >
            Reserve
          </a>
          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: scrolledState ? "#2A2520" : "#F9F6F0" }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-8 pb-8 pt-2 flex flex-col gap-6"
          style={{ backgroundColor: "#F5F2EB" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              onClick={(e) => handleLinkClick(e, link.page)}
              className="text-xs tracking-[0.22em] uppercase"
              style={{ color: "#222222" }}
            >
              {link.label}
            </a>
          ))}
          <a
            key="Contact Us"
            href="#"
            onClick={(e) => handleLinkClick(e, "contact")}
            className="text-xs tracking-[0.22em] uppercase"
            style={{ color: "#222222" }}
          >
            Contact Us
          </a>
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "reserve")}
            className="self-start px-5 py-2.5 text-xs tracking-[0.2em] uppercase"
            style={{ backgroundColor: "#2A2520", color: "#F5F2EB", borderRadius: 0 }}
          >
            Reserve Now
          </a>
        </div>
      )}
    </header>
  );
}
