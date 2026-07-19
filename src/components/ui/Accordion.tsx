import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

export interface AccordionItemProps {
  id: string | number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className={clsx(
      "border-b border-[var(--color-border)] last:border-b-0 py-4 transition-all duration-200",
      isOpen && "border-l-4 border-l-[var(--color-brand)] pl-3"
    )}>
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left py-2 font-semibold text-[var(--color-text-pri)] hover:text-[var(--color-brand)] transition-colors select-none cursor-pointer outline-none font-heading"
      >
        <span className="text-base sm:text-lg">{question}</span>
        <ChevronDown className={clsx(
          "w-5 h-5 text-[var(--color-brand)] transition-transform duration-300 shrink-0 ml-4",
          isOpen && "rotate-180"
        )} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-3 text-sm sm:text-base text-[var(--color-text-body)] leading-relaxed pr-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export interface AccordionProps {
  items: { question: string; answer: string }[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full divide-y divide-[var(--color-border)]">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          id={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}

export default Accordion;
