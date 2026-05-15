import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
};

const Semester3 = () => {
  return (
    <section
      id="semester-3"
      data-testid="section-semester-3"
      className="section-anchor relative py-24 md:py-32 lg:py-40 bg-[#F7F5F0]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-16 md:mb-24">
          <motion.div {...fadeUp} className="md:col-span-3">
            <span className="font-body text-[10px] uppercase tracking-[0.32em] text-[#8A8170]">
              SEMESTER THREE
            </span>
            <div className="number-badge font-serif text-7xl md:text-8xl text-[#1A1D20] mt-4 leading-none">
              03
            </div>
          </motion.div>
          <motion.h2
            {...fadeUp}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-9 md:-ml-2 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#1A1D20]"
          >
            Complexity: <span className="italic text-[#8A8170]">When Sustainability, People, and Reality Challenge the Plan</span>
          </motion.h2>
        </div>

        <motion.p
          {...fadeUp}
          transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 md:mb-12 font-body text-[11px] uppercase tracking-[0.24em] text-[#8A8170]"
        >
          Courses: Sustainable Business Models · Business Project Phase 3
          (Vietnam Wooden Soul)
        </motion.p>

        <motion.p
          {...fadeUp}
          transition={{ duration: 1, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="mt-2 mb-16 md:mb-20 w-full font-body italic text-base md:text-lg leading-relaxed text-[#5C6166] text-justify"
        >
          By the third semester, I encountered the limits of analytical frameworks. I learned that true sophistication is developing the judgment to act when tools stop producing clear answers. The journey of Vietnam Wooden Soul was a lesson in intellectual humility; it forced me to adopt a "validation discipline," letting market reality override my personal passion and "kill my darlings" when the data demanded it.
        </motion.p>

        {/* Sustainable Business Models */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 md:mt-16 space-y-10"
        >
          <div className="max-w-6xl w-full">
            <span className="font-body text-[10px] uppercase tracking-[0.32em] text-[#8A8170] block">
              Core Course
            </span>
            <h3 className="font-serif text-3xl md:text-4xl leading-tight text-[#1A1D20] mt-3">
              Sustainable Business Models
            </h3>
            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] mt-5 md:text-justify">
              Sustainable Business Models was the most intellectually demanding course of my MBA, not in workload, but in the kind of thinking it required. Financial analysis is difficult, but it resolves. You can calculate an IRR or stress-test a model. Sustainability metrics such as human well-being and systemic social value, require a different kind of rigor.
            </p>
            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] mt-5 md:text-justify">
              A defining moment was the Ultimatum Game simulation, which provided a visceral critique of traditional economic theories. It demonstrated that humans are not merely "rational actors" seeking to maximize personal gain; we are fundamentally driven by fairness and trust. This realization transformed my management philosophy from traditional growth toward human flourishing, recognizing that Corporate Social Responsibility (CSR) is not a philanthropic "add-on" but a new management paradigm. As an HR professional, this resonated deeply, shifting my focus toward how a business can actively improve the quality of life for its workforce and community rather than merely extracting human capital.
            </p>
            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] mt-5 md:text-justify">
              Crucially, the Triple Layer Business Model was not just an analytical exercise for me; it was the foundational framework through which I conceptualized the entire business idea for Vietnam Wooden Soul. Rather than starting with a product and adding sustainability as a "feature," this framework allowed me to architect the venture from the ground up. By integrating economic viability, ecological integrity, and social value into a single cohesive model, I ensured that sustainability was embedded in the structural architecture of the business from its very inception.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              { src: "/Picture7.1.png", alt: "Triple Layer Business Model - Economic Layer", label: "Layer 01 · Economic" },
              { src: "/Picture7.2.png", alt: "Triple Layer Business Model - Environmental Layer", label: "Layer 02 · Environmental" },
              { src: "/Picture7.3.png", alt: "Triple Layer Business Model - Social Layer", label: "Layer 03 · Social" },
            ].map((item, i) => (
              <div key={item.label} data-testid={`triple-layer-${i + 1}`}>
                <div className="relative w-full aspect-[4/3] border border-[#D1CFC7] bg-white overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-contain p-3 md:p-4 bg-white"
                  />
                </div>
                <p className="mt-3 font-body text-[10px] uppercase tracking-[0.24em] text-[#8A8170]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-6xl w-full border-l-2 border-[#1A1D20] pl-5 md:pl-6 py-1">
            <p className="font-serif italic text-xl md:text-2xl leading-snug text-[#1A1D20]">
              Sustainability is not a separate strategic consideration. It is a
              structural question about how value is created, for whom, and at
              whose expense. That reframing has changed how I evaluate business
              models.
            </p>
          </div>

          

          {/* Project · Vietnam Wooden Soul */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-6xl w-full space-y-6 pt-4"
          >
            <span className="font-body text-[10px] uppercase tracking-[0.32em] text-[#8A8170] block">
              Project · Vietnam Wooden Soul
            </span>
            <h3 className="font-serif text-3xl md:text-4xl leading-tight text-[#1A1D20]">
              Vietnam Wooden Soul - Business Project Phase 3
            </h3>
            <p className="font-body text-[11px] uppercase tracking-[0.22em] text-[#8A8170]">
              Start from Zero
            </p>
            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              Vietnam Wooden Soul began as a personal passion: transforming
              leftover wood materials into handcrafted products that carried
              Vietnamese cultural identity with sustainability impacts. I
              understood the aesthetic. I believed in the story. I had already
              imagined the brand.
            </p>
            
            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              Then I talked to my customers by nearly 10 personal interviews and 100 survey answers. The emotional connection to Vietnamese cultural elements was real - but it was not the primary driver of purchase intent. People wanted gifts, not only self-expression objects. Those changes everything: packaging, price point, distribution logic, seasonal demand cycles, the entire go-to-market approach.
            </p>
            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              The product samples artifact is included not to showcase the design, but to mark a specific inflection point: these samples were designed for one customer and had to be reconceived for another. That gap between the product I imagined and the product the market wanted is exactly what the artifact shows.
            </p>
            <div className="w-full pt-4 border-l-2 border-[#1A1D20] pl-5 md:pl-6">
              <p className="font-serif italic text-xl md:text-2xl text-[#1A1D20] leading-snug">
                The most important skill I developed this semester was not customer interview methodology. It was the willingness to let “what I found” override “what I hoped to find”. That is harder than it sounds when you have emotional investment in the idea.
              </p>
            </div>
            <div className="relative w-full max-w-2xl mx-auto aspect-[16/9] border border-[#D1CFC7] overflow-hidden">
              <img
                src="/design.png"
                alt="Vietnam Wooden Soul product design samples"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
            
            <p className="font-body text-base md:text-lg leading-relaxed text-[#5C6166] md:text-justify">
              I also learned something about my own entrepreneurial instincts: I move fast, I commit early, and I am better at seeing potential than problems. These are useful traits, but aggressively deployed without validation, they become expensive blind spots.
            </p>

            

            <div className="w-full mt-10 md:mt-12 border-l-2 border-[#1A1D20] pl-6 md:pl-8 py-2">
              <p className="font-body text-[11px] uppercase tracking-[0.24em] text-[#8A8170] mb-3">
                Key Reflection
              </p>
              <p className="font-serif text-2xl md:text-2xl leading-snug text-[#1A1D20]">
                Semester 3 taught me intellectual humility: the ability to sit with ambiguity and prioritize rigorous validation over personal passion. I realized that my tendency to move fast is only an asset when anchored in data rather than assumptions. I leave this semester knowing how to let market reality override my own hopes—a fundamental requirement for any strategic leader.
              </p>
            </div>
          </motion.div>

          <div className="mt-10 md:mt-12 flex justify-end">
            <span className="font-body text-[10px] uppercase tracking-[0.28em] text-[#8A8170]">
              03 / 05
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Semester3;
