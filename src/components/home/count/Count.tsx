"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface StatProps {
  label: string;
  target: number;
}

const Stat: React.FC<StatProps> = ({ label, target }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);

  const animateCount = useCallback(() => {
    let start = 0;
    const duration = 2000;
    const intervalTime = 20;
    const increment = target / (duration / intervalTime);

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, intervalTime);
  }, [target]);

  useEffect(() => {
    const currentRef = statRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animateCount, hasAnimated]);

  return (
    <div
      ref={statRef}
      className="bg-[#1e1e1e] shadow-lg rounded-2xl p-10 w-full text-center md:-mb-20 -mb-20"
    >
      <div className="text-5xl font-extrabold bg-gradient-to-r from-[#3498db] to-[#dea549] text-transparent bg-clip-text">
        {count}+
      </div>
      <div className="text-lg font-semibold text-white mt-3">{label}</div>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    { label: "Projects", target: 120 },
    { label: "Clients", target: 85 },
    { label: "Employees", target: 45 },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <Stat key={stat.label} label={stat.label} target={stat.target} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;