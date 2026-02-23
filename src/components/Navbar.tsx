'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('');
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(e.target.id);
                });
            },
            { rootMargin: '-40% 0px -55% 0px' }
        );
        document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/* Progress bar */}
            <motion.div
                className="progress-bar"
                style={{ scaleX, width: '100%', transformOrigin: '0%' }}
            />

            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.8, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'
                    }`}
            >
                <div
                    className={`mx-auto max-w-7xl px-8 flex items-center justify-between rounded-full transition-all duration-500 py-3 ${scrolled ? 'glass-strong shadow-2xl border-white/5 mx-4 md:mx-auto' : 'bg-transparent'
                        }`}
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        className="font-mono text-sm font-semibold tracking-widest text-white hover:text-blue-400 transition-colors"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                        NH<span className="text-blue-500">.</span>AI
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                onClick={(e) => handleNav(e, href)}
                                className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 relative group ${active === href.slice(1)
                                    ? 'text-blue-400'
                                    : 'text-slate-400 hover:text-white'
                                    }`}
                            >
                                {label}
                                <span
                                    className={`absolute bottom-1 left-4 right-4 h-px bg-blue-500 transition-all duration-300 ${active === href.slice(1) ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                                        }`}
                                />
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="hidden md:flex items-center gap-2 px-4 py-2 text-sm rounded-xl font-medium text-white transition-all duration-300 magnetic-btn"
                        style={{
                            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                            boxShadow: '0 0 20px rgba(59,130,246,0.4)',
                        }}
                    >
                        Let's Talk
                    </a>
                </div>
            </motion.nav>
        </>
    );
}
