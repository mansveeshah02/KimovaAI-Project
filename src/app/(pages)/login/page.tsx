'use client';

import { useRouter } from 'next/navigation';
import { FaCloudUploadAlt, FaCogs, FaDownload } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import React from 'react';

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12">
      <div className="flex w-full max-w-5xl rounded-2xl shadow-lg overflow-hidden flex-col md:flex-row">

        {/* Left Panel with Gradient Background */}
        <div className="w-full md:w-1/2 p-12 
          bg-gradient-to-br from-[#3498db]/20 to-[#f39c12]/20 
          text-gray-900"
        >
          <h1 className="text-3xl font-semibold mb-8 text-[#3498db]">
            Welcome to <span className="font-bold text-[#f39c12]">TurboAudit</span>
          </h1>

          <div className="space-y-8">
            {[
              {
                icon: <FaCloudUploadAlt className="text-[#3498db] text-2xl" />,
                title: 'Upload documents',
                desc: 'Say goodbye to paperwork. Just upload your current info security policies and procedures.',
              },
              {
                icon: <FaCogs className="text-[#3498db] text-2xl" />,
                title: 'Process documents',
                desc: 'TurboAudit AI maps your documents to ISO/IEC 27001:2022 for fast compliance.',
              },
              {
                icon: <FaDownload className="text-[#3498db] text-2xl" />,
                title: 'Download report',
                desc: 'Get a clear compliance roadmap with your tailored gap assessment report.',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="p-3 bg-[#f39c12]/30 rounded-md">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-black">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-1/2 p-12 bg-white flex items-center justify-center">
          <div className="w-full max-w-sm">
            <h2 className="text-xl font-semibold text-center mb-6 text-[#3498db]">
              Login to <span className="font-bold text-[#f39c12]">TurboAudit</span>
            </h2>

            <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded-md mb-4 hover:bg-gray-100 transition">
              <FcGoogle className="text-xl" /> Sign in with Google
            </button>

            <div className="text-center text-sm text-gray-400 mb-4">OR</div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db]"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498db]"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#3498db] to-[#f39c12] text-white py-2.5 rounded-md hover:from-[#2980b9] hover:to-[#d35400] transition font-medium"
              >
                Login
              </button>
            </form>

            <div className="flex justify-between text-xs text-gray-600 mt-4">
              <a href="#" className="hover:underline">Don’t have an account? Sign Up</a>
              <a href="#" className="hover:underline">Forgot Password?</a>
            </div>

            <p className="text-center text-xs text-gray-400 mt-6">
              © <a href="https://kimova.ai" className="underline">Kimova.AI</a> 2025.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
