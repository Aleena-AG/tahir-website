"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import {
  CONTACT_EMAIL,
  WHATSAPP_NUMBER,
  emailHref,
  enquiryEmail,
  phoneHref,
  whatsappHref,
} from "@/lib/contact";

const fieldClass =
  "min-w-0 flex-1 bg-transparent py-3 pr-4 font-serif text-[#2c241c] outline-none placeholder:text-[#8a7d6e]";

type Channel = "email" | "whatsapp" | "phone";

type Enquiry = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function ContactForm() {
  const [opened, setOpened] = useState<Channel | null>(null);
  const [preview, setPreview] = useState<Enquiry | null>(null);

  function sendEmail(enquiry: Enquiry) {
    const emailTemplate = enquiryEmail(enquiry.name, enquiry.email, enquiry.phone, enquiry.message);
    window.open(emailHref(emailTemplate.subject, emailTemplate.body), "_blank", "noopener,noreferrer");
    setOpened("email");
    setPreview(null);
  }

  return (
    <>
      <form
        className="rounded-2xl border border-[#c6a15a]/70 bg-[#9e7252] p-6 text-[#f6edd8] shadow-[0_18px_50px_rgba(42,28,20,0.12)] sm:p-8"
        onSubmit={(event) => {
          event.preventDefault();
          const submitter = (event.nativeEvent as SubmitEvent).submitter;
          const channel: Channel =
            submitter instanceof HTMLButtonElement && submitter.value === "whatsapp" ? "whatsapp" : "email";
          const data = new FormData(event.currentTarget);
          const enquiry = {
            name: String(data.get("name") ?? "").trim(),
            email: String(data.get("email") ?? "").trim(),
            phone: String(data.get("phone") ?? "").trim(),
            message: String(data.get("message") ?? "").trim(),
          };
          const text = `Hello TAHIR,\n\nName: ${enquiry.name}\nEmail: ${enquiry.email}\nPhone: ${enquiry.phone}\n\nMessage: ${enquiry.message}`;

          if (channel === "whatsapp") {
            if (!WHATSAPP_NUMBER) return;
            window.open(whatsappHref(text), "_blank", "noopener,noreferrer");
            setOpened("whatsapp");
            return;
          }

          if (!CONTACT_EMAIL) return;
          setPreview(enquiry);
        }}
      >
        <p className="font-serif text-xs font-semibold tracking-[0.28em] text-[#f3e6c8] uppercase">Enquiry</p>
        <h2 className="mt-2 font-serif text-3xl font-medium">Send a Message</h2>
        <span aria-hidden className="mt-3 block h-0.5 w-10 bg-[#e4c56d]" />
        <p className="mt-4 font-serif text-base leading-relaxed text-[#f6edd8]">
          Write your message, then choose email or WhatsApp. Or call directly.
        </p>

        <Field id="contact-name" label="Name" icon={<PersonIcon />}>
          <input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
          />
        </Field>

        <Field id="contact-email" label="Email" icon={<MailIcon />}>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            className={fieldClass}
          />
        </Field>

        <Field id="contact-phone" label="Phone" icon={<PhoneIcon />}>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+44 7900 000 000"
            className={fieldClass}
          />
        </Field>

        <label htmlFor="contact-message" className="mt-4 block">
          <span className="font-serif text-xs font-semibold tracking-[0.18em] text-[#f3e6c8] uppercase">Message</span>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder="How can we help?"
            className="mt-2 w-full resize-y rounded-xl border border-white/40 bg-white px-4 py-3 font-serif text-[#2c241c] outline-none placeholder:text-[#8a7d6e]"
          />
        </label>

        <label className="mt-5 flex items-start gap-3 rounded-xl bg-[#2a1c14]/15 px-3 py-3 font-serif text-sm leading-relaxed text-[#f6edd8]">
          <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-[#e4c56d]" />
          <span>
            I have read and agree to the{" "}
            <Link href="/privacy" className="underline underline-offset-2">
              Privacy Policy
            </Link>
            , and consent to the processing of my information in accordance with it.{" "}
            <span className="text-[#ffd0c8]">*</span>
          </span>
        </label>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <button
            type="submit"
            value="email"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e4c56d] px-4 py-3 font-serif text-sm font-semibold text-[#2a1c14] transition hover:-translate-y-0.5"
          >
            <MailIcon />
            Email
          </button>
          <button
            type="submit"
            value="whatsapp"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f6edd8] px-4 py-3 font-serif text-sm font-semibold text-[#1b4332] transition hover:-translate-y-0.5"
          >
            <WhatsAppIcon />
            WhatsApp
          </button>
          <a
            href={phoneHref()}
            onClick={() => setOpened("phone")}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2a1c14] px-4 py-3 font-serif text-sm font-semibold text-[#f6edd8] transition hover:-translate-y-0.5"
          >
            <PhoneIcon />
            Call
          </a>
        </div>

        {opened && opened !== "email" ? (
          <p className="mt-4 font-serif text-sm leading-relaxed text-[#f6edd8]" role="status">
            {opened === "whatsapp"
              ? "WhatsApp is opening with this message. Send it from there."
              : "Your phone is opening this number."}
          </p>
        ) : null}
        {opened === "email" && !preview ? (
          <p className="mt-4 font-serif text-sm leading-relaxed text-[#f6edd8]" role="status">
            Gmail is opening with this message. Press Send there.
          </p>
        ) : null}
      </form>

      {preview ? (
        <EmailPreview enquiry={preview} onClose={() => setPreview(null)} onSend={() => sendEmail(preview)} />
      ) : null}
    </>
  );
}

function Field({
  id,
  label,
  icon,
  children,
}: {
  id: string;
  label: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <label htmlFor={id} className="mt-4 block">
      <span className="font-serif text-xs font-semibold tracking-[0.18em] text-[#f3e6c8] uppercase">{label}</span>
      <span className="mt-2 flex items-center overflow-hidden rounded-xl border border-white/40 bg-white">
        <span className="grid h-12 w-12 shrink-0 place-items-center text-[#9a7432]">{icon}</span>
        {children}
      </span>
    </label>
  );
}

function EmailPreview({
  enquiry,
  onClose,
  onSend,
}: {
  enquiry: Enquiry;
  onClose: () => void;
  onSend: () => void;
}) {
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center overflow-y-auto bg-[#1c140e]/75 px-4 py-8">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="email-preview-title"
        className="w-full max-w-lg overflow-hidden rounded-2xl bg-[#f7f1e6] text-[#2a1c14] shadow-2xl"
      >
        <div className="bg-[#2a1c14] px-6 py-5 text-[#f6edd8]">
          <p className="font-serif text-xs font-semibold tracking-[0.32em] text-[#e4c56d] uppercase">Tahir</p>
          <h2 id="email-preview-title" className="mt-1 font-serif text-3xl font-medium">
            Website enquiry
          </h2>
          <p className="mt-2 font-serif text-sm text-[#e7d7b4]">To {CONTACT_EMAIL}</p>
        </div>
        <div className="h-1 bg-[#e4c56d]" />
        <div className="space-y-4 px-6 py-5">
          <div className="grid gap-3 sm:grid-cols-3">
            <Detail label="Name" value={enquiry.name} />
            <Detail label="Email" value={enquiry.email} />
            <Detail label="Phone" value={enquiry.phone} />
          </div>
          <div className="rounded-xl border border-[#c6a15a]/40 bg-white px-4 py-4">
            <p className="font-serif text-xs font-semibold tracking-[0.18em] text-[#9a7432] uppercase">Message</p>
            <p className="mt-2 font-serif text-base leading-relaxed whitespace-pre-wrap">{enquiry.message}</p>
          </div>
          <p className="font-serif text-sm leading-relaxed text-[#6b5344]">Kind regards, {enquiry.name}</p>
        </div>
        <div className="border-t border-[#c6a15a]/40 px-6 py-3 font-serif text-xs leading-relaxed text-[#6b5344]">
          Adults aged 18 and over. Tobacco use is harmful to health and is addictive.
        </div>
        <div className="flex flex-col-reverse gap-3 px-6 pt-2 pb-5 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-[#2a1c14]/20 px-5 py-3 font-serif text-sm font-semibold text-[#2a1c14]"
          >
            Close
          </button>
          <button
            type="button"
            onClick={onSend}
            className="rounded-xl bg-[#e4c56d] px-5 py-3 font-serif text-sm font-semibold text-[#2a1c14]"
          >
            Send with Gmail
          </button>
        </div>
      </div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-[#c6a15a]/35 bg-[#fffaf2] px-3 py-3">
      <p className="font-serif text-[0.65rem] font-semibold tracking-[0.16em] text-[#9a7432] uppercase">{label}</p>
      <p className="mt-1 font-serif text-sm leading-snug break-words">{value}</p>
    </div>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="8" r="3" />
      <path d="M5.5 19.5c1.2-3 3.4-4.5 6.5-4.5s5.3 1.5 6.5 4.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M8 3.5h2.2l1.2 3-1.6 1a12 12 0 0 0 5.5 5.5l1-1.6 3 1.2V15a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 6 6.7 2 2 0 0 1 8 3.5Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 13.9c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.14-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.26.64-.38 1.02-.38.12 0 .23 0 .33.01.3.01.44.03.64.49.24.57.82 1.98.89 2.13.07.14.12.32.02.51-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.28.28-.12.55.16.26.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.26.14.42.12.58-.07.16-.19.67-.78.85-1.05.18-.26.36-.22.6-.13.24.09 1.54.73 1.8.86.26.13.44.19.5.3.07.11.07.64-.17 1.32z" />
    </svg>
  );
}
