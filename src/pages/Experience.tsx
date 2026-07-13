import React from "react";
import UnderlineLink from "../components/ui/UnderlineLink";

interface ExperienceProps {
  onNavigate: (page: "home" | "gallery" | "accommodation" | "contact" | "experience" | "reserve") => void;
}

export default function Experience({ onNavigate }: ExperienceProps) {
  const handlePlanStay = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate("contact");
  };

  const handlePdfClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Experience Guide PDF is opening in a new tab...");
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
        {/* ── HERO HEADER SECTION ────────────────────────────────────────── */}
        <section className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
          <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-4">Curated Journeys</p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              letterSpacing: "0.03em",
              color: "#2A2520",
              lineHeight: 1.25,
            }}
          >
            The Kalpitiya Experience
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
            A coastal landscape shaped by wild winds, shifting tides, and deep serenity. At Luna Laguna,
            we curate moments that connect you to the raw spirit of Kalpitiya—from the thrilling adrenaline
            of the lagoon to the silent sanctuary of our holistic spa houses.
          </p>

          {/* PDF Experience Guide Link */}
          <div className="flex justify-center mt-8">
            <UnderlineLink href="#" onClick={handlePdfClick}>
              VIEW EXPERIENCE GUIDE (PDF)
            </UnderlineLink>
          </div>
        </section>

        <hr className="border-[#2A2520]/10 my-16" />

        {/* ── RE-ORDERED SECTION 1: WILDERNESS & MARINE ADVENTURES ────────── */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-4">Excursions &amp; Outings</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 300,
                letterSpacing: "0.05em",
                color: "#2A2520",
              }}
            >
              Wilderness &amp; Marine Adventures
            </h2>
            <div className="w-12 h-px bg-[#2A2520]/25 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Excursion 1 */}
            <div className="flex flex-col group">
              <div className="overflow-hidden mb-6 aspect-[4/3]" style={{ backgroundColor: "#C8B89A" }}>
                <img
                  src="https://images.unsplash.com/photo-1570481662006-a3a1374699e8?w=800&h=600&fit=crop&auto=format"
                  alt="Dolphin swimming alongside boats in open ocean"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                />
              </div>
              <span className="text-[10px] tracking-[0.28em] uppercase opacity-40 mb-2.5">Marine Wildlife</span>
              <h3
                className="mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 300,
                  fontSize: "1.3rem",
                  color: "#2A2520",
                  letterSpacing: "0.02em",
                }}
              >
                Dolphin &amp; Whale Expeditions
              </h3>
              <p
                className="text-sm leading-relaxed text-[#5A5048] mb-6 flex-grow"
                style={{ fontWeight: 300 }}
              >
                Embark on a private dawn cruise into the open ocean, where hundreds of spinner dolphins
                dance alongside the boat, and seasonal blue whales grace the horizon.
              </p>
              <UnderlineLink href="#" onClick={handlePlanStay}>
                Discover Safaris
              </UnderlineLink>
            </div>

            {/* Excursion 2 */}
            <div className="flex flex-col group">
              <div className="overflow-hidden mb-6 aspect-[4/3]" style={{ backgroundColor: "#C8B89A" }}>
                <img
                  src="https://images.unsplash.com/photo-1706721743307-8f3697f04c54?w=800&h=600&fit=crop&auto=format"
                  alt="Kitesurfer soaring high above crystal-clear tropical waters"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                />
              </div>
              <span className="text-[10px] tracking-[0.28em] uppercase opacity-40 mb-2.5">Adrenaline</span>
              <h3
                className="mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 300,
                  fontSize: "1.3rem",
                  color: "#2A2520",
                  letterSpacing: "0.02em",
                }}
              >
                World-Class Kitesurfing
              </h3>
              <p
                className="text-sm leading-relaxed text-[#5A5048] mb-6 flex-grow"
                style={{ fontWeight: 300 }}
              >
                Harness the world-renowned winds of the Kalpitiya lagoon. Whether you are a seasoned
                rider or a beginner, our certified private instructors provide tailored coaching on flat water.
              </p>
              <UnderlineLink href="#" onClick={handlePlanStay}>
                Book a Session
              </UnderlineLink>
            </div>

            {/* Excursion 3 */}
            <div className="flex flex-col group">
              <div className="overflow-hidden mb-6 aspect-[4/3]" style={{ backgroundColor: "#C8B89A" }}>
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&auto=format"
                  alt="Serene kayak cruise gliding through green mangrove roots"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                />
              </div>
              <span className="text-[10px] tracking-[0.28em] uppercase opacity-40 mb-2.5">Exploration</span>
              <h3
                className="mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 300,
                  fontSize: "1.3rem",
                  color: "#2A2520",
                  letterSpacing: "0.02em",
                }}
              >
                Mangrove &amp; Wetland Safaris
              </h3>
              <p
                className="text-sm leading-relaxed text-[#5A5048] mb-6 flex-grow"
                style={{ fontWeight: 300 }}
              >
                Glide through the ancient mangrove tunnels by kayak or silent electric boat. Discover
                a hidden sanctuary for rare migratory birds, local wildlife, and traditional fishing communities.
              </p>
              <UnderlineLink href="#" onClick={handlePlanStay}>
                Explore Mangroves
              </UnderlineLink>
            </div>
          </div>
        </section>

        <hr className="border-[#2A2520]/10 my-20" />

        {/* ── RE-ORDERED SECTION 2: IN-RESORT SANCTUARIES ───────────────── */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-4">On-Site Offerings</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 300,
                letterSpacing: "0.05em",
                color: "#2A2520",
              }}
            >
              In-Resort Sanctuaries
            </h2>
            <div className="w-12 h-px bg-[#2A2520]/25 mx-auto mt-4" />
          </div>

          <div className="flex flex-col gap-20">
            {/* Activity 1: Spa */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="overflow-hidden aspect-[4/3]" style={{ backgroundColor: "#C8B89A" }}>
                <img
                  src="https://images.unsplash.com/photo-1779002133817-a4beae69a4ba?w=1000&h=750&fit=crop&auto=format"
                  alt="Ayurvedic Spa House at Luna Laguna"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-center max-w-md md:pl-6">
                <span className="text-[10px] tracking-[0.3em] uppercase opacity-40 mb-3 block">Wellness</span>
                <h3
                  className="mb-5"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 300,
                    fontSize: "1.6rem",
                    color: "#2A2520",
                    letterSpacing: "0.02em",
                  }}
                >
                  Ayurvedic Spa House
                </h3>
                <p
                  className="mb-8 leading-loose text-sm"
                  style={{
                    color: "#5A5048",
                    fontWeight: 300,
                  }}
                >
                  Holistic rejuvenation rooted in ancient Sri Lankan traditions. Experience targeted
                  body therapies, organic herbal baths, and tailored wellness rituals in open-air
                  pavilions facing the quiet water.
                </p>
                <UnderlineLink href="#" onClick={handlePlanStay}>
                  Inquire For Rituals
                </UnderlineLink>
              </div>
            </div>

            {/* Activity 2: Dining */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-1 md:order-2 overflow-hidden aspect-[4/3]" style={{ backgroundColor: "#C8B89A" }}>
                <img
                  src="https://images.unsplash.com/photo-1741311181553-f54521088e5d?w=1000&h=750&fit=crop&auto=format"
                  alt="Bespoke Lagoon-Side Dining under sunset skies"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.03]"
                />
              </div>
              <div className="order-2 md:order-1 flex flex-col justify-center max-w-md md:pr-6 md:ml-auto">
                <span className="text-[10px] tracking-[0.3em] uppercase opacity-40 mb-3 block">Gastronomy</span>
                <h3
                  className="mb-5"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 300,
                    fontSize: "1.6rem",
                    color: "#2A2520",
                    letterSpacing: "0.02em",
                  }}
                >
                  Bespoke Lagoon-Side Dining
                </h3>
                <p
                  className="mb-8 leading-loose text-sm"
                  style={{
                    color: "#5A5048",
                    fontWeight: 300,
                  }}
                >
                  A private culinary journey curated by our executive chef. Dine under a canopy of
                  swaying palms on a candlelit timber deck, featuring catch-of-the-day seafood and
                  local organic spices.
                </p>
                <UnderlineLink href="#" onClick={handlePlanStay}>
                  View Sample Menus
                </UnderlineLink>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-[#2A2520]/10 my-20" />

        {/* ── NEW SECTION: LITTLE ADVENTURERS ─────────────────────────────── */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-4">Family Offerings</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 300,
                letterSpacing: "0.05em",
                color: "#2A2520",
              }}
            >
              Little Adventurers
            </h2>
            <div className="w-12 h-px bg-[#2A2520]/25 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-screen-lg mx-auto">
            {/* Activity 1 */}
            <div className="bg-[#F9F6F0] p-8 md:p-10 border border-[#2A2520]/5 flex flex-col justify-between">
              <div>
                <span className="text-[9px] tracking-[0.28em] uppercase opacity-40 mb-3 block">Exploration</span>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 300,
                    fontSize: "1.4rem",
                    color: "#2A2520",
                  }}
                >
                  Resort Treasure Hunt
                </h3>
                <p className="text-xs leading-relaxed text-[#5A5048] mb-6" style={{ fontWeight: 300 }}>
                  Young explorers are invited to navigate our coastal gardens with a secret map to
                  uncover hidden island treasures.
                </p>
              </div>
              <UnderlineLink href="#" onClick={handlePlanStay}>
                Request Map
              </UnderlineLink>
            </div>

            {/* Activity 2 */}
            <div className="bg-[#F9F6F0] p-8 md:p-10 border border-[#2A2520]/5 flex flex-col justify-between">
              <div>
                <span className="text-[9px] tracking-[0.28em] uppercase opacity-40 mb-3 block">Creativity</span>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 300,
                    fontSize: "1.4rem",
                    color: "#2A2520",
                  }}
                >
                  Lagoon Shell Crafting
                </h3>
                <p className="text-xs leading-relaxed text-[#5A5048] mb-6" style={{ fontWeight: 300 }}>
                  A creative afternoon under the palms learning to craft traditional coastal art pieces
                  using natural lagoon shells.
                </p>
              </div>
              <UnderlineLink href="#" onClick={handlePlanStay}>
                Inquire Details
              </UnderlineLink>
            </div>
          </div>
        </section>

        {/* ── BOTTOM ACTION COMPONENT ────────────────────────────────────── */}
        <section className="text-center pt-8 border-t border-[#2A2520]/10 max-w-xl mx-auto">
          <p
            className="mb-8 leading-loose text-sm text-[#3D3530]"
            style={{
              fontStyle: "italic",
              letterSpacing: "0.02em",
            }}
          >
            "Curate Your Journey. All experiences can be tailored exclusively to your preferences prior to arrival."
          </p>
          <div className="flex justify-center">
            <UnderlineLink href="#" onClick={handlePlanStay}>
              PLAN YOUR STAY
            </UnderlineLink>
          </div>
        </section>
      </div>
    </div>
  );
}
