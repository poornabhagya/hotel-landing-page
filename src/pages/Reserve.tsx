import React, { useState } from "react";
import { Calendar, User, Search, Check, Sparkles } from "lucide-react";

export default function Reserve() {
  const [searchParams, setSearchParams] = useState({
    checkIn: "",
    checkOut: "",
    adults: "2 Adults",
    children: "0 Children",
  });

  const [hasSearched, setHasSearched] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchParams.checkIn || !searchParams.checkOut) {
      alert("Please select both check-in and check-out dates.");
      return;
    }
    setHasSearched(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookRoom = (roomName: string) => {
    setSelectedRoom(roomName);
    setBookingConfirmed(true);
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
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-4 font-normal">Reservations</p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "0.03em",
              color: "#2A2520",
            }}
          >
            Book Your Sanctuary
          </h1>
          <div
            className="mx-auto my-6 opacity-20"
            style={{ width: 40, height: 1, backgroundColor: "#2A2520" }}
          />
        </div>

        {/* ── BOOKING BAR SELECTOR ─────────────────────────────────────── */}
        <div
          className="bg-[#F9F6F0] border border-[#2A2520]/10 p-6 md:p-8 max-w-screen-lg mx-auto mb-16"
          style={{ borderRadius: 0 }}
        >
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            {/* Check-in Date */}
            <div className="md:col-span-3 flex flex-col gap-2">
              <label className="text-[10px] tracking-[0.18em] uppercase font-normal opacity-50 flex items-center gap-1.5">
                <Calendar size={10} /> Check-In Date
              </label>
              <input
                type="date"
                name="checkIn"
                required
                value={searchParams.checkIn}
                onChange={handleInputChange}
                className="w-full bg-transparent py-2 text-sm border-b border-[#2A2520] focus:border-[#C8B89A] transition-colors outline-none font-light cursor-pointer"
              />
            </div>

            {/* Check-out Date */}
            <div className="md:col-span-3 flex flex-col gap-2">
              <label className="text-[10px] tracking-[0.18em] uppercase font-normal opacity-50 flex items-center gap-1.5">
                <Calendar size={10} /> Check-Out Date
              </label>
              <input
                type="date"
                name="checkOut"
                required
                value={searchParams.checkOut}
                onChange={handleInputChange}
                className="w-full bg-transparent py-2 text-sm border-b border-[#2A2520] focus:border-[#C8B89A] transition-colors outline-none font-light cursor-pointer"
              />
            </div>

            {/* Adults Selector */}
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-[10px] tracking-[0.18em] uppercase font-normal opacity-50 flex items-center gap-1.5">
                <User size={10} /> Adults
              </label>
              <select
                name="adults"
                value={searchParams.adults}
                onChange={handleInputChange}
                className="w-full bg-transparent py-2.5 text-sm border-b border-[#2A2520] focus:border-[#C8B89A] transition-colors outline-none font-light appearance-none cursor-pointer"
              >
                <option value="1 Adult">1 Adult</option>
                <option value="2 Adults">2 Adults</option>
                <option value="3 Adults">3 Adults</option>
                <option value="4 Adults">4 Adults</option>
              </select>
            </div>

            {/* Children Selector */}
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-[10px] tracking-[0.18em] uppercase font-normal opacity-50 flex items-center gap-1.5">
                <User size={10} /> Children
              </label>
              <select
                name="children"
                value={searchParams.children}
                onChange={handleInputChange}
                className="w-full bg-transparent py-2.5 text-sm border-b border-[#2A2520] focus:border-[#C8B89A] transition-colors outline-none font-light appearance-none cursor-pointer"
              >
                <option value="0 Children">0 Children</option>
                <option value="1 Child">1 Child</option>
                <option value="2 Children">2 Children</option>
              </select>
            </div>

            {/* Action Search Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-[#2A2520] hover:opacity-90 text-[#F5F2EB] py-3.5 text-[10px] tracking-[0.2em] uppercase transition-opacity flex items-center justify-center gap-2"
                style={{ borderRadius: 0 }}
              >
                <Search size={12} />
                Search
              </button>
            </div>
          </form>
        </div>

        {/* ── CONFIRMATION MODAL STATE ─────────────────────────────────── */}
        {bookingConfirmed ? (
          <div
            className="max-w-md mx-auto text-center p-10 bg-[#F9F6F0] border border-[#2A2520]/10 animate-fade-in"
            style={{ borderRadius: 0 }}
          >
            <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto mb-6">
              <Check size={20} />
            </div>
            <h3
              className="mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.5rem",
                fontWeight: 300,
                color: "#2A2520",
              }}
            >
              Sanctuary Reserved
            </h3>
            <p className="text-xs leading-relaxed text-[#5A5048] mb-6">
              Your reservation for the <strong>{selectedRoom}</strong> has been provisionally held.
              A host will contact you shortly to finalize details.
            </p>
            <div className="text-left text-xs bg-[#F5F2EB] p-4 border-l-2 border-[#2A2520]/20 flex flex-col gap-2 mb-8">
              <div><span className="opacity-50">Check-in:</span> {searchParams.checkIn}</div>
              <div><span className="opacity-50">Check-out:</span> {searchParams.checkOut}</div>
              <div><span className="opacity-50">Occupancy:</span> {searchParams.adults}, {searchParams.children}</div>
            </div>
            <button
              onClick={() => setBookingConfirmed(false)}
              className="w-full py-3.5 text-[10px] tracking-[0.2em] uppercase bg-[#2A2520] text-[#F5F2EB]"
              style={{ borderRadius: 0 }}
            >
              Back to search
            </button>
          </div>
        ) : (
          /* ── DYNAMIC ROOM PREVIEW SECTION ────────────────────────────── */
          <div className="max-w-screen-lg mx-auto">
            {!hasSearched ? (
              // Initial Placeholder State
              <div className="text-center py-20 border border-dashed border-[#2A2520]/15 flex flex-col items-center justify-center bg-[#F9F6F0]/30">
                
                <p className="text-sm tracking-[0.05em] opacity-40 italic">
                  Select your travel dates and guests above to view rates and availability.
                </p>
              </div>
            ) : (
              // Available Rooms List State
              <div className="space-y-8 animate-fade-in">
                <div className="flex justify-between items-center pb-2 border-b border-[#2A2520]/10">
                  <span className="text-[10px] tracking-[0.2em] uppercase opacity-40">2 Accommodations Available</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase opacity-40 font-normal">Rates in USD</span>
                </div>

                {/* Room 1: Pavilion */}
                <div className="grid md:grid-cols-12 gap-8 bg-[#F9F6F0] border border-[#2A2520]/5 group p-6">
                  <div className="md:col-span-5 overflow-hidden aspect-[16/10]" style={{ backgroundColor: "#C8B89A" }}>
                    <img
                      src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=500&fit=crop&auto=format"
                      alt="Lagoon-Front Pavilion"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="md:col-span-7 flex flex-col justify-between py-2">
                    <div>
                      <div className="flex justify-between items-start gap-4 mb-3">
                        <div>
                          <span className="text-[9px] tracking-[0.28em] uppercase opacity-40 block mb-1">VILLA</span>
                          <h3
                            style={{
                              fontFamily: "'Playfair Display', serif",
                              fontSize: "1.4rem",
                              fontWeight: 300,
                              color: "#2A2520",
                            }}
                          >
                            Lagoon-Front Pavilion
                          </h3>
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-light text-[#2A2520]">$320</span>
                          <span className="text-[10px] tracking-[0.1em] opacity-40 block">/ night</span>
                        </div>
                      </div>
                      <p className="text-xs leading-relaxed text-[#5A5048] mb-6 font-light">
                        A private 120-sqm overwater experience. Features a plunge pool, custom reclaimed teak deck,
                        outdoor rain shower, and full access to lagoon safaris.
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-[#2A2520]/5 pt-4">
                      <div className="flex gap-4 text-[9px] uppercase tracking-[0.15em] opacity-40 font-normal">
                        <span>120 m²</span>
                        <span>•</span>
                        <span>Plunge Pool</span>
                        <span>•</span>
                        <span>King Bed</span>
                      </div>
                      <button
                        onClick={() => handleBookRoom("Lagoon-Front Pavilion")}
                        className="px-6 py-2.5 text-[9px] tracking-[0.2em] uppercase bg-[#2A2520] hover:opacity-90 text-[#F5F2EB] transition-opacity"
                        style={{ borderRadius: 0 }}
                      >
                        Book Sanctuary
                      </button>
                    </div>
                  </div>
                </div>

                {/* Room 2: Suite */}
                <div className="grid md:grid-cols-12 gap-8 bg-[#F9F6F0] border border-[#2A2520]/5 group p-6">
                  <div className="md:col-span-5 overflow-hidden aspect-[16/10]" style={{ backgroundColor: "#C8B89A" }}>
                    <img
                      src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=500&fit=crop&auto=format"
                      alt="Ocean Breeze Suite"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="md:col-span-7 flex flex-col justify-between py-2">
                    <div>
                      <div className="flex justify-between items-start gap-4 mb-3">
                        <div>
                          <span className="text-[9px] tracking-[0.28em] uppercase opacity-40 block mb-1">SUITE</span>
                          <h3
                            style={{
                              fontFamily: "'Playfair Display', serif",
                              fontSize: "1.4rem",
                              fontWeight: 300,
                              color: "#2A2520",
                            }}
                          >
                            Ocean Breeze Suite
                          </h3>
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-light text-[#2A2520]">$260</span>
                          <span className="text-[10px] tracking-[0.1em] opacity-40 block">/ night</span>
                        </div>
                      </div>
                      <p className="text-xs leading-relaxed text-[#5A5048] mb-6 font-light">
                        Perched against coastal dunes. High structural ceilings, luxury organic linen drapery,
                        and a private courtyard facing the sunset breeze.
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-[#2A2520]/5 pt-4">
                      <div className="flex gap-4 text-[9px] uppercase tracking-[0.15em] opacity-40 font-normal">
                        <span>95 m²</span>
                        <span>•</span>
                        <span>Ocean View</span>
                        <span>•</span>
                        <span>King Bed</span>
                      </div>
                      <button
                        onClick={() => handleBookRoom("Ocean Breeze Suite")}
                        className="px-6 py-2.5 text-[9px] tracking-[0.2em] uppercase bg-[#2A2520] hover:opacity-90 text-[#F5F2EB] transition-opacity"
                        style={{ borderRadius: 0 }}
                      >
                        Book Sanctuary
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
