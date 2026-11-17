import type { Metadata } from "next";
import { PRODUCTS } from "@/components/collection";

export const metadata: Metadata = {
  title: "Our Collection",
  description:
    "Six TAHIR variants, presented with their packaging identification.",
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
    title: "Product identification",
    text: "Each TAHIR pack is clearly labeled with the brand name ('TAHIR') and the specific variant name (Gold, Amber, Green, Starling Burst, Arbor Burst, or Yellow) for easy identification.",
    icon: "box",
  },
  {
    title: "Warnings",
    text: "All TAHIR packaging carries the statutory health warning: \"This tobacco product damages your health and is addictive\" in a prominent, clear, and readable format.",
    icon: "alert",
  },
  {
    title: "Adult restriction",
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
    <span className="font-serif text-[0.7rem] font-semibold tracking-tight" aria-hidden>
      18+
    </span>
  );
}

export default function CollectionPage() {
  return (
    <main className="flex-1 bg-[#f7f1e6] text-[#2c241c]">
      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-medium sm:text-4xl">Product Range</h2>
            <span aria-hidden className="mx-auto mt-3 block h-0.5 w-16 bg-[#c6a15a]" />
            <p className="mt-3 font-serif text-base text-[#5c5348] sm:text-lg">
              Six TAHIR variants, presented with their packaging identification.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product, index) => (
              <li key={product.src}>
                <article className="flex h-full flex-col items-center rounded-2xl border border-[#c6a15a]/80 bg-[#fbf7f0] px-5 py-6">
                  <img
                    src={product.src}
                    alt={product.alt}
                    width={product.width}
                    height={product.height}
                    className="h-auto w-full max-w-[260px] object-contain"
                  />
                  <h3 className="mt-4 text-center font-serif text-lg font-semibold">{RANGE[index].name}</h3>
                  <p className="mt-1 text-center font-serif text-sm text-[#6b6258]">{RANGE[index].edition}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl font-medium sm:text-4xl">Packaging &amp; Health Information</h2>
          <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center rounded-2xl bg-[#efe4d0] px-6 py-8">
              <img
                src={PRODUCTS[0].src}
                alt={PRODUCTS[0].alt}
                width={PRODUCTS[0].width}
                height={PRODUCTS[0].height}
                className="h-auto w-full max-w-md object-contain"
              />
            </div>
            <ul className="space-y-6">
              {NOTES.map((note) => (
                <li key={note.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#c6a15a] text-[#9a7432]">
                    <NoteIcon icon={note.icon} />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold">{note.title}</h3>
                    <p className="mt-1 font-serif text-sm leading-relaxed text-[#5c5348] sm:text-base">
                      {note.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#2a1c14] text-[#f6edd8]">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-7 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <h2 className="font-serif text-2xl font-medium sm:text-3xl">Questions About the Range?</h2>
          <p className="max-w-md font-serif text-sm leading-relaxed text-[#e7d7b4] sm:text-base">
            For corporate enquiries about our products and product range, please visit our Contact
            page.
          </p>
          <a
            href="/contact"
            className="inline-flex w-fit items-center rounded-full bg-[#e4c56d] px-6 py-2.5 font-serif text-sm font-semibold text-[#2a1c14]"
          >
            Contact
          </a>
        </div>
      </section>
    </main>
  );
}
