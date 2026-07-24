import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import Accordion from '../components/ui/Accordion';
import { SECTION_IDS } from '../lib/constants';

export function FAQ() {
  const faqItems = [
    {
      question: 'Who Can Participate?',
      answer: "Any college student in technical fields. It isn't specific to just CSE/IT, ECE, if mechanical branch students want to join us, they're most welcome. Moreover, schools students from classes 9th to 12th are also encouraged to participate."
    },
    {
      question: 'How to Register?',
      answer: "Users can register via our exclusive EMS, Pragma, which will be revealed on 5th August, 2026. Students can participate in Solo, Duo or Groups team sizes."
    },
    {
      question: 'Is There Registration Fee?',
      answer: 'Yes. Confirmed final registration fees will be listed on Pragma.'
    },
    {
      question: 'Can Outstation Participants Participate?',
      answer: 'Yes, outstation participants participate provided they take care of their own travel and accomodation. RDEC will not be liable for any kind of harm done to them during travels.'
    },
    {
      question: 'What is Genesis Track?',
      answer: 'Genesis Track is an exclusive Junior level track designed for school students of classes 9th to 12th. It is designed primarily to encourage students to gain interest in STEM fields.'
    },
    {
      question: 'How many events a single team participate in?',
      answer: "Teams can participate in as many events as they want, provided the events they participate aren't running parallely, and the event's times don't overlap."
    },
    {
      question: 'Where is RDEC Located?',
      answer: 'RDEC is located in Duhai, Ghaziabad.'
    },
    {
      question: 'When Winners will be announced?',
      answer: "Winners will be announced on Day 3, which will mark the closing of SYNTAXIS 2026. Digital prizes will be sent to the participants/winners within 14 days of the fest's ending."
    }
  ];

  const fadeUpVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const }
    }
  };

  return (
    <section 
      id={SECTION_IDS.faq} 
      className="max-w-4xl mx-auto px-6 py-20 sm:py-32 relative z-10 bg-[var(--color-bg)]"
    >
      {/* Section Heading */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariants}
      >
        <SectionHeading title="FREQUENTLY ASKED" subtitle="HAVE QUESTIONS?" />
      </motion.div>

      {/* Accordion container */}
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariants}
        className="bg-[var(--color-bg-glass)] border border-[var(--color-border)] p-6 sm:p-8 rounded-[var(--radius-lg)] shadow-2xl backdrop-blur-sm mt-4"
      >
        <Accordion items={faqItems} />
      </motion.div>
      
    </section>
  );
}

export default FAQ;
