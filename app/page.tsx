import { Stack } from "../lib/contentstack";
import Hero from "@/components/Hero";
import Speakers from "@/components/Speakers";
import Schedule from "@/components/Schedule";
import Navbar from "@/components/Navbar";

async function getPage() {
  const Query = Stack.ContentType("page").Query();

  const data = await Query
    .includeReference([
      "modular_blocks.speaker_section.speakers",
      "modular_blocks.schedule_section.schedule_list",
      "modular_blocks.schedule_section.schedule_list.speaker",
    ])
    .toJSON()
    .find();

  return data[0][0];
}

export default async function Home() {
  const page: any = await getPage();
  const blocks: any[] = page?.modular_blocks ?? [];

  return (
    <>
      <Navbar />

      <main>
        {blocks.map((block: any, index: number) => {
          if (block.hero)
            return <Hero key={index} data={block.hero} />;

          if (block.speaker_section)
            return <Speakers key={index} data={block.speaker_section} />;

          if (block.schedule_section)
            return <Schedule key={index} data={block.schedule_section} />;

          if (block.rich_text_section)
            return (
              <section
                key={index}
                id="about"
                style={{
                  background: "var(--bg)",
                  padding: "7rem 1.5rem",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <div className="max-w-2xl mx-auto">
                  <div
                    className="rich-prose"
                    dangerouslySetInnerHTML={{
                      __html: block.rich_text_section.content,
                    }}
                  />
                </div>
              </section>
            );

          return null;
        })}
      </main>

      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "2rem 1.5rem",
          textAlign: "center",
          color: "var(--text-faint)",
          fontSize: ".8rem",
        }}
      >
        © 2026 FutureTech Summit. All rights reserved.
      </footer>
    </>
  );
}