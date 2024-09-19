"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const FrequentlyAskedQuestions: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const questions: FAQItem[] = [
    {
      question: "What is Angel Investing?",
      answer:
        "Angel investing involves providing capital for startups and early-stage companies in exchange for ownership equity or convertible debt.",
    },
    {
      question: "How do I start with Angel Investing?",
      answer:
        "Start by researching startups, understanding their business model, and evaluating their potential. You can also consider joining angel investing networks or groups.",
    },
    {
      question: "What are the risks associated with Angel Investing?",
      answer:
        "Angel investing carries significant risks, including the potential for losing your entire investment. Startups have a high failure rate, so it's important to diversify your investments.",
    },
    {
      question: "How do I evaluate a startup?",
      answer:
        "Evaluate a startup based on its business model, market potential, team, and financials. Due diligence is crucial before making an investment decision.",
    },
  ];

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="p-4 md:p-8 mt-12">
      <h2 className="text-2xl font-medium mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="border-t border-[#001D2142]">
            <button
              className="w-full text-left p-4 bg-gray-200 flex items-center justify-between font-normal focus:outline-none"
              onClick={() => toggleAnswer(index)}
            >
              <span>{item.question}</span>
              <span>
                {activeIndex === index ? (
                  <FaChevronUp className="inline-block" />
                ) : (
                  <FaChevronDown className="inline-block" />
                )}
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-gray-50">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
