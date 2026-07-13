import { useState } from "react";
import { ChevronDown, Coffee, Compass, Sun } from "lucide-react";
import UnderlineLink from "../components/ui/UnderlineLink";

interface AccommodationProps {
  onNavigate: (page: "home" | "gallery" | "accommodation" | "contact" | "experience" | "reserve") => void;
}

export default function Accommodation({ onNavigate }: AccommodationProps) {
  const [sortByOpen, setSortByOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Recommended");

  const sortOptions = ["Recommended", "Size (Large to Small)", "Price: Exclusive First"];

  const handleSortSelect = (option: string) => {
    setSelectedSort(option);
    setSortByOpen(false);
  };

  const handleCheckAvailability = (e: React.MouseEvent, roomType: string) => {
    e.preventDefault();
    onNavigate("reserve");
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#F5F2EB",
        color: "#222222",
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 300,
        paddingTop: "140px",
        paddingBottom: "120px",
      }}
    >
      {/* ── SECTION A: OVERVIEW ────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-8 mb-20">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-4">Sanctuaries of Rest</p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "0.03em",
              color: "#2A2520",
              lineHeight: 1.25,
            }}
          >
            Accommodation at Luna Laguna
          </h1>
          <div
            className="mx-auto my-6 opacity-20"
            style={{ width: 40, height: 1, backgroundColor: "#2A2520" }}
          />
          <p
            className="leading-loose text-[#3D3530]"
            style={{
              fontSize: "0.95rem",
              lineHeight: 2,
              letterSpacing: "0.02em",
            }}
          >
            Where the stillness of the Kalpitiya lagoon meets the untamed luxury of the Indian Ocean.
            Our pavilions and suites are conceived as personal sanctuaries—crafted from reclaimed teak,
            local stone, and vast glass facades that dissolve the boundary between indoors and the
            coastal wilderness.
          </p>
        </div>

        {/* 'All Stays Include' Grid */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.2rem",
                letterSpacing: "0.05em",
                color: "#2A2520",
                fontWeight: 300,
              }}
            >
              Inclusive Luxuries
            </h3>
            <div className="w-10 h-px bg-[#2A2520]/25 mx-auto mt-3" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center max-w-screen-lg mx-auto">
            {/* Column 1 */}
            <div className="flex flex-col items-center px-4">
              <div className="w-12 h-12 flex items-center justify-center border border-[#2A2520]/10 mb-6 text-[#2A2520]">
                <Coffee size={18} strokeWidth={1.5} />
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  lineHeight: 1.8,
                  color: "#5A5048",
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                }}
              >
                Bespoke daily breakfast served in your pavilion or by the lagoon water.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center px-4">
              <div className="w-12 h-12 flex items-center justify-center border border-[#2A2520]/10 mb-6 text-[#2A2520]">
                <Compass size={18} strokeWidth={1.5} />
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  lineHeight: 1.8,
                  color: "#5A5048",
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                }}
              >
                A complimentary private guided lagoon safari upon check-in.
              </p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center px-4">
              <div className="w-12 h-12 flex items-center justify-center border border-[#2A2520]/10 mb-6 text-[#2A2520]">
                <Sun size={18} strokeWidth={1.5} />
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  lineHeight: 1.8,
                  color: "#5A5048",
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                }}
              >
                All-day access to the ocean-front wellness pavilion and sunset yoga sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-[#2A2520]/10 max-w-screen-xl mx-auto my-16 px-8" />

      {/* ── SECTION B: LISTINGS & FILTERS ──────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-8">
        {/* Listings Header & Filter Dropdown */}
        <div className="flex justify-between items-center mb-10 pb-4 border-b border-[#2A2520]/10">
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.5rem",
              fontWeight: 300,
              color: "#2A2520",
            }}
          >
            Sanctuary Offerings
          </h2>

          {/* Sorting Dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortByOpen(!sortByOpen)}
              className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-normal text-[#2A2520] hover:opacity-75 transition-opacity"
            >
              Sort By: {selectedSort}
              <ChevronDown size={12} className={`transition-transform duration-300 ${sortByOpen ? "rotate-180" : ""}`} />
            </button>

            {sortByOpen && (
              <div
                className="absolute right-0 mt-3 w-56 z-20 flex flex-col shadow-lg border border-[#2A2520]/10"
                style={{ backgroundColor: "#F9F6F0" }}
              >
                {sortOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSortSelect(opt)}
                    className="w-full text-left px-5 py-3 text-[10px] tracking-[0.18em] uppercase hover:bg-[#F5F2EB] transition-colors border-b border-[#2A2520]/5 last:border-b-0"
                    style={{ color: "#2A2520", fontWeight: 300 }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Card 1: Villa */}
          <div className="flex flex-col bg-[#F9F6F0] border border-[#2A2520]/5 group">
            {/* Image */}
            <div className="overflow-hidden aspect-[16/10]" style={{ backgroundColor: "#C8B89A" }}>
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1000&h=650&fit=crop&auto=format"
                alt="Luxury Lagoon-Front Pavilion with private deck"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
              />
            </div>
            {/* Body */}
            <div className="p-8 md:p-10 flex flex-col flex-1">
              <span className="text-[10px] tracking-[0.3em] uppercase opacity-40 mb-3 block">
                VILLA
              </span>
              <h3
                className="mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 300,
                  fontSize: "1.6rem",
                  letterSpacing: "0.02em",
                  color: "#2A2520",
                }}
              >
                Lagoon-Front Pavilion
              </h3>
              <p
                className="mb-8 leading-loose text-sm flex-grow"
                style={{
                  color: "#5A5048",
                  fontWeight: 300,
                }}
              >
                A 120-square-meter private sanctuary elevated right on the edge of the calm lagoon.
                Features a private plunge pool, outdoor rain shower, and a minimalist timber deck
                perfect for sunset contemplation.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-auto">
                <button
                  onClick={(e) => handleCheckAvailability(e, "Villa")}
                  className="px-6 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-200"
                  style={{
                    backgroundColor: "#2A2520",
                    color: "#F5F2EB",
                    borderRadius: 0,
                  }}
                >
                  Check Availability
                </button>
                <UnderlineLink href="#" onClick={(e) => handleCheckAvailability(e, "Villa")}>
                  Discover More
                </UnderlineLink>
              </div>
            </div>
          </div>

          {/* Card 2: Suite */}
          <div className="flex flex-col bg-[#F9F6F0] border border-[#2A2520]/5 group">
            {/* Image */}
            <div className="overflow-hidden aspect-[16/10]" style={{ backgroundColor: "#C8B89A" }}>
              <img
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1000&h=650&fit=crop&auto=format"
                alt="Elegant Ocean Breeze Suite interior"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
              />
            </div>
            {/* Body */}
            <div className="p-8 md:p-10 flex flex-col flex-1">
              <span className="text-[10px] tracking-[0.3em] uppercase opacity-40 mb-3 block">
                SUITE
              </span>
              <h3
                className="mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 300,
                  fontSize: "1.6rem",
                  letterSpacing: "0.02em",
                  color: "#2A2520",
                }}
              >
                Ocean Breeze Suite
              </h3>
              <p
                className="mb-8 leading-loose text-sm flex-grow"
                style={{
                  color: "#5A5048",
                  fontWeight: 300,
                }}
              >
                Perched gently against the coastal dunes, offering panoramic ocean views.
                Designed with sweeping high ceilings, organic linen drapery, and a secluded private
                courtyard.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-auto">
                <button
                  onClick={(e) => handleCheckAvailability(e, "Suite")}
                  className="px-6 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-200"
                  style={{
                    backgroundColor: "#2A2520",
                    color: "#F5F2EB",
                    borderRadius: 0,
                  }}
                >
                  Check Availability
                </button>
                <UnderlineLink href="#" onClick={(e) => handleCheckAvailability(e, "Suite")}>
                  Discover More
                </UnderlineLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
