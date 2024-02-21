"use client"

import { useState } from "react";

const faqQuestions = [
  {
    question: `FAQ Question 1`,
    answer: `Answer for Question 1`,
  },
  {
    question: `FAQ Question 2`,
    answer: `Answer for Question 2`,
  },
  {
    question: `FAQ Question 3`,
    answer: `Answer for Question 3`,
  },
  {
    question: `FAQ Question 4`,
    answer: `Answer for Question 4`,
  },
];

export default function FAQ() {
  const [selectedId, setSelectedId] = useState(0);

  return (
    <section className="mt-48 w-full">
      <div className="flex w-full text-white">
        <div className="w-5/12 bg-black/50 py-8">
         <h3 className="text-xl px-8 pb-4">Frequently Asked Questions</h3>
         {faqQuestions.map((faq, i) => {
           return (
             <div key={`faq-q-${i}`}
               className={`cursor-pointer hover:bg-black/20 px-8 ${(selectedId === i) ? 'bg-black/50' : ''}`}
               onClick={() => {setSelectedId(i);}}>
              <h3 className="text-lg">{faq.question}</h3>
            </div>
           );
         })}
        </div>
        <div className="w-7/12 bg-black/20 p-8">
          <p>
            {faqQuestions[selectedId].answer}
          </p>
        </div>
      </div>
    </section>
  );
};
