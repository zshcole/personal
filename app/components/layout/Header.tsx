// src/components/layout/Header.tsx
'use client'
import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="bg-orange-600 text-white py-2">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-serif font-bold text-xl">
            colburn.omareo
          </Link>
          <nav>
            <ul className="flex space-x-4 font-mono text-sm">
            <li>
            <Link
                href="/"
                onClick={() => setCurrentPage('home')}
                className={currentPage === 'home' ? 'underline' : 'hover:underline'}
            >
                home
            </Link>
            </li>
              <li>
                <Link href="/about" className="hover:underline">
                  about
                </Link>
              </li>
              <li>
                <Link href="/posts" className="hover:underline">
                  posts
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:underline">
                  projects
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;