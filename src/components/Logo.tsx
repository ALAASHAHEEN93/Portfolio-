import "./Logo.css";

export default function Logo() {
  return (
    <span className="brand" aria-hidden="true">
      <img
        src="/brand-mark.png"
        alt=""
        className="brand__mark"
        width={48}
        height={50}
        decoding="async"
      />
    </span>
  );
}
