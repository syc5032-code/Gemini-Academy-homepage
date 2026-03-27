'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function GNB() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: '기관소개', href: '#academy' },
    { label: '프로그램', href: '#programs' },
    { label: '고객지원', href: '#support' },
    { label: '공지사항', href: '#notice' },
  ];

  return (
    <nav className="sticky top-0 z-50">
      {/* Top Banner - Blue Bar */}
      <div className="bg-ja-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-9">
            <Link
              href="#programs"
              className="text-white text-xs font-medium hover:text-white/80 transition-colors"
            >
              Gemini Academy 2기 모집 중 &mdash; 지금 신청하세요 &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* JA Korea Logo - Large */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/ja-korea.png"
                alt="JA Korea"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-700 hover:text-ja-blue-600 font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#programs"
                className="px-5 py-2 bg-ja-blue-600 text-white text-sm font-medium rounded hover:bg-ja-blue-700 transition-colors"
              >
                신청하기
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded transition-colors"
            >
              {isOpen ? (
                <X size={22} className="text-gray-700" />
              ) : (
                <Menu size={22} className="text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden border-t border-gray-200 py-3 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#programs"
                className="block px-4 py-2 bg-ja-blue-600 text-white text-sm font-medium text-center rounded hover:bg-ja-blue-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                신청하기
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
