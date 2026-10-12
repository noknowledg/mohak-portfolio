"use client";

import { motion } from "framer-motion";
import { Camera, Compass, Cpu, Palette, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { interests } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  tech: Cpu,
  business: TrendingUp,
  photo: Camera,
  travel: Compass,
  creative: Palette,
};

export default function Beyond() {
  return (
    <section id="beyond" className="section-y">
      <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading index="05" label="Beyond" title="Beyond the Clinic" />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-sm text-[1.02rem] leading-relaxed text-muted">
              Outside of healthcare, I enjoy learning new things and exploring opportunities for personal and
              professional growth.
            </p>
          </Reveal>
        </div>

        <ul className="divide-y divide-line border-y border-line">
          {interests.map((it, i) => {
            const Icon = iconMap[it.key];
            return (
              <motion.li
                key={it.key}
                className="group flex items-center gap-5 py-6 sm:gap-7 sm:py-7"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-teal transition duration-300 group-hover:border-teal group-hover:bg-teal group-hover:text-paper sm:h-16 sm:w-16">
                  <Icon size={24} strokeWidth={1.5} />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-2xl leading-tight transition-colors duration-300 group-hover:text-teal sm:text-3xl">
                    {it.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{it.note}</p>
                </div>
                <span className="ml-auto font-display text-sm text-ink/25">0{i + 1}</span>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
