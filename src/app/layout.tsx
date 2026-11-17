import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { AgeGate } from "@/components/age-gate";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SubpageBanner } from "@/components/subpage-banner";
import "./globals.css";

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Tahirea",
    template: "%s — Tahirea",
  },
  description: "Tahirea — a private collection for adults.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plex.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AgeGate>
          <Navbar />
          <SubpageBanner />
          {children}
          <Footer />
        </AgeGate>
      </body>
    </html>
  );
}
