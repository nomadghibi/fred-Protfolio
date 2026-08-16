import React from "react";
/* External GitHub stat cards are generated SVG endpoints and intentionally use img. */
/* eslint-disable @next/next/no-img-element */
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import { profileData } from "@/app/data";

const statsBase =
  process.env.NEXT_PUBLIC_GITHUB_STATS_URL ||
  "https://github-readme-stats.vercel.app";
const streakBase =
  process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL ||
  "https://github-readme-streak-stats.herokuapp.com";

const AboutDetails = () => {
  const username = profileData.githubUsername;

  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Engineering useful AI systems
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base leading-relaxed">
            {profileData.portfolioSummary} I focus on solutions that can be
            deployed, operated, secured, and improved—not demonstrations that
            stop at the prototype stage. My portfolio includes AI-enabled SaaS,
            local-first assistants, workflow automation, data products,
            accessible desktop software, and customer-facing business systems.
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            15+ <sub className="font-semibold text-base">years in technology</sub>
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            40+ <sub className="font-semibold text-base">GitHub repositories</sub>
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full sm:col-span-6 md:col-span-4 !p-0 overflow-hidden">
          <img
            className="w-full h-auto"
            src={`${statsBase}/api/top-langs?username=${username}&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&layout=compact`}
            alt={`${profileData.name}'s most-used GitHub languages`}
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-8 !p-0 overflow-hidden">
          <img
            className="w-full h-auto"
            src={`${statsBase}/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt={`${profileData.name}'s GitHub statistics`}
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full">
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=aws,docker,figma,git,github,html,css,js,ts,react,nextjs,nodejs,express,python,fastapi,postgres,supabase,redis,tailwind,threejs,vercel,vite,vscode,linux"
            alt="Technology stack: cloud, containers, JavaScript, TypeScript, React, Next.js, Node.js, Python, databases, and deployment tools"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-6 !p-0 overflow-hidden">
          <img
            className="w-full h-auto"
            src={`${streakBase}?user=${username}&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt={`${profileData.name}'s GitHub contribution streak`}
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-6 !p-0 overflow-hidden">
          <Link
            href="https://github.com/nomadghibi/wonderkid-stories"
            target="_blank"
            rel="noreferrer"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${statsBase}/api/pin/?username=${username}&repo=wonderkid-stories&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="Featured WonderKid Stories GitHub repository"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
