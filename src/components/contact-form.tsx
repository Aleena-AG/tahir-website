"use client";

import Link from "next/link";
import { useState } from "react";

const fieldClass =
  "w-full rounded-lg border border-[#d9cbb4] bg-white px-4 py-3 font-serif text-[#2c241c] outline-none placeholder:text-[#8a7d6e]";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="rounded-2xl border border-[#e4d3b4] bg-[#fbf7f0] p-6 sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <h2 className="font-serif text-3xl font-medium">Send a Message</h2>
      <span aria-hidden className="mt-3 block h-0.5 w-10 bg-[#c6a15a]" />

      {sent ? (
        <p className="mt-8 font-serif text-lg leading-relaxed">
          Thank you. Your message has been noted.
        </p>
      ) : (
        <>
          <label className="sr-only" htmlFor="contact-name">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            placeholder="Enter your name"
            className={`mt-6 ${fieldClass}`}
          />

          <label className="sr-only" htmlFor="contact-email">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Enter your email address"
            className={`mt-4 ${fieldClass}`}
          />

          <label className="sr-only" htmlFor="contact-message">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder="Type your message here..."
            className={`mt-4 resize-y ${fieldClass}`}
          />

          <label className="mt-5 flex items-start gap-3 font-serif text-sm leading-relaxed text-[#3d342c]">
            <input
              name="consent"
              type="checkbox"
              required
              className="mt-1 h-4 w-4 shrink-0 accent-[#2a1c14]"
            />
            <span>
              I have read and agree to the{" "}
              <Link href="/privacy" className="underline underline-offset-2">
                Privacy Policy
              </Link>
              , and consent to the processing of my information in accordance with it.{" "}
              <span className="text-[#b42318]">*</span>
            </span>
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex items-center rounded-lg bg-[#2a1c14] px-6 py-3 font-serif text-sm font-semibold text-[#f6edd8]"
          >
            Send Message
          </button>
        </>
      )}
    </form>
  );
}
