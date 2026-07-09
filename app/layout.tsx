import type { Metadata } from "next";
import { Newsreader, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Northcorp AI — AI voice receptionists for dental, chiropractic, and medical practices",
  description:
    "We design, test, and run AI voice agents for private dental, chiropractic, and medical practices. HIPAA compliant, BAA signed with every client, three-stage release pipeline.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      {/* suppressHydrationWarning: browser extensions (ClickUp, Grammarly, etc.)
          inject attributes into <body> before React hydrates; that's an
          extension artifact, not an app bug, so it shouldn't warn in the console. */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
