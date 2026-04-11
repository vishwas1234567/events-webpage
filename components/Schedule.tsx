"use client";
import { motion } from "framer-motion";

function stripHtml(html: string): string {
  return html?.replace(/<[^>]*>/g, "") ?? "";
}

const rowVariant = {
  hidden: { opacity: 0, x: -48 },
  show:   {
    opacity: 1, x: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export default function Schedule({ data }: { data: any }) {
  const items: any[] = data.schedule_list ?? [];

  return (
    <section
      id="schedule"
      style={{
        background:
          "linear-gradient(180deg, var(--bg) 0%, rgba(124,58,237,.06) 50%, var(--bg) 100%)",
        padding: "7rem 1.5rem",
      }}
    >
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">🧠 Program</span>
          <h2 className="section-title">{data.section_title ?? "Schedule"}</h2>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
            A full day of talks, workshops, and networking.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "calc(5.5rem)",
              top: 0,
              bottom: 0,
              width: 1,
              background: "linear-gradient(to bottom, transparent, rgba(124,58,237,.4) 15%, rgba(124,58,237,.4) 85%, transparent)",
            }}
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ staggerChildren: 0.14 }}
            className="flex flex-col gap-6"
          >
            {items.map((item: any, index: number) => {
              // speaker is an array of referenced entries
              const speakerName: string | null =
                Array.isArray(item.speaker) && item.speaker.length > 0
                  ? item.speaker[0]?.name ?? null
                  : typeof item.speaker === "object" && item.speaker !== null
                  ? item.speaker?.name ?? null
                  : null;

              const description = stripHtml(item.description ?? "");

              return (
                <motion.div
                  key={item.uid ?? index}
                  variants={rowVariant}
                  style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}
                >
                  {/* Time badge */}
                  <div
                    style={{
                      minWidth: "5.5rem",
                      textAlign: "right",
                      paddingTop: ".85rem",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontSize: ".78rem",
                        fontWeight: 700,
                        letterSpacing: ".06em",
                        background: "linear-gradient(135deg,#7c3aed,#a855f7)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {item.time}
                    </span>
                  </div>

                  {/* Dot on timeline */}
                  <div
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg,#7c3aed,#a855f7)",
                      marginTop: "1rem",
                      flexShrink: 0,
                      boxShadow: "0 0 10px rgba(124,58,237,.7)",
                      zIndex: 1,
                    }}
                  />

                  {/* Card */}
                  <div
                    className="glass-card"
                    style={{ flex: 1, padding: "1.25rem 1.5rem" }}
                  >
                    <h3
                      style={{
                        fontFamily: "Syne, sans-serif",
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        color: "var(--text-primary)",
                        marginBottom: ".4rem",
                      }}
                    >
                      {item.title}
                    </h3>

                    {description && (
                      <p
                        style={{
                          color: "var(--text-muted)",
                          fontSize: ".875rem",
                          lineHeight: 1.65,
                          marginBottom: ".6rem",
                        }}
                      >
                        {description}
                      </p>
                    )}

                    {speakerName && (
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: ".4rem",
                          padding: ".25rem .75rem",
                          borderRadius: "999px",
                          background: "rgba(124,58,237,.12)",
                          border: "1px solid rgba(124,58,237,.25)",
                        }}
                      >
                        <span style={{ fontSize: ".85rem" }}>🎤</span>
                        <span
                          style={{
                            fontSize: ".78rem",
                            fontWeight: 600,
                            color: "var(--accent-light)",
                          }}
                        >
                          {speakerName}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}