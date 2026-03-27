'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ja-blue-50 pt-20 pb-20 sm:pt-28 sm:pb-28">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-600">
            <span className="text-ja-blue-600">홈</span> &gt; <span className="text-gray-700">커뮤니티</span> &gt; <span className="text-gray-700">공문 역신가</span>
          </div>

          {/* Main Content */}
          <div className="space-y-8 max-w-3xl">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                청소년의 잠재력을 믿는<br />
                <span className="text-ja-blue-600">JA Korea와 Gemini의 만남</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
                AI 시대에 Google AI 도구로 난제를 해결하고 혁신을 촉진하고 있는 열정적인 교육 전문가를 위한 글로벌 커뮤니티에 참여하세요.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-3 pt-4">
              <Link
                href="#programs"
                className="inline-flex items-center justify-center px-6 py-3 bg-ja-blue-600 text-white font-medium rounded hover:bg-ja-blue-700 transition-colors"
              >
                신청하기
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <button className="inline-flex items-center px-6 py-3 text-gray-900 font-medium hover:text-ja-blue-600 transition-colors border-b-2 border-gray-300 hover:border-ja-blue-600">
                자세히 보기
              </button>
            </div>

            {/* Stats */}
            <div className="pt-12 flex gap-12 border-t border-gray-300">
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold text-ja-blue-600">500+</p>
                <p className="text-sm text-gray-700">참여 교사</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold text-google-red">50+</p>
                <p className="text-sm text-gray-700">교육 프로그램</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold text-google-green">2024</p>
                <p className="text-sm text-gray-700">출범</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
