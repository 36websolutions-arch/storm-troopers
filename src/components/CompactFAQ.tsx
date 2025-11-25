"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const CompactFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How long does a claim take from start to finish?",
      answer:
        "Looking for reliable siding installation? We install premium siding that's built for durability, insulation, and long-lasting curb appeal. Our process includes removing old siding, repairing structural issues, and installing new materials with precision for a flawless finish that protects your home year-round.",
    },
    {
      question: "What is the preferred Shingle we use?",
      answer:
        "We use premium architectural shingles from leading manufacturers that offer superior durability, wind resistance, and long-lasting protection for your home.",
    },
    {
      question: "How do you find a roofing contractor you can trust?",
      answer:
        "Look for licensed, insured contractors with strong local references, proper certifications, and transparent pricing. Check reviews and ask for proof of insurance and warranties.",
    },
    {
      question: "Can you repair storm damage without replacing the whole roof?",
      answer:
        "In many cases, yes. We can often repair localized storm damage by replacing affected shingles and addressing specific issues without requiring a full roof replacement.",
    },
    {
      question: "How fast should I act after a storm?",
      answer:
        "Act quickly to prevent further damage. Contact us within 24-48 hours for an inspection. Temporary repairs may be needed to protect your home from water intrusion.",
    },
  ];

  const toggleFAQ = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h4 className="text-[20px] font-semibold text-heading mb-2">FAQ</h4>
          <h2 className="lg:text-[48px] md:text-4xl sm:text-3xl text-2xl font-mono font-semibold text-heading">
            Answers to your <br /> roofing questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className="border-b border-[#B7B7B7] pb-3"
              initial={false}>
              <motion.button
                className="flex justify-between cursor-pointer items-center w-full py-4 text-left"
                onClick={() => toggleFAQ(index)}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}>
                <span className="lg:text-[24px]  font-semibold font-mono text-heading pr-4 flex-1">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 ml-4">
                  {activeIndex === index ? (
                    <FaArrowRightLong className="w-5 h-5 text-heading " />
                  ) : (
                    <FaArrowRightLong className="w-5 h-5 text-heading " />
                  )}
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden">
                    <div className="pb-4">
                      <p className="text-[16px] text-heading font-sans font-normal leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompactFAQ;
