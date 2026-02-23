'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import dynamic from 'next/dynamic';

const NeuralNetworkBG = dynamic(() => import('./NeuralNetworkBG'), { ssr: false });

export default function HeroSection() {
    const contentRef = useRef<HTMLDivElement>(null);
    const handleScroll = (id: string) => {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    // 3D Tilt for Hero Content
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

    const handleMouseMove = (e: React.MouseEvent) => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section
            id="hero"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
            style={{ perspective: '1200px' }}
        >
            {/* 3D Background */}
            <NeuralNetworkBG />

            {/* Ambient Orbs */}
            <div className="orb orb-blue absolute w-[600px] h-[600px] -top-32 -left-32 opacity-20" />
            <div className="orb orb-purple absolute w-[500px] h-[500px] -bottom-32 -right-32 opacity-15" />
            <div className="orb orb-cyan absolute w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

            {/* Content */}
            <motion.div
                ref={contentRef}
                className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center"
                style={{
                    rotateX: rotateX,
                    rotateY: rotateY,
                    transformStyle: 'preserve-3d',
                }}
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 3.0 }}
                    className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-[10px] md:text-xs text-blue-400 mb-10 font-mono tracking-[0.2em] border-white/10"
                    style={{ transform: 'translateZ(60px)' }}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                    AVAILABLE FOR OPPORTUNITIES
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter mb-6 leading-[0.9]"
                    style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        transform: 'translateZ(100px)'
                    }}
                >
                    <span className="text-white">Nimmagadda</span>
                    <br />
                    <span className="gradient-text text-glow block mt-2">Harish</span>
                </motion.h1>

                {/* Simplified Role */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 3.3 }}
                    className="text-2xl sm:text-4xl font-medium mb-12"
                    style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        transform: 'translateZ(40px)'
                    }}
                >
                    <span className="gradient-text font-bold">Web Development with AI</span>
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 3.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    style={{ transform: 'translateZ(20px)' }}
                >
                    <button
                        id="hero-view-work"
                        onClick={() => handleScroll('#projects')}
                        className="magnetic-btn group relative px-10 py-5 rounded-2xl font-bold text-white text-sm tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
                        style={{
                            background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                            boxShadow: '0 10px 40px -10px rgba(37, 99, 235, 0.5)',
                        }}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View My Work <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                    </button>

                    <a
                        id="hero-download-resume"
                        href="/resume.pdf"
                        download
                        className="magnetic-btn px-10 py-5 rounded-2xl font-bold text-sm text-white glass border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        Download Resume ↓
                    </a>

                    <button
                        id="hero-lets-build"
                        onClick={() => handleScroll('#contact')}
                        className="magnetic-btn px-8 py-5 rounded-2xl font-bold text-sm text-slate-400 hover:text-white transition-all duration-300"
                    >
                        Let&apos;s Build Something ✦
                    </button>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-slate-600 text-xs tracking-widest uppercase font-mono">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent"
                />
            </motion.div>
        </section>
    );
}

