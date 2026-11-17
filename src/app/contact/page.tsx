import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact — TAHIR",
  description: "Send a message to TAHIR. For adults 18 and over.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-[#f7f1e6] text-[#2c241c]">
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
            <span aria-hidden className="mt-2 block h-0.5 w-10 bg-[#c6a15a]" />
            <p className="mt-4 max-w-md font-serif text-lg leading-relaxed">
              For general and corporate enquiries, send us a message.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
