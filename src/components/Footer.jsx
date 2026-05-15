import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Mail } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
};

const Footer = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section
      id="footer"
      data-testid="section-footer"
      className="section-anchor relative py-24 md:py-32 lg:py-40 bg-[#1A1D20] text-[#F7F5F0]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-y-1 md:gap-x-8 mb-16 md:mb-24">
          <motion.div {...fadeUp} className="md:col-span-3">
            <span className="font-body text-[10px] uppercase tracking-[0.32em] text-[#8A8170]">
              Conclusion
            </span>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-3 md:row-start-2"
          >
            <div className="mt-0 relative aspect-[4/5] w-full border border-[#3A3D40] overflow-hidden bg-[#121416]">
              <img
                src="/hung.png"
                alt="Conclusion visual"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h2
            {...fadeUp}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-9 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight"
          >
            What I Carry <span className="italic text-[#D1CFC7]">Forward.</span>
          </motion.h2>

          <motion.div
            {...fadeUp}
            transition={{ duration: 1, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-9 md:col-start-4 md:row-start-2 mt-0 space-y-5"
          >
            <p className="border-l-2 border-[#8A8170] pl-4 md:pl-6 ml-auto max-w-3xl font-body italic text-sm md:text-base leading-relaxed text-[#F7F5F0] text-left md:text-right">
              Analytical rigor and human empathy are not competing priorities. They are the two things that, held together, make leadership worth anything.
            </p>
            <p className="font-body text-sm md:text-base leading-relaxed text-[#D1CFC7]/85 md:text-justify">
              Four semesters. One thread running through all of them. Every course, project, and internship returned - in different ways - to the same fundamental challenge: the distance between how things look on paper and how they work with real people, under real constraints, in real time.
            </p>
            <p className="font-body text-sm md:text-base leading-relaxed text-[#D1CFC7]/85 md:text-justify">
              My development was defined by a series of necessary pivots. While the first two semesters established a foundation of structural diagnosis and decision-making discipline, Semester 3 served as an intellectual awakening through the lens of Sustainable Business Models. Moving beyond mechanical profit-maximization, I embraced a paradigm of &quot;human flourishing,&quot; using the Triple Layer framework to architect Vietnam Wooden Soul from the ground up. This project taught me the hardest lesson in leadership: the humility of the &quot;validation discipline.&quot; I learned that a strategist’s greatest strength is the courage to &quot;kill their darlings&quot;, letting market reality override personal hope.
            </p>
            <p className="font-body text-sm md:text-base leading-relaxed text-[#D1CFC7]/85 md:text-justify">
              By Semester 4, every thread of my MBA journey converged into a single professional identity. I reframed cultural and administrative distances as design challenges, provided the evaluative discipline to transition from handcrafted goods to Career Launchpad. This strategic pivot was not a failure of my original idea, but a success of my validation process.
            </p>
            <p className="font-body text-sm md:text-base leading-relaxed text-[#D1CFC7]/85 md:text-justify">
              I came in expecting more tools. I received those, but the more important gift was a clearer sense of when tools are insufficient, and what to do instead. When data is ambiguous, you develop judgment. When the framework does not fit, you adapt it. When the system constrains the people inside it, you redesign the system.
            </p>
            <p className="font-body text-sm md:text-base leading-relaxed text-[#D1CFC7]/85 md:text-justify">
              I leave this MBA as an HR professional who thinks like a strategist, an entrepreneur who validates before falling in love with her own ideas, and someone who has genuinely learned that the most important business skill is asking better questions. The Career Launchpad is the first chapter of what comes next. The mindset that will carry it was built here - in four semesters of productive discomfort, at Corvinus.
            </p>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2"
        >
          <a
            href="https://drive.google.com/file/d/1MoWGXBmY7i74r3h7F7Q_uO8M6M0ae_YZ/view"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="cta-download-cv"
            className="group inline-flex items-center gap-3 border border-[#F7F5F0] px-7 py-4 font-body text-[11px] uppercase tracking-[0.22em] text-[#F7F5F0] hover:bg-[#F7F5F0] hover:text-[#1A1D20] transition-colors duration-300"
          >
            Download CV
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
          </a>
          <a
            href="mailto:trangnt06.gec@gmail.com"
            data-testid="cta-contact"
            className="inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.22em] text-[#D1CFC7] hover:text-[#F7F5F0] transition-colors"
          >
            <Mail className="w-4 h-4" strokeWidth={1.5} />
            Get in touch
          </a>

          <button
            type="button"
            onClick={handlePrint}
            data-testid="cta-print-page"
            className="inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.22em] text-[#D1CFC7] hover:text-[#F7F5F0] transition-colors"
          >
            Print this page
          </button>
          
          <a
            href="https://unicorvinus.sharepoint.com/:f:/t/CLOUD_MBACenter/IgChrt7S3QSRRbLU-S2rDOwHAfDbaps1HjOrgJ4Cxo62UdU?e=Mlj11E"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="cta-sharepoint"
            className="inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.22em] text-[#D1CFC7] hover:text-[#F7F5F0] transition-colors"
          >
            Share Point
          </a>
          <a
            href="https://drive.google.com/drive/folders/1pGcDrYQTSbwMUatl2jatjs8ER996L4CQ?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="cta-artifacts"
            className="inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.22em] text-[#D1CFC7] hover:text-[#F7F5F0] transition-colors"
          >
            <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
            Link for other artifacts of Portfolio
          </a>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 md:mt-32 pt-10 border-t border-[#3A3D40] flex flex-col gap-4"
        >
          <p className="font-serif italic text-lg md:text-xl text-[#D1CFC7]">
            Nguyen Thi Trang · MBA, Corvinus University of Budapest
          </p>
          <p className="font-body text-xs md:text-sm leading-relaxed text-[#D1CFC7]/80 md:max-w-5xl">
            This portfolio was written with the assistance of AI tools for language refinement and document formatting. All experiences, reflections, and professional judgments expressed here are my own. AI was used to help me communicate more clearly in my second language - not to generate ideas, replace thinking, or fabricate content.
          </p>
          <span className="font-body text-[10px] uppercase tracking-[0.28em] text-[#8A8170] md:text-right">
            © 2026 · All rights reserved · website designed by{" "}
            <a
              href="mailto:quangminhh014@gmail.com"
              className="underline underline-offset-2 hover:text-[#D1CFC7] transition-colors"
            >
              quangminhh014@gmail.com
            </a>
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;