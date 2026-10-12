"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, ClipboardList, HeartPulse, ScanLine } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skillBranches } from "@/lib/content";
import SectionHeading from "./SectionHeading";

const icons: LucideIcon[] = [HeartPulse, ClipboardList, ScanLine, BadgeCheck];
const SHOW = 3;

function Card({ title, items, Icon, delay }: { title: string; items: string[]; Icon: LucideIcon; delay: number }) {
  const [open, setOpen] = useState(false);
  const visible = open ? items : items.slice(0, SHOW);
  const hidden = items.length - SHOW;

  return (
    <motion.div
      className="rounded-3xl border border-teal/10 bg-white p-4 shadow-soft md:p-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal text-paper">
          <Icon size={18} strokeWidth={1.7} />
        </span>
        <h3 className="t-card-title">{title}</h3>
      </div>
      <ul className="mt-3.5 flex flex-wrap gap-1.5">
        {visible.map((s) => (
          <li key={s} className="t-chip rounded-full bg-teal-mist px-3 py-1.5 text-teal-deep">
            {s}
          </li>
        ))}
        {hidden > 0 ? (
          <li>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="t-chip rounded-full border border-teal/40 px-3 py-1.5 font-medium text-teal transition hover:bg-teal hover:text-paper"
            >
              {open ? "Less" : `+${hidden}`}
            </button>
          </li>
        ) : null}
      </ul>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-teal-mist px-4 py-10 sm:px-6 md:py-16">
      <div className="mx-auto max-w-4xl">
        <SectionHeading label="Skills" title="What I bring." />
        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:gap-4">
          {skillBranches.map((b, i) => (
            <Card key={b.title} title={b.title} items={b.items} Icon={icons[i]} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}