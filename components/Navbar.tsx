"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "#speakers", label: "Speakers" },
  { href: "#schedule", label: "Schedule" },
  { href: "#about",    label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: scrolled
          ? "rgba(5,5,15,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        transition: "background .4s, backdrop-filter .4s, border-color .4s",
      }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex justify-between items-center"
    >
      {/* Logo */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.04 }}
        className="flex items-center gap-2 no-underline"
      >
        <span
          style={{
            background: "linear-gradient(135deg,#7c3aed,#a855f7)",
            borderRadius: "8px",
            width: 32,
            height: 32,
            display: "grid",
            placeItems: "center",
            fontSize: 16,
          }}
        >
          ⚡
        </span>
        <span
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 800,
            fontSize: "1.15rem",
            background: "linear-gradient(135deg,#fff,#c4b5fd)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          FutureTech
        </span>
      </motion.a>

      {/* Links */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
            style={{
              color: "#94a3b8",
              fontWeight: 500,
              fontSize: ".9rem",
              letterSpacing: ".02em",
              textDecoration: "none",
              transition: "color .2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#f1f0ff")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#94a3b8")
            }
          >
            {link.label}
          </motion.a>
        ))}

        {/* CTA */}
        <motion.a
          href="#schedule"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: "linear-gradient(135deg,#7c3aed,#a855f7)",
            color: "#fff",
            padding: ".45rem 1.2rem",
            borderRadius: "999px",
            fontWeight: 600,
            fontSize: ".875rem",
            textDecoration: "none",
            boxShadow: "0 0 20px rgba(124,58,237,.35)",
          }}
        >
          Get Tickets
        </motion.a>
      </div>
    </motion.nav>
  );
}
