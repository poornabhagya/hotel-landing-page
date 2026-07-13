import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    inquiryType: "General Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      alert("Please fill in the required fields (Name and Email).");
      return;
    }
    setSubmitted(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-4">Connect with us</p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "0.03em",
              color: "#2A2520",
            }}
          >
            Get in Touch With Us
          </h1>
          <div
            className="mx-auto my-6 opacity-20"
            style={{ width: 40, height: 1, backgroundColor: "#2A2520" }}
          />
        </div>

        {/* Split 2-column responsive container box */}
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-stretch max-w-screen-lg mx-auto">
          {/* Left Column (Resort Info) */}
          <div className="md:col-span-5 flex flex-col justify-between py-2">
            <div>
              <h3
                className="mb-8"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.3rem",
                  fontWeight: 300,
                  letterSpacing: "0.03em",
                  color: "#2A2520",
                }}
              >
                Luna Laguna Sanctuary
              </h3>

              <div className="flex flex-col gap-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <span className="mt-1 opacity-60 text-[#2A2520]">
                    <MapPin size={16} strokeWidth={1.5} />
                  </span>
                  <div>
                    <h4 className="text-[10px] tracking-[0.2em] uppercase font-normal opacity-40 mb-2">
                      Address
                    </h4>
                    <p className="text-sm leading-relaxed text-[#3D3530]">
                      Luna Laguna, Kalpitiya Peninsula,<br />
                      Puttalam District, Sri Lanka
                    </p>
                  </div>
                </div>

                {/* Direct Inquiries */}
                <div className="flex items-start gap-4">
                  <span className="mt-1 opacity-60 text-[#2A2520]">
                    <Phone size={16} strokeWidth={1.5} />
                  </span>
                  <div>
                    <h4 className="text-[10px] tracking-[0.2em] uppercase font-normal opacity-40 mb-2">
                      Direct Inquiries
                    </h4>
                    <p className="text-sm leading-relaxed text-[#3D3530]">
                      <a href="mailto:hello@lunalaguna.lk" className="hover:opacity-70 transition-opacity">
                        hello@lunalaguna.lk
                      </a>
                      <span className="block mt-1">
                        +94 77 000 0000
                      </span>
                    </p>
                  </div>
                </div>

                {/* Reservations */}
                <div className="flex items-start gap-4">
                  <span className="mt-1 opacity-60 text-[#2A2520]">
                    <Mail size={16} strokeWidth={1.5} />
                  </span>
                  <div>
                    <h4 className="text-[10px] tracking-[0.2em] uppercase font-normal opacity-40 mb-2">
                      Reservations
                    </h4>
                    <p className="text-sm leading-relaxed text-[#3D3530]">
                      <a href="mailto:reservations@lunalaguna.lk" className="hover:opacity-70 transition-opacity">
                        reservations@lunalaguna.lk
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Low-contrast note */}
            <div className="mt-12 p-6 border-l border-[#2A2520]/10 flex items-start gap-3 bg-[#F9F6F0]/50">
              <span className="mt-0.5 opacity-40 text-[#2A2520]">
                <Clock size={14} />
              </span>
              <p className="text-xs leading-relaxed opacity-60 text-[#5A5048]">
                We reply to all general stay and private event inquiries within 12 hours.
              </p>
            </div>
          </div>

          {/* Right Column (The Form) */}
          <div className="md:col-span-7 bg-[#F9F6F0] p-8 md:p-12 border border-[#2A2520]/5 flex flex-col justify-center">
            {submitted ? (
              <div className="text-center py-12 animate-fade-in">
                <span className="text-3xl mb-4 block">✉️</span>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 300,
                    fontSize: "1.6rem",
                    color: "#2A2520",
                  }}
                >
                  Inquiry Received
                </h3>
                <p className="text-sm leading-relaxed text-[#5A5048] max-w-sm mx-auto mb-8">
                  Thank you for contacting Luna Laguna. Our reservations team will reach out to you at{" "}
                  <strong>{formData.email}</strong> within 12 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      inquiryType: "General Inquiry",
                      message: "",
                    });
                  }}
                  className="px-6 py-3 text-xs tracking-[0.2em] uppercase bg-[#2A2520] text-[#F5F2EB]"
                  style={{ borderRadius: 0 }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="text-[10px] tracking-[0.2em] uppercase font-normal opacity-50">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent py-2 text-sm border-b border-[#2A2520] focus:border-[#C8B89A] transition-colors outline-none font-light"
                    placeholder="E.g., Julian Vane"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] tracking-[0.2em] uppercase font-normal opacity-50">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent py-2 text-sm border-b border-[#2A2520] focus:border-[#C8B89A] transition-colors outline-none font-light"
                    placeholder="E.g., julian@example.com"
                  />
                </div>

                {/* Inquiry Type Dropdown */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="inquiryType" className="text-[10px] tracking-[0.2em] uppercase font-normal opacity-50">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full bg-transparent py-2.5 text-sm border-b border-[#2A2520] focus:border-[#C8B89A] transition-colors outline-none font-light appearance-none cursor-pointer"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Private Events & Weddings">Private Events &amp; Weddings</option>
                    <option value="Corporate Retreats">Corporate Retreats</option>
                    <option value="Media & Press">Media &amp; Press</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] tracking-[0.2em] uppercase font-normal opacity-50">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-transparent py-2 text-sm border-b border-[#2A2520] focus:border-[#C8B89A] transition-colors outline-none font-light resize-none"
                    placeholder="Tell us about your event plans, general inquiries, or feedback."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 text-xs tracking-[0.25em] uppercase transition-opacity duration-200 hover:opacity-90 font-normal mt-4"
                  style={{
                    backgroundColor: "#2A2520",
                    color: "#F5F2EB",
                    borderRadius: 0,
                  }}
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
