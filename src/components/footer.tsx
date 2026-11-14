const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/#collection" },
  { label: "Our Story", href: "/#story" },
] as const;

const SUPPORT_LINKS = [
  { label: "Contact Us", href: "/#contact" },
  { label: "Find a Store", href: "/#contact" },
  { label: "FAQs", href: "/#contact" },
] as const;

const SOCIAL = [
  { label: "YouTube", icon: YouTubeIcon },
  { label: "Instagram", icon: InstagramIcon },
  { label: "Facebook", icon: FacebookIcon },
  { label: "LinkedIn", icon: LinkedInIcon },
] as const;

export function Footer() {
  return (
    <footer id="contact" className="bg-[#120d09] text-[#f3e6c8]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.1fr_0.7fr_0.8fr_1.3fr_0.9fr] lg:gap-8 lg:px-8">
        <img
          src="/tahir-logo.png"
          alt="TAHIR"
          width={471}
          height={205}
          className="h-14 w-auto"
        />

        <FooterColumn title="Quick Links" links={QUICK_LINKS} />
        <FooterColumn title="Support" links={SUPPORT_LINKS} />

        <div>
          <h2 className="font-serif text-base text-[#f6edd8]">Stay Updated</h2>
          <p className="mt-2 max-w-xs font-serif text-sm leading-relaxed text-[#d7c4a2]">
            Get updates on our products and brand news.
          </p>
          <form className="mt-4 flex max-w-xs items-center rounded-full border border-[#c6a15a]/80 bg-[#1a120d] pr-1 pl-4">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              className="w-full bg-transparent py-2 font-serif text-sm text-[#f6efe2] outline-none placeholder:text-[#b7a48a]"
            />
            <button
              type="button"
              aria-label="Subscribe"
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#e8c56a] text-[#1a110c]"
            >
              <span aria-hidden>→</span>
            </button>
          </form>
        </div>

        <div>
          <h2 className="font-serif text-base text-[#f6edd8]">Follow Us</h2>
          <ul className="mt-4 flex gap-3">
            {SOCIAL.map((item) => (
              <li key={item.label}>
                <a
                  href="#contact"
                  aria-label={item.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-[#e8c56a]/80 text-[#e8c56a]"
                >
                  <item.icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-[#c6a15a]/25 px-4 py-4 font-serif text-xs text-[#cbb892] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© 2026 TAHIR Tobacco. All rights reserved.</p>
        <p className="flex flex-wrap gap-x-3 gap-y-1">
          <a href="#contact" className="hover:text-[#f6edd8]">
            Terms of Use
          </a>
          <span aria-hidden>|</span>
          <a href="#contact" className="hover:text-[#f6edd8]">
            Privacy Policy
          </a>
          <span aria-hidden>|</span>
          <a href="#contact" className="hover:text-[#f6edd8]">
            Responsible Use
          </a>
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="font-serif text-base text-[#f6edd8]">{title}</h2>
      <ul className="mt-3 space-y-1.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="font-serif text-sm text-[#d7c4a2] hover:text-[#f6edd8]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="currentColor">
      <path d="M22 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C18.2 5.4 12 5.4 12 5.4s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 9 2 12.2 2 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6ZM10 15.2V9.2l5.2 3-5.2 3Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="none">
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="currentColor">
      <path d="M14.2 20v-6.1h2.1l.3-2.3h-2.4V10c0-.7.2-1.1 1.2-1.1h1.3V6.8c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.1-3.2 3.3v1.6H9.2v2.3h2.4V20h2.6Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4" fill="currentColor">
      <path d="M6.7 9.4H4.2V19h2.5V9.4ZM5.4 5C4.6 5 4 5.6 4 6.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4S6.2 5 5.4 5ZM19.8 19h-2.5v-5.1c0-1.3-.5-2.1-1.6-2.1-1 0-1.5.7-1.8 1.3-.1.2-.1.6-.1.9V19h-2.5V9.4h2.5v1.3c.4-.6 1.2-1.5 2.9-1.5 2.1 0 3.1 1.4 3.1 4.1V19Z" />
    </svg>
  );
}
