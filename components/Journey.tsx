"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { BadgeCheck, Building2, Flame, GraduationCap, Stethoscope } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { journey } from "@/lib/content";
import SectionHeading from "./SectionHeading";

const icons: LucideIcon[] = [GraduationCap, Building2, BadgeCheck, Stethoscope, Flame];

type Item = (typeof journey)[number];

function Stop({
  item,
  index,
  total,
  grow,
}: {
  item: Item;
  index: number;
  total: number;
  grow: MotionValue<number>;
}) {
  const Icon = icons[index];
  const left = index % 2 === 0;

  const at = (index + 0.5) / total;
  const start = Math.max(at - 0.09, 0);

  const reveal = useTransform(grow, [start, at], [0, 1], { clamp: true });
  const cardX = useTransform(reveal, [0, 1], [left ? -28 : 28, 0]);

  return (
    <li className="relative mb-7 grid min-h-[5.5rem] grid-cols-2 items-center last:mb-0">
      <motion.span
        aria-hidden
        className={`absolute top-1/2 h-[3px] w-7 -translate-y-1/2 rounded-full bg-teal sm:w-12 ${
          left ? "right-1/2 origin-right" : "left-1/2 origin-left"
        }`}
        style={{ scaleX: reveal }}
      />

      <motion.span
        className="absolute left-1/2 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-teal bg-paper text-teal shadow-soft sm:h-11 sm:w-11"
        style={{ scale: reveal }}
      >
        <Icon size={18} strokeWidth={1.8} />
      </motion.span>

      <motion.div
        className={`rounded-2xl border border-line bg-white p-3.5 shadow-soft sm:p-4 ${
          left ? "col-start-1 mr-9 text-right sm:mr-14" : "col-start-2 ml-9 text-left sm:ml-14"
        }`}
        style={{ opacity: reveal, x: cardX }}
      >
        <h3 className="t-card-title">{item.title}</h3>
        {item.meta ? <p className="t-meta mt-1 text-teal">{item.meta}</p> : null}
      </motion.div>
    </li>
  );
}

export default function Journey() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 55%"] });
  const grow = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });

  return (
    <section id="journey" className="overflow-hidden bg-teal-mist px-4 py-10 sm:px-6 md:py-16">
      <div className="mx-auto max-w-3xl">
        <SectionHeading label="Journey" title="Step by step." />

        <ol ref={ref} className="relative mt-8 pb-2 pt-4">
          <div aria-hidden className="absolute bottom-0 left-1/2 top-0 w-[3px] -translate-x-1/2 rounded-full bg-teal/15" />
          <motion.div
            aria-hidden
            className="absolute bottom-0 left-1/2 top-0 w-[3px] origin-top -translate-x-1/2 rounded-full bg-teal"
            style={{ scaleY: grow }}
          />
          <span aria-hidden className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-teal ring-4 ring-teal/20" />

          {journey.map((j, i) => (
            <Stop key={j.title} item={j} index={i} total={journey.length} grow={grow} />
          ))}
        </ol>
      </div>
    </section>
  );
}