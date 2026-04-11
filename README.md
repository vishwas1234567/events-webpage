# FutureTech Summit 2026

A premium, high-performance event landing page built with **Next.js**, **Contentstack**, and **Framer Motion**. This project showcases a professional-grade conference website with dynamic content management and state-of-the-art web aesthetics.

---

## ✨ Features

- **Professional Design System**: A high-end dark theme featuring glassmorphism, glowing accents, and curated typography (`Syne` and `Inter`).
- **Dynamic Contentstack Integration**: All data—including Hero content, Speakers, Schedules, and Rich Text sections—is fetched directly from Contentstack CMS.
- **Micro-Animations**:
  - **Staggered Entrances**: Navbar, Hero, and Speakers sections reveal themselves with smooth, coordinated animations.
  - **Hover Effects**: Interactive cards and buttons with premium glowing effects.
  - **Scroll reveal**: Schedule timeline elements slide in as you scroll.
- **Robust Data Handling**: 
  - Automated HTML stripping for clean schedule descriptions.
  - Smart fallback for missing speaker photos using dynamic UI avatars.
  - Detailed reference resolution for nested speaker data within schedule entries.
- **SEO Optimized**: Fully configured metadata with Next.js SEO APIs for professional social sharing and search ranking.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **CMS**: [Contentstack](https://www.contentstack.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: [Google Fonts](https://fonts.google.com/) via `next/font`

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Installation
Clone the repository and install the dependencies:
```bash
git clone <repository-url>
cd event-site
npm install
```

### 3. CMS Configuration
The application is connected to a Contentstack Stack. The configuration is located in `lib/contentstack.js`:
```javascript
export const Stack = contentstack.Stack({
  api_key: "blt...",
  delivery_token: "cs...",
  environment: "development"
});
```

### 4. Running Locally
Start the development server:
```bash
npm run dev
```
The site will be available at [http://localhost:3000](http://localhost:3000).

---

## 📂 Project Structure

- `app/`: Next.js App Router pages and global styles.
  - `page.tsx`: Main landing page with dynamic block rendering logic.
  - `globals.css`: Core design system and theme definitions.
- `components/`: Modular UI components.
  - `Navbar.tsx`: Animated fixed navigation.
  - `Hero.tsx`: High-impact landing section.
  - `Speakers.tsx`: Dynamic speaker lineup cards.
  - `Schedule.tsx`: Timeline-based schedule entries.
- `lib/`: Utilities and API configurations.
  - `contentstack.js`: Contentstack SDK initialization.

---

## 🧠 Future Enhancements

- **User Authentication**: Allow users to register and manage their summit tickets.
- **Workshops Booking**: Interactive booking system for individual sessions.
- **Live Stream Integration**: Embed professional video players for virtual attendees.

---

Developed with ❤️ by the FutureTech Team.
