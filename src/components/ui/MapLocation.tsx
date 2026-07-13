import React from "react";

export default function MapLocation() {
  return (
    <section 
      className="py-20 px-8 flex flex-col items-center justify-center border-t border-[#2A2520]/10"
      style={{ backgroundColor: "#F5F2EB" }}
    >
      <div className="max-w-screen-xl w-full mx-auto flex flex-col items-center">
        {/* Header Title */}
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-2 font-normal">Our Sanctuary Location</p>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2rem",
              fontWeight: 300,
              color: "#2A2520",
              letterSpacing: "0.05em",
            }}
          >
            Luna Laguna Kalpitiya, Sri Lanka
          </h3>
          <div className="w-10 h-px bg-[#2A2520]/25 mx-auto mt-4" />
        </div>

        {/* Muted Editorial Map Container */}
        <div 
          className="w-full max-w-screen-lg relative overflow-hidden border border-[#2A2520]/10 h-[450px] shadow-sm bg-[#F9F6F0]"
          style={{
            // strict filter to seamlessly desaturate default Google Maps colors into warm parchment and charcoal tones
            filter: "saturate(0.5) contrast(1.05) brightness(0.98) sepia(0.08)",
          }}
        >
          <iframe
            title="Google Maps Location for Luna Laguna Resort in Kalpitiya Sri Lanka"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.580574784397!2d79.7548849!3d8.244860299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afd0d8b3745581d%3A0xcfb15a598f1cc8bf!2sLuna%20Laguna!5e0!3m2!1sen!2slk!4v1783923650877!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0, pointerEvents: "auto" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
