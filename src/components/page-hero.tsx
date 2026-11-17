export function PageHero({
  eyebrow,
  text,
  tone = "dark",
}: {
  eyebrow: string;
  title?: string;
  text: string;
  tone?: "dark" | "cream";
}) {
  const dark = tone === "dark";

  return (
    <header
      className={`px-4 pt-14 pb-6 sm:px-6 lg:px-8 lg:pt-20 ${
        dark ? "bg-[#140e09] text-[#f6edd8]" : "bg-[#f6f1e8] text-[#1c140e]"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <p
          className={`flex items-center gap-4 font-serif text-[0.7rem] tracking-[0.32em] uppercase ${
            dark ? "text-[#e4c98a]" : "text-[#3a2a18]"
          }`}
        >
          <span aria-hidden className={`h-px w-10 ${dark ? "bg-[#c6a15a]" : "bg-[#c4a15a]"}`} />
          {eyebrow}
        </p>
        <p
          className={`mt-4 max-w-xl font-serif text-lg leading-relaxed sm:text-xl ${
            dark ? "text-[#e7d7b4]" : "text-[#3d2e22]"
          }`}
        >
          {text}
        </p>
      </div>
    </header>
  );
}
