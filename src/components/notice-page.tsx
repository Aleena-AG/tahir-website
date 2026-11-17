import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export function noticeMetadata(title: string, description: string): Metadata {
  return {
    title: `${title} — TAHIR`,
    description,
  };
}

export function NoticePage({
  eyebrow,
  title,
  text,
  paragraphs,
}: {
  eyebrow: string;
  title: string;
  text: string;
  paragraphs: readonly string[];
}) {
  return (
    <main className="flex-1 bg-[#f7f1e6] text-[#2c241c]">
      <PageHero eyebrow={eyebrow} title={title} text={text} tone="cream" />
      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-6xl space-y-4">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-2xl font-serif text-lg leading-relaxed text-[#3d342c]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}
