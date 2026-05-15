'use client';

import { useEffect, useState } from 'react';

type TrainingStatus = 'completed' | 'upcoming' | 'pending';

interface Training {
  month: string;
  topic: string;
  date?: string;
  status: TrainingStatus;
  applyUrl?: string;
  closesAt?: string;
}

const schedules: Record<string, Training[]> = {
  '2025': [
    { month: '10월', topic: 'Gemini 기초', status: 'completed' },
    { month: '11월', topic: 'NotebookLM, Gems', status: 'completed' },
    { month: '12월', topic: '바이브코딩', status: 'completed' },
  ],
  '2026': [
    { month: '3월', topic: 'Edu Plus', date: '3/26(목)', status: 'completed' },
    { month: '4월', topic: 'Gems', status: 'completed' },
    {
      month: '5월',
      topic: 'NotebookLM',
      status: 'upcoming',
      applyUrl: 'https://forms.gle/YqUZELFJ4fsMKVG48',
      closesAt: '2026-05-28T17:00:00+09:00',
    },
    { month: '6월', topic: 'Deep Research\n& Canvas', status: 'pending' },
    { month: '7월', topic: 'AI Studio 활용한\n바이브코딩', status: 'pending' },
    { month: '8월', topic: 'Antigravity 활용한\n바이브코딩(1)', status: 'pending' },
    { month: '9월', topic: 'Antigravity 활용한\n바이브코딩(2)', status: 'pending' },
  ],
};

const statusConfig = {
  completed: { label: '진행완료', color: 'bg-black', textColor: 'text-white' },
  upcoming: { label: '접수중', color: 'bg-[#1ea64a]', textColor: 'text-white' },
  pending: { label: '접수예정', color: 'bg-[#f4ecd6]', textColor: 'text-black' },
};

function getEffectiveStatus(item: Training, now: Date | null): TrainingStatus {
  if (item.closesAt && now && now.getTime() >= Date.parse(item.closesAt)) {
    return 'completed';
  }

  return item.status;
}

export function TrainingSchedule() {
  const [activeYear, setActiveYear] = useState('2026');
  const [now, setNow] = useState<Date | null>(null);
  const years = Object.keys(schedules);

  useEffect(() => {
    const updateNow = () => setNow(new Date());
    updateNow();

    const closeTimers = Object.values(schedules)
      .flat()
      .map((item) => item.closesAt ? Date.parse(item.closesAt) : Number.NaN)
      .filter((closeTime) => Number.isFinite(closeTime) && closeTime > Date.now())
      .map((closeTime) => window.setTimeout(updateNow, closeTime - Date.now() + 100));

    const interval = window.setInterval(updateNow, 60 * 1000);

    return () => {
      closeTimers.forEach((timer) => window.clearTimeout(timer));
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {/* Year Tabs */}
      <div className="mb-12 flex justify-center gap-2">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className={`min-h-11 rounded-full px-6 py-2.5 text-base font-medium transition-colors ${
              activeYear === year
                ? 'bg-black text-white'
                : 'border border-[#e6e6e6] bg-white text-black hover:bg-[#f7f7f5]'
            }`}
          >
            {year}년
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className={`grid grid-cols-1 gap-4 ${
        schedules[activeYear].length === 3
          ? 'md:grid-cols-3'
          : 'md:grid-cols-2 lg:grid-cols-4'
      }`}>
        {schedules[activeYear].map((item) => {
          const effectiveStatus = getEffectiveStatus(item, now);
          const config = statusConfig[effectiveStatus];
          return (
            <div
              key={item.month}
              className="flex min-h-[260px] flex-col rounded-lg border border-[#e6e6e6] bg-white p-6"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className={`rounded-full px-3 py-1 font-mono text-xs font-normal uppercase ${config.color} ${config.textColor}`}>
                  {config.label}
                </span>
                {item.date && (
                  <span className="font-mono text-xs uppercase text-black">{item.date}</span>
                )}
              </div>
              <h3 className="figma-heading mb-3 text-4xl leading-none text-black">
                {item.month}
              </h3>
              <p className="figma-copy mb-8 whitespace-pre-line text-xl font-medium text-black">
                {item.topic}
              </p>
              <div className="mt-auto">
                {effectiveStatus === 'completed' ? (
                  <span className="inline-flex min-h-11 w-full cursor-not-allowed items-center justify-center rounded-full bg-[#f1f1f1] px-6 py-3 text-base font-medium text-black">
                    마감
                  </span>
                ) : effectiveStatus === 'upcoming' ? (
                  <a
                    href={item.applyUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-black px-6 py-3 text-base font-medium text-white transition-transform hover:scale-[1.02]"
                  >
                    신청하기
                  </a>
                ) : (
                  <span className="inline-flex min-h-11 w-full cursor-not-allowed items-center justify-center rounded-full bg-[#f4ecd6] px-6 py-3 text-base font-medium text-black">
                    접수예정
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
