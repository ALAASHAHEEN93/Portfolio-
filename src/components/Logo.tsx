import "./Logo.css";

export default function Logo() {
  return (
    <span className="brand" aria-hidden="true">
      <svg
        className="brand__mark"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="2.15" fill="none" />
        <text
          x="50"
          y="63"
          textAnchor="middle"
          fill="currentColor"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="34"
          letterSpacing="-2"
        >
          AS
        </text>
      </svg>
    </span>
  );
}
