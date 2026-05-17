"use client";

import React, { useState } from "react";

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Scoring", href: "#scoring" },
  { label: "Markets", href: "#markets" },
  { label: "About", href: "#about" },
];

export default function HeroBanner() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative isolate min-h-screen overflow-hidden flex flex-col">
      {/* Background image — Miami aerial */}
      <img
        src="https://picsum.photos/seed/miamiaerial/1920/1080"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-[#08090c]/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#08090c]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Nav */}
      <header className="relative z-20 w-full">
        <div className="max-w-7xl mx-auto px-6 pt-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                DS
              </div>
              <span className="text-white font-semibold tracking-tight text-lg">
                DealScout
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1 rounded-full bg-white/5 px-2 py-2 ring-1 ring-white/10 backdrop-blur-md">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-1.5 text-sm text-white/70 hover:text-white rounded-full hover:bg-white/8 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#access"
                className="ml-1 px-4 py-1.5 rounded-full bg-white text-[#08090c] text-sm font-medium hover:bg-white/90 transition-colors flex items-center gap-1.5"
              >
                Request access
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 7h10v10M7 17 17 7" />
                </svg>
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen
                  ? <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>
                  : <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>
                }
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden mt-3 rounded-2xl bg-[#0f1117]/95 ring-1 ring-white/10 backdrop-blur-xl p-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-2.5 text-sm text-white/70 hover:text-white rounded-xl hover:bg-white/5 transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#access"
                className="block mt-2 px-4 py-2.5 text-sm font-medium text-center bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
              >
                Request access
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-4xl mx-auto text-center">

            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2.5 rounded-full bg-white/8 px-3 py-2 ring-1 ring-white/12 backdrop-blur-sm mb-8">
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-medium px-2 py-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Live
              </span>
              <span className="text-sm text-white/80">
                Scoring {" "}
                <span className="text-white font-medium">247 parcels</span>
                {" "} across Miami-Dade & Hillsborough
              </span>
            </div>

            {/* Title */}
            <h1 className="animate-fade-up-1 font-serif font-normal text-5xl sm:text-6xl md:text-7xl text-white leading-[1.08] tracking-tight mb-6">
              Find Florida's Best{" "}
              <br className="hidden sm:block" />
              <span className="text-gradient-blue">Land Deals</span>{" "}
              First
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-up-2 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              DealScout ingests public parcel data from South Florida counties, scores every lot
              against Prosper Group's acquisition criteria, and surfaces ranked opportunities
              before any broker calls.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up-3 flex flex-col sm:flex-row gap-3 items-center justify-center">
              <a
                href="#access"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
              >
                Request early access
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white px-6 py-3 rounded-full text-sm transition-colors ring-1 ring-white/10 hover:ring-white/20"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 5a2 2 0 0 1 3.008-1.728l12 7a2 2 0 0 1 0 3.456l-12 7A2 2 0 0 1 5 19z" />
                </svg>
                See how it works
              </a>
            </div>

            {/* Trusted by */}
            <div className="animate-fade-up-4 mt-16 pt-12 border-t border-white/6">
              <p className="text-xs text-white/30 uppercase tracking-widest mb-6">
                Trusted by the team behind
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                {[
                  "ORA Hotel & Residences — $675M",
                  "Brickell River — $650M",
                  "1040 S Miami Ave — $800M+",
                  "North Bay Village — $30.9M",
                ].map((project) => (
                  <span key={project} className="text-sm text-white/40 font-light">
                    {project}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
