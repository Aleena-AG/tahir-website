"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const STORAGE_KEY = "tahir-age-confirmed";

export function AgeGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [status, setStatus] = useState<"checking" | "ask" | "denied" | "open">("checking");
  const locked = status === "ask" || status === "denied";

  useEffect(() => {
    setStatus(window.localStorage.getItem(STORAGE_KEY) === "yes" ? "open" : "ask");
  }, []);

  useEffect(() => {
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [locked]);

  function confirm() {
    window.localStorage.setItem(STORAGE_KEY, "yes");
    setStatus("open");
    router.replace("/");
  }

  return (
    <>
      <div
        inert={locked ? true : undefined}
        aria-hidden={locked ? true : undefined}
        className="flex min-h-full flex-1 flex-col"
      >
        {children}
      </div>
      {locked ? <AgeDialog status={status} onConfirm={confirm} onDeny={() => setStatus("denied")} /> : null}
    </>
  );
}

function AgeDialog({
  status,
  onConfirm,
  onDeny,
}: {
  status: "checking" | "ask" | "denied" | "open";
  onConfirm: () => void;
  onDeny: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[80] grid place-items-center overflow-y-auto bg-[#100c09] px-5 py-12 text-[#f6edd8]">
      <div role="dialog" aria-modal="true" aria-labelledby="age-title" className="w-full max-w-md text-center">
        <img src="/tahir-logo.png" alt="TAHIR" width={471} height={205} className="mx-auto h-16 w-auto" />
        <p className="mt-8 flex items-center justify-center gap-4 font-serif text-[0.7rem] tracking-[0.32em] text-[#e4c98a] uppercase">
          <span aria-hidden className="h-px w-8 bg-[#c6a15a]" />
          Adults only
          <span aria-hidden className="h-px w-8 bg-[#c6a15a]" />
        </p>
        <h1 id="age-title" className="mt-4 font-serif text-4xl leading-tight font-medium italic sm:text-5xl">
          Confirm your age
        </h1>
        <p className="mt-4 font-serif text-lg leading-relaxed text-[#e7d7b4]">
          TAHIR is for adults aged 18 and over. Confirm your age to enter the site.
        </p>
        {status === "denied" ? (
          <>
            <p className="mt-8 rounded-2xl border border-[#e0c27a]/40 px-5 py-4 font-serif text-base leading-relaxed text-[#f6edd8]">
              This site is only available to adults aged 18 and over.
            </p>
            <button
              type="button"
              onClick={onConfirm}
              className="mt-6 rounded-full bg-[#f6edd8] px-6 py-3 font-serif text-base text-[#1c140e] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e4c56d]"
            >
              I am 18 or older
            </button>
          </>
        ) : (
          <div className="mt-8 flex flex-col gap-3">
            <button
              type="button"
              onClick={onConfirm}
              className="rounded-full bg-[#f6edd8] px-6 py-3 font-serif text-base text-[#1c140e] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e4c56d]"
            >
              I am 18 or older
            </button>
            <button
              type="button"
              onClick={onDeny}
              className="rounded-full border border-[#e0c27a] bg-[#1a120c] px-6 py-3 font-serif text-base text-[#f6edd8] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e0c27a]/10"
            >
              I am under 18
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
