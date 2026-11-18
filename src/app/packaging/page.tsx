import type { Metadata } from "next";
import { PRODUCTS } from "@/components/collection";
import { PackagingFaq } from "@/components/packaging-faq";

export const metadata: Metadata = {
  title: "Packaging & Labelling",
  description:
    "How TAHIR packs are labelled, including the variant name, the health warning, and the 18+ mark.",
};

const RANGE = [
  { name: "TAHIR Gold", edition: "Gold Edition" },
  { name: "TAHIR Amber", edition: "Amber Edition" },
  { name: "TAHIR Green", edition: "Green Edition" },
  { name: "TAHIR Starling Burst", edition: "Starling Burst Edition" },
  { name: "TAHIR Arbor Burst", edition: "Arbor Burst Edition" },
  { name: "TAHIR Yellow", edition: "Yellow Edition" },
] as const;

const NOTES = [
  {
    title: "Product Identification",
    text: "Each TAHIR pack is clearly labelled with the brand name (TAHIR) and the specific variant name (Gold, Amber, Green, Starling Burst, Arbor Burst, or Yellow) for easy identification.",
    icon: "box",
  },
  {
    title: "Health Warnings",
    text: "All TAHIR packaging carries the statutory health warning: \"This tobacco product damages your health and is addictive\" in a prominent, clear, and readable format.",
    icon: "alert",
  },
  {
    title: "Age Restriction",
    text: "TAHIR tobacco products are intended only for adults aged 18 and above. The 18+ age mark is displayed on packaging in accordance with applicable regulations.",
    icon: "age",
  },
] as const;

function NoteIcon({ icon }: { icon: (typeof NOTES)[number]["icon"] }) {
  if (icon === "box") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M12 3.5 20 7.5 12 11.5 4 7.5 12 3.5Z" />
        <path d="M20 7.5v9L12 20.5 4 16.5v-9" />
        <path d="M12 11.5V20.5" />
      </svg>
    );
  }
  if (icon === "alert") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M12 4.5 21 19.5H3L12 4.5Z" />
        <path d="M12 10v4.5" strokeLinecap="round" />
        <circle cx="12" cy="16.8" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return (
    <span className="font-serif text-sm font-semibold tracking-tight" aria-hidden>
      18+
    </span>
  );
}

export default function PackagingPage() {
  return (
    <main className="flex-1 bg-[#e8d4b8] text-[#4a3022]">
      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-serif text-3xl font-medium sm:text-4xl">
            Understanding Our Packaging
          </h2>
          <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center rounded-2xl border border-[#c6a15a]/70 bg-[#9e7252] px-6 py-8">
              <img
                src={PRODUCTS[0].src}
                alt={PRODUCTS[0].alt}
                width={PRODUCTS[0].width}
                height={PRODUCTS[0].height}
                className="h-auto w-full max-w-md object-contain"
              />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold sm:text-3xl">
                Labelling and Packaging Identification
              </h3>
              <div className="mt-4 space-y-4 font-serif text-base leading-relaxed text-[#4a3022]">
                <p>
                  All TAHIR tobacco products are provided in clearly labelled packs that display
                  the brand name (TAHIR) and the specific variant name (Gold, Amber, Green,
                  Starling Burst, Arbor Burst, or Yellow) on the packaging.
                </p>
                <p>
                  Packaging includes the statutory health warning: &quot;This tobacco product
                  damages your health and is addictive&quot; in a prominent, clear and readable
                  format, in accordance with applicable regulations.
                </p>
                <p>
                  The packaging is designed to clearly identify the product and variant, and to
                  carry the required health and age information. It does not imply any claims
                  about quality or reduced risk.
                </p>
              </div>
            </div>
          </div>

          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {NOTES.map((note) => (
              <li
                key={note.title}
                className="rounded-2xl border border-[#c6a15a]/70 bg-[#9e7252] px-5 py-5 text-[#f6edd8]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#f6edd8] text-[#f6edd8]">
                    <NoteIcon icon={note.icon} />
                  </span>
                  <h3 className="font-serif text-lg font-semibold">{note.title}</h3>
                </div>
                <p className="mt-3 font-serif text-sm leading-relaxed text-[#d9c7a4]">{note.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 lg:px-8" aria-label="The TAHIR packs">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl font-medium sm:text-4xl">Our Six Pack Variants</h2>
          <p className="mt-3 font-serif text-base text-[#4a3022] sm:text-lg">
            Six TAHIR variants, each with its own distinct packaging for easy identification.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {PRODUCTS.map((product, index) => (
              <li key={product.src} className="text-center">
                <img
                  src={product.src}
                  alt={product.alt}
                  width={product.width}
                  height={product.height}
                  className="mx-auto h-auto w-full object-contain"
                />
                <p className="mt-2 font-serif text-sm font-semibold">{RANGE[index].name}</p>
                <p className="font-serif text-xs text-[#4a3022]">{RANGE[index].edition}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PackagingFaq />
    </main>
  );
}
