import "./SectionLabel.css";

type Props = {
  num: string;
  label: string;
};

export default function SectionLabel({ num, label }: Props) {
  return (
    <span className="section-num">
      <span className="section-num__index">{num}</span>
      <span className="section-num__sep" aria-hidden="true">
        ·
      </span>
      <span className="section-num__label">{label}</span>
    </span>
  );
}
