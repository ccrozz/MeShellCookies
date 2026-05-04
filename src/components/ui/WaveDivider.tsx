interface WaveDividerProps {
  fillColor: string;
  bgColor?: string;
  flip?: boolean;
}

export function WaveDivider({
  fillColor,
  bgColor = "transparent",
  flip,
}: WaveDividerProps) {
  return (
    <div
      className="relative w-full overflow-hidden leading-none"
      style={{ backgroundColor: bgColor }}
      aria-hidden
    >
      <svg
        className={`relative block h-16 w-full ${flip ? "rotate-180" : ""}`}
        viewBox="0 0 1200 64"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,32 C200,0 400,64 600,32 C800,0 1000,64 1200,32 L1200,64 L0,64 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
