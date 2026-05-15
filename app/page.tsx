import {
  ArrowUpRight,
  Check,
  GraduationCap,
  Mail,
  Phone,
  Sparkles,
  Users,
} from 'lucide-react';
import { GNB } from '@/components/gnb';
import { Hero } from '@/components/hero';
import { TrainingSchedule } from '@/components/training-schedule';

const jaFeatures = [
  '청소년들에게 진로취업, 경제금융, 기업가정신, 디지털 리터러시 교육을 합니다.',
  '전문지식을 갖춘 봉사자 및 교사, 강사가 함께 교육에 참여합니다.',
  '기업, 공공기관, 학교와의 협업을 통해 교육을 진행합니다.',
  '온·오프라인 병행이 가능한 프로그램과 교육 콘텐츠를 갖추고 있습니다.',
  '교육이 필요한 곳에 직접 찾아갑니다.',
  '개인 및 기업의 기부금을 투명하게 운영·관리하고 있습니다.',
];

const academyPoints = [
  'AI Literacy 향상',
  '안전하고 책임감 있게 Gemini 사용하기',
  '업무와 학습에 Gemini와 NotebookLM 등 활용',
];

const history = [
  {
    year: '2023.11',
    title: 'Bard Academy 운영',
    details: ['교원 대상 프롬프트 작성 및 생성형 AI(현 Gemini) 사용법 교육'],
  },
  {
    year: '2024.01',
    title: '교육박람회 런칭',
    details: ['파일럿 성과 기반 프로그램 공식화', '교사 200여 명 대상 아카데미 소개'],
  },
  {
    year: '2024 ~ 2025',
    title: 'Gemini 확산 및 강사단 운영',
    details: [
      '누적 수혜 교사 약 2만 명 달성',
      '현직 교사로 구성된 강사단 운영으로 교안 및 연수 퀄리티 유지',
      '대학생 및 취업준비생 대상 교육으로 확장',
    ],
  },
  {
    year: '2026',
    title: '교육 대상 및 생태계 확장',
    details: ['대학생 연수 확장', 'Gemini 활용의 전방위적 확산 추진'],
  },
];

const programs = [
  { title: 'Google Korea 방문 연수', detail: '교육청, 교육지원청 등', color: 'bg-[#dceeb1]' },
  { title: '찾아가는 연수', detail: '전국 초, 중, 고등학교 교원', color: 'bg-[#c8e6cd]' },
  { title: '고용노동부 연계연수', detail: '전국 대학생', color: 'bg-[#f4ecd6]' },
  { title: '강사단\n자체모집 연수', detail: '전국 초, 중, 고등학교 교원', color: 'bg-[#c5b0f4]' },
  { title: '온라인 웨비나', detail: '월별 주제형 실시간 연수', color: 'bg-[#efd4d4]' },
];

const contactItems = [
  { label: '이메일', value: 'gfe@jakorea.org', icon: Mail },
  { label: '송예찬 매니저', value: '02-761-6001', icon: Phone },
  { label: '정미래 매니저', value: '02-6952-9720', icon: Phone },
];

const jaMapPoints = [
  { label: 'JUNIOR\nACHIEVEMENT\nUSA', left: '16%', top: '27%', size: 'clamp(78px, 15vw, 112px)' },
  { label: 'JA EUROPE', left: '42%', top: '27%', size: 'clamp(78px, 15vw, 112px)' },
  { label: 'INJAZ AL\nARAB\nJA MENA', left: '62%', top: '45%', size: 'clamp(78px, 15vw, 112px)' },
  { label: 'JA AFRICA', left: '45%', top: '67%', size: 'clamp(78px, 15vw, 112px)' },
  { label: 'JA ASIA\nPACIFIC', left: '81%', top: '45%', size: 'clamp(78px, 15vw, 112px)' },
  { label: 'JA AMERICAS\nincludes Canada', left: '22%', top: '79%', size: 'clamp(78px, 15vw, 112px)' },
  { label: 'JA\nWorldwide', left: '91%', top: '16%', size: 'clamp(78px, 15vw, 112px)' },
];

function JaWorldwideMap() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-[784/459] w-full max-w-[650px]"
    >
      <img
        src="/ja-world-map.svg"
        alt=""
        className="h-full w-full object-contain opacity-80"
      />
      {jaMapPoints.map((point) => (
        <div
          key={point.label}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#173f46] px-3 text-center text-[clamp(10px,1.2vw,14px)] font-bold leading-[1.18] text-white shadow-sm"
          style={{
            left: point.left,
            top: point.top,
            width: point.size,
            height: point.size,
          }}
        >
          {point.label.split('\n').map((line) => (
            <span key={line} className="block whitespace-nowrap">
              {line}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-black">
      <GNB />
      <Hero />

      <section id="academy" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto w-[calc(100vw-40px)] max-w-7xl px-0 sm:w-auto sm:px-8">
          <div className="min-w-0 overflow-hidden rounded-[24px] bg-[#c8e6cd] px-7 py-10 sm:px-12 lg:px-16 lg:py-14">
            <p className="mb-8 font-mono text-sm uppercase text-black">
              JA Korea
            </p>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <h2 className="figma-heading max-w-2xl text-3xl leading-[1.12] text-black sm:text-5xl lg:text-6xl">
                청소년이 역량을 마음껏 발휘하고 성공할 수 있도록 함께합니다.
              </h2>
              <div className="min-w-0">
                <div className="mb-8">
                  <JaWorldwideMap />
                </div>
                <p className="figma-copy min-w-0 text-lg font-medium text-black sm:text-xl lg:text-2xl">
                  JA Korea는 JA Worldwide의 한국 지부로서 2002년 설립 이래 기업,
                  공공기관, 학교와의 협업을 통해 약 180만명의 청소년을 교육했습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-[#e6e6e6] bg-[#e6e6e6] md:grid-cols-2">
            {jaFeatures.map((item) => (
              <div key={item} className="flex gap-3 bg-white px-5 py-6">
                <Check className="mt-1 h-4 w-4 shrink-0 text-black" />
                <p className="figma-copy min-w-0 text-[15px] font-medium text-black sm:text-base lg:whitespace-nowrap">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ga-intro" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto grid w-[calc(100vw-40px)] max-w-7xl gap-12 px-0 sm:w-auto sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="mb-5 font-mono text-sm uppercase text-black">
              What is Gemini Academy
            </p>
            <h2 className="figma-heading text-4xl leading-[1.08] text-black sm:text-6xl lg:text-7xl">
              Gemini Academy란?
            </h2>
            <div className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-lg border border-[#e6e6e6] bg-[#f7f7f5]">
              <img
                src="/logos/DSC08714.jpg"
                alt="Gemini Academy 교육 자료가 표시된 강의장 화면"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <p className="figma-copy min-w-0 text-xl font-medium text-black lg:text-[26px]">
              Google for Education과 국제 청소년 비영리 교육기관 JA Korea가 함께
              Google의 생성형 AI를 활용하여 교사의 업무 경감을 돕고, 학생들에게
              더 많은 시간을 사용할 수 있도록 돕는 연수입니다.
              <span className="block pt-3 text-base font-medium">
                ※ 2025년부터는 대학생 연수도 진행
              </span>
            </p>
            <div className="divide-y divide-[#e6e6e6] border-y border-[#e6e6e6]">
              {academyPoints.map((point) => (
                <div key={point} className="flex items-center gap-4 py-4">
                  <Sparkles className="h-5 w-5 text-black" />
                  <span className="figma-copy min-w-0 text-lg font-medium text-black">{point}</span>
                </div>
              ))}
            </div>
            <a
              href="https://gemini.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-black px-6 py-3 text-base font-medium text-white transition-transform hover:scale-[1.02]"
            >
              gemini.google.com
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section id="ga-history" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto w-[calc(100vw-40px)] max-w-7xl px-0 sm:w-auto sm:px-8">
          <div className="min-w-0 overflow-hidden rounded-[24px] bg-[#c5b0f4] px-7 py-10 sm:px-12 lg:px-16 lg:py-14">
            <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-5 font-mono text-sm uppercase text-black">
                  History
                </p>
                <h2 className="figma-heading max-w-3xl text-3xl leading-[1.2] text-black sm:text-5xl lg:text-6xl">
                  Gemini Academy History with JA Korea
                </h2>
              </div>
            </div>

            <div className="grid gap-px overflow-hidden rounded-lg bg-black/20 lg:grid-cols-4">
              {history.map((item) => (
                <article key={item.year} className="bg-[#c5b0f4] p-6">
                  <p className="mb-5 inline-flex rounded-full bg-black px-4 py-2 font-mono text-xs uppercase text-white">
                    {item.year}
                  </p>
                  <h3 className="figma-copy mb-5 text-2xl font-bold leading-tight text-black">
                    {item.title}
                  </h3>
                  <ul className="space-y-3">
                    {item.details.map((detail) => (
                      <li key={detail} className="figma-copy flex min-w-0 gap-3 text-base font-medium text-black">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="ga-overview" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto w-[calc(100vw-40px)] max-w-7xl px-0 sm:w-auto sm:px-8">
          <div className="min-w-0 overflow-hidden rounded-[24px] bg-[#f4ecd6] px-7 py-10 sm:px-12 lg:px-16 lg:py-14">
            <p className="mb-5 font-mono text-sm uppercase text-black">
              Overview
            </p>
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <h2 className="figma-heading text-3xl leading-[1.12] text-black sm:text-5xl lg:text-6xl">
                  숫자로 보는 Gemini Academy
                </h2>
                <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-black/15">
                  <div className="bg-[#f4ecd6] p-6">
                    <GraduationCap className="mb-7 h-7 w-7 text-black" />
                    <p className="font-mono text-xs uppercase text-black">
                      Trainers 2024-2026
                    </p>
                    <p className="mt-3 text-5xl font-normal leading-none text-black">
                      120<span className="text-2xl">명</span>
                    </p>
                    <p className="figma-copy mt-2 text-base font-medium text-black">누적 활동 강사 수</p>
                  </div>
                  <div className="bg-[#f4ecd6] p-6">
                    <Users className="mb-7 h-7 w-7 text-black" />
                    <p className="font-mono text-xs uppercase text-black">
                      Students 2024-2025
                    </p>
                    <p className="mt-3 text-5xl font-normal leading-none text-black">
                      20,140+
                    </p>
                    <p className="figma-copy mt-2 text-base font-medium text-black">누적 수강생 수</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 sm:p-8">
                <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <h3 className="text-2xl font-semibold text-black">수강생 구성</h3>
                  <span className="font-mono text-xs uppercase text-black">
                    2025 기준
                  </span>
                </div>
                <div className="grid gap-8">
                  <div className="relative mx-auto h-64 w-64">
                    <div
                      className="h-full w-full rounded-full"
                      style={{
                        background: 'conic-gradient(#dceeb1 0deg 18.9deg, #efd4d4 18.9deg 36deg, #000000 36deg 360deg)',
                      }}
                    />
                    <div className="absolute inset-10 flex items-center justify-center rounded-full bg-white text-center">
                      <span className="text-2xl font-semibold leading-tight text-black">
                        12,238
                        <span className="block text-sm font-medium">2025 수강생</span>
                      </span>
                    </div>
                  </div>
                  <div className="grid gap-px overflow-hidden rounded-lg bg-[#e6e6e6] sm:grid-cols-3">
                    {[
                      ['교원', '10,471명 (85.6%)', 'bg-black'],
                      ['고등학생', '1,149명 (9.4%)', 'bg-[#dceeb1]'],
                      ['대학생', '618명 (5.0%)', 'bg-[#efd4d4]'],
                    ].map(([label, value, color]) => (
                      <div key={label} className="flex items-center gap-3 bg-white p-4">
                        <span className={`h-4 w-4 shrink-0 rounded-full ${color}`} />
                        <div className="min-w-0">
                          <span className="block text-base font-bold text-black">{label}</span>
                          <span className="block whitespace-nowrap text-sm font-semibold text-black">{value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ga-programs" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto w-[calc(100vw-40px)] max-w-7xl px-0 sm:w-auto sm:px-8">
          <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-5 font-mono text-sm uppercase text-black">
                Programs
              </p>
              <h2 className="figma-heading max-w-3xl text-4xl leading-[1.08] text-black sm:text-6xl">
                연수는 다섯가지 방식으로 진행됩니다.
              </h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {programs.map((program) => (
              <article key={program.title} className={`${program.color} grid min-h-[220px] grid-rows-[88px_1fr] rounded-lg p-6`}>
                <h3 className="figma-copy whitespace-pre-line text-2xl font-bold leading-tight text-black">{program.title}</h3>
                <p className="figma-copy text-base font-medium text-black">{program.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ga-visit" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto w-[calc(100vw-40px)] max-w-7xl px-0 sm:w-auto sm:px-8">
          <div className="min-w-0 overflow-hidden rounded-[24px] bg-[#1f1d3d] px-7 py-10 text-white sm:px-12 lg:px-16 lg:py-16">
            <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-start">
              <div>
                <h2 className="figma-heading max-w-3xl text-5xl leading-[1.08] text-white sm:text-7xl lg:text-8xl">
                  찾아가는 연수
                </h2>
                <p className="figma-copy mt-10 max-w-3xl text-2xl font-semibold leading-[1.45] text-white sm:text-3xl">
                  전국 초·중·고등학교 교원을 대상으로 Gemini 활용 교원 연수를
                  신청 학교에 방문해 진행합니다.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 text-black">
                {[
                  ['대상', '전국 초·중·고등학교 교원'],
                  ['신청', '접수 예정'],
                  ['비용', '무료 (추가 연수 시 비용 별도)'],
                  ['장소', '신청 학교 방문 진행'],
                  ['내용', 'Gemini 활용 교원 연수'],
                ].map(([label, value]) => (
                  <div key={label} className="flex gap-6 border-b border-[#e6e6e6] py-4 first:pt-0">
                    <span className="w-14 shrink-0 font-mono text-xs uppercase text-black">
                      {label}
                    </span>
                    <span className="figma-copy min-w-0 text-base font-medium text-black">{value}</span>
                  </div>
                ))}
                <span className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-black px-6 py-3 text-base font-medium text-white">
                  접수예정
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ga-apply" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto w-[calc(100vw-40px)] max-w-7xl px-0 sm:w-auto sm:px-8">
          <div className="mb-8">
            <div>
              <p className="mb-5 font-mono text-sm uppercase text-black">
                Webinar
              </p>
              <h2 className="figma-heading text-3xl leading-[1.08] text-black sm:text-5xl">
                Gemini Academy 웨비나
              </h2>
            </div>
          </div>

          <TrainingSchedule />
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 border-t border-[#e6e6e6] bg-white py-20 sm:py-24">
        <div className="mx-auto w-[calc(100vw-40px)] max-w-7xl px-0 sm:w-auto sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-5 font-mono text-sm uppercase text-black">
                Contact
              </p>
              <h2 className="figma-heading text-4xl leading-[1.08] text-black sm:text-6xl">
                궁금한 점이 있으시면 언제든 문의해 주세요.
              </h2>
              <p className="figma-copy mt-6 text-lg font-medium text-black">운영기관 JA Korea</p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-lg border border-[#e6e6e6] bg-[#e6e6e6] md:grid-cols-3">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.value}
                    className="flex min-h-[126px] flex-col justify-between bg-white p-5 text-black transition-colors hover:bg-[#f7f7f5]"
                  >
                    <Icon className="h-5 w-5 text-black" />
                    <span>
                      <span className="block font-mono text-xs uppercase text-black">
                        {item.label}
                      </span>
                      <span className="mt-2 block whitespace-nowrap text-xl font-semibold text-black">
                        {item.value}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
