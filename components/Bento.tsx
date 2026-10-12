"use client";

import { motion } from "framer-motion";
import { Camera, Compass, Cpu, Flame, Palette, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { interests } from "@/lib/content";

const iconFor: Record<string, LucideIcon> = {
  Technology: Cpu,
  Business: TrendingUp,
  Photography: Camera,
  Travel: Compass,
  "Digital Creativity": Palette,
};

function Card({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`rounded-[1.75rem] border p-5 md:p-7 ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

function Stat({ big, label, delay }: { big: string; label: string; delay: number }) {
  return (
    <Card className="border-line bg-white md:col-span-2" delay={delay}>
      <p className="text-5xl font-semibold tracking-[-0.04em] text-teal md:text-6xl">{big}</p>
      <p className="mt-3 text-sm leading-snug text-ink/70">{label}</p>
    </Card>
  );
}

export default function Bento() {
  return (
    <section id="about" className="px-4 py-12 sm:px-6 md:py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
        <Card className="relative col-span-2 min-h-[13rem] overflow-hidden border-ink bg-ink text-paper md:col-span-4" >
          <div aria-hidden className="absolute -bottom-16 -right-10 h-48 w-48 rounded-full bg-teal/40 blur-3xl" />
          <p className="eyebrow relative !text-[#5eead4]">About</p>
          <p className="relative mt-10 text-3xl font-semibold leading-[1.1] tracking-[-0.03em] md:text-4xl">
            Health Assistant from Nepal, growing towards pharmacy.
          </p>
        </Card>

        <Stat big="≈3 yrs" label="Clinical experience" delay={0.05} />
        <Stat big="≈6 mo" label="Lumbini Provincial Hospital internship" delay={0.1} />

        <Card className="col-span-1 border-teal/20 bg-teal-soft md:col-span-2" delay={0.15}>
          <Flame className="text-teal-deep" size={28} strokeWidth={1.6} />
          <p className="mt-4 text-base font-semibold leading-tight tracking-tight">Burn Case Management</p>
        </Card>

        <Card className="col-span-2 border-line bg-white md:col-span-6" delay={0.1}>
          <p className="eyebrow">Beyond the clinic</p>
          <ul className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-5">
            {interests.map((name) => {
              const Icon = iconFor[name];
              return (
                <li
                  key={name}
                  className="flex flex-col items-start gap-3 rounded-2xl border border-line bg-paper p-4 transition hover:-translate-y-0.5 hover:border-teal"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-soft text-teal-deep">
                    <Icon size={18} strokeWidth={1.7} />
                  </span>
                  <span className="text-sm font-medium leading-tight">{name}</span>
                </li>
              );
            })}
          </ul>
        </Card>
      </div>
    </section>
  );
}