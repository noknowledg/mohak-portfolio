import { profile } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Profile() {
  return (
    <section id="profile" className="section-y">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading index="06" label="Profile" title="Quick Profile" />
        <Reveal delay={0.1}>
          <dl className="divide-y divide-line border-y border-line">
            {profile.map(([k, v]) => (
              <div key={k} className="grid gap-1 py-4 sm:grid-cols-[13rem_1fr] sm:gap-6 sm:py-5">
                <dt className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-teal">{k}</dt>
                <dd className="text-[1rem] leading-relaxed text-ink/90">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
