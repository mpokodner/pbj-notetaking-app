"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Is NoteFlow free to use?",
    answer:
      "Yes! NoteFlow offers a generous free tier that includes unlimited notes, basic organization features, and cross-device sync. You can upgrade to our Pro plan for advanced features like AI organization, team collaboration, and priority support.",
  },
  {
    question: "Can I access my notes offline?",
    answer:
      "Absolutely! NoteFlow works offline and automatically syncs your notes when you're back online. All your data is stored locally on your device, so you can access your notes anytime, anywhere.",
  },
  {
    question: "How secure is my data?",
    answer:
      "Your privacy and security are our top priorities. We use end-to-end encryption to protect your notes, and we never have access to your content. Your data is stored securely and backed up automatically.",
  },
  {
    question: "Can I collaborate with others on notes?",
    answer:
      "Yes! With NoteFlow Pro, you can share notes with team members, collaborate in real-time, and leave comments. Perfect for team projects, meeting notes, and shared knowledge bases.",
  },
  {
    question: "What platforms does NoteFlow support?",
    answer:
      "NoteFlow is available on all major platforms: Web, iOS, Android, macOS, and Windows. Your notes sync seamlessly across all your devices, so you can pick up where you left off anywhere.",
  },
  {
    question: "How do I import my existing notes?",
    answer:
      "We make it easy to import your notes from other apps. We support importing from Evernote, OneNote, Google Keep, and plain text files. Our import tool preserves your organization and formatting.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about NoteFlow
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
              Contact Support
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
