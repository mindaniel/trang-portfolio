import React, { useEffect, useState } from "react";

const links = [
  { id: "semester-1", label: "I · Foundation" },
  { id: "semester-2", label: "II · Judgement" },
  { id: "semester-3", label: "III · Complexity" },
  
  { id: "semester-4", label: "IV · Convergence" },
  { id: "appendix", label: "Appendix" },
  { id: "footer", label: "Epilogue" },
];

const CV_LINK =
  "https://drive.google.com/file/d/1MoWGXBmY7i74r3h7F7Q_uO8M6M0ae_YZ/view?usp=drive_link";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // determine active section
      const offsets = links.map((l) => {
        const el = document.getElementById(l.id);
        if (!el) return { id: l.id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: l.id, top: Math.abs(rect.top - 120) };
      });
      offsets.sort((a, b) => a.top - b.top);
      setActive(offsets[0].id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      data-testid="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F7F5F0]/85 backdrop-blur-xl border-b border-[#E5E3DC]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <button
          onClick={() => scrollTo("hero")}
          data-testid="nav-logo"
          className="font-serif italic text-lg md:text-xl tracking-tight text-[#1A1D20] hover:text-[#8A8170] transition-colors"
        >
          Nguyen Thi Trang<span className="text-[#8A8170]">.</span>
        </button>

        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              data-testid={`nav-${l.id}`}
              className={`nav-link font-body text-[11px] uppercase tracking-[0.22em] transition-colors ${
                active === l.id
                  ? "text-[#1A1D20]"
                  : "text-[#5C6166] hover:text-[#1A1D20]"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => window.open(CV_LINK, "_blank", "noopener,noreferrer")}
          data-testid="nav-cta-cv"
          className="hidden md:inline-flex items-center gap-2 border border-[#1A1D20] px-5 py-2.5 font-body text-[10px] uppercase tracking-[0.22em] text-[#1A1D20] hover:bg-[#1A1D20] hover:text-[#F7F5F0] transition-colors duration-300"
        >
          Download CV
        </button>

        {/* Mobile minimal indicator */}
        <div className="md:hidden font-body text-[10px] uppercase tracking-[0.22em] text-[#5C6166]">
          {links.find((l) => l.id === active)?.label || "Intro"}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
