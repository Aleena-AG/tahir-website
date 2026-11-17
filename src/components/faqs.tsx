"use client";

import Link from "next/link";
import { useState } from "react";

const ITEMS = [
  {
    q: "What does the packaging information show?",
    a: (
      <>
        It shows the TAHIR brand, the product variant (such as Gold, Amber, Green, Starling
        Burst, Arbor Burst or Yellow), and the statutory health warning: “This tobacco product
        damages your health and is addictive”.
      </>
    ),
  },
  {
    q: "Where can I find health information?",
    a: (
      <>
        Health information is on the{" "}
        <Link href="/health" className="underline decoration-[#c4a15a] underline-offset-2">
          Health Information
        </Link>{" "}
        page. Every TAHIR pack also carries the statutory health warning.
      </>
    ),
  },
  {
    q: "How can I contact TAHIR?",
    a: (
      <>
        Write to TAHIR from the{" "}
        <Link href="/contact" className="underline decoration-[#c4a15a] underline-offset-2">
          contact page
        </Link>
        . Your message is noted there.
      </>
    ),
  },
] as const;

export function Faqs() {
  const [open, setOpen] = useState(0);

  return (
    <section
      aria-label="Frequently asked questions"
      className="relative overflow-hidden bg-[#4a3424] px-4 py-14 text-[#f6edd8] sm:px-6 lg:px-8 lg:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,220,180,0.28),transparent_62%)]"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="flex items-center justify-center gap-4 font-serif text-[0.7rem] tracking-[0.28em] text-[#e4c98a] uppercase">
          <span aria-hidden className="h-px w-10 bg-[#c6a15a] sm:w-16" />
          Frequently Asked Questions
          <span aria-hidden className="h-px w-10 bg-[#c6a15a] sm:w-16" />
        </p>
        <h2 className="mt-4 font-serif text-4xl leading-tight font-medium sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 font-serif text-base leading-relaxed text-[#e7d7b4] sm:text-lg">
          Find quick answers to common questions about TAHIR, our packaging and health
          information.
        </p>
      </div>

      <div className="relative mx-auto mt-8 max-w-4xl space-y-3">
        {ITEMS.map((item, index) => {
          const expanded = open === index;
          const panelId = `faq-panel-${index}`;
          return (
            <div key={item.q} className="overflow-hidden rounded-xl bg-[#f6f1e8] text-[#1c140e]">
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-serif text-base font-semibold sm:px-6 sm:text-lg"
              >
                {item.q}
                <Chevron open={expanded} />
              </button>
              {expanded ? (
                <p id={panelId} className="px-5 pb-5 font-serif text-sm leading-relaxed text-[#4a4036] sm:px-6 sm:text-base">
                  {item.a}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden
      className={`h-5 w-5 shrink-0 text-[#3a2a18] transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M5 7.5 10 12.5 15 7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
