'use client';

import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
       <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <Image
            src="/assets/logo.png" // Replace with your logo path
            alt="Kimova Logo"
            width={400}
            height={400}
            className="opacity-20 select-none"
            style={{ userSelect: 'none' }}
          />
        </div>
      <section className="relative w-full py-20 px-6 text-center ">
        {/* Logo as background with low opacity */}
       

        <div className="relative max-w-4xl mx-auto z-10">
          <h1 className="text-6xl font-extrabold mb-4 tracking-tight">
            Ki
            <span className="text-blue-700">m</span>
            <span className="text-green-600">o</span>
            <span className="text-orange-600">v</span>
            <span className="text-purple-700">a</span>
          </h1>
          <h2 className="inline-block text-xl font-semibold bg-black text-yellow-300 px-5 py-2 rounded-full shadow-lg tracking-widest uppercase mb-8">
            Automating Auditing
          </h2>
          <p className="max-w-3xl mx-auto text-gray-800 text-lg leading-relaxed">
            At Kimova AI, we pride ourselves on innovation and excellence. As a leading provider of cutting-edge
            solutions in the realm of cybersecurity and compliance, we're excited to introduce{' '}
            <strong className="text-blue-700">TurboAudit</strong>, the first ever AI auditing tool brought to you by Kimova AI.
          </p>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-blue-700">Our Vision</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            At Kimova, our vision is to revolutionize the audit landscape by leveraging cutting-edge technology, artificial
            intelligence, and deep industry expertise to transform the way ISO audits are conducted.
          </p>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            We envision a future where auditing is not just a mandatory task but a strategic opportunity for growth and
            success. Our goal is to simplify audit processes, enhance quality, and drive meaningful impact for businesses,
            auditors, and stakeholders worldwide.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We are committed to setting new standards of excellence in the audit industry, empowering organizations to
            streamline operations, ensure compliance, and foster transparency. With our innovative solutions, we aim to
            reshape the future of auditing and create a world where audits are efficient, effective, and empowering.
          </p>
        </div>
      </section>
    </main>
  );
}
