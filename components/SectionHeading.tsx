import Reveal from "./Reveal";

type Props = { label: string; title: string };

export default function SectionHeading({ label, title }: Props) {
  return (
    <Reveal>
      <p className="eyebrow">{label}</p>
      <h2 className="t-h2 mt-3">{title}</h2>
    </Reveal>
  );
}