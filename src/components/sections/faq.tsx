"use client"

import { useState } from "react";

const faqQuestions = [
  {
    question: `How do I register for the hackathon?`,
    answer: `We’ll have a registration form available on this website.`,
  },
  {
    question: `What are the eligibility criteria for participants?`,
    answer: `Participants should be students (Undergraduates or Postgraduates) that are 18+.`,
  },
  {
    question: `When and where will the hackathon take place?`,
    answer: `The hackathon is set to take place on 13 and 14 April 2024, at Engineering Building A.`,
  },
  {
    question: `What is the format of the hackathon (online/offline, duration, etc.)?`,
    answer: `The hackathon will be held in-person and will last for 48 hours (Saturday and Sunday). However, the actual hacking time will be 24 hours.`,
  },
  {
    question: `What are the rules and guidelines for the competition?`,
    answer: `There will be a couple of challenges available and each challenge has its own set of rules, judging criteria, and expected outcome/delivery. These will be highlighted by the challenge provider (a sponsor, the organizing team, etc.)`,
  },
  {
    question: `How are teams formed, and can I participate as an individual?`,
    answer: `We encourage all participants to have a team (4 members max) set before attending the hackathon. However, if you are registering as an individual, you’ll have the opportunity to join a team during the event.`,
  },
  {
    question: `What are the prizes and awards for winners?`,
    answer: `There will be multiple prizes set for winners for all technical and non technical challenges. The prize list will be confirmed at a sooner date.`,
  },
  {
    question: `What resources or tools can I use during the hackathon?`,
    answer: `You are allowed to research in order to complete the challenge while being mindful of plagiarism and proper usage of information and crediting sources. In addition, you might have the opportunity to explore and learn about new softwares/tools provided by our sponsors. We encourage all participants to be curious and take this opportunity to learn and grow!`,
  },
  {
    question: `Is there a code of conduct or behavior expected from participants?`,
    answer: `Once you fill out the registration form, you will be expected to agree to our Code of Conduct in order to participate. You’ll be able to read it before agreeing to it.`,
  },
  {
    question: `How can I contact the organizers for inquiries or support during the event?`,
    answer: `If you have any inquiries you can email us via hackathons@unicsmcr.com or message us on instagram @unics_hackathons.`,
  },
  {
    question: `Is there a deadline for project submissions?`,
    answer: `Once the hacking time starts, participants will be expected to submit their project within 24 hours.`,
  },
  {
    question: `What happens if I encounter technical issues during the hackathon?`,
    answer: `We will have technical support on site. Should you face any technical issues please inform an organizing member and they will be able to help.`,
  },
  {
    question: `Will food and accommodations be provided for onsite participants (if applicable)?`,
    answer: `We will be providing main meals and snacks during the event. However, we will not be providing accommodation, though people are welcome to stay at the venue for the duration of the event.`,
  },
  {
    question: `Can I participate in multiple hackathon challenges?`,
    answer: `Generally, yes. However, this might not be the case if a challenge provider does not allow it. In addition, we would advise you to take into consideration the time and resources available, complexity of the task, and your ability to complete multiple challenges by the set timeframe.`,
  },
  {
    question: `How can I stay updated with important announcements and notifications during the hackathon?`,
    answer: `We are active on instagram (@greatunihack_) and we post all announcements on there. Upon acceptance, participants will be added to the GreatUniHack2023 discord server at a closer date as it will be the main form of communication.`,
  },
  {
    question: `What happens if I need to drop out of the hackathon after registering?`,
    answer: `If you would like to drop out, please make sure to email us as soon as possible (hackathons@unicsmcr.com), and we’ll accept people from the waitlist. We’d also like to note that for those who do not RSVP, within the given timeframe their acceptance will be automatically revoked.`,
  },
  {
    question: `Can I change my team members after registering?`,
    answer: `If you’re considering changing your team, please email us(hackathons@unicsmcr.com) first and we’ll proceed from there.`,
  },
  {
    question: `Are there any opportunities for networking or mentorship during the hackathon?`,
    answer: `Yes! Our sponsors would have their own booths and you will be able to meet representatives from our sponsoring companies and ask any questions you have! Keep an eye out on our instagram as we will announce our sponsors there!`,
  },
  {
    question: `How will I receive feedback on my project?`,
    answer: `There will be a judging panel who will be marking your project and giving feedback.`,
  },
  {
    question: `What if I get stuck on a challenge?`,
    answer: `We will have mentors who will offer support and guidance when needed. So feel free to ask them for any help!`,
  },
];

export default function FAQ() {
  const [selectedId, setSelectedId] = useState(-1);

  return (
    <section className="mt-48 w-full">
      <div className="flex flex-wrap w-full text-white">
        <div className={`${(selectedId >= 0) ? 'lg:w-5/12' : ''}
          w-full max-h-[32rem] overflow-auto scrollbar-hide
          bg-black/30 py-8`}>
         <h3 className="text-xl px-8 pb-4">Frequently Asked Questions</h3>
         {faqQuestions.map((faq, i) => {
           return (
             <div key={`faq-q-${i}`}
               className={`cursor-pointer hover:bg-accent/20 px-8 py-2
               flex justify-between items-center
               ${(selectedId === i) ? 'bg-accent/30' : ''}`}
               onClick={() => {
                 setSelectedId(i === selectedId ? -1 : i);
               }}>
              <h3 className="text-lg">{faq.question}</h3>
              <h3 className="text-lg">&#8250;</h3>
            </div>
           );
         })}
        </div>
        <div className={`${(selectedId >= 0) ? 'lg:w-7/12' : 'hidden'} w-full bg-primary p-8`}>
          <p>
            {selectedId >= 0 ? faqQuestions[selectedId].answer : ""}
          </p>
        </div>
      </div>
    </section>
  );
};
