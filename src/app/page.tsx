import { Collection } from "@/components/collection";
import { Craft } from "@/components/craft";
import { Faqs } from "@/components/faqs";
import { Journey } from "@/components/journey";
import { Starling } from "@/components/starling";
import { Story } from "@/components/story";

export default function Home() {
  return (
    <main className="flex-1">
      <section aria-label="TAHIR collection" className="relative w-full">
        <img
          src="/tahir-collection.png"
          alt="The TAHIR collection: Gold, Amber, Green, Starling Burst, Arbor Burst, and Yellow"
          width={2126}
          height={740}
          decoding="sync"
          className="mx-auto block h-auto w-full max-w-[2126px]"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[2126px] px-[5%] sm:px-[6%]">
            <div className="w-[36%] max-w-xl">
            
              <h1 className="mt-1 font-serif text-[0.95rem] leading-[1.15] font-medium text-[#f6edd8] [text-shadow:0_2px_18px_rgba(0,0,0,0.55)] sm:mt-2 sm:text-4xl lg:text-5xl xl:text-6xl">
                Six Variants. One Identity.
              </h1>
              <p className="mt-1.5 font-serif text-[9px] leading-snug text-[#f3e6c8] [text-shadow:0_2px_12px_rgba(0,0,0,0.55)] sm:mt-3 sm:text-base lg:text-lg">
                Explore the <span className="text-[#e0c27a] text-xl font-bold">TAHIR</span> range and its distinctive packaging designs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Journey />
      <Collection />
      <Story />
      <Starling />
      {/* <Craft /> */}
      <Faqs />
    </main>
  );
}
