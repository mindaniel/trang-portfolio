import React from "react";
import { motion } from "framer-motion";
import { ImageIcon, BarChart3, Table2, Package, Globe2, IdCard } from "lucide-react";

const iconMap = {
  image: ImageIcon,
  chart: BarChart3,
  table: Table2,
  product: Package,
  globe: Globe2,
  badge: IdCard,
};

const Placeholder = ({
  label,
  sublabel,
  aspect = "aspect-[4/5]",
  icon = "image",
  testId,
  className = "",
}) => {
  const Icon = iconMap[icon] || ImageIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full ${aspect} ${className}`}
      data-testid={testId}
    >
      {/* Outer frame */}
      <div className="absolute inset-0 border border-[#D1CFC7] bg-[#EFECE6] overflow-hidden group transition-all duration-500 hover:border-[#8A8170]">
        {/* Inner cross-grid */}
        <div className="absolute inset-6 border border-dashed border-[#D1CFC7]/60" />

        {/* Corner ticks */}
        <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#8A8170]" />
        <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#8A8170]" />
        <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#8A8170]" />
        <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#8A8170]" />

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <Icon
            className="w-7 h-7 mb-5 text-[#8A8170] opacity-70 transition-transform duration-700 group-hover:scale-110"
            strokeWidth={1}
          />
          <p className="font-body text-[10px] md:text-xs uppercase tracking-[0.28em] text-[#5C6166] font-medium">
            {label}
          </p>
          {sublabel && (
            <p className="font-serif italic text-sm md:text-base text-[#8A8170] mt-3 max-w-xs">
              {sublabel}
            </p>
          )}
        </div>

        {/* Image dimension overlay (top-right) */}
        <div className="absolute top-4 right-4 hidden md:flex items-center gap-2">
          <span className="font-body text-[9px] uppercase tracking-widest text-[#8A8170]/70">
            Placeholder
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Placeholder;