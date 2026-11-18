"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    title: "Cultivation",
    text: "Careful growing and field management",
    src: "/journey/cultivation.png",
    width: 480,
    height: 381,
  },
  {
    title: "Harvesting",
    text: "Timely, responsible leaf selection",
    src: "/journey/harvesting.png",
    width: 680,
    height: 477,
  },
  {
    title: "Processing",
    text: "Expert preparation and quality control",
    src: "/journey/processing.png",
    width: 480,
    height: 470,
  },
  {
    title: "Packaging",
    text: "Secure, compliant and consistent packaging",
    src: "/journey/packaging.png",
    width: 480,
    height: 465,
  },
] as const;

export function Journey() {
  return (
    <section
      id="journey"
      aria-label="The journey behind TAHIR"
      className="scroll-mt-24 bg-[#f7f1e6] text-[#2c241c]"
    >
      <p className="flex items-center justify-center gap-2 bg-[#efe4d0] px-4 py-2.5 text-center font-serif text-[13px] leading-none font-semibold text-[#3f3832] sm:text-sm">
        <InfoIcon />
        Tobacco use is harmful to health and is addictive.
      </p>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <JourneyFilm />

          <div>
            <h2 className="font-serif text-[2rem] leading-[1.15] font-medium sm:text-4xl lg:text-[2.35rem]">
              The Journey Behind <span className="whitespace-nowrap text-[#9a7432]">TAHIR</span>
            </h2>
            <p className="mt-4 font-serif text-base leading-relaxed text-[#4d453c] sm:text-lg">
              From the careful cultivation of tobacco to the final package, TAHIR reflects a
              heritage of expertise, a commitment to consistent quality, and a responsible
              approach to production.
            </p>
            <p className="mt-4 font-serif text-base leading-relaxed text-[#4d453c] sm:text-lg">
              Our range is the result of time-honored knowledge, selected materials, and rigorous
              standards across every stage of the process.
            </p>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-4 sm:mt-14">
          <span aria-hidden className="h-px flex-1 bg-[#ddc9a4]" />
          <p className="font-serif text-[0.7rem] tracking-[0.32em] text-[#8d7350] uppercase">
            Our Process
          </p>
          <span aria-hidden className="h-px flex-1 bg-[#ddc9a4]" />
        </div>

        <ol className="mt-8 grid grid-cols-2 gap-y-8 md:grid-cols-4">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className={`px-3 text-center sm:px-5 ${
                index % 2 === 1 ? "border-l border-[#e4d3b4]" : ""
              } ${index > 0 ? "md:border-l md:border-[#e4d3b4]" : "md:border-l-0"}`}
            >
              <img
                src={step.src}
                alt=""
                width={step.width}
                height={step.height}
                className="mx-auto h-16 w-auto object-contain sm:h-20"
              />
              <h3 className="mt-3 font-serif text-base font-semibold">{step.title}</h3>
              <p className="mt-1 font-serif text-sm leading-snug text-[#6a6156]">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function JourneyFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const frame = frameRef.current;
    if (!video || !frame) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        if (!video.paused) return;
        video.preload = "auto";
        video.load();
      },
      { rootMargin: "240px" },
    );
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || !playing || docked) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.intersectionRatio < 0.25) setDocked(true);
      },
      { threshold: [0, 0.25] },
    );
    observer.observe(frame);
    return () => observer.disconnect();
  }, [playing, docked]);

  function release() {
    setPlaying(false);
    setWaiting(false);
    setDocked(false);
  }

  async function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (!video.paused) {
      video.pause();
      return;
    }
    setWaiting(true);
    try {
      await video.play();
    } catch {
      setWaiting(false);
    }
  }

  return (
    <div ref={frameRef} className="relative h-64 sm:h-80 lg:h-[22rem]">
      <div className="absolute inset-0 overflow-hidden rounded-2xl bg-[#1c3a22]">
        <img
          src="/journey-start.jpg"
          alt="A tobacco field at sunrise"
          width={1024}
          height={682}
          className={`h-full w-full object-cover ${playing && !docked ? "invisible" : ""}`}
        />
      </div>
      <div
        className={
          docked
            ? "fixed right-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-[60] aspect-video w-44 overflow-hidden rounded-xl bg-black shadow-[0_16px_40px_rgba(0,0,0,0.45)] sm:right-5 sm:w-64"
            : "absolute inset-0 overflow-hidden rounded-2xl"
        }
      >
        <video
          ref={videoRef}
          src="/ads.mp4?v=2"
          playsInline
          preload="metadata"
          className={`h-full w-full object-cover ${playing ? "" : "invisible"}`}
          onPlaying={() => {
            setPlaying(true);
            setWaiting(false);
          }}
          onWaiting={() => {
            if (videoRef.current && !videoRef.current.paused) setWaiting(true);
          }}
          onPause={release}
          onEnded={() => {
            release();
            if (videoRef.current) videoRef.current.currentTime = 0;
          }}
        />
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause the journey" : "Play the journey"}
          className={
            docked
              ? "absolute right-2 bottom-2 grid h-8 w-8 place-items-center rounded-full bg-white/95 text-[#1c1c1c] shadow-[0_6px_16px_rgba(0,0,0,0.35)]"
              : "absolute inset-0 grid place-items-center"
          }
        >
          {playing ? (
            <span
              className={
                docked
                  ? "grid h-8 w-8 place-items-center"
                  : "grid h-11 w-11 place-items-center rounded-full bg-white/95 text-[#1c1c1c] shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
              }
            >
              <PauseIcon />
            </span>
          ) : (
            <span className="relative grid h-14 w-14 place-items-center">
              {waiting ? null : (
                <>
                  <span aria-hidden className="animate-journey-ring absolute inset-0 rounded-full bg-white/40" />
                  <span
                    aria-hidden
                    className="animate-journey-ring absolute inset-0 rounded-full bg-white/30 [animation-delay:0.9s]"
                  />
                </>
              )}
              <span className="relative grid h-14 w-14 place-items-center rounded-full bg-white text-[#243c2c] shadow-[0_8px_20px_rgba(0,0,0,0.22)]">
                {waiting ? <LoadingIcon /> : <PlayIcon />}
              </span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

function LoadingIcon() {
  return (
    <span
      aria-hidden
      className="h-5 w-5 animate-spin rounded-full border-2 border-[#243c2c]/25 border-t-[#243c2c]"
    />
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="ml-0.5 h-6 w-6" fill="currentColor">
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5" fill="currentColor">
      <path d="M7 5h3.2v14H7V5Zm6.8 0H17v14h-3.2V5Z" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden className="h-3.5 w-3.5 shrink-0 text-[#3f3832]">
      <circle cx="10" cy="10" r="7.25" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10 9.1v4.2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="10" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

