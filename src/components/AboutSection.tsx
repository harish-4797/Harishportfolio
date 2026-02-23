'use client';

import { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, useSpring } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
    { value: 2, suffix: '+', label: 'AI Healthcare\nModels Built' },
    { value: 95, suffix: '%+', label: 'Model\nAccuracy' },
    { value: 3, suffix: '+', label: 'Production\nProjects' },
    { value: 1, suffix: 'yr+', label: 'Industry\nExperience' },
];

function AboutPortrait({ inView }: { inView: boolean }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['15deg', '-15deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-15deg', '15deg']);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        setHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="relative w-full flex justify-center"
            style={{ perspective: '1000px' }}
        >
            <motion.div
                className="relative rounded-3xl overflow-hidden aspect-square w-full max-w-sm"
                style={{
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))',
                    border: hovered ? '1px solid rgba(59,130,246,0.4)' : '1px solid rgba(59,130,246,0.2)',
                    boxShadow: hovered ? '0 0 60px rgba(59,130,246,0.25)' : '0 0 60px rgba(59,130,246,0.15)',
                    rotateX: hovered ? rotateX : 0,
                    rotateY: hovered ? rotateY : 0,
                    transformStyle: 'preserve-3d',
                }}
            >
                {/* Avatar illustration */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateZ(40px)' }}>
                    <div className="relative">
                        <div
                            className="w-48 h-48 rounded-full flex items-center justify-center"
                            style={{
                                background: 'linear-gradient(135deg, #1e3a8a, #4c1d95)',
                                boxShadow: '0 0 60px rgba(59,130,246,0.3)',
                            }}
                        >
                            <div className="text-7xl select-none">🧠</div>
                        </div>
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

                <div className="absolute bottom-6 left-0 right-0 flex justify-center" style={{ transform: 'translateZ(60px)' }}>
                    <div className="glass px-4 py-2 rounded-xl text-center shadow-2xl">
                        <p className="text-white font-bold text-sm">Nimmagadda Harish</p>
                        <p className="text-blue-400 text-xs font-mono">Web Developer & AI Specialist</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

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

                <div className="flex flex-col items-center gap-16 text-center">
                    {/* Portrait card (Centered) */}
                    <AboutPortrait inView={inView} />

                    {/* Story text (Centered) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="max-w-3xl text-center space-y-8"
                    >
                        <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                            <p>
                                I am an <span className="text-white font-semibold">Aspiring Information Technology professional</span> and a recent B.Tech graduate from Vasireddy Venkatadri Institute of Technology.
                            </p>

                            <p>
                                My mission is to merge <span className="text-blue-400 font-semibold">Web Development with AI</span> to build intelligent, scalable applications that solve real-world problems. I specialize in creating seamless user experiences powered by data-driven insights.
                            </p>

                            <p>
                                Beyond code, I have a strong foundation in <span className="text-purple-400 font-semibold">Research and Academic Excellence</span>, with experience in research publications and conference presentations within the healthcare AI domain.
                            </p>
                        </div>

                        {/* Highlight tags */}
                        <div className="flex flex-wrap justify-center gap-3 pt-4">
                            {['Python', 'SQL', 'MySQL', 'Data Analytics', 'Power BI', 'HTML', 'CSS', 'Communication', 'Problem Solving'].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-1.5 rounded-full text-xs font-mono tracking-wider"
                                    style={{
                                        background: 'rgba(59,130,246,0.08)',
                                        border: '1px solid rgba(59,130,246,0.15)',
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
