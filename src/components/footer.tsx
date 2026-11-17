import Link from "next/link";

const COMPANY = [
  { label: "Our Story", href: "/story" },
  { label: "Process", href: "/#journey" },
  { label: "Collection", href: "/collection" },
] as const;

const COMPLIANCE = [
  { label: "Health Information", href: "/health" },
  { label: "Age Restriction", href: "/age-restriction" },
  { label: "Responsible Use", href: "/responsible-use" },
] as const;

const SUPPORT = [{ label: "Contact", href: "/contact" }] as const;

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Legal Notice", href: "/legal" },
] as const;

export function Footer() {
  return (
    <footer className="bg-[#1f1610] text-[#e7dcc8]">
      <div className="hidden w-full items-stretch justify-between px-6 py-9 xl:flex">
        <Brand />
        <Divider />
        <Tagline />
        <Divider />
        <Column title="Company" links={COMPANY} />
        <Divider />
        <Column title="Compliance" links={COMPLIANCE} />
        <Divider />
        <Column title="Support" links={SUPPORT} />
        <Divider />
        <Warning />
      </div>

      <div className="flex w-full flex-col gap-8 px-5 py-8 sm:px-6 xl:hidden">
        <Brand />
        <Tagline />
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
          <Column title="Company" links={COMPANY} />
          <Column title="Compliance" links={COMPLIANCE} />
          <Column title="Support" links={SUPPORT} />
        </div>
        <Warning />
      </div>

      <div className="flex w-full flex-col gap-3 px-5 pt-1 pb-6 font-serif text-[12px] text-[#d9d0c2] sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:pb-6">
        <p>© 2026 TAHIR. All rights reserved.</p>
        <ul className="flex flex-wrap items-center">
          {LEGAL.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 ? (
                <span aria-hidden className="px-2.5 text-[#d9d0c2]/70">
                  |
                </span>
              ) : null}
              <Link
                href={item.href}
                className="cursor-pointer underline decoration-transparent underline-offset-4 transition hover:text-[#f6edd8] hover:decoration-[#e4c56d]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

function Brand() {
  return (
    <div className="flex items-center xl:pr-8">
      <Link href="/" aria-label="TAHIR home" className="inline-flex cursor-pointer">
        <img
          src="/tahir-logo.png"
          alt=""
          width={471}
          height={205}
          className="h-12 w-auto sm:h-14"
        />
      </Link>
    </div>
  );
}

function Tagline() {
  return (
    <p className="max-w-[15rem] font-serif text-[13px] leading-relaxed xl:px-7">
      A premium tobacco range, built on craftsmanship, quality, and a distinct brand heritage.
    </p>
  );
}

function Warning() {
  return (
    <div className="flex max-w-sm items-center gap-3.5 xl:max-w-[18rem] xl:pl-7">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#d4b06a] font-serif text-[13px] leading-none text-[#f0e2c4]">
        18+
      </span>
      <p className="font-serif text-[13px] leading-relaxed">
        Tobacco products are for adults only (18+). Tobacco use is harmful to health and is
        addictive.
      </p>
    </div>
  );
}

function Column({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div className="xl:px-7">
      <h2 className="font-serif text-[13px] text-[#f4ecdf]">{title}</h2>
      <ul className="mt-2 space-y-1">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="cursor-pointer font-serif text-[13px] leading-snug text-[#e7dcc8] underline decoration-transparent underline-offset-4 transition hover:text-[#f6edd8] hover:decoration-[#e4c56d]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Divider() {
  return <span aria-hidden className="w-px shrink-0 self-stretch bg-[#c6a15a]/75" />;
}
