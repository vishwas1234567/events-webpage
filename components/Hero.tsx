"use client";
import { motion } from "framer-motion";

export default function Hero({ data }: { data: any }) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise"
      style={{ background: "var(--bg)" }}
    >
      {/* Background image with parallax-ish depth */}
      {data.banner_image?.url && (
        <motion.img
          src={data.banner_image.url}
          alt="Hero background"
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1,    opacity: 0.22 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ pointerEvents: "none" }}
        />
      )}

      {/* Deep gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(124,58,237,.22) 0%, transparent 70%), linear-gradient(to bottom, rgba(5,5,15,.3) 0%, rgba(5,5,15,.95) 100%)",
        }}
      />

      {/* Glowing orbs */}
      <div
        className="absolute"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,.18) 0%, transparent 70%)",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div className="relative text-center px-6 max-w-4xl mx-auto">

        {/* Label pill */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="section-label">
            <span>📅</span> April 2026 &nbsp;·&nbsp; San Francisco, CA
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
            lineHeight: 1.05,
            background: "linear-gradient(135deg, #fff 35%, var(--accent-light))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "1.5rem",
          }}
        >
          {data.heading}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          style={{
            color: "var(--text-muted)",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            lineHeight: 1.7,
            maxWidth: "640px",
            margin: "0 auto 2.5rem",
          }}
        >
          {data.subheading}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="#schedule"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: "inline-block",
              padding: ".85rem 2.2rem",
              borderRadius: "999px",
              background: "linear-gradient(135deg, #7c3aed, #a855f7)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              boxShadow: "0 0 35px rgba(124,58,237,.5)",
              letterSpacing: ".02em",
            }}
          >
            View Schedule
          </motion.a>

          <motion.a
            href="#speakers"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: "inline-block",
              padding: ".85rem 2.2rem",
              borderRadius: "999px",
              background: "rgba(255,255,255,.06)",
              border: "1px solid rgba(255,255,255,.14)",
              color: "#f1f0ff",
              fontWeight: 600,
              fontSize: "1rem",
              textDecoration: "none",
              backdropFilter: "blur(10px)",
            }}
          >
            Meet Speakers
          </motion.a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{ marginTop: "4rem", color: "var(--text-faint)" }}
          className="flex flex-col items-center gap-2"
        >
          <span style={{ fontSize: ".75rem", letterSpacing: ".08em" }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: 1,
              height: 36,
              background: "linear-gradient(to bottom, rgba(196,181,253,.6), transparent)",
              borderRadius: 999,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
