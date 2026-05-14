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
  ],
};

const statusConfig = {
  completed: { label: '진행완료', color: 'bg-gray-400' },
  upcoming: { label: '접수중', color: 'bg-[#34A853]' },
  pending: { label: '접수예정', color: 'bg-[#FBBC04]' },
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
      <div className="flex justify-center gap-2 mb-12">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className={`px-6 py-2.5 rounded-full font-semibold text-lg transition-colors ${
              activeYear === year
                ? 'bg-[#1A73E8] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {year}년
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className={`grid grid-cols-1 gap-6 ${
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
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-sm font-semibold text-white px-3 py-1 rounded-full ${config.color}`}>
                  {config.label}
                </span>
                {item.date && (
                  <span className="text-sm text-gray-500">{item.date}</span>
                )}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {item.month}
              </h3>
              <p className="text-lg font-semibold text-[#4285F4] mb-6 whitespace-pre-line">
                {item.topic}
              </p>
              <div className="mt-auto">
                {effectiveStatus === 'completed' ? (
                  <span className="inline-block w-full text-center bg-gray-200 text-gray-500 font-semibold py-3 rounded-full cursor-not-allowed">
                    마감
                  </span>
                ) : effectiveStatus === 'upcoming' ? (
                  <a
                    href={item.applyUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-[#1A73E8] hover:bg-[#1557B0] text-white font-semibold py-3 rounded-full transition-colors"
                  >
                    신청하기
                  </a>
                ) : (
                  <span className="inline-block w-full text-center bg-[#FBBC04] text-white font-semibold py-3 rounded-full cursor-not-allowed">
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
