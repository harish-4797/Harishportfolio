'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState(0);

    const phases = ['Initializing AI systems...', 'Loading neural networks...', 'Rendering intelligence...', 'Ready.'];

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1.5;
            });
        }, 25);

        const p0 = setTimeout(() => setPhase(1), 600);
        const p1 = setTimeout(() => setPhase(2), 1200);
        const p2 = setTimeout(() => setPhase(3), 1800);
        const done = setTimeout(() => setLoading(false), 2600);

        return () => {
            clearInterval(interval);
            clearTimeout(p0);
            clearTimeout(p1);
            clearTimeout(p2);
            clearTimeout(done);
        };
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="fixed inset-0 z-[10000] flex flex-col items-center justify-center"
                    style={{ background: '#020817' }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                    {/* Neural pulse rings */}
                    <div className="relative flex items-center justify-center mb-12">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full border border-blue-500/30"
                                initial={{ width: 60, height: 60, opacity: 0.6 }}
                                animate={{ width: 60 + i * 50, height: 60 + i * 50, opacity: 0 }}
                                transition={{ duration: 2, delay: i * 0.4, repeat: Infinity, ease: 'easeOut' }}
                            />
                        ))}
                        <div className="w-14 h-14 rounded-full flex items-center justify-center"
                            style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', boxShadow: '0 0 40px rgba(59,130,246,0.5)' }}>
                            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>

                    <motion.p
                        key={phase}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="preloader-text text-xs text-blue-400 mb-8 tracking-widest uppercase"
                    >
                        {phases[phase]}
                    </motion.p>

                    {/* Progress bar */}
                    <div className="w-64 h-px bg-white/10 relative overflow-hidden">
                        <motion.div
                            className="absolute inset-y-0 left-0"
                            style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)' }}
                            animate={{ width: `${Math.min(progress, 100)}%` }}
                            transition={{ duration: 0.1 }}
                        />
                    </div>
                    <p className="mt-3 text-slate-500 text-xs font-mono">{Math.round(Math.min(progress, 100))}%</p>

                    <motion.p
                        className="absolute bottom-8 text-slate-600 text-xs tracking-widest uppercase font-mono"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        HARISH.AI
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
