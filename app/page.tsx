import { GNB } from '@/components/gnb';
import { Hero } from '@/components/hero';
import { TrainingSchedule } from '@/components/training-schedule';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <GNB />
      <Hero />

      {/* Placeholder sections for future content */}
      <section id="academy" className="py-20 scroll-mt-20">
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
      <section id="ga-intro" className="py-20 bg-gray-50 scroll-mt-20">
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
            className="inline-flex items-center gap-2 bg-[#1A73E8] hover:bg-[#1557B0] text-white font-semibold text-lg px-8 py-4 rounded-full transition-colors"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logos/gemini-star-clean.png" alt="" className="h-6 w-6" />
            gemini.google.com
          </a>
        </div>
      </section>

      <section id="ga-history" className="py-20 scroll-mt-20">
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

      <section id="ga-overview" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-[#4285F4] to-[#A855F7] bg-clip-text text-transparent">
              Gemini Academy
            </span>
            {' '}
            <span className="text-gray-900">Overview</span>
          </h2>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Teacher Trainers */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4285F4]/10 to-[#A855F7]/10 rounded-xl flex items-center justify-center shrink-0">
                <span className="text-3xl">🎓</span>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Gemini Academy Trainers 2024~2026</p>
                <p className="text-base text-gray-600">누적 활동 강사 수</p>
                <p className="text-4xl font-bold text-gray-900 mt-1">120<span className="text-2xl">명</span></p>
              </div>
            </div>

            {/* Total Students */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4285F4]/10 to-[#A855F7]/10 rounded-xl flex items-center justify-center shrink-0">
                <span className="text-3xl">📚</span>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Gemini Academy 2024~2025</p>
                <p className="text-base text-gray-600">누적 수강생 수</p>
                <p className="text-4xl font-bold text-gray-900 mt-1">20,140+<span className="text-2xl"> 명</span></p>
              </div>
            </div>
          </div>

          {/* Pie Chart Section */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100 mb-16">
            <h3 className="text-xl font-bold text-gray-900 text-center mb-8">수강생 구성 <span className="text-base font-normal text-gray-500">(2025년 기준)</span></h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              {/* Pie Chart (CSS) */}
              <div className="relative w-64 h-64">
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    background: 'conic-gradient(#FBBC04 0deg 18.9deg, #EA4335 18.9deg 36deg, #4285F4 36deg 360deg)',
                  }}
                />
                <div className="absolute inset-8 bg-white rounded-full" />
              </div>

              {/* Legend */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#4285F4] shrink-0" />
                  <span className="text-gray-700 font-medium">Teachers</span>
                  <span className="text-gray-500 ml-auto">10,471명 (85.6%)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#FBBC04] shrink-0" />
                  <span className="text-gray-700 font-medium">High School Students</span>
                  <span className="text-gray-500 ml-auto">1,149명 (9.4%)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#EA4335] shrink-0" />
                  <span className="text-gray-700 font-medium">University Students</span>
                  <span className="text-gray-500 ml-auto">618명 (5.0%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ga-programs" className="py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-[#4285F4] to-[#A855F7] bg-clip-text text-transparent">
              Gemini Academy
            </span>
            {' '}
            <span className="text-gray-900">연수 구분</span>
          </h2>

          {/* Program Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            <div className="bg-[#F0F4FF] rounded-2xl p-6 flex items-center justify-center min-h-[180px]">
              <p className="text-center text-gray-800 font-medium leading-relaxed">
                Google Korea<br />방문 연수<br />
                <span className="text-gray-500 text-sm">(교육청,<br />교육지원청 등)</span>
              </p>
            </div>
            <div className="bg-[#F0F4FF] rounded-2xl p-6 flex items-center justify-center min-h-[180px]">
              <p className="text-center text-gray-800 font-medium leading-relaxed">
                찾아가는 연수<br />
                <span className="text-gray-500 text-sm">(전국 초, 중,<br />고등학교 교원)</span>
              </p>
            </div>
            <div className="bg-[#F0F4FF] rounded-2xl p-6 flex items-center justify-center min-h-[180px]">
              <p className="text-center text-gray-800 font-medium leading-relaxed">
                고용노동부<br />연계연수<br />
                <span className="text-gray-500 text-sm">(전국 대학생)</span>
              </p>
            </div>
            <div className="bg-[#F0F4FF] rounded-2xl p-6 flex items-center justify-center min-h-[180px]">
              <p className="text-center text-gray-800 font-medium leading-relaxed">
                Gemini<br />Academy<br />Trainers<br />자체 모집 연수
              </p>
            </div>
            <div className="bg-[#F0F4FF] rounded-2xl p-6 flex items-center justify-center min-h-[180px] col-span-2 md:col-span-1">
              <p className="text-center text-gray-800 font-medium leading-relaxed">
                온라인 웨비나
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 찾아가는 연수 신청 */}
      <section id="ga-visit" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-[#4285F4] to-[#A855F7] bg-clip-text text-transparent">
              Gemini Academy
            </span>
            <br />
            <span className="text-gray-900">찾아가는 연수 신청</span>
          </h2>

          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">
            {/* Left - Banner */}
            <div className="flex-1">
              <div className="bg-gradient-to-br from-[#1A237E] to-[#4285F4] rounded-2xl p-8 lg:p-10 text-white flex flex-col justify-center items-center text-center min-h-[320px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logos/gemini-star-clean.png" alt="" className="h-10 w-10 mb-4" />
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                  Gemini Academy<br />찾아가는 연수
                </h3>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 mt-2">
                  <span className="font-semibold text-lg">상시 모집</span>
                </div>
              </div>

              <p className="text-gray-600 text-center mt-4 text-sm leading-relaxed">
                학교에서 원하는 일정에 맞춰 Gemini Academy 연수를 신청할 수 있습니다.
              </p>
            </div>

            {/* Right - Info & CTA */}
            <div className="lg:w-[340px] shrink-0">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">찾아가는 연수 안내</h3>

                <div className="border-t border-gray-100 pt-4 space-y-4">
                  <div className="flex gap-4">
                    <span className="text-sm text-gray-400 w-12 shrink-0">대상</span>
                    <span className="text-sm text-gray-700">전국 초·중·고등학교 교원</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-sm text-gray-400 w-12 shrink-0">신청</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-700">상시 접수</span>
                      <span className="text-xs font-semibold text-white bg-[#34A853] px-2 py-0.5 rounded-full">모집중</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-sm text-gray-400 w-12 shrink-0">비용</span>
                    <span className="text-sm text-gray-700">무료 (추가 연수 시 비용 별도)</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-sm text-gray-400 w-12 shrink-0">장소</span>
                    <span className="text-sm text-gray-700">신청 학교 방문 진행</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-sm text-gray-400 w-12 shrink-0">내용</span>
                    <span className="text-sm text-gray-700">Gemini 활용 교원 연수</span>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-[#1A73E8] hover:bg-[#1557B0] text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    신청하기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 웨비나 신청 */}
      <section id="ga-apply" className="py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-[#4285F4] to-[#A855F7] bg-clip-text text-transparent">
              Gemini Academy
            </span>
            {' '}
            <span className="text-gray-900">웨비나 신청</span>
          </h2>

          <TrainingSchedule />
        </div>
      </section>

      <section id="contact" className="relative py-20 scroll-mt-20 bg-gradient-to-br from-[#1A237E] via-[#4285F4] to-[#A855F7] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4">
            문의
          </h2>
          <p className="text-center text-white/70 mb-2">
            궁금한 점이 있으시면 언제든 문의해 주세요.
          </p>
          <p className="text-center text-white/50 text-sm mb-12">
            운영기관 JA Korea
          </p>

          <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 max-w-3xl mx-auto">
            {/* Email */}
            <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <p className="text-sm text-white mb-1">이메일</p>
              <a href="mailto:gfe@jakorea.org" className="text-lg font-semibold text-white hover:underline">
                gfe@jakorea.org
              </a>
            </div>

            {/* 송예찬 매니저 */}
            <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <p className="text-sm text-white mb-1">송예찬 매니저</p>
              <a href="tel:02-761-6001" className="text-lg font-semibold text-white hover:underline">
                02-761-6001
              </a>
            </div>

            {/* 정미래 매니저 */}
            <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <p className="text-sm text-white mb-1">정미래 매니저</p>
              <a href="tel:02-6952-9720" className="text-lg font-semibold text-white hover:underline">
                02-6952-9720
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
