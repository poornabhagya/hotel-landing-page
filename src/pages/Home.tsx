import React from "react";
import UnderlineLink from "../components/ui/UnderlineLink";
import MapLocation from "../components/ui/MapLocation";

const HERO_IMG = "https://images.unsplash.com/photo-1460627390041-532a28402358?w=2400&h=1400&fit=crop&auto=format";
const SUITE_IMG = "https://images.unsplash.com/photo-1557750505-e7b4d1c40410?w=1200&h=1600&fit=crop&auto=format";
const DINING_IMG = "https://images.unsplash.com/photo-1741311181553-f54521088e5d?w=800&h=700&fit=crop&auto=format";
const SPA_IMG = "https://images.unsplash.com/photo-1779002133817-a4beae69a4ba?w=800&h=700&fit=crop&auto=format";
const KITE_IMG = "https://images.unsplash.com/photo-1706721743307-8f3697f04c54?w=800&h=700&fit=crop&auto=format";
const GALLERY_1 = "https://images.unsplash.com/photo-1604293679030-7cfcd7174ab1?w=600&h=800&fit=crop&auto=format";
const GALLERY_2 = "https://images.unsplash.com/photo-1607672996533-98ec2fb71625?w=800&h=500&fit=crop&auto=format";
const GALLERY_3 = "https://images.unsplash.com/photo-1615880480595-f5f9b4fb530e?w=600&h=700&fit=crop&auto=format";
const GALLERY_4 = "https://images.unsplash.com/photo-1586611292717-f828b167408c?w=800&h=600&fit=crop&auto=format";
const GALLERY_5 = "https://images.unsplash.com/photo-1648819955157-a9a96e307d56?w=700&h=900&fit=crop&auto=format";

interface HomeProps {
  onNavigate: (page: "home" | "gallery" | "accommodation" | "contact" | "experience" | "reserve") => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const handleNav = (e: React.MouseEvent, page: "home" | "gallery" | "accommodation" | "contact" | "experience" | "reserve") => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative w-full" style={{ height: "100vh" }}>
        <img
          src={HERO_IMG}
          alt="Aerial view of the Kalpitiya lagoon at sunrise, with coconut palms reflecting on still turquoise water"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ backgroundColor: "#C8B89A" }}
        />
        {/* Subtle gradient veil at bottom for compositional transition */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "22%",
            background: "linear-gradient(to bottom, transparent, rgba(245,242,235,0.55))",
          }}
        />
        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60"
          style={{ color: "#F9F6F0" }}
        >
          <span className="text-[10px] tracking-[0.28em] uppercase">Scroll</span>
          <div
            className="w-px"
            style={{
              height: 40,
              background: "linear-gradient(to bottom, rgba(249,246,240,0.8), transparent)",
            }}
          />
        </div>
      </section>

      {/* ── WELCOME ─────────────────────────────────────────────────────── */}
      <section
        className="mx-auto text-center animate-fade-in"
        style={{ maxWidth: 680, padding: "120px 32px 96px" }}
      >
        <p
          className="text-xs tracking-[0.3em] uppercase mb-8 opacity-50"
          style={{ letterSpacing: "0.3em" }}
        >
          Kalpitiya · Sri Lanka
        </p>
        <h1
          className="mb-10"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 300,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1.25,
            letterSpacing: "0.03em",
            color: "#2A2520",
          }}
        >
          Luna Laguna
        </h1>
        <div
          className="mx-auto mb-10 opacity-25"
          style={{ width: 48, height: 1, backgroundColor: "#2A2520" }}
        />
        <p
          className="leading-loose"
          style={{
            fontSize: "0.95rem",
            lineHeight: 2,
            color: "#3D3530",
            fontWeight: 300,
            letterSpacing: "0.02em",
          }}
        >
          A sanctuary where the lagoon meets the ocean. Experience a raw,
          untouched coastal paradise — reimagined with modern luxury and
          timeless serenity. Between the shimmering Kalpitiya lagoon and
          the Indian Ocean, time slows, and the extraordinary becomes
          effortlessly simple.
        </p>
      </section>

      {/* ── ACCOMMODATION TEASER ────────────────────────────────────────── */}
      <section
        className="max-w-screen-xl mx-auto px-8"
        style={{ paddingBottom: "120px" }}
      >
        <div className="grid md:grid-cols-2 gap-0 items-stretch">
          {/* Image – left, slightly taller */}
          <div className="relative overflow-hidden" style={{ minHeight: 560, backgroundColor: "#C8B89A" }}>
            <img
              src={SUITE_IMG}
              alt="Overwater villa with infinity pool merging into the lagoon horizon at golden hour"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          {/* Text – right, centered vertically */}
          <div
            className="flex flex-col justify-center"
            style={{
              padding: "64px 64px 64px 72px",
              backgroundColor: "#F9F6F0",
            }}
          >
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6 opacity-40"
            >
              Accommodation
            </p>
            <h2
              className="mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 300,
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                lineHeight: 1.3,
                color: "#2A2520",
                letterSpacing: "0.02em",
              }}
            >
              Villas &amp; Suites<br />
              <em>Above the Lagoon</em>
            </h2>
            <p
              className="mb-10 leading-loose"
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.95,
                color: "#5A5048",
                fontWeight: 300,
                maxWidth: 360,
              }}
            >
              Each of our eleven private villas and suites is conceived as a
              study in serene restraint — open pavilions, bespoke furniture
              crafted from reclaimed teak, and unobstructed views across the
              still water. Absolute privacy. Absolute calm.
            </p>
            <div className="flex flex-col gap-4">
              <UnderlineLink href="#" onClick={(e) => handleNav(e, "accommodation")}>
                View All Accommodation
              </UnderlineLink>
              <UnderlineLink href="#" onClick={(e) => handleNav(e, "reserve")}>
                Book Now
              </UnderlineLink>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCES GRID ────────────────────────────────────────────── */}
      <section id="experience" style={{ padding: "0 0 120px" }}>
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-5">
              Curated Offerings
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 300,
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                letterSpacing: "0.03em",
                color: "#2A2520",
              }}
            >
              Experiences &amp; Dining
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <ExperienceCard
              img={DINING_IMG}
              alt="Open-air restaurant table set at sunset with lagoon views beyond"
              label="Dining"
              title="Lagoon-side Cuisine"
              desc="Each meal is a meditation — local seafood, ancient spice routes, and the fragrance of frangipani in the salt air. Our kitchen celebrates the bounty of Kalpitiya with quiet confidence."
              onClick={(e) => handleNav(e, "experience")}
            />
            <ExperienceCard
              img={SPA_IMG}
              alt="Woman in white robe relaxing poolside surrounded by tropical foliage"
              label="Wellness"
              title="Coastal Rejuvenation"
              desc="Ayurvedic rituals rooted in centuries of Sri Lankan tradition, practised in open-air pavilions facing the lagoon. Pure silence. Pure restoration."
              onClick={(e) => handleNav(e, "experience")}
            />
            <ExperienceCard
              img={KITE_IMG}
              alt="Kites soaring above turquoise tropical lagoon waters"
              label="Experiences"
              title="Wild Kalpitiya"
              desc="Kitesurf across warm lagoon waters, join a dawn dolphin cruise, or glide through mangrove channels by canoe. The wild peninsula is your private playground."
              onClick={(e) => handleNav(e, "experience")}
            />
          </div>
        </div>
      </section>

      {/* ── GALLERY ─────────────────────────────────────────────────────── */}
      <section style={{ padding: "0 0 120px" }}>
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-5">
              A Visual Story
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 300,
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                letterSpacing: "0.03em",
                color: "#2A2520",
              }}
            >
              Gallery
            </h2>
          </div>

          {/* Staggered masonry grid */}
          <div
            className="grid gap-3"
            style={{
              gridTemplateColumns: "repeat(12, 1fr)",
              gridTemplateRows: "auto",
            }}
          >
            <GalleryItem
              src={GALLERY_1}
              alt="Wooden lounge chairs on a pristine beach at dusk"
              style={{ gridColumn: "1 / 4", gridRow: "1 / 3", aspectRatio: "3/4" }}
            />
            <GalleryItem
              src={GALLERY_2}
              alt="Wooden jetty stretching over the calm blue sea"
              style={{ gridColumn: "4 / 9", gridRow: "1 / 2", aspectRatio: "16/9" }}
            />
            <GalleryItem
              src={GALLERY_3}
              alt="Overwater villa with white furnishings above crystal waters"
              style={{ gridColumn: "9 / 13", gridRow: "1 / 2", aspectRatio: "4/5" }}
            />
            <GalleryItem
              src={GALLERY_4}
              alt="Poolside lounge chairs reflected in still turquoise water"
              style={{ gridColumn: "4 / 7", gridRow: "2 / 3", aspectRatio: "4/3" }}
            />
            <GalleryItem
              src={GALLERY_5}
              alt="Aerial view of the forested Kalpitiya coastline"
              style={{ gridColumn: "7 / 13", gridRow: "2 / 3", aspectRatio: "16/9" }}
            />
          </div>

          <div className="text-center mt-10">
            <UnderlineLink href="#" onClick={(e) => handleNav(e, "gallery")}>
              View Full Gallery
            </UnderlineLink>
          </div>
        </div>
      </section>

      {/* Standalone Map Location section */}
      <MapLocation/>
    </>
  );
}

/* ── Home Page Sub-components ────────────────────────────────────────────── */

function ExperienceCard({
  img,
  alt,
  label,
  title,
  desc,
  onClick,
}: {
  img: string;
  alt: string;
  label: string;
  title: string;
  desc: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <div className="flex flex-col">
      <div
        className="overflow-hidden mb-7"
        style={{ aspectRatio: "4/3", backgroundColor: "#C8B89A" }}
      >
        <img
          src={img}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]"
        />
      </div>
      <p className="text-xs tracking-[0.28em] uppercase opacity-40 mb-3">{label}</p>
      <h3
        className="mb-4"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 300,
          fontSize: "1.2rem",
          letterSpacing: "0.02em",
          color: "#2A2520",
        }}
      >
        {title}
      </h3>
      <p
        className="mb-6 flex-1"
        style={{
          fontSize: "0.8rem",
          lineHeight: 1.95,
          color: "#5A5048",
          fontWeight: 300,
        }}
      >
        {desc}
      </p>
      <UnderlineLink href="#" onClick={onClick}>
        Discover More
      </UnderlineLink>
    </div>
  );
}

function GalleryItem({
  src,
  alt,
  style,
}: {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="overflow-hidden"
      style={{ ...style, backgroundColor: "#C8B89A", width: "100%", height: "100%" }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]"
      />
    </div>
  );
}
