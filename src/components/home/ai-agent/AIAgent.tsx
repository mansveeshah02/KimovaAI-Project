'use client';
import { FC } from 'react';
import { FileText, Brain } from 'lucide-react';

const AIHelpSection: FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
          Integrated AI Agents: Ask ISMS &amp; Ask AIMS
        </h2>
        <p className="italic text-sm text-gray-500 mb-10">
          Instant Expertise within the Auditor&apos;s Workflow
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Ask ISMS */}
          <div className="border rounded-xl shadow-sm p-6 flex gap-4 items-start hover:shadow-md transition">
            <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full">
              <FileText size={24} />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-md text-slate-800 mb-1">
                Ask ISMS <span className="text-xs text-gray-500">(for ISO 27001)</span>
              </h3>
              <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                Auditors get instant, AI-powered answers on ISO 27001 controls, implementation, and interpretation directly within TurboAudit.
              </p>
              <a href="#" className="text-sm text-indigo-600 font-medium hover:underline">
                Explore Ask ISMS →
              </a>
            </div>
          </div>

          {/* Ask AIMS */}
          <div className="border rounded-xl shadow-sm p-6 flex gap-4 items-start hover:shadow-md transition">
            <div className="bg-orange-100 text-orange-600 p-3 rounded-full">
              <Brain size={24} />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-md text-slate-800 mb-1">
                Ask AIMS <span className="text-xs text-gray-500">(for ISO 42001)</span>
              </h3>
              <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                Auditors navigate AI governance complexities with AI-driven guidance on ISO 42001, risk, and ethics, integrated into TurboAudit.
              </p>
              <a href="#" className="text-sm text-orange-600 font-medium hover:underline">
                Explore Ask AIMS →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHelpSection;