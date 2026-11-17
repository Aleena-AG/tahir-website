export const PRODUCTS = [
  {
    name: "TAHIR GOLD",
    edition: "Signature Edition",
    src: "/products/gold.png",
    alt: "TAHIR Gold pack",
    width: 490,
    height: 317,
  },
  {
    name: "TAHIR AMBER",
    edition: "Amber Edition",
    src: "/products/amber.png",
    alt: "TAHIR Amber pack",
    width: 486,
    height: 327,
  },
  {
    name: "TAHIR GREEN",
    edition: "Green Edition",
    src: "/products/green.png",
    alt: "TAHIR Green pack",
    width: 466,
    height: 328,
  },
  {
    name: "TAHIR STARLING BURST",
    edition: "Starling Edition",
    src: "/products/starling.png",
    alt: "TAHIR Starling Burst pack",
    width: 454,
    height: 304,
  },
  {
    name: "TAHIR ARBOR BURST",
    edition: "Arbor Edition",
    src: "/products/arbor.png",
    alt: "TAHIR Arbor Burst pack",
    width: 468,
    height: 318,
  },
  {
    name: "TAHIR YELLOW",
    edition: "Yellow Edition",
    src: "/products/yellow.png",
    alt: "TAHIR Yellow pack",
    width: 464,
    height: 317,
  },
] as const;

export function Collection({ intro = true }: { intro?: boolean }) {
  return (
    <section
      id="collection"
      aria-label="The Collection"
      className={`relative scroll-mt-24 overflow-hidden bg-[#140e09] px-4 text-[#f3e6c8] sm:px-6 lg:px-8 ${
        intro ? "py-16 sm:py-20" : "pt-6 pb-16 sm:pb-20"
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-24 w-72 bg-[radial-gradient(ellipse_at_center,rgba(196,140,58,0.28),transparent_68%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -right-24 w-72 bg-[radial-gradient(ellipse_at_center,rgba(196,140,58,0.22),transparent_68%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-6xl">
        {intro ? <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="flex items-center justify-center gap-4 font-serif text-[0.7rem] tracking-[0.34em] text-[#e4c98a] uppercase">
            <span aria-hidden className="h-px w-10 bg-[#c6a15a] sm:w-16" />
            The Signature Range
            <span aria-hidden className="h-px w-10 bg-[#c6a15a] sm:w-16" />
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight font-medium text-[#f6edd8] sm:text-5xl">
            Explore Our Collection
          </h2>
          <p className="mt-3 font-serif text-lg text-[#e7d7b4] sm:text-xl">
            Six distinctive expressions. One signature identity.
          </p>
        </div> : null}

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {PRODUCTS.map((product) => (
            <li key={product.name}>
              <article className="flex h-full flex-col items-center rounded-[1.35rem] border border-[#d4b06a]/45 bg-[#2a1b10]/75 px-5 pt-5 pb-6 shadow-[0_0_28px_rgba(196,140,58,0.16)]">
                <div className="relative flex w-full items-center justify-center">
                  <span
                    aria-hidden
                    className="absolute bottom-3 h-8 w-2/3 rounded-full bg-[#e8c56a]/35 blur-xl"
                  />
                  <img
                    src={product.src}
                    alt={product.alt}
                    width={product.width}
                    height={product.height}
                    className="relative z-10 h-auto w-full max-w-[250px] object-contain"
                  />
                </div>
                <h3 className="mt-3 text-center font-serif text-sm tracking-[0.16em] text-[#e8c56a] sm:text-base">
                  {product.name}
                </h3>
                <span aria-hidden className="mt-2 h-px w-8 bg-[#c6a15a]" />
                <p className="mt-2 text-center font-serif text-sm text-[#d9c7a4]">
                  {product.edition}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
