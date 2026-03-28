'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function GNB() {
  const [isOpen, setIsOpen] = useState(false);

  const [geminiOpen, setGeminiOpen] = useState(false);

  const geminiSubItems = [
    { label: 'Gemini Academy 소개', href: '#ga-intro' },
    { label: 'History', href: '#ga-history' },
    { label: 'Overview', href: '#ga-overview' },
    { label: '연수종류', href: '#ga-programs' },
    { label: '연수신청', href: '#ga-apply' },
  ];

  return (
    <nav className="sticky top-0 z-50">
      {/* Main Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 md:h-28">
            {/* JA Korea Logo - Left */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logos/ja-korea.png"
                alt="JA Korea"
                width={250}
                height={90}
                className="h-12 md:h-[6.5rem] w-auto"
              />
            </Link>

            {/* Gemini Academy Logo - Center */}
            <Link href="/" className="flex items-center gap-2 md:gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/gemini-star-clean.png"
                alt=""
                className="h-6 w-6 md:h-11 md:w-11 animate-gemini-spin"
              />
              <span className="text-lg md:text-4xl font-semibold tracking-tight text-gray-800 whitespace-nowrap">
                Gemini Academy
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <Link
                href="#academy"
                className="text-lg text-gray-700 hover:text-ja-blue-600 font-medium transition-colors"
              >
                JA Korea
              </Link>

              {/* Gemini Academy Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setGeminiOpen(true)}
                onMouseLeave={() => setGeminiOpen(false)}
              >
                <button className="text-lg text-gray-700 hover:text-ja-blue-600 font-medium transition-colors">
                  Gemini Academy
                </button>
                {geminiOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[200px]">
                      {geminiSubItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-ja-blue-600 transition-colors"
                          onClick={() => setGeminiOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="#contact"
                className="text-lg text-gray-700 hover:text-ja-blue-600 font-medium transition-colors"
              >
                문의
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded transition-colors"
            >
              {isOpen ? (
                <X size={20} className="text-gray-700" />
              ) : (
                <Menu size={20} className="text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden border-t border-gray-200 py-3 space-y-1">
              <Link
                href="#academy"
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                JA Korea
              </Link>
              <div className="px-4 py-2 text-sm font-medium text-gray-700">
                Gemini Academy
              </div>
              {geminiSubItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-8 py-1.5 text-sm text-gray-500 hover:bg-gray-50 rounded transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                문의
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
