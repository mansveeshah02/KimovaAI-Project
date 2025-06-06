'use client';
import { FC } from 'react';
import {
  Clock3,
  BadgeDollarSign,
  Scale,
  Workflow,
  BarChart4,
  Zap,
} from 'lucide-react';

const features = [
  {
    title: 'Drastically Reduce Compliance Time',
    description:
      'Automate document analysis, gap identification, and reporting to cut compliance cycles dramatically.',
    icon: <Clock3 size={28} />,
  },
  {
    title: 'Lower Compliance & Audit Costs',
    description:
      'Minimize manual labor and resource strain for both implementation and auditing activities.',
    icon: <BadgeDollarSign size={28} />,
  },
  {
    title: 'Unbiased and Quality Compliance',
    description:
      'Leverage AI for deeper analysis of policies and evidence against standards, improving readiness and audit quality.',
    icon: <Scale size={28} />,
  },
  {
    title: 'Streamline Compliance Workflows',
    description:
      'Simplify the entire process, from policy analysis and gap assessment to audit execution and reporting.',
    icon: <Workflow size={28} />,
  },
  {
    title: 'Focus on Strategic Insights',
    description:
      'Free up teams from repetitive tasks to focus on strategic gap closure, risk management, and critical thinking.',
    icon: <BarChart4 size={28} />,
  },
  {
    title: 'Accelerate Audit Readiness',
    description:
      'Quickly identify compliance gaps, get policy improvement insights, and prepare documentation efficiently for audits.',
    icon: <Zap size={28} />,
  },
];

const Auditing: FC = () => {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-10 bg-gradient-to-r from-[#ecf0f1] to-[#ffffff]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 text-gray-800 leading-snug">
          Unlock Intelligent ISMS Compliance & Auditing
        </h2>

        <div className="flex flex-col gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-md transition-all duration-300 hover:shadow-lg"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-4 sm:left-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs sm:text-sm font-semibold shadow">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </div>

              {/* Icon */}
              <div className="mb-4 sm:mb-6 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-lg sm:text-xl mx-auto">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold text-center text-gray-800 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Auditing;
