"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { id: "home", label: "Home", href: "/" },
  { id: "collection", label: "The Collection", href: "/#collection" },
  { id: "story", label: "Our Story", href: "/#story" },
  { id: "packaging", label: "Packaging", href: "/#packaging" },
  { id: "contact", label: "Contact", href: "/#contact" },
] as const;

type LinkId = (typeof LINKS)[number]["id"];

const PLATE =
  "M0 0 H248 C256 6, 252 24, 242 40 C232 56, 222 70, 210 74 H0 Z";
const EDGE = "M248 0 C256 6, 252 24, 242 40 C232 56, 222 70, 210 74";

export function Navbar() {
  const [active, setActive] = useState<LinkId>("home");
  const [open, setOpen] = useState(false);

  function select(id: LinkId) {
    setActive(id);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50">
      <div className="relative flex h-[76px] items-stretch bg-[#24160f] sm:h-[88px]">
        <Link
          href="/"
          aria-label="TAHIR home"
          onClick={() => select("home")}
          className="relative z-10 flex w-[240px] shrink-0 items-center pr-8 pl-4 sm:w-[300px] sm:pl-6 lg:w-[360px]"
        >
          <LogoPlate />
          <img
            src="/tahir-logo.png"
            alt=""
            width={471}
            height={205}
            className="relative z-10 h-16 w-auto mix-blend-multiply sm:h-[4.75rem]"
          />

        </Link>

        <nav aria-label="Primary" className="hidden min-w-0 flex-1 items-center lg:flex">
          <ul className="grid w-full grid-cols-5 items-center">
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

        <div className="ml-auto flex items-center gap-3 pr-3 sm:pr-6 lg:pr-7">
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
                  onClick={() => select(link.id)}
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
  onSelect: (id: LinkId) => void;
}) {
  return (
    <Link
      href={link.href}
      onClick={() => onSelect(link.id)}
      aria-current={active ? "page" : undefined}
      className={`relative font-serif text-[16px] tracking-[0.01em] transition-colors xl:text-[18px] ${
        active ? "text-[#e4c56d]" : "text-[#f6efe2] hover:text-[#e4c56d]"
      }`}
    >
      {link.label}
      <span
        aria-hidden
        className={`absolute -bottom-2 left-1/2 h-[1.5px] -translate-x-1/2 bg-[#e4c56d] transition-all ${
          active ? "w-7 opacity-100" : "w-0 opacity-0"
        }`}
      />
    </Link>
  );
}

function AdultsBadge() {
  return (
    <span className="inline-flex items-center rounded-full sm:gap-2 sm:border sm:border-[#d4b06a] sm:py-[3px] sm:pr-3.5 sm:pl-[3px]">
      <span className="grid h-[26px] w-[26px] place-items-center rounded-full border border-[#d4b06a] font-serif text-[10px] leading-none text-[#f3e6c4]">
        18+
      </span>
      <span className="hidden font-serif text-[15px] text-[#f6efe2] sm:inline">
        Adults Only
      </span>
    </span>
  );
}

function LogoPlate() {
  return (
    <svg
      viewBox="0 0 280 74"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full overflow-visible"
      aria-hidden
    >
      <defs>
        <linearGradient id="plate-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f6e4c4" />
          <stop offset="42%" stopColor="#f0d3a6" />
          <stop offset="100%" stopColor="#e4c48a" />
        </linearGradient>
        <linearGradient id="plate-rim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff1c9" />
          <stop offset="50%" stopColor="#e0b85c" />
          <stop offset="100%" stopColor="#8d6428" />
        </linearGradient>
        <filter id="plate-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path d={PLATE} fill="url(#plate-gold)" />
      <path
        d={EDGE}
        fill="none"
        stroke="url(#plate-rim)"
        strokeWidth="2.2"
        filter="url(#plate-glow)"
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
