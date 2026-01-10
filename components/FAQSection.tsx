import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

// FAQ Component
export const FAQSection = () => {
  const faqs = [
    {
      question: 'What is the Aspiring Legal Network & Who can Join?',
      answer:
        'The Aspiring Legal Network is open to anyone interested in a career in law. Whether you are exploring solicitor apprenticeships, applying for training contracts, or just getting started, ALN is here to guide and support you.',
    },
    {
      question: 'How can ALN help me prepare for applications?',
      answer:
        "ALN offers step-by-step guidance on crafting standout applications, including CV and cover letter reviews, application form templates, competency question banks, and real examples from successful candidates. You'll get structured support to make your application strong and tailored.",
    },
    {
      question: 'What are the main routes into a legal career?',
      answer:
        'The main routes are: 1) The traditional university route (Law or non-law degree + SQE), 2) The solicitor apprenticeship (work-based learning with no degree required), and 3) The new SQE route for graduates. ALN covers guidance for all pathways.',
    },
    {
      question: 'What skills do law firms look for in candidates?',
      answer:
        'Top firms seek commercial awareness, attention to detail, teamwork, communication, resilience, analytical thinking, and initiative. ALN helps you develop and demonstrate these skills through practical exercises and real-world insights.',
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-[1175px] mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          style={{ fontFamily: "'Neuton', serif" }}
        >
          Got questions?
        </h2>
        <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto mb-12">
          Find answers to common questions about Aspiring Legal Network and how
          it can support you at every stage of your journey.
        </p>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg border-2 overflow-hidden"
              style={{ borderColor: '#FFFF00' }}
            >
              <AccordionTrigger className="px-6 py-5 text-left text-base md:text-lg font-semibold text-gray-900 hover:no-underline hover:bg-gray-50 flex items-center justify-between gap-4">
                <span className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="text-left">{faq.question}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 pt-2 text-[#616161] text-left font-semibold leading-relaxed text-sm md:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
