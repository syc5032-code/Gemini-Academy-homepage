'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { GeminiAcademyLogo } from './gemini-logo';

export function GNB() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: '기관소개', href: '#academy' },
    { label: '연수소개', href: '#programs' },
    { label: '공지사항', href: '#notice' },
    { label: '문의', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50">
      {/* Main Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-20">
            {/* JA Korea Logo - Left */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/ja-korea.png"
                alt="JA Korea"
                width={200}
                height={70}
                className="h-[4.5rem] w-auto"
              />
            </Link>

            {/* Gemini Academy Logo - Absolute Center */}
            <Link href="/" className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <GeminiAcademyLogo className="text-2xl" starSize={28} />
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
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
