"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
const MailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

/* ─── TextHoverEffect ─── */
export const TextHoverEffect = ({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const rect = svgRef.current.getBoundingClientRect();
      setMaskPosition({
        cx: `${((cursor.x - rect.left) / rect.width) * 100}%`,
        cy: `${((cursor.y - rect.top) / rect.height) * 100}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn("select-none uppercase cursor-pointer", className)}
    >
      <defs>
        <linearGradient id="textGradient" gradientUnits="userSpaceOnUse">
          {hovered && (
            <>
              <stop offset="0%"   stopColor="#3b82f6" />
              <stop offset="33%"  stopColor="#8b5cf6" />
              <stop offset="66%"  stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#22c55e" />
            </>
          )}
        </linearGradient>
        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%"   stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>

      {/* Outline — always visible faintly */}
      <text
        x="50%" y="50%"
        textAnchor="middle" dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-white/10 font-[helvetica] text-7xl font-bold"
      >
        {text}
      </text>

      {/* Animated stroke draw-on */}
      <motion.text
        x="50%" y="50%"
        textAnchor="middle" dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-blue-500/40 font-[helvetica] text-7xl font-bold"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        {text}
      </motion.text>

      {/* Hover reveal gradient */}
      <text
        x="50%" y="50%"
        textAnchor="middle" dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] text-7xl font-bold"
      >
        {text}
      </text>
    </svg>
  );
};

/* ─── FooterBackgroundGradient ─── */
export const FooterBackgroundGradient = () => (
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      background:
        "radial-gradient(125% 125% at 50% 10%, rgba(8,9,12,0.8) 50%, rgba(59,130,246,0.08) 100%)",
    }}
  />
);

/* ─── Full Footer ─── */
const LINKS = [
  {
    title: "Product",
    items: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Scoring engine", href: "#scoring" },
      { label: "Markets", href: "#markets" },
      { label: "Request access", href: "#access" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Prosper Group", href: "#about" },
      { label: "Jay Roberts", href: "https://instagram.com/jayroberts" },
      { label: "Press", href: "#press" },
      { label: "Contact", href: "mailto:jay@prospergroup.com" },
    ],
  },
];

export default function HoverFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#08090c] border-t border-white/6 mx-4 mb-4 rounded-3xl">
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                DS
              </div>
              <span className="text-white font-semibold text-lg">DealScout</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-52">
              Proprietary land deal identification for South Florida's most ambitious developers.
            </p>
            <div className="flex items-center gap-1.5 text-sm text-white/40">
              <span className="text-blue-400 shrink-0"><MapPinIcon /></span>
              Miami, FL — Brickell
            </div>
            <div className="flex items-center gap-1.5 text-sm text-white/40">
              <span className="text-blue-400 shrink-0"><MailIcon /></span>
              <a href="mailto:jay@prospergroup.com" className="hover:text-white transition-colors">
                jay@prospergroup.com
              </a>
            </div>
          </div>

          {/* Link columns */}
          {LINKS.map((col) => (
            <div key={col.title}>
              <h4 className="text-white text-sm font-medium mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-white/40 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Status / Stats */}
          <div>
            <h4 className="text-white text-sm font-medium mb-5">Live stats</h4>
            <div className="space-y-3">
              {[
                { label: "Parcels scored", value: "247" },
                { label: "Tier A deals", value: "12" },
                { label: "Markets covered", value: "2" },
                { label: "Pipeline value", value: "$2.8B" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center justify-between">
                  <span className="text-sm text-white/40">{stat.label}</span>
                  <span className="text-sm text-white font-medium">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-white/6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <div className="flex items-center gap-4">
            {[
              { icon: <XIcon />, href: "https://x.com/JayRoberts01", label: "X" },
              { icon: <LinkedinIcon />, href: "#", label: "LinkedIn" },
              { icon: <GithubIcon />, href: "https://github.com/Prosper-Radar", label: "GitHub" },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Prosper Group · Built by{" "}
            <a href="https://techguys.consulting" className="hover:text-white/60 transition-colors">
              TechGuys
            </a>
          </p>
        </div>
      </div>

      {/* Hover text effect */}
      <div className="hidden lg:flex h-72 -mt-32 -mb-20 relative z-10">
        <TextHoverEffect text="DEALSCOUT" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
