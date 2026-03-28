import { GNB } from '@/components/gnb';
import { Hero } from '@/components/hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <GNB />
      <Hero />

      {/* Placeholder sections for future content */}
      <section id="academy" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission Card */}
          <div className="bg-gradient-to-br from-[#2EC4B6] to-[#26A69A] rounded-2xl p-10 lg:p-14 mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              JA Korea
            </h3>
            <div className="w-12 h-1 bg-white/60 mb-6" />
            <p className="text-lg text-white/90 leading-relaxed max-w-xl">
              JA는 청소년들이 마음껏 역량을 발휘하며<br />
              성공할 수 있도록 함께 합니다.
            </p>
          </div>

          {/* Description */}
          <div className="mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-snug mb-10">
              JA Korea는 JA Worldwide의 한국 지부로서<br />
              2002년 설립 이래 현재까지 기업, 공공기관, 학교와의 협업을 통해<br />
              약 180만명의 청소년을 교육했습니다.
            </h3>
          </div>

          {/* Feature List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
            {[
              '청소년들에게 진로취업, 경제금융, 기업가정신, 디지털 리터러시 교육을 합니다.',
              '전문지식을 갖춘 봉사자 및 교사, 강사가 함께 교육에 참여합니다.',
              '기업, 공공기관, 학교와의 협업을 통해 교육을 진행합니다.',
              '온·오프라인 병행이 가능한 프로그램과 교육 콘텐츠를 갖추고 있습니다.',
              '교육이 필요한 곳에 직접 찾아갑니다.',
              '개인 및 기업의 기부금을 투명하게 운영·관리하고 있습니다.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-[#2EC4B6] mt-1.5 shrink-0">●</span>
                <p className="text-gray-600 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gemini Academy Sub-sections */}
      <section id="ga-intro" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-10">
            <span className="bg-gradient-to-r from-[#4285F4] to-[#A855F7] bg-clip-text text-transparent">
              Gemini Academy
            </span>
            {' '}란?
          </h2>

          {/* Description */}
          <p className="text-xl lg:text-2xl font-bold text-gray-900 leading-relaxed mb-10">
            Google For Education과 국제 청소년 비영리 교육기관 JA Korea가 함께
            Google의 생성형 AI를 활용하여 교사의 업무를 경감을 돕고, 학생들에게 더
            많은 시간을 사용할 수 있도록 돕는 연수입니다.
            <span className="text-base font-normal text-gray-500 ml-1">
              (※25년부터는 대학생 연수도 진행)
            </span>
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 mb-10">
            <li className="flex items-start gap-3">
              <span className="text-gray-900 mt-1">●</span>
              <span className="text-lg text-gray-700">AI Literacy 향상</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-900 mt-1">●</span>
              <span className="text-lg text-gray-700">안전하고 책임감 있게 Gemini 사용하기</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-900 mt-1">●</span>
              <span className="text-lg text-gray-700">업무와 학습에 Gemini와 NotebookLM 등 활용</span>
            </li>
          </ul>

          <p className="text-xl font-bold text-gray-900 mb-10">
            위의 내용을 배울 수 있습니다.
          </p>

          {/* CTA Link */}
          <a
            href="https://gemini.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#4285F4] hover:bg-[#3367D6] text-white font-semibold text-lg px-8 py-4 rounded-full transition-colors"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logos/gemini-star-clean.png" alt="" className="h-6 w-6" />
            gemini.google.com
          </a>
        </div>
      </section>

      <section id="ga-history" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-[#4285F4] to-[#A855F7] bg-clip-text text-transparent">
              Gemini Academy
            </span>
            {' '}
            <span className="text-gray-900">History with </span>
            <span className="text-[#2EC4B6]">JA Korea</span>
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
              {/* 2023.11 */}
              <div className="relative flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-4 border-[#7C3AED] bg-white flex items-center justify-center z-10 mb-4">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#4285F4] to-[#A855F7]" />
                </div>
                <span className="inline-block bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
                  2023.11
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                  Bard Academy<br />운영
                </h3>
                <ul className="text-sm text-gray-600 space-y-2 w-full px-2">
                  <li className="text-center leading-5">
                    <span>·</span>
                    교원 대상 프롬프트 작성 및 생성형 AI(현 Gemini) 사용법 교육
                  </li>
                </ul>
              </div>

              {/* 2024.01 */}
              <div className="relative flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-4 border-[#7C3AED] bg-white flex items-center justify-center z-10 mb-4">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#4285F4] to-[#A855F7]" />
                </div>
                <span className="inline-block bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
                  2024.01
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                  교육박람회<br />런칭
                </h3>
                <ul className="text-sm text-gray-600 space-y-2 w-full px-2">
                  <li className="text-center leading-5">
                    <span>·</span>
                    파일럿 성과 기반 프로그램 공식화
                  </li>
                  <li className="text-center leading-5">
                    <span>·</span>
                    교사 200여 명 대상 아카데미 소개
                  </li>
                </ul>
              </div>

              {/* 2024 ~ 2025 */}
              <div className="relative flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-4 border-[#7C3AED] bg-white flex items-center justify-center z-10 mb-4">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#4285F4] to-[#A855F7]" />
                </div>
                <span className="inline-block bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
                  2024 ~ 2025
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                  Gemini 확산 및<br />강사단 운영
                </h3>
                <ul className="text-sm text-gray-600 space-y-2 w-full px-2">
                  <li className="text-center leading-5">
                    <span>·</span>
                    누적 수혜 교사 약 2만 명 달성
                  </li>
                  <li className="text-center leading-5">
                    <span>·</span>
                    현직 교사로 구성된 강사단 (Gemini Academy Teacher Trainers) 운영으로 교안 및 연수 퀄리티 유지
                  </li>
                  <li className="text-center leading-5">
                    <span>·</span>
                    대학생 및 취업준비생 대상 교육으로 확장
                  </li>
                </ul>
              </div>

              {/* 2026 */}
              <div className="relative flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-4 border-[#7C3AED] bg-white flex items-center justify-center z-10 mb-4">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#4285F4] to-[#A855F7]" />
                </div>
                <span className="inline-block bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
                  2026
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                  교육 대상 및<br />생태계 확장
                </h3>
                <ul className="text-sm text-gray-600 space-y-2 w-full px-2">
                  <li className="text-center leading-5">
                    <span>·</span>
                    대학생 연수 확장
                  </li>
                  <li className="text-center leading-5">
                    <span>·</span>
                    Gemini 활용의 전방위적 확산 추진
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ga-overview" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Overview
          </h2>
          <p className="text-center text-gray-600 mt-4">Coming Soon</p>
        </div>
      </section>

      <section id="ga-programs" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            연수종류
          </h2>
          <p className="text-center text-gray-600 mt-4">Coming Soon</p>
        </div>
      </section>

      <section id="ga-apply" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            연수신청
          </h2>
          <p className="text-center text-gray-600 mt-4">Coming Soon</p>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            문의
          </h2>
          <p className="text-center text-gray-600 mt-4">Coming Soon</p>
        </div>
      </section>
    </main>
  );
}
