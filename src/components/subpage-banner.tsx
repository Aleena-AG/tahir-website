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
      <div className="relative h-[6.75rem] overflow-hidden sm:h-auto">
        <img
          src="/tahir-banner.png"
          alt=""
          width={2172}
          height={296}
          className="absolute top-1/2 right-[-3rem] h-[6.75rem] w-auto max-w-none -translate-y-1/2 sm:static sm:right-auto sm:h-auto sm:w-full sm:translate-none"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-[6.15rem] sm:max-w-none sm:w-[42%]">
              <h1 className="font-serif text-[0.9rem] leading-tight font-medium sm:text-4xl lg:text-5xl">
                {title}
              </h1>
              <span aria-hidden className="mt-1.5 block h-0.5 w-8 bg-[#e4c98a] sm:mt-3 sm:w-16" />
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
