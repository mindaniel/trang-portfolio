import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
};

const Semester2 = () => {
  return (
    <section
      id="semester-2"
      data-testid="section-semester-2"
      className="section-anchor relative py-24 md:py-32 lg:py-40 bg-[#EFECE6]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-16 md:mb-20">
          <motion.div {...fadeUp} className="md:col-span-9 md:col-start-1">
            <span className="font-body text-[10px] uppercase tracking-[0.32em] text-[#8A8170]">
              Semester TWO
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#1A1D20] mt-4">
              Judgment: Evaluating Business Value {" "}
              <span className="italic text-[#8A8170]">from Multiple Perspectives</span>
            </h2>
            <p className="mt-6 font-body text-[11px] uppercase tracking-[0.24em] text-[#8A8170]">
              Courses: Business Strategy &amp; Decision Making · Business Project Phase 2
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-3 md:flex md:items-end md:justify-end"
          >
            <div className="number-badge font-serif text-8xl md:text-9xl text-[#1A1D20] leading-none">
              02
            </div>
          </motion.div>
        </div>

        {/* Intro paragraph */}
        <motion.p
          {...fadeUp}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-2 mb-16 md:mb-20 w-full font-body italic text-lg md:text-xl leading-relaxed text-[#5C6166] text-justify"
        >
          The second semester asked a harder question than the first: not "do you understand the problem?" but "can you make a decision under real constraints and stand behind it?" This semester taught me what judgment actually requires: not just analysis, but the willingness to stand behind a conclusion when the answer is not obvious.
        </motion.p>

        

        {/* Section A: Core Course (newspaper-style block 1) */}
        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-start">
          <motion.article
            {...fadeUp}
            transition={{ duration: 1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 space-y-5"
          >
            <h3 className="font-serif text-3xl md:text-4xl leading-tight text-[#1A1D20]">
              Business Strategy &amp; Decision Making
            </h3>
            <p className="font-body text-[11px] uppercase tracking-[0.22em] text-[#8A8170]">
              Core Course
            </p>

            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              This course provided one of the most vital pivots of my MBA: the transition to "thinking with numbers." I learned that strategy is not merely about vision, but about the rigorous quantification of problems to ensure robustness and validity. A concrete example was market sizing exercises, where we were encouraged to use at least two different methods, for example: top-down and bottom-up, to ensure validity and robustness.
            </p>

            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              I also learned to move beyond intuition to calculate market attractiveness with precision, not qualitative method but quantitative. This technical discipline trained me to see problems through multiple perspectives and avoid over-relying on single assumptions, ensuring that every strategic recommendation I make is grounded in defensible data.
            </p>

            <p className="border-l-2 border-[#1A1D20] pl-4 md:pl-5 font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify italic">
              Case study work further strengthened my ability to apply frameworks critically rather than mechanically, an essential lesson for real-life decision-making.
            </p>

            
          </motion.article>

          <motion.article
            {...fadeUp}
            transition={{ duration: 1, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 space-y-5"
          >
            <div
              className="relative w-full h-[260px] md:h-[320px] lg:h-[360px]"
              data-testid="placeholder-market-chart-strategy"
            >
              <img
                src="/Picture4.png"
                alt="Market Attractiveness Chart"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              However, the most visceral lesson in the relationship between data and execution came from a humble 1/10 score in our Balanced Scorecard simulation. My team failed because we changed our strategy too frequently, never allowing the system enough time to adapt to our decisions. I realized that even a data-driven vision becomes damaging "noise" if it lacks strategic persistence. 
            </p>
            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              This failure was the perfect setup for our success in Case Study 2, where we earned 30/30. By moving beyond a mechanical application of frameworks like Blue Ocean or SWOT, we focused on the reasoning chain, explicitly testing assumptions and evaluating strategic options. This course taught me that a powerful strategy is not just a conclusion; it is a coherent, evidence-based argument that bridges the gap between analytical rigor and consistent execution.
            </p>
            <p className="font-body text-sm md:text-base text-[#1A1D20]">
              <span className="uppercase tracking-[0.18em] text-[#8A8170] text-[11px] mr-2">
                Case Study 2 Presentation:
              </span>
              <a
                href="https://unicorvinus.sharepoint.com/:b:/t/CLOUD_MBACenter/IQDffW_y9mMsQIDtZ9KzGMmcAZXxMSMFc0h87HOlpyTtKVo?e=3zFAsD"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-[#8A8170] transition-colors"
              >
                Business Strategy Presentation 2.pdf
              </a>
            </p>
          </motion.article>
        </div>

        {/* Section B: Project (newspaper-style block 2) */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-start">
          <motion.article
            {...fadeUp}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-6 space-y-5"
          >
            <h3 className="font-serif text-3xl md:text-4xl leading-tight text-[#1A1D20]">
              Business Project Phase 2 - Virtual Venture Capital Exercise
            </h3>
            <p className="font-body text-[11px] uppercase tracking-[0.22em] text-[#8A8170]">
              Venture Investment
            </p>

            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              The Venture Capital exercise put me in the role of a virtual investor evaluating startup pitches. The exercise forced me to stop asking, "How can this business be improved?" and start asking, "Is this opportunity worth backing at all?" This is a profound distinction. As an HR professional, I had been trained on operational axes: efficiency, team performance, and process optimization. The investor lens requires a focus on entirely different variables: market timing, scalability, risk-adjusted returns, and exit potential.
            </p>

            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              The most important discipline I developed was strategic skepticism - learning to interrogate the "Hockey Stick" revenue curve, that seductive startup trope where a flat line suddenly morphs into a miraculous exponential surge. I realized this curve is frequently a trap of hope rather than a calculated reality: a delusion used to mask the absence of product-market fit or operational stability.
            </p>


          </motion.article>

          <motion.article
            {...fadeUp}
            transition={{ duration: 1, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-6 space-y-5"
          >
            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              Looking beneath the surface of ambitious projections to identify the actual drivers of momentum became my core evaluative lens. That discipline produced results. We were given capital to allocate across different ventures and through that process I generated a 700% return on my virtual investment.
            </p>
            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              I realized that in my four years of HR, I had often spent time trying to "fix" systems without properly asking that second question, about business ideas or even my own career moves. I learned that high-impact leadership begins with strategic selectivity: understanding that success is built on recognizing the difference between a genuine growth engine and an empty promise.
            </p>
            <div
              className="relative w-full h-[220px] md:h-[280px]"
              data-testid="placeholder-investment-table-project"
            >
              <img
                src="/Picture5.png"
                alt="Investment Results Data Table"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>

          </motion.article>
        </div>

        {/* Key reflection */}
                <motion.div
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: 0.28 }}
                  className="mt-16 md:mt-20 border-l-2 border-[#1A1D20] pl-6 md:pl-8 py-2"
                >
                  <p className="font-body text-[11px] uppercase tracking-[0.24em] text-[#8A8170] mb-3">
                    Key Reflection
                  </p>
                  <p className="font-serif text-2xl md:text-2xl leading-snug text-[#1A1D20]">
                    Analysis became decision-making. I learned that data is only valuable when coupled with strategic persistence - the discipline to stay the course while systems adapt. The VC exercise added a layer of strategic skepticism, teaching me to look past "Hockey Stick" illusions and ask the ultimate investor's question: Is this vehicle even worth the pursuit? Success, I now realize, is as much about strategic selectivity as it is about execution. 
                  </p>
                </motion.div>

        <div className="mt-10 md:mt-12 flex justify-end">
          <span className="font-body text-[10px] uppercase tracking-[0.28em] text-[#8A8170]">
            02 / 05
          </span>
        </div>
        
      </div>
    </section>
  );
};

export default Semester2;
