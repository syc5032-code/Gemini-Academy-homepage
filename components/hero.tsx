'use client';

import Link from 'next/link';
import Image from 'next/image';


export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-14 sm:py-18 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-10">
          {/* Welcome Title */}
          <div className="hero-welcome">
            <h1 className="hero-welcome-text text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-tight">
              {'Welcome to'.split('').map((char, i) => (
                <span key={i} className="hero-welcome-letter">
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
              <br />
              <span className="hero-welcome-accent">
                {'Gemini Academy'.split('').map((char, i) => (
                  <span key={`g-${i}`} className="hero-welcome-letter" style={{ animationDelay: `${(i + 11) * 0.05}s` }}>
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className="max-w-2xl space-y-4">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              JA Korea는 Google for Education의 공식 파트너 기관으로<br className="hidden sm:inline" />
              Gemini Academy를 운영하고 있습니다.
            </p>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
              AI 시대를 준비하는 교사와 대학생을 위한<br className="hidden sm:inline" />
              체계적인 AI 교육 연수 프로그램에 참여하세요.
            </p>

          </div>

          {/* Partnership Logos */}
          <div className="flex items-center justify-center space-x-5 pt-4">
            <Image
              src="/logos/ja-korea.png"
              alt="JA Korea"
              width={80}
              height={80}
              className="h-16 w-auto"
            />
            <div className="w-px h-12 bg-gray-300" />
            <Image
              src="/logos/google-education.png"
              alt="Google for Education"
              width={200}
              height={50}
              className="h-12 w-auto"
            />
          </div>

          {/* CTA Button */}
          <div className="flex items-center justify-center pt-6">
            <Link
              href="#academy"
              className="inline-flex items-center justify-center px-8 py-3 bg-ja-blue-600 text-white font-medium rounded hover:bg-ja-blue-700 transition-colors"
            >
              Gemini Academy 알아보기 →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
