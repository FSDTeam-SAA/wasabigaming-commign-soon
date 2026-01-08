import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const FAQSection = () => {
  const faqs = [
    {
      question: 'What is the Aspiring Legal Network & Who can Join?',
      answer:
        'The Aspiring Legal Network (ALN) is a dedicated platform for aspiring solicitors and legal apprentices. It provides tools, resources, mock applications, interview preparation, and career guidance. Anyone pursuing a career in law — whether university students, graduates, or career changers — can join.',
    },
    {
      question: 'How can ALN help me prepare for applications?',
      answer:
        'ALN offers step-by-step guidance on crafting standout applications, including CV and cover letter reviews, application form templates, competency question banks, and real examples from successful candidates. You’ll get structured support to make your application strong and tailored.',
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
    <section className=" pb-20 px-4 bg-yellow-100">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Frequently asked Questions
        </h3>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-16">
          Have questions about building your CV or using Aspiring? Explore our frequently asked
          questions to find helpful answers, tips, and step-by-step guidance for creating a
          standout resume
        </p>

        {/* Shadcn Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-2xl shadow-md border-0 overflow-hidden"
            >
              <AccordionTrigger className="px-8 py-6 text-left text-lg font-medium text-gray-900 hover:no-underline hover:bg-gray-50">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 pt-2 text-gray-700 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FAQSection