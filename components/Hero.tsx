"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, BadgeCheck, Flame, Stethoscope } from "lucide-react";

const dots = "radial-gradient(rgba(11,18,21,0.12) 1px, transparent 1px)";
const fadeMask = "linear-gradient(to bottom, black 30%, transparent 85%)";
const preserve3d = { transformStyle: "preserve-3d" as const };

/** One line of the name. The mask is exactly as wide as the text (w-max), so no letter is ever clipped. */
function Word({
  children,
  delay,
  className = "",
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <span className="block w-max overflow-hidden pb-[0.12em] pr-[0.1em]">
      <motion.span
        className={`block ${className}`}
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Icon-only floating bubble (no text). */
function Bubble({
  icon: Icon,
  className,
  depth,
  delay,
  duration,
}: {
  icon: typeof BadgeCheck;
  className: string;
  depth: number;
  delay: number;
  duration: number;
}) {
  return (
    <motion.div className={`absolute ${className}`} style={{ z: depth }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
        transition={{
          opacity: { duration: 0.5, delay },
          scale: { type: "spring", stiffness: 160, damping: 14, delay },
          y: { duration, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 },
        }}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-teal shadow-soft sm:h-12 sm:w-12"
      >
        <Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" strokeWidth={1.8} />
      </motion.div>
    </motion.div>
  );
}

function PhotoCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 140, damping: 18 });
  const sy = useSpring(my, { stiffness: 140, damping: 18 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-18, 18]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [16, -16]);
  const glare = useTransform(sx, [-0.5, 0.5], ["100%", "0%"]);

  const { scrollY } = useScroll();
  const scrollRotX = useTransform(scrollY, [0, 600], [0, 20]);
  const scrollRotY = useTransform(scrollY, [0, 600], [0, -10]);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      onPointerUp={reset}
      onPointerCancel={reset}
      className="relative w-full lg:ml-auto lg:max-w-[24rem]"
      style={{ perspective: 900, touchAction: "pan-y" }}
    >
      <motion.div
        style={preserve3d}
        initial={{ opacity: 0, rotateY: 55, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, rotateY: 0, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.1 }}
      >
        {/* permanent 3D tilt */}
        <motion.div style={{ ...preserve3d, rotateY: -10, rotateX: 4 }}>
          <motion.div style={{ ...preserve3d, rotateX, rotateY }}>
            <motion.div style={{ ...preserve3d, rotateX: scrollRotX, rotateY: scrollRotY }}>
              <motion.div
                style={preserve3d}
                className="relative"
                animate={{ y: [0, -8, 0], rotateY: [-6, 6, -6], rotateX: [2, -2, 2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  aria-hidden
                  className="absolute inset-0 rounded-[1.5rem] border border-teal/25 bg-teal-soft sm:rounded-[2rem]"
                  style={{ z: -90, x: 8, y: 14, rotate: 5 }}
                />
                <motion.div
                  aria-hidden
                  className="absolute inset-0 rounded-[1.5rem] border border-ink/15 sm:rounded-[2rem]"
                  style={{ z: -45, x: -8, y: -10, rotate: -4 }}
                />

                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border-[3px] border-white bg-white shadow-[0_30px_50px_-22px_rgba(11,18,21,0.45)] sm:rounded-[2rem] sm:border-4">
                  {failed ? (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-teal-soft to-white text-6xl font-semibold tracking-tight text-teal sm:text-7xl">
                      Mohak
                    </div>
                  ) : (
                    <Image
                      src="/mohak.jpeg"
                      alt="Portrait of Mohak Jha"
                      fill
                      priority
                      sizes="(min-width:1024px) 24rem, (min-width:640px) 17rem, 12rem"
                      className="object-cover"
                      style={{ objectPosition: "50% 25%" }}
                      onError={() => setFailed(true)}
                    />
                  )}
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.3) 50%, transparent 65%)",
                      backgroundSize: "250% 100%",
                      backgroundPositionX: glare,
                    }}
                  />
                </div>

                <Bubble icon={BadgeCheck} className="hidden sm:flex -left-6 bottom-14" depth={90} delay={1.0} duration={5} />
                <Bubble icon={Flame} className="-right-1 top-6 sm:-right-5 sm:top-10" depth={110} delay={1.2} duration={6} />
                <Bubble icon={Stethoscope} className="-right-1 bottom-4 sm:-right-3 sm:bottom-6" depth={70} delay={1.4} duration={5.5} />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-4 pt-20 sm:px-6 sm:pb-6 sm:pt-24 lg:flex lg:min-h-[100svh] lg:items-center lg:pb-12"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: dots, backgroundSize: "24px 24px", maskImage: fadeMask, WebkitMaskImage: fadeMask }}
      />
      <div
        aria-hidden
        className="absolute right-0 top-16 -z-10 h-[320px] w-[320px] rounded-full bg-teal/15 blur-3xl lg:left-1/2 lg:right-auto lg:top-1/4 lg:h-[420px] lg:w-[620px] lg:-translate-x-1/2 lg:bg-teal/10"
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_clamp(9.5rem,46vw,12rem)] items-center gap-x-3 gap-y-6 sm:grid-cols-[minmax(0,1fr)_17rem] sm:gap-x-10 lg:grid-cols-2 lg:gap-y-0">
                <div className="col-start-1 row-start-1 min-w-0 lg:self-end">
          <h1 className="t-hero">
            <Word delay={0.2}>Mohak</Word>
            <Word delay={0.35} className="text-teal">
              Jha
            </Word>
          </h1>
          <motion.p
            className="mt-5 flex items-center gap-2 text-[0.8rem] font-medium leading-snug text-ink/70 sm:mt-7 sm:text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <span aria-hidden className="h-px w-5 shrink-0 bg-teal sm:w-8" />
            Aspiring Health Assistant
          </motion.p>
        </div>

        <div className="col-start-2 row-start-1 lg:row-span-2">
          <PhotoCard />
        </div>

        <motion.div
          className="col-span-2 row-start-2 flex flex-wrap items-center gap-2.5 lg:col-span-1 lg:col-start-1 lg:mt-8 lg:self-start"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <a
            href="#journey"
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-ink pl-5 pr-1.5 text-[0.85rem] font-medium text-paper shadow-soft transition hover:bg-teal-deep sm:text-sm"
          >
            Explore My Journey
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper/15 transition group-hover:bg-paper/25">
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex h-11 items-center rounded-full border border-ink/15 bg-white/80 px-5 text-[0.85rem] font-medium text-ink backdrop-blur transition hover:border-teal hover:text-teal sm:text-sm"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}