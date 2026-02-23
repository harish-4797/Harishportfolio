'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
    { value: 2, suffix: '+', label: 'AI Healthcare\nModels Built' },
    { value: 95, suffix: '%+', label: 'Model\nAccuracy' },
    { value: 3, suffix: '+', label: 'Production\nProjects' },
    { value: 1, suffix: 'yr+', label: 'Industry\nExperience' },
];

export default function AboutSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
            <div className="orb orb-purple absolute w-[400px] h-[400px] top-0 right-0 opacity-10" />

            <div className="max-w-6xl mx-auto px-6">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >
                    <p className="text-blue-400 text-sm font-mono tracking-widest uppercase mb-3">01 · About</p>
                    <h2
                        className="text-4xl sm:text-5xl font-black text-white"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.03em' }}
                    >
                        The Story Behind
                        <span className="gradient-text"> the Code</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left – portrait card */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative"
                    >
                        <div
                            className="relative rounded-3xl overflow-hidden aspect-square max-w-sm mx-auto"
                            style={{
                                background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))',
                                border: '1px solid rgba(59,130,246,0.2)',
                                boxShadow: '0 0 60px rgba(59,130,246,0.15), inset 0 0 60px rgba(139,92,246,0.05)',
                            }}
                        >
                            {/* Avatar illustration */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    {/* Outer glow ring */}
                                    <div
                                        className="w-48 h-48 rounded-full flex items-center justify-center"
                                        style={{
                                            background: 'linear-gradient(135deg, #1e3a8a, #4c1d95)',
                                            boxShadow: '0 0 60px rgba(59,130,246,0.3)',
                                        }}
                                    >
                                        <div className="text-7xl select-none">🧠</div>
                                    </div>
                                    {/* Orbit dots */}
                                    {[0, 1, 2, 3].map((i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-3 h-3 rounded-full"
                                            style={{
                                                background: i % 2 === 0 ? '#3b82f6' : '#8b5cf6',
                                                top: '50%',
                                                left: '50%',
                                            }}
                                            animate={{
                                                rotate: [i * 90, i * 90 + 360],
                                                x: [Math.cos((i * Math.PI) / 2) * 90 - 6, Math.cos((i * Math.PI) / 2 + Math.PI * 2) * 90 - 6],
                                                y: [Math.sin((i * Math.PI) / 2) * 90 - 6, Math.sin((i * Math.PI) / 2 + Math.PI * 2) * 90 - 6],
                                            }}
                                            transition={{ duration: 6, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Name badge */}
                            <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                                <div className="glass px-4 py-2 rounded-xl text-center">
                                    <p className="text-white font-bold text-sm">Nimmagadda Harish</p>
                                    <p className="text-blue-400 text-xs font-mono">AI Systems Engineer</p>
                                </div>
                            </div>

                            {/* Location badge */}
                            <div className="absolute top-6 right-6">
                                <div className="glass px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                                    <span className="text-xs">📍</span>
                                    <span className="text-xs text-slate-300">Andhra Pradesh, India</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating tech badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute -top-4 -right-4 glass px-3 py-2 rounded-xl text-xs font-mono text-blue-400 hidden lg:block"
                        >
                            🤖 CNN + MobileNet
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -bottom-4 -left-4 glass px-3 py-2 rounded-xl text-xs font-mono text-purple-400 hidden lg:block"
                        >
                            📊 EfficientNet-B5
                        </motion.div>
                    </motion.div>

                    {/* Right – story text */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="space-y-6"
                    >
                        <div className="space-y-4 text-slate-400 leading-relaxed">
                            <p className="text-lg">
                                From Information Technology undergraduate to building{' '}
                                <span className="text-white font-medium">AI systems that save lives</span> — that&apos;s not a traditional career path. That&apos;s a mission.
                            </p>

                            <p>
                                During my B.Tech (2020–2024), I didn&apos;t just study algorithms — I{' '}
                                <span className="text-blue-400 font-medium">applied them to real medical problems</span>.
                                I built a Deep Learning model for Early Alzheimer&apos;s Detection using CNN & MobileNet on the ADNI dataset,
                                classifying MRI scans across multiple stages of dementia progression.
                            </p>

                            <p>
                                Then I tackled Diabetic Retinopathy — using{' '}
                                <span className="text-purple-400 font-medium">EfficientNet-B5</span> to classify fundus images and grade
                                severity levels, potentially enabling mass screening of millions who lack access to ophthalmologists.
                            </p>

                            <p>
                                As a <span className="text-cyan-400 font-medium">Data Analyst Intern at Codegnan</span>, I turned raw business
                                data into actionable insights using Python, Pandas, and Power BI. At{' '}
                                <span className="text-blue-400 font-medium">Data Valley Virtual</span>, I expanded into full-stack development
                                with ML system integration.
                            </p>
                        </div>

                        {/* Highlight tags */}
                        <div className="flex flex-wrap gap-2">
                            {['Deep Learning', 'Healthcare AI', 'CNN', 'MobileNet', 'EfficientNet-B5', 'Data Analytics', 'Python'].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full text-xs font-mono"
                                    style={{
                                        background: 'rgba(59,130,246,0.1)',
                                        border: '1px solid rgba(59,130,246,0.2)',
                                        color: '#93c5fd',
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
                >
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="glass-strong rounded-2xl p-6 text-center gradient-border"
                        >
                            <div className="text-4xl font-black gradient-text mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                {inView ? (
                                    <CountUp end={stat.value} duration={2} delay={0.5 + i * 0.2} />
                                ) : (
                                    '0'
                                )}
                                <span>{stat.suffix}</span>
                            </div>
                            <p className="text-slate-500 text-xs font-mono leading-tight whitespace-pre-line">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
