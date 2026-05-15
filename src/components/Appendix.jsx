import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
};

const Appendix = () => {
  return (
    <section
      id="appendix"
      data-testid="section-appendix"
      className="section-anchor relative py-24 md:py-32 lg:py-40 bg-[#F7F5F0] text-[#1A1D20]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-y-1 md:gap-x-8 mb-16 md:mb-24">
          <motion.div {...fadeUp} className="md:col-span-3">
            <span className="font-body text-[10px] uppercase tracking-[0.32em] text-[#8A8170]">
              Appendix
            </span>
            <div className="number-badge font-serif text-7xl md:text-8xl text-[#1A1D20] mt-4 leading-none">
              05
            </div>
          </motion.div>
          <motion.h2
            {...fadeUp}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-9 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight"
          >
            The Human Side of <span className="italic text-[#8A8170]">Management.</span>
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ duration: 1, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-9 md:col-start-4 mt-0 font-body text-sm md:text-base leading-relaxed text-[#5C6166]"
          >
            Strategy works on paper. Management works with people. The gap between those two statements is where most of the interesting - and difficult - things happen.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          <motion.div
            {...fadeUp}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
          >
            <div className="relative aspect-[4/3] w-full border border-[#D1CFC7] overflow-hidden bg-white">
              <img
                src="/unicef.png"
                alt="UNICEF ID Badge Photo"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <span className="block mt-4 font-body text-[10px] uppercase tracking-[0.22em] text-[#8A8170]">
              Internship · UNICEF Budapest
            </span>
            <p className="mt-6 border-l border-[#D1CFC7] pl-4 font-body italic text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              What I carried out of UNICEF was a sharper, more grounded understanding of what &quot;global HR&quot; requires, not uniform processes, but processes robust enough to hold consistent principles across radically different human realities. The classroom had given me the frameworks. UNICEF gave me the friction that made them real.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 space-y-6"
          >
            <h3 className="font-serif text-3xl md:text-4xl leading-tight text-[#1A1D20]">
              UNICEF Global Shared Services Center
            </h3>
            <p className="font-body text-[11px] uppercase tracking-[0.22em] text-[#8A8170]">
              Internship · Budapest
            </p>
            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              My internship at UNICEF arrived at the right moment - after three semesters of building conceptual frameworks, I needed somewhere to test them under real conditions with real stakes.
            </p>
            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              The moment that reframed everything was a small logistical detail that stopped me cold. Candidates applying from UNICEF offices in Yemen and Kenya could not complete their applications from home, they had no personal computers. They had to travel to their local UNICEF office just to access the system. The recruitment process I was helping to maintain had been designed assuming a level of infrastructure that simply did not exist in large parts of the world it was meant to serve.
            </p>
            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              This was not a compliance failure. It was a design assumption that had never been examined, the kind of structural friction I had learned to identify in Business Economics, now appearing not in a Vietnamese bank&apos;s role architecture but in a UN agency&apos;s hiring pipeline. The system was constraining the people inside it, exactly as bounded rationality had taught me to recognize.
            </p>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-24 border-t border-[#D1CFC7] pt-10 md:pt-12"
        >
          <h3 className="font-serif text-3xl md:text-4xl leading-tight text-[#1A1D20]">
            Network - <span className="italic text-[#8A8170]">The People Who Made This MBA Real</span>
          </h3>
          <div className="mt-6 relative aspect-[16/9] w-full md:w-1/2 mx-auto border border-[#D1CFC7] overflow-hidden bg-white">
            <img
              src="/Picture2.jpg"
              alt="MBA network and classmates"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="mt-6 space-y-5">
            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              The MBA gave me frameworks, cases, and credentials. My classmates gave me something harder to quantify and more durable: a network built on genuine curiosity about each other&apos;s worlds.
            </p>
            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              Over four semesters, I built friendships with people from across America, Europe, Asia, and beyond - each carrying different professional backgrounds, cultural assumptions, and ways of reading a problem. The diversity was not decorative. It was the point. Every group project, every post-class conversation, every language exchange was a live case study in what International Strategy calls CAGE distance - and how to close it through patience, humor, and showing up consistently.
            </p>
            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              These are not contacts. They are people who have seen me work through uncertainty in real time, and whose own ways of thinking have permanently changed how I see things. That is what a network worth having actually looks like.
            </p>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 md:mt-10 border-t border-[#D1CFC7] pt-10 md:pt-12"
        >
          <h3 className="font-serif text-3xl md:text-4xl leading-tight text-[#1A1D20]">
            Additional <span className="italic text-[#8A8170]">Learning</span>
          </h3>
          <p className="mt-6 font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
            The following reflects learning that shaped this MBA journey in ways that didn&apos;t fit neatly into the main narrative - but mattered nonetheless.
          </p>

          <div className="mt-10 space-y-10">
            <div className="space-y-4">
              <h4 className="font-serif text-2xl md:text-3xl leading-tight text-[#1A1D20]">
                Managerial Perspectives - <span className="italic text-[#8A8170]">The Psychology of Everyday Leadership</span>
              </h4>
              <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
                Transactional Analysis gave me language for something I had observed throughout my HR career but never fully understood: why rational people in professional settings sometimes respond as if the emotional stakes are completely different from the professional ones. A senior manager dismisses a good idea because it came from someone junior. A team member shuts down not because the task is hard but because they feel unheard.
              </p>
              <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
                Parent-Adult-Child made these dynamics legible. And it raised an uncomfortable question: in my four years of HR, how often had I operated from the Controlling Parent state - directive, certain, efficient - when the situation called for something more Adult? The Adult ego state is not a default. It is a practice - one that UNICEF gave me hundreds of opportunities to develop.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif text-2xl md:text-3xl leading-tight text-[#1A1D20]">
                Accounting - <span className="italic text-[#8A8170]">Learning to Speak the Language of Credibility</span>
              </h4>
              <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
                I used to walk into budget conversations at Techcombank feeling slightly out of my depth - the HR function I represented was a cost center, and I could feel it. Accounting changed that. Reading an income statement and balance sheet turned financial fluency from a mystery into a skill. More practically: it gave me the language to make HR arguments that finance colleagues would take seriously. Fluency in financial language builds credibility across departments - something every HR professional who wants a seat at the table needs.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif text-2xl md:text-3xl leading-tight text-[#1A1D20]">
                Language Learning - <span className="italic text-[#8A8170]">Staying Uncomfortable on Purpose</span>
              </h4>
              <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
                I arrived in Budapest already carrying Vietnamese, English, and Korean. I decided that was not enough - not because I needed more languages on a CV, but because learning a language from scratch is one of the few experiences that genuinely keeps you humble.
              </p>
              <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
                Hungarian was my first priority. By the end of Semester 2, I could hold basic conversations with Hungarian locals - ordering, navigating, small talk that actually lands. It sounds modest. It felt significant. There is a specific kind of confidence that comes from being understood in a language that is not yours, in a country that is not yours, and realizing you belong there anyway.
              </p>
              <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
                Alongside Hungarian, I started picking up Chinese and Spanish - with direct help from classmates who were native speakers. These were not formal lessons. They were conversations over lunch, corrections in the middle of group work, the kind of exchange that only happens when you are genuinely curious about the people around you and they can feel it.
              </p>
              <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
                Every language I learn is a reminder that fluency is earned through discomfort - and that the willingness to look foolish in front of someone is one of the fastest ways to build real trust with them.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 md:mt-12 flex justify-end">
          <span className="font-body text-[10px] uppercase tracking-[0.28em] text-[#8A8170]">
            05 / 05
          </span>
        </div>
      </div>
    </section>
  );
};

export default Appendix;
