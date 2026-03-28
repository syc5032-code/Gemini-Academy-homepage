'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

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
          <div className="flex items-center justify-between h-14 md:h-20">
            {/* JA Korea Logo - Left */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logos/ja-korea.png"
                alt="JA Korea"
                width={200}
                height={70}
                className="h-8 md:h-[4.5rem] w-auto"
              />
            </Link>

            {/* Gemini Academy Logo - Center */}
            <Link href="/" className="flex items-center gap-1 md:gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/gemini-star-clean.png"
                alt=""
                className="h-4 w-4 md:h-7 md:w-7 animate-gemini-spin"
              />
              <span className="text-sm md:text-2xl font-semibold tracking-tight text-gray-800 whitespace-nowrap">
                Gemini Academy
              </span>
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
                <X size={20} className="text-gray-700" />
              ) : (
                <Menu size={20} className="text-gray-700" />
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
