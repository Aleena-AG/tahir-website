const STEPS = [
  {
    title: "Selection",
    text: "Carefully sourced tobacco leaves.",
    src: "/journey/cultivation.png",
    width: 480,
    height: 381,
  },
  {
    title: "Processing",
    text: "Prepared with technical precision.",
    src: "/journey/processing.png",
    width: 480,
    height: 470,
  },
  {
    title: "Blending",
    text: "Expertly combined for a consistent profile.",
    src: "/journey/harvesting.png",
    width: 480,
    height: 332,
  },
  {
    title: "Packaging",
    text: "Secure and distinctive TAHIR packs.",
    src: "/journey/packaging.png",
    width: 480,
    height: 465,
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
                  className="absolute top-7 -left-3 hidden text-[#e8c56a] md:block"
                >
                  →
                </span>
              ) : null}
              <img
                src={step.src}
                alt=""
                width={step.width}
                height={step.height}
                className="mx-auto h-16 w-auto object-contain"
              />
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
