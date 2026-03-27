'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { GeminiAcademyLogo } from './gemini-logo';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24 sm:py-32 lg:py-40">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-10">
          {/* Gemini Academy Logo */}
          <h1>
            <GeminiAcademyLogo className="text-5xl sm:text-6xl lg:text-7xl" starSize={48} />
          </h1>

          {/* Welcome Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-500 font-light">
            Welcome to Gemini Academy
          </p>

          {/* Description */}
          <div className="max-w-2xl space-y-4">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              JA Korea는 Google for Education의 공식 파트너기관으로<br className="hidden sm:inline" />
              Gemini Academy를 운영하고 있습니다.
            </p>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
              AI 시대의 교육 혁신을 이끄는 선생님들을 위한<br className="hidden sm:inline" />
              체계적인 AI 교육 연수 프로그램에 참여하세요.
            </p>
          </div>

          {/* Partnership Logos */}
          <div className="flex items-center justify-center space-x-5 pt-4">
            <Image
              src="/logos/ja-korea.png"
              alt="JA Korea"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <div className="w-px h-10 bg-gray-300" />
            <Image
              src="/logos/google-education.png"
              alt="Google for Education"
              width={160}
              height={40}
              className="h-9 w-auto"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
            <Link
              href="#programs"
              className="inline-flex items-center justify-center px-8 py-3 bg-ja-blue-600 text-white font-medium rounded hover:bg-ja-blue-700 transition-colors"
            >
              프로그램 신청하기
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link
              href="#academy"
              className="inline-flex items-center px-8 py-3 text-gray-700 font-medium hover:text-ja-blue-600 transition-colors"
            >
              자세히 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
