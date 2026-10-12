import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const facts = [
  { big: "≈ 3", unit: "years", label: "Clinical and healthcare experience" },
  { big: "≈ 6", unit: "months", label: "Internship at Lumbini Provincial Hospital" },
  { big: "1st", unit: "attempt", label: "Health Assistant licensing examination" },
];

export default function About() {
  return (
    <section id="about" className="section-y relative overflow-hidden bg-gradient-to-b from-teal-mist/60 via-paper to-paper">
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-teal/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" aria-hidden="true" />

      <div className="container-x relative">
        <SectionHeading label="About" title="More Than a Qualification" />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:gap-16">
          <div className="space-y-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal shadow-soft backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-teal" aria-hidden="true" />
                Healthcare professional
              </div>
            </Reveal>

            <div className="space-y-6 text-[1.05rem] leading-[1.9] text-ink/80 sm:text-lg">
              <Reveal>
                <p className="max-w-3xl font-display text-3xl leading-[1.18] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[2.75rem]">
                  Compassionate care, practical experience, and a growing passion for pharmaceutical science.
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="max-w-2xl">
                  I am Mohak Jha, a Health Assistant from Nepal with hands-on experience in clinical care,
                  emergency department support, diagnostic services, patient documentation, and day-to-day
                  healthcare operations.
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="max-w-2xl">
                  I completed my Health Assistant education and passed the licensing examination on my first attempt.
                  My journey has strengthened my patient-handling, communication, documentation, diagnostic support,
                  and teamwork skills.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.16}>
              <div className="overflow-hidden rounded-2xl border border-teal/15 bg-gradient-to-r from-teal-mist via-white to-white p-6 shadow-soft sm:p-7">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal">Next step</p>
                <p className="font-display text-2xl leading-snug text-ink sm:text-[1.75rem]">
                  I am continuing to grow professionally toward a Bachelor of Pharmacy and deeper expertise in
                  pharmaceutical sciences.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <dl className="grid gap-3 rounded-[1.75rem] border border-line bg-white/80 p-3 shadow-soft backdrop-blur-sm sm:p-4">
              {facts.map((fact, index) => (
                <div
                  key={fact.label}
                  className={`group rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 hover:border-teal/40 hover:bg-teal-mist/40 sm:p-6 ${
                    index === 0 ? "border-teal/20 bg-teal-mist/40" : "border-line bg-paper"
                  }`}
                >
                  <div className="flex items-end justify-between gap-4">
                    <dt className="font-display text-4xl leading-none tracking-[-0.04em] text-teal sm:text-5xl">
                      {fact.big}
                    </dt>
                    <span className="pb-1 text-[0.63rem] font-bold uppercase tracking-[0.18em] text-ink/45">
                      {fact.unit}
                    </span>
                  </div>
                  <dd className="mt-3 text-sm leading-relaxed text-muted">{fact.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
