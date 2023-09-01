"use client"
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { BsPlus, BsDash } from 'react-icons/bs';

export default function Accordion({ iterationContent }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRef = useRef(null);

  const ToggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null); // Close the clicked item if already open
    } else {
      setActiveIndex(index);
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-4">
      {iterationContent.map((item, index) => (
        <div key={index} className="border p-4 rounded-md mx-[1rem]">
          <button
            className="flex justify-between items-center font-bold"
            onClick={() => ToggleAccordion(index)}
          >
            <div>
              {activeIndex === index ? (
                <BsDash className="text-xl" />
              ) : (
                <BsPlus className="text-xl" />
              )}
            </div>
            <span>{item.title}</span>

          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: activeIndex === index ? 'auto' : 0,
              opacity: activeIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-2"
            ref={contentRef}
          >
            {item.content}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
