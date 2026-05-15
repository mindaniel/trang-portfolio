import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      data-testid="section-hero"
      className="section-anchor relative min-h-screen pt-24 pb-20 md:pt-32 md:pb-24 grain-overlay"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top meta row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between mb-16 md:mb-24"
        >
          <span className="font-body text-[10px] md:text-xs uppercase tracking-[0.28em] text-[#8A8170]">
            Portfolio · 2026
          </span>
          <span className="hidden md:block font-body text-[10px] md:text-xs uppercase tracking-[0.28em] text-[#8A8170]">
            Corvinus University · Budapest
          </span>
        </motion.div>

        {/* The Hook quote + portrait */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-14">

          <div className="space-y-8 md:space-y-10">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              data-testid="hero-headline"
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-[#1A1D20]"
            >
              Rigor and Empathy.{" "}
              <span className="italic text-[#8A8170]">Unlearning</span> and
              Integration.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif italic text-2xl md:text-3xl leading-snug text-[#1A1D20]"
            >
              
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:self-center"
          >
            <div
              className="relative w-full max-w-[22rem] md:max-w-[24rem] lg:max-w-[26rem] ml-0 md:ml-auto aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4]"
              data-testid="placeholder-hero-headshot"
            >
              <img
                src="/Picture1.jpg"
                alt="Professional outdoor headshot"
                className="absolute inset-0 w-full h-full object-cover border border-[#D1CFC7]"
              />
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-2 md:mt-3 w-full font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify"
        >
          This portfolio is not a record of courses completed; it is an account
          of a systematic unlearning. I came into this MBA as an efficient HR
          generalist and leave as an entrepreneur who validates before falling
          in love with her ideas. Over four semesters, I have learned to
          embrace complexity, to focus not just on how but why, and to finally
          integrate analytical rigor with human empathy into a unified
          professional identity.
        </motion.p>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#8A8170]" />
            <span className="font-body text-[10px] uppercase tracking-[0.28em] text-[#5C6166]">
              Scroll · A four-semester journey
            </span>
          </div>
          <span className="font-body text-[10px] uppercase tracking-[0.28em] text-[#8A8170]">
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
