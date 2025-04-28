// src/components/layout/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 py-4 border-t border-gray-300">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-xs text-gray-600 font-mono">© {new Date().getFullYear()} colburn sanders</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="https://github.com/zshcole" className="text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
              <Github size={16} />
            </Link>
            <Link href="https://twitter.com/colburncodesx" className="text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
              <Twitter size={16} />
            </Link>
            <Link href="https://linkedin.com/in/colburn-sanders" className="text-gray-600 hover:text-gray-900" target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} />
            </Link>
            <Link href="mailto:hello@whocolburn.com" className="text-gray-600 hover:text-gray-900">
              <Mail size={16} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;