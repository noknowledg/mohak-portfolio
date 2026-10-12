"use client";

import { ArrowUpRight, Link2, Mail, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { contact, isPlaceholder } from "@/lib/content";
import Reveal from "./Reveal";

function hrefFor(kind: "email" | "phone" ) {
  const v = contact[kind];
  if (isPlaceholder(v)) return undefined;
  if (kind === "email") return `mailto:${v}`;
  if (kind === "phone") return `tel:${v.replace(/[^\d+]/g, "")}`;
  return v.startsWith("http") ? v : `https://${v}`;
}

function Row({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-paper/10 text-[#5eead4]">
        <Icon size={19} strokeWidth={1.7} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[0.65rem] font-medium uppercase tracking-[0.18em] text-paper/50">{label}</span>
        <span className="t-card-title mt-0.5 block truncate text-paper">{value}</span>
      </span>
      {href ? (
        <ArrowUpRight size={17} className="shrink-0 text-paper/40 transition group-hover:text-[#5eead4]" />
      ) : null}
    </>
  );
  const cls = "group flex items-center gap-3.5 rounded-2xl border border-paper/10 bg-paper/[0.04] p-3 pr-4 transition";

  return href ? (
    <a
      href={href}
      className={`${cls} hover:border-[#5eead4]/50 hover:bg-paper/[0.08]`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="px-4 pb-8 pt-0 sm:px-6 md:pb-12">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink p-6 text-paper sm:p-10 md:p-12">
          <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal/30 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-center">
            <div>
              <p className="eyebrow !text-[#5eead4]">Contact</p>
              <h2 className="t-h2 mt-3">
                Let&apos;s <span className="text-[#5eead4]">connect.</span>
              </h2>
              <p className="t-body mt-3 max-w-xs text-paper/65">Tap below to email or call.</p>
            </div>

            <div className="space-y-2.5">
              <Row icon={Mail} label="Email" value={contact.email} href={hrefFor("email")} />
              <Row icon={Phone} label="Call" value={contact.phone} href={hrefFor("phone")} />
              
              <Row icon={MapPin} label="Location" value={contact.location} />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}