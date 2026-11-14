import { Collection } from "@/components/collection";
import { Craft } from "@/components/craft";
import { Story } from "@/components/story";

export default function Home() {
  return (
    <main className="flex-1">
      <section aria-label="TAHIR collection" className="w-full">
        <img
          src="/tahir-collection.png"
          alt="The TAHIR collection: Gold, Amber, Green, Starling Burst, Arbor Burst, and Yellow"
          width={2126}
          height={740}
          decoding="sync"
          className="mx-auto block h-auto w-full max-w-[2126px]"
        />
      </section>
      <Collection />
      <Story />
      <Craft />
    </main>
  );
}
