import { useState } from "react";
import { ChevronLeft, ChevronRight, Grid, Square } from "lucide-react";

interface GalleryItemType {
  src: string;
  alt: string;
  label: string;
  gridSpanClass: string;
  aspectRatio: string;
}

const GALLERY_IMAGES: GalleryItemType[] = [
  {
    src: "https://images.unsplash.com/photo-1604293679030-7cfcd7174ab1?w=1000&h=1300&fit=crop&auto=format",
    alt: "Wooden lounge chairs on a pristine beach at dusk",
    label: "Sinking Sun over the Kalpitiya Lagoon",
    gridSpanClass: "col-span-12 md:col-span-4",
    aspectRatio: "3/4",
  },
  {
    src: "https://images.unsplash.com/photo-1615880480595-f5f9b4fb530e?w=1000&h=1200&fit=crop&auto=format",
    alt: "Overwater villa with white furnishings above crystal waters",
    label: "The Raw Minimalism of Our Ocean-Front Pavilions",
    gridSpanClass: "col-span-12 md:col-span-4",
    aspectRatio: "3/4",
  },
  {
    src: "https://images.unsplash.com/photo-1741311181553-f54521088e5d?w=1000&h=800&fit=crop&auto=format",
    alt: "Open-air restaurant table set at sunset with lagoon views beyond",
    label: "Lagoon-Side Dining Under the Palm Canopy",
    gridSpanClass: "col-span-12 md:col-span-4",
    aspectRatio: "4/3",
  },
  {
    src: "https://images.unsplash.com/photo-1779002133817-a4beae69a4ba?w=1000&h=800&fit=crop&auto=format",
    alt: "Woman in white robe relaxing poolside surrounded by tropical foliage",
    label: "Holistic Rejuvenation at the Ayurvedic Spa House",
    gridSpanClass: "col-span-12 md:col-span-6",
    aspectRatio: "16/9",
  },
  {
    src: "https://images.unsplash.com/photo-1607672996533-98ec2fb71625?w=1200&h=800&fit=crop&auto=format",
    alt: "Wooden jetty stretching over the calm blue sea",
    label: "Quiet Morning Paths to the Water's Edge",
    gridSpanClass: "col-span-12 md:col-span-6",
    aspectRatio: "16/10",
  },
  {
    src: "https://images.unsplash.com/photo-1648819955157-a9a96e307d56?w=1000&h=1200&fit=crop&auto=format",
    alt: "Aerial view of the forested Kalpitiya coastline",
    label: "Bespoke Overwater Sanctuary Architecture",
    gridSpanClass: "col-span-12 md:col-span-12",
    aspectRatio: "21/9",
  },
];

export default function Gallery() {
  const [viewMode, setViewMode] = useState<"grid" | "single">("grid");
  const [singleIndex, setSingleIndex] = useState(0);

  const handlePrev = () => {
    setSingleIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSingleIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
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
      <div className="max-w-screen-xl mx-auto px-8">
        {/* Header Title */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-4">A Visual Story</p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "0.03em",
              color: "#2A2520",
            }}
          >
            Explore Luna Laguna
          </h1>
          <div
            className="mx-auto my-6 opacity-20"
            style={{ width: 40, height: 1, backgroundColor: "#2A2520" }}
          />

          {/* Interaction Toggle */}
          <div className="flex justify-center gap-6 mt-8">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase pb-1.5 transition-all ${
                viewMode === "grid"
                  ? "border-b border-[#2A2520] text-[#2A2520] font-normal"
                  : "opacity-40 hover:opacity-75"
              }`}
            >
              <Grid size={12} />
              Grid View
            </button>
            <button
              onClick={() => setViewMode("single")}
              className={`flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase pb-1.5 transition-all ${
                viewMode === "single"
                  ? "border-b border-[#2A2520] text-[#2A2520] font-normal"
                  : "opacity-40 hover:opacity-75"
              }`}
            >
              <Square size={12} />
              Single View
            </button>
          </div>
        </div>

        {/* ── GRID VIEW ────────────────────────────────────────────────── */}
        {viewMode === "grid" ? (
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: "repeat(12, 1fr)",
            }}
          >
            {GALLERY_IMAGES.map((item, index) => (
              <div
                key={index}
                className={`${item.gridSpanClass} group relative overflow-hidden`}
                style={{
                  backgroundColor: "#C8B89A",
                  aspectRatio: item.aspectRatio,
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                />
                {/* Soft overlay on hover with label */}
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span
                    className="text-xs tracking-[0.2em] uppercase text-[#F5F2EB] font-normal mb-1 block"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {`0${index + 1} / 0${GALLERY_IMAGES.length}`}
                  </span>
                  <p
                    className="text-sm text-[#F9F6F0] tracking-[0.03em]"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 300 }}
                  >
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ── SINGLE VIEW ───────────────────────────────────────────────── */
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            {/* Navigation Carousel Frame */}
            <div className="relative w-full overflow-hidden bg-[#C8B89A] aspect-[16/10] flex items-center justify-center">
              <img
                src={GALLERY_IMAGES[singleIndex].src}
                alt={GALLERY_IMAGES[singleIndex].alt}
                className="w-full h-full object-cover transition-all duration-700 animate-fade-in"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-6 w-12 h-12 flex items-center justify-center bg-[#F5F2EB]/80 text-[#2A2520] hover:bg-[#F5F2EB] transition-all hover:scale-[1.05]"
                style={{ borderRadius: 0 }}
              >
                <ChevronLeft size={20} />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-6 w-12 h-12 flex items-center justify-center bg-[#F5F2EB]/80 text-[#2A2520] hover:bg-[#F5F2EB] transition-all hover:scale-[1.05]"
                style={{ borderRadius: 0 }}
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Label and Info */}
            <div className="w-full mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <span className="text-[10px] tracking-[0.28em] uppercase opacity-40 mb-2 block">
                  Image Label
                </span>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 300,
                    fontSize: "1.4rem",
                    color: "#2A2520",
                    letterSpacing: "0.02em",
                  }}
                >
                  {GALLERY_IMAGES[singleIndex].label}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-sm tracking-[0.25em] font-normal" style={{ color: "#2A2520" }}>
                  {`0${singleIndex + 1}`}
                </span>
                <span className="text-sm tracking-[0.25em] opacity-30">
                  {` / 0${GALLERY_IMAGES.length}`}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
