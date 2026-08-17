import { Geist } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata = {
  metadataBase: new URL("https://freddehnashi.com"),
  title: {
    template: "%s | Fred Dehnashi",
    default: "Fred Dehnashi | AI Systems & Automation Consultant",
  },
  description:
    "Fred Dehnashi designs and builds production-minded AI systems, SaaS platforms, RAG applications, private AI solutions, and business automation.",
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
    title: "Fred Dehnashi | AI Systems & Automation Consultant",
    description:
      "Production-minded AI systems, SaaS architecture, RAG, private LLMs, and business automation.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Fred Dehnashi — AI Systems & Automation Consultant" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fred Dehnashi | AI Systems & Automation Consultant",
    description: "Production-minded AI systems, SaaS architecture, RAG, private LLMs, and business automation.",
    images: ["/og.png"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          geist.variable,
          "bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}
