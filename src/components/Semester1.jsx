import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
};

const Semester1 = () => {
  return (
    <section
      id="semester-1"
      data-testid="section-semester-1"
      className="section-anchor relative py-24 md:py-32 lg:py-36 bg-[#F7F5F0]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 mb-12 md:mb-16">
          <motion.div {...fadeUp} className="md:col-span-3">
            <span className="font-body text-[10px] uppercase tracking-[0.32em] text-[#8A8170]">
              Semester One
            </span>
            <div className="font-serif text-7xl md:text-8xl text-[#1A1D20] mt-4 leading-none">
              01
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.08 }}
            className="md:col-span-9"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#1A1D20]">
              Foundations: Learning to Read Systems{" "}
              <span className="italic text-[#8A8170]">
                Before Trying to Change Them
              </span>
            </h2>
            <p className="mt-6 font-body text-[11px] uppercase tracking-[0.24em] text-[#8A8170]">
              Courses: Business Economics · Business Project Phase 1 (Diverzum)
            </p>
          </motion.div>
        </div>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mt-2 mb-12 md:mb-16 w-full font-body italic text-base md:text-lg leading-relaxed text-[#5C6166] text-justify"
        >
          I entered the MBA with four years of HR experience, assuming I understood how businesses worked. This semester forced a profound "unlearning”, shifting my focus from intuitive pattern-matching to a rigorous, structural lens. Through my work with Diverzum, I moved from being a "silent fixer" of symptoms to a strategic challenger who uses structural analysis to identify why systems fail.
        </motion.p>

        {/* Intro block */}
        

        {/* Two core blocks */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-start">
          {/* Business Economics */}
          <motion.article
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.16 }}
            className="md:col-span-6 space-y-5"
          >
            <h3 className="font-serif text-3xl md:text-4xl leading-tight text-[#1A1D20]">
              Business Economics
            </h3>
            <p className="font-body text-[11px] uppercase tracking-[0.22em] text-[#8A8170]">
              Core Course
            </p>

            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              At Techcombank, I had spent months trying to improve performance among Tellers and Sales Officers. The standard diagnosis - insufficient training, unclear KPIs - never quite fixed things. Something structural kept pulling the system back to the same inefficiency. Business Economics gave me the vocabulary: Pareto inefficiency embedded in role design, not individual behavior.
            </p>

            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              The Long Paper forced me to formalize this: Tellers and Sales Officers held fragmented roles that prevented end-to-end customer service. No amount of coaching would fix it. The incentive architecture had to change. Moving from 'what went wrong?' to 'what structure made this inevitable?' sounds subtle. It completely changed how I read organizations.
            </p>

            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              Bounded rationality added another layer. The employees I had spent two years trying to develop were not constrained by lack of capability. They were constrained by a role design that systematically denied them the information they needed to make better decisions. The system was limiting intelligence, not the people inside it.
            </p>

            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              This reframing changed how I viewed my past achievements. At Techcombank, I used to credit my successes to better 'people skills' or individual drive. Now, I realize that even the best talent is a prisoner of the environment. I understood that as an HR leader, my job is not just to find better people, but to design better structures that allow people to be their best. It moved me from being a 'fixer' of individuals to a designer of environments.
            </p>

            <div className="border-l-2 border-[#8A8170] pl-5 md:pl-6 py-1">
              <p className="font-body italic text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
                This shift moved my focus from managing individual behavior to
                managing the architecture that shapes it. I no longer ask why
                people fail, I identify the structural friction that prevents
                them from succeeding.
              </p>
            </div>

            <p className="font-body text-sm md:text-base text-[#1A1D20]">
              <span className="uppercase tracking-[0.18em] text-[#8A8170] text-[11px] mr-2">
                Link to Long Paper:
              </span>
              <a
                href="https://unicorvinus.sharepoint.com/:b:/t/CLOUD_MBACenter/IQAgB032-PL9Q6rxqYuvG1QqAWxm0oqF1ajbnXSUqdlIsgo?e=GhWvpM"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-[#8A8170] transition-colors"
              >
                Long Paper BE
              </a>
            </p>
          </motion.article>

          {/* Diverzum */}
          <motion.article
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="md:col-span-6 space-y-5"
          >
            <h3 className="font-serif text-3xl md:text-4xl leading-tight text-[#1A1D20]">
              Business Project Phase 1 - Diverzum
            </h3>
            <p className="font-body text-[11px] uppercase tracking-[0.22em] text-[#8A8170]">
              BUSINESS EXPANSION
            </p>

            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              Week three of the Diverzum project served as a wake-up call for
              my leadership style. When a teammate sent a subpar slide deck ten
              minutes before a deadline, my default setting was to quietly redo
              it myself. By week five, I recognized a damaging pattern: my
              uncommunicated high standards had become a "silent tax" on the
              team. I realized that what I thought was conscientiousness was
              actually a failure to communicate expectations and then resent the
              resulting gap. It was an expensive lesson in internal alignment.
            </p>

            <div className="border-l-2 border-[#8A8170] pl-5 md:pl-6 py-1">
              <p className="font-body italic text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
                Effective collaboration requires you to negotiate standards
                openly, not enforce them silently. That lesson took me three
                weeks and one quietly rebuilt slide deck to learn.
              </p>
            </div>

            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              Beyond team dynamics, this project was my immersion into the
              startup ecosystem. I learned to navigate the landscape of
              incubators, angel investors, and Venture Capital (VC), etc. I
              understood that a startup’s success is deeply tied to its ability
              to secure the right backing and meet investor metrics. This
              contextual knowledge provided the analytical courage to challenge
              the CEO’s bias.
            </p>

            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              While the CEO had a clear preference for expanding into Poland,
              our research into institutional logic, comparing Southeast Asia’s
              QR-driven ecosystems with Europe’s PSD2-regulated environment,
              pointed toward Romania as the stronger entry point. We delivered a
              recommendation and conversation challenged the leader’s bias,
              supported by a rigorous chain of reasoning. Although the CEO did
              not accept our findings immediately, the company pivoted and chose
              Romania the following semester. This "delayed win" validated that
              structured, evidence-based analysis provides the analytical
              courage to change a company’s direction, even if that change takes
              time to resonate.
            </p>

            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              This artifact shows my Business Project team and captures not just
              the final recommendation but the reasoning chain behind it - the
              kind of structured argument I was only beginning to build in
              Semester 1.
            </p>

          </motion.article>
        </div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.24 }}
          className="relative w-full aspect-[21/9] md:aspect-[24/9] mt-14 md:mt-16"
          data-testid="placeholder-sem1-presentation"
        >
          <img
            src="/Picture3.png"
            alt="First Presentation of Business Project"
            className="absolute inset-0 w-full h-full object-cover border border-[#D1CFC7]"
          />
        </motion.div>
        <p className="font-body text-[11px] uppercase tracking-[0.22em] text-[#8A8170] mt-3 md:mt-4">
          First Presentation of Business Project
        </p>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.26 }}
          className="mt-6 md:mt-8 font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify"
        >
          Looking back, this project marked a professional shift from giving
          recommendations that merely described a situation to delivering
          arguments that reshaped a strategy. Whether managing a teammate’s
          output or a CEO’s vision, I learned that the core task of a leader is
          making the invisible visible, whether that is a quality standard or a
          market risk. I moved from being a "silent fixer" to a strategic
          challenger, understanding that true influence is built on the
          transparency of one's logic and the courage to voice it.
        </motion.p>

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
            Semester 1 was a transition from intuitive management to structural auditing. I learned that whether I am auditing an incentive system or navigating a market entry, true leverage comes from aligning organizational design with objective evidence rather than professional assumptions. 
          </p>
        </motion.div>

        <div className="mt-10 md:mt-12 flex justify-end">
          <span className="font-body text-[10px] uppercase tracking-[0.28em] text-[#8A8170]">
            01 / 05
          </span>
        </div>
      </div>
    </section>
  );
};

export default Semester1;
