import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template: "%s | Fred Dehnashi",
    default: "Fred Dehnashi | AI, SaaS, and Automation Portfolio",
  },
  description:
    "GitHub portfolio of Fred Dehnashi, an AI and Data Strategy Consultant building practical AI systems, SaaS platforms, private AI solutions, analytics products, and business automation.",
  keywords: [
    "Fred Dehnashi",
    "nomadghibi",
    "AI consultant",
    "SaaS developer",
    "Next.js",
    "business automation",
    "private AI",
    "GitHub portfolio",
  ],
  openGraph: {
    title: "Fred Dehnashi | GitHub Portfolio",
    description:
      "Selected AI, SaaS, automation, analytics, and business software projects.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
