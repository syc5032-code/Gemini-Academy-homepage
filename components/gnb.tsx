'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function GNB() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: '홈', href: '#' },
    { label: '아카데미', href: '#academy' },
    { label: '프로그램', href: '#programs' },
    { label: '고객지원', href: '#support' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo - Simple Text Style */}
          <Link href="/" className="flex items-center space-x-1">
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-gray-900 leading-none">Gemini Academy</p>
              <p className="text-xs text-gray-500">JA Korea</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
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
    </nav>
  );
}
