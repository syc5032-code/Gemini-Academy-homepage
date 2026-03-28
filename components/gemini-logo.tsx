'use client';

function GeminiStar({ className = '', size = 24 }: { className?: string; size?: number }) {
  const id = `gemini-clip-${size}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <clipPath id={id}>
          <path d="M50 0 C58 20, 80 42, 100 50 C80 58, 58 80, 50 100 C42 80, 20 58, 0 50 C20 42, 42 20, 50 0Z" />
        </clipPath>
      </defs>
      <foreignObject width="100" height="100" clipPath={`url(#${id})`}>
        <div
          style={{
            width: '100%',
            height: '100%',
            background: `conic-gradient(from 0deg at 50% 50%,
              #EA4335 0deg,
              #4285F4 90deg,
              #4285F4 120deg,
              #34A853 210deg,
              #FBBC05 270deg,
              #F9AB00 300deg,
              #EA4335 360deg
            )`,
          }}
        />
      </foreignObject>
    </svg>
  );
}

export function GeminiAcademyLogo({
  className = '',
  starSize = 24,
}: {
  className?: string;
  starSize?: number;
}) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <GeminiStar size={starSize} />
      <span className="font-semibold tracking-tight">
        <span className="bg-gradient-to-r from-[#4285F4] to-[#69B4FF] bg-clip-text text-transparent">
          Gemini
        </span>
      </span>
      <span className="font-semibold tracking-tight text-gray-800">
        Academy
      </span>
    </span>
  );
}
