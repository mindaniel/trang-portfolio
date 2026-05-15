import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
};

const WhyStartOver = () => {
  return (
    <section
      id="why-start-over"
      data-testid="section-why-start-over"
      className="section-anchor relative py-24 md:py-32 bg-[#F7F5F0]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          {...fadeUp}
          className="font-serif italic text-4xl md:text-5xl leading-tight tracking-tight text-[#1A1D20] mb-12 md:mb-16"
        >
          Why I Chose to Start Over
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-start">
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="md:col-span-7 space-y-6"
          >
            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              By 2023, I was an HR Business Partner - managing people strategy across multiple Business Units. I had a scope, a track record that looked good on paper. I had recruited 150+ engineers in six months, shaped workforce strategy for over 1,000 employees, and built campaigns that reached 20,000 students. From the outside, it looked like I had figured it out.
            </p>
            <p className="font-serif italic text-2xl md:text-3xl leading-snug text-[#1A1D20]">
              From the inside, I knew I hadn't.
            </p>
            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              I could execute. I could optimize. I could read a room and move fast. But when decisions got harder - when the question was not how to hire better but why the organization kept producing the same problems - I felt the edge of what I actually understood. I had built confidence on top of experience. What I did not yet have was the foundation underneath.
            </p>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.25 }}
              className="relative w-full aspect-[16/10] mt-2"
              data-testid="placeholder-why-start-over"
            >
              <img
                src="/Picture2.jpg"
                alt="MBA Christmas Party"
                className="absolute inset-0 w-full h-full object-cover border border-[#D1CFC7]"
              />
            </motion.div>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
              className="font-body text-[11px] uppercase tracking-[0.22em] text-[#8A8170] flex items-center justify-between"
            >
              <span>Fig. 01 · MBA · Class 2024 - 2026</span>
              <span></span>
            </motion.p>
          </motion.div>

          <div className="md:col-span-5 space-y-6 md:pt-0">
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.32 }}
              className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify"
            >
              So I left, not because the career was failing, but because I could see exactly where it was going and I wanted to understand more of the world before I got there. I wanted to learn from people who thought differently, in a place that was completely unfamiliar, in systems I could not navigate on instinct alone.
            </motion.p>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.35 }}
              className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify"
            >
              Budapest was that place. This MBA was that decision. And the four semesters that followed were, consistently, more uncomfortable and more valuable than I expected them to be.
            </motion.p>
            <div className="border-l-2 border-[#1A1D20] pl-5 md:pl-6 py-1">
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.38 }}
                className="font-serif italic text-xl md:text-2xl leading-snug text-[#1A1D20]"
              >
                Budapest was that place. This MBA was that decision.
              </motion.p>
            </div>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.4 }}
              className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify"
            >
              This portfolio is not a record of courses completed. It is the story of what happened when someone who thought she understood organizations was asked to prove it - systematically, under conditions she could not control, alongside people she could not predict.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyStartOver;
