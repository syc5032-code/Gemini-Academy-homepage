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
          <h2 className="text-3xl font-bold text-center text-gray-900">
            아카데미 소개
          </h2>
          <p className="text-center text-gray-600 mt-4">Coming Soon</p>
        </div>
      </section>

      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            프로그램
          </h2>
          <p className="text-center text-gray-600 mt-4">Coming Soon</p>
        </div>
      </section>

      <section id="support" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            고객지원
          </h2>
          <p className="text-center text-gray-600 mt-4">Coming Soon</p>
        </div>
      </section>
    </main>
  );
}
