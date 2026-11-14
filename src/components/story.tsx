export function Story() {
  return (
    <section
      id="story"
      aria-label="Our Story"
      className="scroll-mt-24 bg-[#f6f1e8] px-4 py-14 text-[#1c140e] sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
        <img
          src="/tahir-identity.jpg?v=2"
          alt="The gold TAHIR mark on dark leather"
          width={996}
          height={546}
          className="h-auto w-full max-w-[996px] rounded-[4.5%]"
        />

        <div className="max-w-md lg:max-w-none">
          <p className="flex items-center gap-4 font-serif text-xs tracking-[0.32em] text-[#3a2a18] uppercase">
            Our Story
            <span aria-hidden className="h-px w-14 bg-[#c4a15a] sm:w-20" />
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight font-medium sm:text-5xl">
            The TAHIR Identity
          </h2>
          <p className="mt-4 font-serif text-lg leading-relaxed text-[#3d2e22] sm:text-xl">
            A premium tobacco range defined by quality craftsmanship and a
            signature presentation.
          </p>
          <a
            href="#story"
            className="mt-6 inline-flex items-center gap-2 border-b border-[#c4a15a] pb-0.5 font-serif text-base font-medium text-[#b8892e]"
          >
            Learn More
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
