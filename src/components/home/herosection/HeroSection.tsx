import React from "react";
import Image from "next/image";

export default function TurboAuditSection() {
  return (
    <section
      className="relative text-white hover:text-black py-20 mt-32 px-6 text-center shadow-lg rounded-xl mx-4 sm:mx-16 my-10 overflow-hidden group
      pt-[100px]"
    >
      <div className="absolute inset-0 -z-50 transition-transform duration-1000 scale-150 md:scale-100 md:group-hover:scale-150">
        <Image
          src="/assets/Tallinn_map_Estonia.jpg"
          alt="Map of Europe (Tallinn)"
          fill
          className="object-cover brightness-[0.35] group-hover:brightness-[0.6] transition-all duration-1000"
        />
      </div>

      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight ">
          TurboAudit by Kimova AI
        </h1>
        <h2 className="text-lg sm:text-xl ">
          AI for Smarter ISMS Compliance & Audits
        </h2>
        <p className="text-sm sm:text-md sm:text-lg leading-relaxed text-white/90 px-2 sm:px-0">
          Empower your ISMS compliance (ISO 27001) with AI. TurboAudit automates{" "}
          <strong className="text-white">end-to-end auditor workflows</strong>,
          analyzes uploaded documents with unparalleled depth to identify gaps,
          and delivers actionable insights, transforming audits from a burden
          into a strategic advantage.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 px-4 sm:px-0">
          <button className="bg-white text-[#d0840a] font-bold px-6 py-3 rounded-md hover:bg-yellow-100 transition">
            Schedule Your Demo
          </button>
          <button className="bg-white text-indigo-600 font-bold px-6 py-3 rounded-md hover:bg-indigo-100 transition">
            Try AI Agents Free
          </button>
        </div>
      </div>
    </section>
  );
}
