# Luna Laguna – Premium Coastal Luxury Resort Website

A high-fidelity, ultra-luxurious, and minimalist frontend web application designed for **Luna Laguna Resort** in Kalpitiya, Sri Lanka. Built with editorial precision, this project prioritizes intentional whitespace, refined typography, and a demure, aesthetic narrative flow.

---

## Design Philosophy & Visual Identity

Directly inspired by high-end boutique hospitality principles, the digital experience is structured around slow luxury and visual calmness:

- **Color Palette:** Uses a custom blend of warm parchment (`#F5F2EB`) and bright linen (`#F9F6F0`) for backgrounds to reject pure whites. Primary text uses deep warm charcoal (`#2A2520`) with sandy taupe (`#C8B89A`) accents, entirely avoiding cool grays.
- **Typography:** Features _Playfair Display (weight 300)_ for headings to create an elegant, heritage feel, paired with _Montserrat (weight 300)_ for ultra-clean body text and navigation labels.
- **Shape Language:** Strict sharp corners (`border-radius: 0`) across all elements, inputs, imagery, and components to deliver editorial precision.

---

## Project Architecture & Pages

The codebase features a clean, highly modular React/TypeScript file layout using state-based dynamic routing inside `App.tsx` for seamless transitions:

1. **Home:** Features a 100vh full-bleed ocean-front hero view, dynamic header scrolling, asymmetric suite highlights, and local experience summaries.
2. **Gallery:** An immersive, staggered 12-column CSS grid masonry showcase with minimalist layout options (`Grid View` and `Single View`).
3. **Accommodation:** A dedicated pavilion and suite listings framework displaying resort amenities and availability checkers.
4. **Experience:** A deep dive into Kalpitiya's destination adventures (Dolphin cruises, kitesurfing) and in-resort Ayurvedic sanctuaries.
5. **Contact Us:** A dual-column minimalist form setup tailored for premium event, wedding, and press inquiries.
6. **Reserve:** An integrated bespoke interactive direct booking engine interface.

---

## Tech Stack & Modularity

- **Framework:** React 18 + TypeScript
- **Bundler / Environment:** Vite
- **Styling:** Tailwind CSS v4
- **UI Components:** Customized Shadcn Primitives (overridden to 0px border-radius)

src/
├── app/
│ ├── App.tsx # Main Layout Shell & Dynamic State Router
│ ├── components/
│ │ ├── layout/
│ │ │ ├── Header.tsx # Frosted glassmorphic sticky navbar
│ │ │ └── Footer.tsx # Dark charcoal minimalist link structure
│ │ └── ui/
│ │ ├── UnderlineLink.tsx
│ │ └── MapLocation.tsx # Integrated luxury-filtered interactive location map
│ └── pages/
│ ├── Home.tsx
│ ├── Gallery.tsx
│ ├── Accommodation.tsx
│ ├── Experience.tsx
│ └── ContactUs.tsx

---

## CI/CD Pipeline & Deployment

This project includes a fully automated Continuous Integration and Continuous Deployment (CI/CD) workflow using **GitHub Actions**:

- **Automation:** Any code changes pushed to the `main` branch trigger an automated build runner.
- **Deployment:** The workflow automatically transpiles the source code, outputs static assets into the `dist/` directory, and deploys them to the **GitHub Pages** host environment on the `gh-pages` branch.

---
