import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

interface FAQSectionProps {
  faqList: { question: string; answer: string }[];
}

const FAQAccordion: React.FC<FAQSectionProps> = ({ faqList }) => {
  return (
    <div className="flex justify-center items-center pt-16 gap-16 px-4 sm:px-16 text-black">
      <Accordion variant="splitted">
        {faqList.map((faq, index) => (
          <AccordionItem
            key={index}
            aria-label={`Accordion ${index + 1}`}
            title={faq.question}
            className="border-2 border-[#228B22]"
          >
            {faq.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
