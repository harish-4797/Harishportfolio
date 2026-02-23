'use client';

import { motion } from 'framer-motion';

export default function Footer() {
    const handleTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="relative py-24 overflow-hidden mt-12">
            {/* Divider */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), rgba(139,92,246,0.3), transparent)' }}
            />

            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
                {/* Logo */}
                <motion.div
                    className="font-mono text-lg font-bold tracking-widest"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    whileHover={{ scale: 1.05 }}
                >
                    NH<span className="text-blue-500">.</span>
                    <span className="gradient-text">AI</span>
                </motion.div>

                {/* Tagline */}
                <p className="text-slate-600 text-sm text-center font-mono">
                    Building intelligent systems that detect diseases before symptoms escalate.
                </p>

                {/* Social icons */}
                <div className="flex items-center gap-4">
                    {[
                        {
                            href: 'https://www.linkedin.com/in/harish-nimmagadda-30a3471a6/',
                            label: 'LinkedIn',
                            icon: (
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.023-3.037-1.852-3.037-1.852 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            ),
                        },
                        {
                            href: 'https://github.com/harish-4797',
                            label: 'GitHub',
                            icon: (
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                            ),
                        },
                    ].map((social) => (
                        <a
                            key={social.label}
                            id={`footer-${social.label.toLowerCase()}`}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-500 hover:text-white hover:border-blue-500/30 transition-all duration-300 hover:scale-110"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                {/* Copyright + back to top */}
                <div className="flex items-center justify-between w-full max-w-lg">
                    <p className="text-slate-600 text-xs font-mono">
                        © 2025 Nimmagadda Harish. All rights reserved.
                    </p>

                    <motion.button
                        id="footer-back-to-top"
                        onClick={handleTop}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-xs text-slate-500 hover:text-blue-400 transition-colors font-mono magnetic-btn"
                    >
                        Back to top ↑
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
