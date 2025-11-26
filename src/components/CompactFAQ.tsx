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
        "Most roofing insurance claims take 2–6 weeks from inspection to final installation. Timing depends on your insurance company, adjuster availability, and how busy the storm season is.",
    },
    {
      question: "What is the preferred Shingle we use?",
      answer:
        " Atlas shingles. 130 mph wind resistance that comes with  scotch guard technology to eliminate algae growth and more durable than the competition",
    },
    {
      question: "How do you find a roofing contractor you can trust?",
      answer:
        "The best way to find a roofer you can trust is to look for honesty, transparency, and real customer feedback. Make sure they’re licensed, insured, and willing to show past projects. A trustworthy contractor explains everything clearly and never pressures you",
    },
    {
      question: "Can you repair storm damage without replacing the whole roof?",
      answer:
        "Yes. If the damage is isolated, we can repair only the affected shingles or sections. However, if the storm damage is widespread or affects the roof’s structure, a full replacement may be required for safety and insurance approval.",
    },
    {
      question: "How fast should I act after a storm?",
      answer:
        " As quickly as possible. Storm damage spreads fast and insurance deadlines don’t wait. We can inspect your roof within 24 hours, document everything, and help you secure your claim before problems get worse.",
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
