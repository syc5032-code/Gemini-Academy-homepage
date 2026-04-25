'use client';

import { useState } from 'react';

interface Training {
  month: string;
  topic: string;
  date?: string;
  status: 'completed' | 'upcoming' | 'pending';
  applyUrl?: string;
}

const schedules: Record<string, Training[]> = {
  '2025': [
    { month: '10월', topic: 'Gemini 기초', status: 'completed' },
    { month: '11월', topic: 'NotebookLM, Gems', status: 'completed' },
    { month: '12월', topic: '바이브코딩', status: 'completed' },
  ],
  '2026': [
    { month: '3월', topic: 'Edu Plus', date: '3/26(목)', status: 'completed' },
    { month: '4월', topic: 'Gems', status: 'upcoming', applyUrl: 'https://forms.gle/iajj37GSnXSGymf8A' },
    { month: '5월', topic: 'NotebookLM', status: 'pending' },
    { month: '6월', topic: 'Deep Research\n& Canvas', status: 'pending' },
  ],
};

const statusConfig = {
  completed: { label: '진행완료', color: 'bg-gray-400' },
  upcoming: { label: '접수중', color: 'bg-[#34A853]' },
  pending: { label: '접수예정', color: 'bg-[#FBBC04]' },
};

export function TrainingSchedule() {
  const [activeYear, setActiveYear] = useState('2026');
  const years = Object.keys(schedules);

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
          const config = statusConfig[item.status];
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
                {item.status === 'completed' ? (
                  <span className="inline-block w-full text-center bg-gray-200 text-gray-500 font-semibold py-3 rounded-full cursor-not-allowed">
                    마감
                  </span>
                ) : item.status === 'upcoming' ? (
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
