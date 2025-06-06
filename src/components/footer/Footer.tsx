'use client';
import { FC } from 'react';
import {
  Linkedin,
  Twitter,
  Github,
  Mail,
} from 'lucide-react';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Logo or name */}
        <div className="mb-4 sm:mb-0 text-center sm:text-left">
          <h2 className="font-semibold text-lg text-gray-800">
            TurboAudit
          </h2>
          <p className="text-sm text-gray-500">
            Empowering ISMS compliance with AI
          </p>
        </div>

        {/* Social links */}
        <div className="flex space-x-4 mb-4 sm:mb-0">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-600 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black transition"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:support@turboaudit.com"
            className="text-gray-500 hover:text-red-500 transition"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400 text-center sm:text-right">
          © {new Date().getFullYear()} TurboAudit. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
