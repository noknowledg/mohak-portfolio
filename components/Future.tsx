"use client";

import { motion } from "framer-motion";
import { Check, GraduationCap, Pill, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { roadmap } from "@/lib/content";

const dot: Record<string, { Icon: LucideIcon; cls: string }> = {
  done: { Icon: Check, cls: "bg-teal text-paper" },
  current: { Icon: GraduationCap, cls: "border-2 border-teal bg-paper text-teal" },
  goal: { Icon: Pill, cls: "border-2 border-dashed border-teal bg-paper text-teal" },
  future: { Icon: Sparkles, cls: "border border-dashed border-ink/30 bg-paper text-ink/40" },
};

export default function Future() {
  return (
    <section id="future" className="px-4 py-6 sm:px-6 md:py-10">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-ink p-6 text-paper md:p-12">
        <div aria-hidden className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-teal/30 blur-3xl" />
        <div className="relative">
          <p className="eyebrow !text-[#5eead4]">Where I&apos;m headed</p>
          <h2 className="t-h2 mt-3">
            Aiming for <span className="text-[#5eead4]">B.Pharm.</span>
          </h2>

          <ol className="relative mt-8 space-y-5 md:grid md:grid-cols-5 md:gap-4 md:space-y-0">
            <div aria-hidden className="absolute bottom-4 left-4 top-4 w-px bg-paper/20 md:hidden" />
            <div aria-hidden className="absolute left-4 right-4 top-4 hidden h-px bg-paper/20 md:block" />
            {roadmap.map((s, i) => {
              const { Icon, cls } = dot[s.state];
              return (
                <motion.li
                  key={s.title}
                  className="relative flex items-center gap-4 md:flex-col md:items-start md:gap-4"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <span className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${cls}`}>
                    <Icon size={15} strokeWidth={2.2} />
                  </span>
                  <span>
                    <span className="block text-[0.66rem] uppercase tracking-[0.18em] text-[#5eead4]">{s.label}</span>
                    <span className="t-card-title block">{s.title}</span>
                  </span>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}