import React, { useState } from "react";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

interface FooterProps {
  onNavigate: (page: "home" | "gallery" | "accommodation" | "contact" | "experience" | "reserve") => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [activeLegalModal, setActiveLegalModal] = useState<"privacy" | "cookie" | "terms" | null>(null);

  const handleLinkClick = (
    e: React.MouseEvent,
    page: "home" | "gallery" | "accommodation" | "contact" | "experience" | "reserve",
    hash?: string
  ) => {
    e.preventDefault();
    onNavigate(page);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      className="relative"
      style={{
        backgroundColor: "#2A2520",
        color: "#C8B89A",
        padding: "80px 32px 40px",
      }}
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Top row */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <a
              href="#"
              onClick={(e) => handleLinkClick(e, "home")}
              className="block mb-4 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 300,
                fontSize: "1.5rem",
                letterSpacing: "0.12em",
                color: "#F5F2EB",
              }}
            >
              Luna Laguna
            </a>
            <p
              style={{
                fontSize: "0.75rem",
                lineHeight: 1.9,
                color: "#9A8870",
                fontWeight: 300,
              }}
            >
              Kalpitiya Peninsula<br />
              Sri Lanka
            </p>
          </div>

          {/* Navigation */}
          <div>
            <FooterHeading>Explore</FooterHeading>
            <FooterLink href="#" onClick={(e) => handleLinkClick(e, "gallery")}>
              Gallery
            </FooterLink>
            <FooterLink href="#" onClick={(e) => handleLinkClick(e, "accommodation")}>
              Accommodation
            </FooterLink>
            <FooterLink href="#" onClick={(e) => handleLinkClick(e, "experience")}>
              Experiences
            </FooterLink>
            <FooterLink href="#" onClick={(e) => handleLinkClick(e, "experience")}>
              Dining
            </FooterLink>
            <FooterLink href="#" onClick={(e) => handleLinkClick(e, "experience")}>
              Wellness
            </FooterLink>
            <FooterLink href="#" onClick={(e) => handleLinkClick(e, "contact")}>
              Events
            </FooterLink>
          </div>

          {/* Contact */}
          <div>
            <FooterHeading>Contact</FooterHeading>
            <div className="flex flex-col gap-3">
              <FooterContactRow icon={<MapPin size={12} />}>
                Kalpitiya Peninsula, Puttalam District, Sri Lanka
              </FooterContactRow>
              <FooterContactRow icon={<Phone size={12} />}>
                +94 77 000 0000
              </FooterContactRow>
              <FooterContactRow icon={<Mail size={12} />}>
                hello@lunalaguna.lk
              </FooterContactRow>
            </div>
          </div>

          {/* Reservations & Social */}
          <div>
            <FooterHeading>Reservations</FooterHeading>
            <p
              style={{ fontSize: "0.75rem", lineHeight: 1.9, color: "#9A8870", fontWeight: 300 }}
            >
              For bespoke stay enquiries and private event bookings, our
              reservations team is available seven days a week.
            </p>
            <a
              href="#"
              onClick={(e) => handleLinkClick(e, "reserve")}
              className="block mt-3 text-xs tracking-[0.1em] hover:opacity-75 transition-opacity"
              style={{ color: "#C8B89A" }}
            >
              Book room online
            </a>
            <div className="flex gap-4 mt-8">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="transition-opacity duration-200 hover:opacity-50"
                  style={{ color: "#9A8870" }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom legal bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          style={{
            borderTop: "1px solid rgba(200,184,154,0.12)",
            paddingTop: 28,
          }}
        >
          <p style={{ fontSize: "0.65rem", color: "#5A5048", letterSpacing: "0.06em" }}>
            © 2024 Luna Laguna. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setActiveLegalModal("privacy"); }}
              className="transition-opacity duration-200 hover:opacity-60"
              style={{ fontSize: "0.65rem", color: "#5A5048", letterSpacing: "0.06em" }}
            >
              Privacy Notice
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setActiveLegalModal("cookie"); }}
              className="transition-opacity duration-200 hover:opacity-60"
              style={{ fontSize: "0.65rem", color: "#5A5048", letterSpacing: "0.06em" }}
            >
              Cookie Policy
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setActiveLegalModal("terms"); }}
              className="transition-opacity duration-200 hover:opacity-60"
              style={{ fontSize: "0.65rem", color: "#5A5048", letterSpacing: "0.06em" }}
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>

      {/* ── LEGAL MODAL OVERLAY ────────────────────────────────────────── */}
      {activeLegalModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-8 bg-black/55 animate-fade-in"
          onClick={() => setActiveLegalModal(null)}
        >
          <div
            className="w-full max-w-md p-10 text-center flex flex-col justify-center items-center gap-8 border border-[#2A2520]/15"
            style={{ backgroundColor: "#F5F2EB", color: "#2A2520", borderRadius: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.4rem",
                fontWeight: 300,
                letterSpacing: "0.04em",
              }}
            >
              {activeLegalModal === "privacy" && "Privacy Notice"}
              {activeLegalModal === "cookie" && "Cookie Policy"}
              {activeLegalModal === "terms" && "Terms & Conditions"}
            </h3>

            <p
              className="text-xs leading-relaxed text-[#5A5048]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
            >
              {activeLegalModal === "privacy" &&
                "Luna Laguna Privacy Notice — We value your sanctuary and protect your personal data. Full policy coming soon."}
              {activeLegalModal === "cookie" &&
                "Luna Laguna Cookie Policy — We use minimal cookies to enhance your luxury browsing experience. Full policy coming soon."}
              {activeLegalModal === "terms" &&
                "Luna Laguna Terms & Conditions — Booking terms and resort stay guidelines will be available here soon."}
            </p>

            <button
              onClick={() => setActiveLegalModal(null)}
              className="px-6 py-3 text-[10px] tracking-[0.25em] uppercase transition-all duration-200 border border-[#2A2520] hover:bg-[#2A2520] hover:text-[#F5F2EB] cursor-pointer"
              style={{ borderRadius: 0 }}
            >
              [CLOSE]
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}

/* ── Footer Sub-components ────────────────────────────────────────────────── */

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mb-5"
      style={{
        fontSize: "0.65rem",
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        color: "#F5F2EB",
        fontWeight: 400,
      }}
    >
      {children}
    </p>
  );
}

function FooterLink({ href, onClick, children }: { href: string; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void; children: React.ReactNode }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block mb-2 transition-opacity duration-200 hover:opacity-50"
      style={{ fontSize: "0.75rem", color: "#9A8870", fontWeight: 300, lineHeight: 1.9 }}
    >
      {children}
    </a>
  );
}

function FooterContactRow({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="mt-0.5 opacity-50" style={{ color: "#C8B89A" }}>{icon}</span>
      <span style={{ fontSize: "0.75rem", color: "#9A8870", fontWeight: 300, lineHeight: 1.7 }}>
        {children}
      </span>
    </div>
  );
}
