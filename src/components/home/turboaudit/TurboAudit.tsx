'use client';
import { FC } from 'react';

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Upload ISMS Documents',
    description:
      'Auditors securely upload all relevant ISMS documents (policies, procedures, evidence) based on our provided guidance list.',
  },
  {
    number: '02',
    title: 'AI Analysis',
    description:
      'TurboAudit processes the documents, analyzes evidence against ISMS standards, identifies findings, and provides actionable insights.',
  },
  {
    number: '03',
    title: 'Generate Reports',
    description:
      'Auditors review AI-generated insights, manage the findings lifecycle, and utilize automated reporting features for efficient documentation.',
  },
  {
    number: '04',
    title: 'Consult AI Agents',
    description:
      'Use integrated Ask ISMS/AIMS agents for instant clarification during the implementation phases.',
  },
];

const TurboAuditWorkflow: FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-12">
          The Auditor&apos;s End-to-End Workflow with{' '}
          <span className="text-orange-500">TurboAudit</span>
        </h2>

        <div className="grid gap-10 sm:grid-cols-2">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.03]"
            >
              <div className="absolute -top-5 left-6 sm:left-8 w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                {step.number}
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-orange-600 mb-3 mt-3 sm:mt-0">
                {step.title}
              </h3>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                {step.description}
              </p>

              <a
                href="#"
                className="inline-flex items-center text-orange-500 font-medium text-sm sm:text-base hover:underline"
              >
                Learn More →
              </a>

              {idx < steps.length - 1 && (
                <div
                  className={`hidden sm:block absolute top-1/2 right-0 h-px bg-gradient-to-r from-orange-400 to-yellow-500
                    ${idx % 2 === 0 ? 'w-12 translate-x-full' : 'w-10 -translate-x-full'}`}
                  style={{ transformOrigin: 'center' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TurboAuditWorkflow;
