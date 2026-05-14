# Zara Therapy Clinic Website
**ADSE2509 — Web Development Project**
Student: Adan Yusuf | Semester 1

---

## Project Overview

A single-page application (SPA) for **Zara Therapy Clinic**, a wellness and therapy centre based in Nairobi, Kenya. The site was built using React (Vite) and plain CSS, following the requirements in the project brief.

The website is fully responsive and tested on desktop, tablet and mobile.

---

## Features Built

| Feature | Where |
|---|---|
| Sticky navbar with scroll-to-section links | Navbar |
| Mobile hamburger menu | Navbar |
| Visitor counter (localStorage) | Navbar |
| Hero section with two CTA buttons | Hero |
| Service cards with "Learn More" modal | Services |
| About section with clinic history | About |
| Product cards with Add to Cart + quantity controls | Products |
| WhatsApp order redirect with full product list | Products |
| Offers with copy-to-clipboard coupon codes | Offers |
| Therapist booking form → WhatsApp redirect | Therapists |
| Image gallery with lightbox and View More | Gallery |
| Expandable therapy education cards | Blog |
| Client reviews + YouTube video testimonial | Testimonials |
| Contact form with validation and success screen | Contact |
| Google Maps embed | Contact |
| Scrolling ticker with live date, time, location | Footer |
| HTML5 Geolocation API in the footer ticker | Footer |

---

## Technologies Used

- **React 19** (Vite)
- **JavaScript (ES6+)**
- **CSS3** (Flexbox, Grid, Media Queries)
- **HTML5** (semantic elements, Geolocation API)
- **Poppins** font (Google Fonts)
- **WhatsApp API** (wa.me links)
- **Google Maps Embed API**

---

## Installation & Running Locally

1. Download and unzip the project folder
2. Open a terminal in the project folder
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. Open your browser at: `http://localhost:5173`

---

## WhatsApp Number

The WhatsApp number for bookings and orders is set in two files:
- `src/components/products/products.jsx` → line with `const WHATSAPP_NUMBER`
- `src/components/therapists/therapists.jsx` → line with `const WHATSAPP_NUMBER`

Change `254700123456` to the clinic's real number (country code + number, no + sign).

---

## Browsers Tested

- Google Chrome ✓
- Microsoft Edge ✓
- Mozilla Firefox ✓

---

## Assumptions Made

1. The clinic's phone number and email are placeholders and should be updated before deployment.
2. Product images are from the local assets folder.
3. Gallery images are loaded from Unsplash (requires internet connection).
4. The WhatsApp redirect assumes the clinic has WhatsApp Business on the number provided.
5. The visitor counter uses localStorage — it counts per browser, not globally.

---

## Project Structure

```
src/
├── App.jsx                     ← Main component, assembles all sections
├── index.css                   ← Global styles and fonts
├── main.jsx                    ← Entry point
└── components/
    ├── navbar/                 ← Navigation bar + hamburger
    ├── hero/                   ← Landing section
    ├── services/               ← Service cards + modal
    ├── about/                  ← Clinic history and mission
    ├── products/               ← Product shop + WhatsApp cart
    ├── offers/                 ← Discount offers + coupon codes
    ├── therapists/             ← Therapist cards + booking modal
    ├── gallery/                ← Photo gallery + lightbox
    ├── blog/                   ← Educational therapy information
    ├── testimonials/           ← Client reviews + video
    ├── contacts/               ← Contact form + Google Maps
    ├── footer/                 ← Ticker, links, contact info
    └── visitorCounter/         ← Visitor count display
```
