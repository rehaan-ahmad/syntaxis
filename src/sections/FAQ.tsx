import SectionHeading from '../components/ui/SectionHeading';
import Accordion from '../components/ui/Accordion';
import Reveal from '../components/ui/Reveal';
import { SECTION_IDS } from '../lib/constants';

export function FAQ() {
  const faqItems = [
    {
      question: 'Who Can Participate?',
      answer: "Any college student in technical fields. It isn't specific to just CSE/IT or ECE — if mechanical or civil engineering students want to join us, they're most welcome! Moreover, school students from classes 9th to 12th are encouraged to participate in the Genesis Track."
    },
    {
      question: 'What is the Device Policy for Tech Events?',
      answer: "All technical events strictly follow a Bring Your Own Device (BYOD) policy. Participants must bring their own laptops, chargers, and development tools. High-speed Wi-Fi, power charging points, and extension boards will be provided by the management."
    },
    {
      question: 'Are Meals Provided During Lunch Breaks?',
      answer: "Meals are not provided by the management during lunch breaks. However, a wide variety of food, snacks, and beverages are available for purchase from authorized campus vendors and food stalls available throughout all 3 days."
    },
    {
      question: 'How to Register?',
      answer: "Participants can register via our official EMS platform, Pragma. Students can participate in Solo, Duo, or Group team formats depending on the event package."
    },
    {
      question: 'Is There a Registration Fee?',
      answer: 'Yes. Confirmed final registration fees and category passes will be listed on Pragma.'
    },
    {
      question: 'Can Outstation Participants Join?',
      answer: 'Yes, outstation participants are welcome to participate provided they arrange their own travel and accommodation.'
    },
    {
      question: 'What is the Genesis Track?',
      answer: 'Genesis Track is an exclusive junior division designed for school students of classes 9th to 12th, featuring Eureka Pitch (Round 1 & Finals) and Pythia Expo.'
    },
    {
      question: 'How Many Events Can a Team Participate In?',
      answer: "Teams can participate in multiple event packages, provided event schedules do not overlap."
    },
    {
      question: 'Where is RDEC Located?',
      answer: 'R.D. Engineering College (RDEC) is located in Duhai, Ghaziabad, NCR.'
    },
    {
      question: 'When Will Winners Be Announced?',
      answer: "Winners will be announced on Day 3 during the Apotheosis Valediction Ceremony. Digital certificates and cash prizes will be dispatched within 14 days of the fest."
    }
  ];

  return (
    <section 
      id={SECTION_IDS.faq} 
      className="max-w-4xl mx-auto px-6 py-20 sm:py-32 relative z-10 bg-[var(--color-bg)]"
    >
      {/* Section Heading */}
      <Reveal>
        <SectionHeading title="FREQUENTLY ASKED" subtitle="HAVE QUESTIONS?" />
      </Reveal>

      {/* Accordion container */}
      <Reveal className="bg-[var(--color-bg-glass)] border border-[var(--color-border)] p-6 sm:p-8 rounded-[var(--radius-lg)] shadow-2xl backdrop-blur-sm mt-4">
        <Accordion items={faqItems} />
      </Reveal>
      
    </section>
  );
}

export default FAQ;
