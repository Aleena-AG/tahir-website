"use client";

import { usePathname } from "next/navigation";

const TITLES: Record<string, string> = {
  "/collection": "Our Collection",
  "/story": "Our Story",
  "/packaging": "Packaging & Labelling",
  "/contact": "Contact Us",
  "/health": "Health Information",
  "/age-restriction": "Age Restriction",
  "/responsible-use": "Responsible Use",
  "/privacy": "Privacy Policy",
  "/terms": "Terms of Use",
  "/legal": "Legal Notice",
};

export function SubpageBanner() {
  const pathname = usePathname();
  const title = TITLES[pathname];
  if (!title) return null;

  return (
    <header className="bg-[#2a1c14] text-[#f6edd8]">
      <div className="relative">
        <img
          src="/tahir-banner.png"
          alt=""
          width={1024}
          height={341}
          className="block h-auto w-full"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="w-[42%]">
              <h1 className="font-serif text-xl leading-tight font-medium sm:text-4xl lg:text-5xl">
                {title}
              </h1>
              <span aria-hidden className="mt-2 block h-0.5 w-10 bg-[#e4c98a] sm:mt-3 sm:w-16" />
            </div>
          </div>
        </div>
      </div>
      <p className="border-t border-[#c6a15a]/80 px-4 py-2.5 text-center font-serif text-sm font-medium sm:text-base">
        Tobacco use is harmful to health and is addictive.
      </p>
    </header>
  );
}
