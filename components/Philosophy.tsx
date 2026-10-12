import Reveal from "./Reveal";

export default function Philosophy() {
  return (
    <section className="px-5 py-14 text-center md:py-24" aria-label="Personal philosophy">
      <Reveal className="mx-auto max-w-4xl">
        <h2 className="t-quote">
          Keep learning. Keep improving. <span className="text-teal">Keep moving forward.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.15} className="mx-auto mt-6 max-w-md">
        <p className="t-body text-muted">
          Healthcare is compassion, responsibility and dignity, not only knowledge.
        </p>
      </Reveal>
    </section>
  );
}