"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              backdropFilter: "blur(12px)",
              backgroundColor: "color-mix(in srgb, var(--color-bg) 80%, transparent)",
              borderBottom: "1px solid var(--color-border)",
            }
          : {}
      }
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span
          className="font-bold text-lg"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          HG
          <span style={{ color: "var(--color-accent)" }}>.</span>
        </span>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium transition-colors duration-200 hover:text-(--color-text)"
                style={{ color: "var(--color-muted)" }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
