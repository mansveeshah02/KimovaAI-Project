"use client";
import { FC } from "react";
import { ShieldCheck, SearchCheck } from "lucide-react";

const ComplianceStack: FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-100 via-gray-50 to-white relative overflow-hidden -mb-14">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 mb-6 tracking-wide leading-tight">
          How <span className="text-blue-600 font-semibold">TurboAudit</span>{" "}
          Complements Your Compliance Stack
        </h2>

        {/* Wave SVG */}
        <svg
          className="mx-auto mb-12 sm:mb-14"
          width="120"
          height="40"
          viewBox="0 0 120 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0 20 Q30 40 60 20 T120 20"
            stroke="#3B82F6"
            strokeWidth="3"
            fill="none"
          />
        </svg>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-center">
          {/* TurboAudit Card */}
          <div
            tabIndex={0}
            className="relative bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-[10px_10px_30px_rgba(59,130,246,0.2),-10px_-10px_30px_rgba(147,197,253,0.7)] p-6 sm:p-8 w-full max-w-md cursor-pointer transform transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-1 focus:scale-105 focus:rotate-1"
          >
            {/* Icon */}
            <div className="absolute -top-8 left-6 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-blue-400 via-blue-500 to-blue-600 shadow-lg flex items-center justify-center animate-pulse hover:animate-none">
              <div className="bg-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-blue-600 drop-shadow-lg">
                <SearchCheck size={28} />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-normal text-blue-700 mb-4 uppercase tracking-wide drop-shadow-sm mt-8">
              TurboAudit
            </h3>
            <h4 className="text-base sm:text-lg font-medium text-slate-800 mb-4">
              AI Analysis Engine
            </h4>
            <p className="text-gray-700 mb-6 text-sm sm:text-base">
              <span className="font-semibold text-gray-900">Focus:</span>{" "}
              <span className="italic text-blue-600">
                Deep Analysis for Readiness & Audit
              </span>
            </p>

            <ul className="space-y-4 text-left">
              {[
                "AI workbench for implementers & auditors needing deep insights.",
                "Automates analysis of uploaded policies, documents, and evidence.",
                "Identifies compliance gaps and assesses evidence against standards (ISO 27001, etc.).",
                "Enhances efficiency and depth for both audit readiness and execution.",
                "Categorizes audit findings based on severity.",
                "Complements GRC platforms by providing focused analytical power.",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-800 text-sm sm:text-base"
                >
                  <span className="inline-flex w-7 h-7 bg-blue-600 text-white rounded-full items-center justify-center drop-shadow-md text-sm flex-shrink-0 mt-1">
                    ✓
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="inline-block mt-6 font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300 group relative"
            >
              Learn More
              <span className="inline-block ml-2 transition-transform transform group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>

          {/* GRC Platforms Card */}
          <div
            tabIndex={0}
            className="relative bg-gradient-to-br from-white to-yellow-50 rounded-3xl shadow-[10px_10px_30px_rgba(202,138,4,0.15),-10px_-10px_30px_rgba(254,234,157,0.7)] p-6 sm:p-8 w-full max-w-md cursor-pointer transform transition-transform duration-500 ease-in-out hover:scale-105 hover:-rotate-1 focus:scale-105 focus:-rotate-1"
          >
            <div className="absolute -top-8 left-6 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-yellow-500 to-yellow-600 shadow-lg flex items-center justify-center animate-pulse hover:animate-none">
              <div className="bg-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-yellow-600 drop-shadow-lg">
                <ShieldCheck size={28} />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-normal text-yellow-700 mb-4 uppercase tracking-wide drop-shadow-sm mt-8">
              GRC Platforms
            </h3>
            <h4 className="text-base sm:text-lg font-medium text-slate-800 mb-4">
              Continuous Monitoring & Company-Wide Prep
            </h4>
            <p className="text-gray-700 mb-6 text-sm sm:text-base">
              <span className="font-semibold text-gray-900">Focus:</span>{" "}
              <span className="italic text-yellow-600">
                Continuous Monitoring & Company-Wide Prep
              </span>
            </p>

            <ul className="space-y-4 text-left">
              {[
                "Designed for ongoing compliance management.",
                "Automate evidence collection via integrations (Cloud/SaaS).",
                "Monitor technical controls against frameworks.",
                "Manage policy distribution & employee training.",
                "Streamline company readiness & compliance posture.",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-800 text-sm sm:text-base"
                >
                  <span className="inline-flex w-7 h-7 bg-yellow-500 text-white rounded-full items-center justify-center drop-shadow-md text-sm flex-shrink-0 mt-1">
                    ✓
                  </span>

                  {text}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="inline-block mt-6 font-medium text-yellow-600 hover:text-yellow-800 transition-colors duration-300 group relative"
            >
              Learn More
              <span className="inline-block ml-2 transition-transform transform group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceStack;
