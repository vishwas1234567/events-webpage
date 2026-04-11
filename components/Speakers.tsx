"use client";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const card = {
  hidden: { opacity: 0, y: 48, scale: 0.94 },
  show:   { opacity: 1, y: 0,  scale: 1 as number,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const PLACEHOLDER = (name: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=7c3aed&color=fff&size=128&bold=true`;

export default function Speakers({ data }: { data: any }) {
  const speakers: any[] = data.speakers ?? [];

  return (
    <section
      id="speakers"
      style={{ background: "var(--bg)", padding: "7rem 1.5rem" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">✨ Lineup</span>
          <h2 className="section-title">{data.section_title ?? "Our Speakers"}</h2>
          <p style={{ color: "var(--text-muted)", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            World-class experts sharing their vision for tomorrow's technology landscape.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}
        >
          {speakers.map((speaker: any) => (
            <motion.div
              key={speaker.uid}
              variants={card}
              className="glass-card"
              style={{ padding: "2rem 1.5rem", textAlign: "center" }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  margin: "0 auto 1.25rem",
                  border: "2px solid rgba(124,58,237,.45)",
                  boxShadow: "0 0 24px rgba(124,58,237,.25)",
                  overflow: "hidden",
                  background: "var(--bg)",
                }}
              >
                <img
                  src={speaker.photo?.url ?? PLACEHOLDER(speaker.name)}
                  alt={speaker.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Name */}
              <h3
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  color: "var(--text-primary)",
                  marginBottom: ".3rem",
                }}
              >
                {speaker.name}
              </h3>

              {/* Role */}
              <p
                style={{
                  fontSize: ".85rem",
                  fontWeight: 500,
                  background: "linear-gradient(135deg,#7c3aed,#a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginBottom: ".2rem",
                }}
              >
                {speaker.role}
              </p>

              {/* Company */}
              {speaker.company && (
                <p style={{ fontSize: ".8rem", color: "var(--text-muted)" }}>
                  @ {speaker.company}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
