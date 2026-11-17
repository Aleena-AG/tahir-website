import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story — TAHIR",
  description:
    "TAHIR is a tobacco brand with a clear focus on the origin, cultivation, and responsible production of tobacco.",
};

const STEPS = [
  {
    title: "Cultivation",
    text: "Tobacco is grown in selected regions with suitable climate and soil conditions, following good agricultural practices.",
    src: "/journey/cultivation.png",
    width: 480,
    height: 381,
  },
  {
    title: "Harvesting",
    text: "Leaves are harvested at the appropriate stage of maturity to help achieve the desired characteristics and quality.",
    src: "/journey/harvesting.png",
    width: 480,
    height: 332,
  },
  {
    title: "Processing",
    text: "The harvested leaves are carefully dried, sorted, and processed, then blended according to defined production standards.",
    src: "/journey/processing.png",
    width: 480,
    height: 470,
  },
  {
    title: "Packaging",
    text: "The final product is produced and packaged in a controlled facility, with quality checks at key stages to ensure it meets applicable standards and regulations.",
    src: "/journey/packaging.png",
    width: 480,
    height: 465,
  },
] as const;

export default function StoryPage() {
  return (
    <main className="flex-1 bg-[#f7f1e6] text-[#2c241c]">
      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <img
            src="/journey-start.jpg"
            alt="A tobacco field"
            width={1024}
            height={682}
            className="h-72 w-full rounded-2xl object-cover sm:h-96"
          />
          <div>
            <h2 className="font-serif text-3xl leading-tight font-medium sm:text-4xl">
              The Journey Behind TAHIR
            </h2>
            <p className="mt-4 font-serif text-base leading-relaxed text-[#3d342c] sm:text-lg">
              TAHIR is a tobacco brand with a clear focus on the origin, cultivation, and
              responsible production of tobacco. Our story begins in the tobacco fields, where
              carefully selected seeds, suitable growing conditions, and close attention from
              experienced growers lay the foundation for consistent leaf quality.
            </p>
            <p className="mt-4 font-serif text-base leading-relaxed text-[#3d342c] sm:text-lg">
              From cultivation through to production, tobacco leaves go through a series of
              well-defined steps, including harvesting at the right time, controlled processing,
              blending, and manufacturing in facilities that follow established quality and
              regulatory standards. This integrated process reflects our commitment to consistency,
              traceability, and responsible production.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl leading-tight font-medium sm:text-4xl">
            The Production Process
          </h2>
          <p className="mt-3 max-w-3xl font-serif text-base leading-relaxed text-[#3d342c] sm:text-lg">
            From the field to the finished product, TAHIR follows a structured and monitored
            production process:
          </p>
          <ol className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
            {STEPS.map((step) => (
              <li key={step.title} className="text-center">
                <img
                  src={step.src}
                  alt=""
                  width={step.width}
                  height={step.height}
                  className="mx-auto h-20 w-auto object-contain sm:h-24"
                />
                <h3 className="mt-4 font-serif text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 font-serif text-sm leading-relaxed text-[#5c5348]">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="font-serif text-3xl leading-tight font-medium sm:text-4xl">
              Quality &amp; Responsibility
            </h2>
            <div className="mt-4 space-y-4 font-serif text-base leading-relaxed text-[#3d342c] sm:text-lg">
              <p>
                Quality is a core part of TAHIR&apos;s production philosophy. We operate a modern
                manufacturing facility with controlled processes, qualified personnel, and regular
                quality checks throughout production, in accordance with applicable laws and
                industry regulations.
              </p>
              <p>
                We also recognize our responsibility in the tobacco industry. This includes
                complying with regulatory requirements, providing clear health information, and
                supporting the prevention of underage use.
              </p>
            </div>
          </div>
          <img
            src="/tahir-facility.jpg"
            alt="The TAHIR manufacturing facility"
            width={1024}
            height={576}
            className="h-64 w-full rounded-2xl object-cover sm:h-80 lg:h-[22rem]"
          />
        </div>
      </section>

      <p className="bg-[#2a1c14] px-4 py-8 text-center font-serif text-xl leading-snug font-medium text-[#f6edd8] sm:text-3xl">
        Tobacco use is harmful to health and is addictive.
      </p>
    </main>
  );
}
