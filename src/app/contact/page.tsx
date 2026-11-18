import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import {
  CONTACT_EMAIL,
  PHONE_DISPLAY,
  PHONE_NUMBER,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  emailHref,
  phoneHref,
  whatsappHref,
} from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach TAHIR by email, phone, or WhatsApp. For adults 18 and over.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-[#e8d4b8] text-[#4a3022]">
      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <img
              src="/tahir-facility.jpg"
              alt="The TAHIR manufacturing facility"
              width={1024}
              height={576}
              className="h-auto w-full rounded-2xl"
            />
            <p className="mt-8 font-serif text-xs font-semibold tracking-[0.28em] uppercase">
              Get in touch
            </p>
            <span aria-hidden className="mt-2 block h-0.5 w-10 bg-[#4a3022]" />
            <p className="mt-4 max-w-md font-serif text-lg leading-relaxed">
              For general and corporate enquiries, reach us by email, phone, or WhatsApp.
            </p>
            <div className="mt-6 grid max-w-md gap-3">
              {CONTACT_EMAIL ? (
                <a
                  href={emailHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-[#4a3022]/20 bg-[#f6edd8] px-5 py-4"
                >
                  <span className="block font-serif text-xs font-semibold tracking-[0.22em] uppercase">
                    Email
                  </span>
                  <span className="mt-1 block font-serif text-lg">{CONTACT_EMAIL}</span>
                </a>
              ) : null}
              {PHONE_NUMBER ? (
                <a
                  href={phoneHref()}
                  className="rounded-2xl border border-[#4a3022]/20 bg-[#f6edd8] px-5 py-4"
                >
                  <span className="block font-serif text-xs font-semibold tracking-[0.22em] uppercase">
                    Phone
                  </span>
                  <span className="mt-1 block font-serif text-lg">{PHONE_DISPLAY}</span>
                </a>
              ) : null}
              {WHATSAPP_NUMBER ? (
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-[#4a3022]/20 bg-[#f6edd8] px-5 py-4"
                >
                  <span className="block font-serif text-xs font-semibold tracking-[0.22em] uppercase">
                    WhatsApp
                  </span>
                  <span className="mt-1 block font-serif text-lg">{WHATSAPP_DISPLAY}</span>
                </a>
              ) : null}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
