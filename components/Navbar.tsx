"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const links = navLinks.filter((l) => l.id !== "contact");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-paper/50 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Main">
        <a href="#top" className="text-[0.95rem] font-semibold tracking-tight">
          <span className="sm:hidden">Mohak</span>
          <span className="hidden sm:inline">Mohak Jha</span>
        </a>

        <ul className="flex items-center gap-3 sm:gap-1">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`block rounded-full py-2.5 text-[0.8rem] transition sm:px-3.5 sm:text-sm ${
                  active === l.id ? "font-medium text-teal" : "text-ink/70 hover:text-ink"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="ml-1 block rounded-full bg-ink px-3.5 py-2 text-[0.78rem] font-medium text-paper transition hover:bg-teal-deep sm:px-4 sm:text-sm"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}