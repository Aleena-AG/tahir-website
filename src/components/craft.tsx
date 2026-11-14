const STEPS = [
  {
    title: "Selection",
    text: "Carefully sourced tobacco leaves.",
    icon: LeafIcon,
  },
  {
    title: "Processing",
    text: "Prepared with technical precision.",
    icon: GearIcon,
  },
  {
    title: "Blending",
    text: "Expertly combined for a consistent profile.",
    icon: LayersIcon,
  },
  {
    title: "Packaging",
    text: "Secure and distinctive TAHIR packs.",
    icon: PackIcon,
  },
] as const;

export function Craft() {
  return (
    <section
      aria-label="From leaf to blend"
      className="relative overflow-hidden bg-[#1c130e] px-4 py-14 text-[#f4ead8] sm:px-6 lg:px-8 lg:py-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-[42%] bg-[radial-gradient(ellipse_at_right,rgba(140,78,28,0.38),transparent_72%)]"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:gap-10">
        <div className="shrink-0 lg:w-52">
          <p className="font-serif text-[0.7rem] tracking-[0.28em] text-[#e4c98a] uppercase">
            Tobacco Craftsmanship
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.05] font-medium italic sm:text-5xl">
            From Leaf
            <br />
            to Blend
          </h2>
        </div>

        <span
          aria-hidden
          className="hidden h-28 w-px shrink-0 bg-[#c6a15a]/55 lg:block"
        />

        <ol className="grid flex-1 grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-6">
          {STEPS.map((step, index) => (
            <li key={step.title} className="relative text-center">
              {index > 0 ? (
                <span
                  aria-hidden
                  className="absolute top-5 -left-3 hidden text-[#e8c56a] md:block"
                >
                  →
                </span>
              ) : null}
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-[#e8c56a]/80 text-[#e8c56a]">
                <step.icon />
              </span>
              <h3 className="mt-3 font-serif text-lg text-[#f6edd8]">
                {step.title}
              </h3>
              <p className="mt-1 font-serif text-sm leading-snug text-[#d7c4a2]">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none">
      <path
        d="M5.5 18.5C5.5 18.5 7 9 19 5.5 16.2 13.5 12.2 17.2 5.5 18.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M8.2 15.2c1.8-1.8 3.6-4.2 6.2-6.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M6.1 6.1l1.6 1.6M16.3 16.3l1.6 1.6M17.9 6.1l-1.6 1.6M7.7 16.3l-1.6 1.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none">
      <path
        d="M12 4.5 19 8 12 11.5 5 8 12 4.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M5 12 12 15.5 19 12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M5 16 12 19.5 19 16"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PackIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none">
      <path
        d="M4.5 8.5 12 4.8l7.5 3.7v7.8L12 20.2l-7.5-3.9V8.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M12 12.2 19.5 8.5M12 12.2V20M12 12.2 4.5 8.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
