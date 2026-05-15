import React from "react";
import { motion } from "framer-motion";
import Placeholder from "./Placeholder";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
};

const Semester4 = () => {
  return (
    <section
      id="semester-4"
      data-testid="section-semester-4"
      className="section-anchor relative py-24 md:py-32 lg:py-40 bg-[#EFECE6]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-12 md:mb-16">
          <motion.div {...fadeUp} className="md:col-span-9">
            <span className="font-body text-[10px] uppercase tracking-[0.32em] text-[#8A8170]">
              SEMESTER FOUR
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#1A1D20] mt-4">
              Convergence:{" "}
              <span className="italic text-[#8A8170]">
                Bridging the Distance Between Ideas and What the Market Requires
              </span>
            </h2>
            <p className="mt-6 font-body text-[11px] uppercase tracking-[0.24em] text-[#8A8170]">
              Courses: International Strategy · Business Project Phase 4 (Career Launchpad)
            </p>

            <p className="mt-5 font-body italic text-base md:text-lg leading-relaxed text-[#5C6166] text-justify">
              By Semester 4, I had learned to read systems, survive being wrong, and let reality override my hopes. This semester was where everything converged in a single direction. I identified a systemic "legibility gap" that filters out capable international talents, a problem I understood from the inside because I had lived it. I designed Career Launchpad as a strategic bridge for cultural and administrative distances, following the genuine problem to its logical solution.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-3 md:flex md:items-start md:justify-end md:pt-16"
          >
            <div className="number-badge font-serif text-8xl md:text-9xl text-[#1A1D20] leading-none">
              04
            </div>
          </motion.div>
        </div>

        {/* International Strategy · Core Course */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 md:mt-12 max-w-5xl space-y-5"
        >
          <h3 className="font-serif text-3xl md:text-4xl leading-tight text-[#1A1D20]">
            International Strategy
          </h3>
          <p className="font-body text-[11px] uppercase tracking-[0.22em] text-[#8A8170]">
            Core Course
          </p>

          <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
            In this course, I developed a professional roadmap for solving and presenting complex international business cases - learning to navigate from messy data to a structured strategic argument, identifying the root issue, evaluating trade-offs with rigor, and presenting recommendations in a way that is logical, persuasive, and ready for senior stakeholder review.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            <div className="relative w-full md:col-span-7 aspect-[16/9] border border-[#D1CFC7] overflow-hidden">
              <img
                src="/SAF.png"
                alt="Strategic Analysis Framework visual"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>

            <p className="md:col-span-5 font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              I learned to evaluate potential moves not just through a financial lens (ROI and risk), but through a stakeholder lens: will this change be accepted by those it affects? This framework provided analytical courage to objectively judge my own ventures, ensuring that any strategic path I chose was both financially viable and stakeholder-aligned.
            </p>
          </div>

          <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
            The CAGE framework (Cultural, Administrative, Geographic, Economic distance) describes why international business expansion is far harder than it looks on a spreadsheet. Reading it in the context of individual career mobility, I recognized the same dynamics: an international candidate applying to a Budapest firm faces cultural distance in communication norms and self-promotion expectations, administrative distance in unrecognized credential systems and unfamiliar recruitment conventions, etc.
          </p>

          <p className="border-l-2 border-[#1A1D20] pl-4 md:pl-5 font-body italic text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
            The CAGE framework taught me to see distance not as a fixed barrier but as a design problem. If distance can be mapped, it can be bridged - and bridging it deliberately is a skill most people are never taught.
          </p>

          <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
            Like Firm-Specific Advantages applied to individuals: every person possesses capabilities that are genuinely valuable. The strategic challenge is whether those capabilities can be made legible - communicated, contextualized, transferred - across the distance between where they originated and where they are being evaluated. These are not abstract barriers. They are the specific reasons why people with genuinely strong profiles end up confused after third-round interviews they should have passed.
          </p>

          <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
            This reframing gave me the conceptual backbone for what I built next.
          </p>
        </motion.div>

        {/* CAGE letters mini grid */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#D1CFC7]"
        >
          {[
            { letter: "C", label: "Cultural", text: "Norms, language, communication style." },
            { letter: "A", label: "Administrative", text: "Visa, accreditation, legal frame." },
            { letter: "G", label: "Geographic", text: "Time, distance, relocation friction." },
            { letter: "E", label: "Economic", text: "Salary parity, purchasing power, market depth." },
          ].map((item, i) => (
            <div
              key={item.letter}
              className="bg-[#F7F5F0] p-6 md:p-8 group transition-colors duration-500 hover:bg-[#1A1D20]"
              data-testid={`cage-${item.letter}`}
            >
              <span className="font-serif text-5xl md:text-6xl text-[#1A1D20] group-hover:text-[#F7F5F0] transition-colors duration-500 leading-none block">
                {item.letter}
              </span>
              <span className="font-body text-[10px] uppercase tracking-[0.28em] text-[#8A8170] group-hover:text-[#D1CFC7] transition-colors duration-500 mt-4 block">
                {item.label}
              </span>
              <p className="font-body text-sm text-[#5C6166] group-hover:text-[#EFECE6] transition-colors duration-500 mt-2 leading-relaxed">
                {item.text}
              </p>
              <span className="font-body text-[10px] text-[#8A8170] group-hover:text-[#D1CFC7] transition-colors duration-500 mt-6 block">
                0{i + 1} / 04
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-20 max-w-5xl space-y-5"
        >
          <h3 className="font-serif text-3xl md:text-4xl leading-tight text-[#1A1D20]">
            Career Launchpad - Business Project Phase 4
          </h3>
          <p className="font-body text-[11px] uppercase tracking-[0.22em] text-[#8A8170]">
            Strategic Pivot from Vietnam Wooden Soul
          </p>

          <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
            By Semester 4, my journey converged into a single direction. I made the strategic decision to pivot from Vietnam Wooden Soul, recognizing that managing handcrafted operations remotely was structurally unsustainable. Facing a lack of team alignment and refusing the Sunk Cost Fallacy, I followed where the genuine problem led. This pivot was the ultimate success of my validation process: the discipline to let go of a failing model to build one that addresses a verified reality.
          </p>

          <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
            Career Launchpad addresses the legibility gap by translating personal experiences into measurable business languages through standardizing CVs. The model prepares candidates to navigate structured corporate assessments and provides realistic simulations to ensure the actual interview is never their first time performing under pressure. Operating on a success-based revenue model, the service is free for students, with income generated only through successful placements from businesses.
          </p>

          <div className="relative w-full max-w-3xl mx-auto aspect-[16/9] border border-[#D1CFC7] overflow-hidden">
            <img
              src="/Job.png"
              alt="Career Launchpad job-market case visual"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>

          <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
            The model has already been tested informally. Tommy, a classmate navigating the Hungarian job market with a non-European background, worked with me to reframe his experience into language local hiring systems could recognize. He secured an internship in Givaudan. That single case taught me more about where the legibility gap sits than any survey could, and confirmed that the problem is real, solvable, and repeatable.
          </p>

          <p className="border-l-2 border-[#1A1D20] pl-4 md:pl-5 font-body italic text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
            Letting go of Vietnam Wooden Soul was not a failure. It was the moment I understood that the best entrepreneurial decisions are not about protecting what you have built - they are about following where the genuine problem leads.
          </p>

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
                      Everything converged. International Strategy gave me the analytical framework. Vietnam Wooden Soul gave me the discipline to validate rather than assume. And the Career Launchpad gave me a direction that integrates what I know, what I have experienced, and what I genuinely believe needs to exist. What I am still developing is the patience to build slowly - to resist the same instinct to move fast and commit early that Vietnam Wooden Soul taught me to question.
                    </p>
                  </motion.div>

        <div className="mt-10 md:mt-12 flex justify-end">
          <span className="font-body text-[10px] uppercase tracking-[0.28em] text-[#8A8170]">
            04 / 05
          </span>
        </div>
        </motion.div>

        

      </div>
    </section>
  );
};

export default Semester4;
