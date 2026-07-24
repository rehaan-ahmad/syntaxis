import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import Accordion from '../components/ui/Accordion';
import { SECTION_IDS } from '../lib/constants';

export function FAQ() {
  const faqItems = [
    {
      question: 'Who can participate?',
      answer: '[ANSWER PLACEHOLDER — to be filled by organizing team before launch. Generally open to active college students from recognized NCR universities and colleges.]'
    },
    {
      question: 'How do I register?',
      answer: '[ANSWER PLACEHOLDER — to be filled by organizing team before launch. Registrations are operated exclusively through the Pragma EMS link on the website.]'
    },
    {
      question: 'Is there a registration fee?',
      answer: '[ANSWER PLACEHOLDER — to be filled by organizing team before launch. Specific fee structures per event/track will be listed on the Pragma dashboard.]'
    },
    {
      question: 'Can outstation students participate?',
      answer: '[ANSWER PLACEHOLDER — to be filled by organizing team before launch. Details regarding outstation eligibility and accommodation availability will be published soon.]'
    },
    {
      question: 'What is the Genesis Track?',
      answer: '[ANSWER PLACEHOLDER — to be filled by organizing team before launch. It is a junior division track curated exclusively for school students of classes 9 to 12.]'
    },
    {
      question: 'How many events can one team enter?',
      answer: '[ANSWER PLACEHOLDER — to be filled by organizing team before launch. Limits on team event participations will follow the schedule constraints on the Pragma system.]'
    },
    {
      question: 'Where is RDEC located?',
      answer: '[ANSWER PLACEHOLDER — to be filled by organizing team before launch. R.D. Engineering College is located on NH-58, Delhi-Meerut Road, Ghaziabad, Uttar Pradesh.]'
    },
    {
      question: 'When will winners be announced?',
      answer: '[ANSWER PLACEHOLDER — to be filled by organizing team before launch. Winners will be announced during the Valedictory Ceremony on September 13, 2026.]'
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
