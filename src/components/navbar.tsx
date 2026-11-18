"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { id: "home", label: "Home", href: "/" },
  { id: "collection", label: "The Collection", href: "/collection" },
  { id: "story", label: "Our Story", href: "/story" },
  { id: "packaging", label: "Packaging", href: "/packaging" },
  { id: "contact", label: "Contact", href: "/contact" },
] as const;

const PLATE =
  "M0 0 H248 C256 6, 252 24, 242 40 C232 56, 222 70, 210 74 H0 Z";
const EDGE = "M248 0 C256 6, 252 24, 242 40 C232 56, 222 70, 210 74";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active =
    LINKS.find((link) => link.href !== "/" && pathname.startsWith(link.href))?.id ??
    "home";

  function select() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50">
      <div className="relative flex h-[76px] items-stretch bg-[#24160f] sm:h-[88px]">
        <Link
          href="/"
          aria-label="TAHIR home"
          onClick={select}
          className="relative z-10 flex w-[14.2rem] shrink-0 items-center pl-4 sm:w-[300px] sm:pl-6 lg:w-[360px]"
        >
          <LogoPlate />
          <img
            src="/tahir-logo.png"
            alt=""
            width={471}
            height={205}
            className="relative z-10 h-14 w-auto mix-blend-multiply sm:h-[4.75rem]"
          />
        </Link>

        <nav aria-label="Primary" className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
          <ul className="flex items-center justify-center gap-7 xl:gap-9">
            {LINKS.map((link) => (
              <li key={link.id} className="text-center">
                <NavLink
                  link={link}
                  active={active === link.id}
                  onSelect={select}
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3 pr-3 sm:gap-4 sm:pr-6 lg:pr-7">
          <span aria-hidden className="h-9 w-px bg-[#e0c27a] sm:h-11" />
          <AdultsBadge />
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-[#d4b06a] text-[#f6efe2] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-b border-[#d4b06a]/50 bg-[#24160f] lg:hidden"
        >
          <ul className="flex flex-col px-6 py-2">
            {LINKS.map((link) => (
              <li key={link.id} className="border-b border-white/10 last:border-0">
                <Link
                  href={link.href}
                  onClick={select}
                  aria-current={active === link.id ? "page" : undefined}
                  className={`flex items-center justify-between py-3.5 font-serif text-xl tracking-wide ${
                    active === link.id ? "text-[#e4c56d]" : "text-[#f6efe2]"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={`h-px w-8 ${active === link.id ? "bg-[#e4c56d]" : "bg-transparent"}`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function NavLink({
  link,
  active,
  onSelect,
}: {
  link: (typeof LINKS)[number];
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <Link
      href={link.href}
      onClick={onSelect}
      aria-current={active ? "page" : undefined}
      className={`group relative font-serif text-[16px] tracking-[0.01em] transition-all duration-300 xl:text-[18px] ${
        active
          ? "text-[#e4c56d] [text-shadow:0_0_14px_rgba(228,197,109,0.45)]"
          : "text-[#f6efe2] hover:-translate-y-0.5 hover:text-[#e4c56d] hover:[text-shadow:0_0_14px_rgba(228,197,109,0.55)]"
      }`}
    >
      {link.label}
      <span
        aria-hidden
        className={`absolute -bottom-2 left-1/2 h-[1.5px] -translate-x-1/2 bg-[#e4c56d] shadow-[0_0_8px_rgba(228,197,109,0.8)] transition-all duration-300 ${
          active ? "w-7 opacity-100" : "w-0 opacity-0 group-hover:w-7 group-hover:opacity-100"
        }`}
      />
    </Link>
  );
}

function AdultsBadge() {
  return (
    // <span className="inline-flex h-8 items-center rounded-full border border-[#e0c27a] bg-[#24160f] p-px pr-1 sm:h-9 sm:pr-3.5">
      <span className="grid h-[26px] w-[26px] place-items-center rounded-full border border-[#e0c27a] font-serif text-[10px] leading-none font-bold tracking-tight text-[#f6edd8] sm:h-[30px] sm:w-[30px] sm:text-[11px]">
        18+
      </span>
     
  
  );
}

function LogoPlate() {
  return (
    <>
      <PlateSvg
        id="plate-m"
        viewBox="46 0 214 74"
        className="absolute top-0 left-0 h-full w-auto sm:hidden"
      />
      <PlateSvg
        id="plate-d"
        viewBox="0 0 280 74"
        stretch
        className="absolute inset-0 hidden h-full w-full sm:block"
      />
    </>
  );
}

function PlateSvg({
  id,
  viewBox,
  className,
  stretch = false,
}: {
  id: string;
  viewBox: string;
  className: string;
  stretch?: boolean;
}) {
  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio={stretch ? "none" : "xMinYMid meet"}
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f6e4c4" />
          <stop offset="42%" stopColor="#f0d3a6" />
          <stop offset="100%" stopColor="#e4c48a" />
        </linearGradient>
        <linearGradient id={`${id}-rim`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff1c9" />
          <stop offset="50%" stopColor="#e0b85c" />
          <stop offset="100%" stopColor="#8d6428" />
        </linearGradient>
        <filter id={`${id}-glow`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path d={PLATE} fill={`url(#${id}-gold)`} />
      <path
        d={EDGE}
        fill="none"
        stroke={`url(#${id}-rim)`}
        strokeWidth="2.2"
        filter={`url(#${id}-glow)`}
      />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-3 w-4" aria-hidden>
      <span
        className={`absolute left-0 h-px w-4 bg-[#f6efe2] transition-transform ${
          open ? "top-1.5 rotate-45" : "top-0"
        }`}
      />
      <span
        className={`absolute top-1.5 left-0 h-px w-4 bg-[#f6efe2] transition-opacity ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 h-px w-4 bg-[#f6efe2] transition-transform ${
          open ? "top-1.5 -rotate-45" : "top-3"
        }`}
      />
    </span>
  );
}
