'use client';

function GeminiStar({ className = '', size = 24 }: { className?: string; size?: number }) {
  const id = `gemini-grad-${size}`;
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
        <radialGradient id={id} cx="45%" cy="45%" r="60%" fx="30%" fy="30%">
          <stop offset="0%" stopColor="#ea4335" />
          <stop offset="30%" stopColor="#fbbc04" />
          <stop offset="55%" stopColor="#34a853" />
          <stop offset="80%" stopColor="#4285f4" />
          <stop offset="100%" stopColor="#4285f4" />
        </radialGradient>
      </defs>
      {/* 4-point diamond sparkle */}
      <path
        d="M50 0 C53 35, 65 47, 100 50 C65 53, 53 65, 50 100 C47 65, 35 53, 0 50 C35 47, 47 35, 50 0Z"
        fill={`url(#${id})`}
      />
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
