"use client";

import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const faqQuestions = [
  {
    question: `Can I take part in the hackathon?`,
    answer: `If you are 18+ and an Undergraduate or Postgraduate at the University of Manchester, then absolutely! We encourage all levels of ability to have a go :)`,
  },
  {
    question: `How do I take part in the hackathon?`,
    answer: `Just fill out the application form **[HERE](https://apply.mcrstudenthack.com/)** and we'll get back to you over Easter.`,
  },
  {
    question: `When and where will the hackathon take place?`,
    answer: `The hackathon will take place on the 13th and 14th April weekend, running overnight. We'll be in person, in UoM Engineering Building A (MECD).`,
  },
  {
    question: `What do I actually do?`,
    answer: `Plan an awesome project with your team, and just make it! The theme for all projects will be the cosmos, and there will be challenges available from our sponsors and each challenge has its own set of rules, judging criteria, and prizes.`,
  },
  {
    question: `How are teams formed, and can I participate as an individual?`,
    answer: `We encourage all participants to have a team (4 members max). If you are registering as an individual, you’ll have the opportunity to join a team during the event. Hackathons are about meeting new people too!`,
  },
  {
    question: `What are the prizes and awards for winners?`,
    answer: `Our prize pool will be approximately valued at £2000 for all projects which suit our theme. The challenges from our sponsors will each have their own prizes too, so there are plenty of opportunities to win something! We also give out freebies like merch during the event to everyone who comes.`,
  },
  {
    question: `What resources or tools can I use during the hackathon?`,
    answer: `You are allowed to use any online resources you find, provided you abide by their licenses: properly crediting sources, not plagiarising, etc. You'll also have the opportunity to explore new software/tools provided by our sponsors. We encourage all participants to be curious and take this opportunity to learn and grow! `,
  },
  {
    question: `Won't I get hungry?!`,
    answer: `We got your back - we'll provide everyone with lunch, dinner, a midnight snack and brunch (covering all dietary requirements), as well as infinite* snacks and drinks throughout the duration. A full menu will be available before the hackathon.

_*not actually infinite snacks. just a lot._`,
  },
  {
    question: `Is accommodation / travel reimbursements provided?`,
    answer: `Unfortunately due to a very limited budget, we will not be providing accommodation or travel reimbursements, though people are welcome to stay at the venue for the entire duration of the event or go home if reasonable.`,
  },
  {
    question: `What happens if I need to drop out of the hackathon after registering?`,
    answer: `If you would like to drop out, please make sure to email us as soon as possible (hackathons@unicsmcr.com), and we’ll accept people from the waitlist. We’d also like to note that those who do not RSVP to our acceptance email will also be waitlisted.`,
  },
  {
    question: `Are there any opportunities for networking or mentorship during the hackathon?`,
    answer: `Yes! Our sponsors would have their own booths and you will be able to meet representatives from our sponsoring companies and ask any questions you have! Keep an eye out on our Instagram as we will announce our sponsors there!`,
  },
];

export default function FAQ() {
  const [selectedId, setSelectedId] = useState(-1);

  useEffect(() => {
    setTimeout(() => {
      const answerDiv = document.getElementById("faq-answer");
      if (answerDiv !== null && selectedId >= 0) {
        if (answerDiv.getBoundingClientRect().bottom > window.innerHeight)
          answerDiv.scrollIntoView(false);
      }
    }, 500);
  }, [selectedId]);

  return (
    <section id="faq" className="pt-24 mb-24 w-full z-10">
      <div className="flex flex-wrap w-full text-white rounded-lg overflow-hidden">
        <div
          className={`${selectedId >= 0 ? "lg:w-6/12" : ""}
          w-full max-h-[40rem] overflow-auto scrollbar-hide backdrop-blur-sm
          pt-8 transition-all`}
        >
          <h3 className="text-4xl text-center font-medium px-8 pb-4">
            Frequently Asked Questions
          </h3>
          {faqQuestions.map((faq, i) => {
            return (
              <div
                key={`faq-q-${i}`}
                className={`cursor-pointer hover:bg-accent/20 px-8 py-2
               flex justify-between items-center
               ${selectedId === i ? "bg-accent/30" : ""}`}
                onClick={() => {
                  setSelectedId(i === selectedId ? -1 : i);
                }}
              >
                <h3 className="text-lg">
                  {i + 1}. {faq.question}
                </h3>
                <h3 className="text-xl">&#8250;</h3>
              </div>
            );
          })}
        </div>
        <div
          id="faq-answer"
          className={`${
            selectedId >= 0
              ? "w-full opacity-100 lg:w-6/12"
              : "w-0 opacity-0 hidden"
          }
          bg-transparent backdrop-blur p-8 transition-all`}
        >
          <h3 className="text-2xl font-bold pb-4">Answer</h3>
          <div className="whitespace-pre-wrap text-lg">
            <Markdown remarkPlugins={[remarkGfm]}>
              {selectedId >= 0 ? faqQuestions[selectedId].answer : ""}
            </Markdown>
          </div>
        </div>
      </div>
    </section>
  );
}
