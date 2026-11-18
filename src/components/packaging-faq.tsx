"use client";

import Link from "next/link";
import { useState } from "react";

const ITEMS = [
  {
    q: "What information is shown on TAHIR packaging?",
    a: (
      <>
        Each pack shows the TAHIR brand, the variant name (Gold, Amber, Green, Starling Burst,
        Arbor Burst, or Yellow), and the statutory health warning: “This tobacco product damages
        your health and is addictive”.
      </>
    ),
  },
  {
    q: "What is the age restriction for TAHIR tobacco products?",
    a: "TAHIR tobacco products are intended only for adults aged 18 and above. The 18+ age mark is displayed on packaging in accordance with applicable regulations.",
  },
  {
    q: "How can I contact TAHIR for more information about packaging or labelling?",
    a: (
      <>
        Reach TAHIR by email, phone, or WhatsApp from the{" "}
        <Link href="/contact" className="underline decoration-[#c6a15a] underline-offset-2">
          contact page
        </Link>
        .
      </>
    ),
  },
] as const;

export function PackagingFaq() {
  const [open, setOpen] = useState(-1);

  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8" aria-label="Compliance FAQ">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl font-medium sm:text-4xl">Compliance FAQ</h2>
        <div className="mt-6 space-y-3">
          {ITEMS.map((item, index) => {
            const expanded = open === index;
            const panelId = `packaging-faq-${index}`;
            return (
              <div key={item.q} className="overflow-hidden rounded-xl border border-[#c6a15a]/70 bg-[#9e7252] text-[#f6edd8]">
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => setOpen(expanded ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-serif text-base font-semibold sm:px-6 sm:text-lg"
                >
                  {item.q}
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden
                    className={`h-5 w-5 shrink-0 text-[#f6edd8] transition-transform ${expanded ? "rotate-180" : ""}`}
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
                </button>
                {expanded ? (
                  <p
                    id={panelId}
                    className="px-5 pb-5 font-serif text-sm leading-relaxed text-[#d9c7a4] sm:px-6 sm:text-base"
                  >
                    {item.a}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
