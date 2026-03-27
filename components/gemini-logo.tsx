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
      className={`animate-spin-pause ${className}`}
    >
      <defs>
        <clipPath id={id}>
          <path d="M50 0 C53 35, 65 47, 100 50 C65 53, 53 65, 50 100 C47 65, 35 53, 0 50 C35 47, 47 35, 50 0Z" />
        </clipPath>
      </defs>
      <foreignObject width="100" height="100" clipPath={`url(#${id})`}>
        <div
          style={{
            width: '100%',
            height: '100%',
            background: `conic-gradient(from 180deg at 50% 50%,
              #4285F4 0deg,
              #EA4335 90deg,
              #FBBC05 180deg,
              #34A853 270deg,
              #4285F4 360deg
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
        <span className="bg-gradient-to-r from-google-blue via-purple-500 to-[#d96570] bg-clip-text text-transparent">
          Gemini
        </span>
      </span>
      <span className="font-semibold tracking-tight text-gray-800">
        Academy
      </span>
    </span>
  );
}
