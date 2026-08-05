export default function Logo() {
  return (
    <svg
      className="brand"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Soft craft plate */}
      <rect className="brand__plate" x="2" y="2" width="44" height="44" rx="14" />

      {/* Creative bloom arcs — feminine gesture */}
      <path
        className="brand__bloom"
        d="M33 10c4.2 1.2 7.2 5.2 7.2 9.8 0 2.8-1.1 5.2-2.9 7"
      />
      <path
        className="brand__bloom brand__bloom--soft"
        d="M36.5 12.5c2.6 2.1 4.2 5.3 4.2 8.8"
      />

      {/* Elegant A — open, calligraphic */}
      <path
        className="brand__stroke brand__stroke--left"
        d="M15 36.5C16.2 28.5 18.8 18.2 24 10.5"
        strokeLinecap="round"
      />
      <path
        className="brand__stroke brand__stroke--right"
        d="M24 10.5C29.2 18.2 31.8 28.5 33 36.5"
        strokeLinecap="round"
      />

      {/* Frontend precision bar */}
      <rect className="brand__bar" x="18.2" y="25.2" width="11.6" height="3.2" rx="1.6" />

      {/* Designer spark */}
      <path
        className="brand__spark"
        d="M37.5 14.2l.7 1.7 1.7.7-1.7.7-.7 1.7-.7-1.7-1.7-.7 1.7-.7.7-1.7Z"
      />
    </svg>
  );
}
