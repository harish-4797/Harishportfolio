'use client';

import { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, useSpring } from 'framer-motion';

const education = [
    {
        degree: 'Information Technology - BTech',
        institution: 'Vasireddy Venkatadri Institute of Technology',
        location: 'Guntur, Andhra Pradesh',
        period: '2020 – 2024',
        color: '#06b6d4',
        icon: '🎓',
        details: [
            'Bachelor of Technology in Information Technology.',
            'Focused on applying deep learning to healthcare diagnostics as part of academic research.',
            'Research Publication on Alzheimer\'s Detection.',
            'Specialized in CNN and MobileNet Architectures.'
        ],
        skills: ['Python', 'Deep Learning', 'SQL', 'Data Structures', 'Research']
    },
];

function EducationCard({ edu, index, inView }: { edu: typeof education[0]; index: number; inView: boolean }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);

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
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="relative w-full"
            style={{ perspective: '1200px' }}
        >
            <motion.div
                className="glass-strong rounded-3xl p-8 md:p-10 mb-8 w-full group hover:border-opacity-50 transition-all duration-400"
                style={{
                    border: `1px solid rgba(255,255,255,0.06)`,
                    background: 'linear-gradient(135deg, rgba(6,182,212,0.05), rgba(255,255,255,0.02))',
                    rotateX: hovered ? rotateX : 0,
                    rotateY: hovered ? rotateY : 0,
                    transformStyle: 'preserve-3d',
                }}
            >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex gap-5" style={{ transform: 'translateZ(50px)' }}>
                        <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                            style={{
                                background: `linear-gradient(135deg, ${edu.color}30, ${edu.color}10)`,
                                border: `1px solid ${edu.color}40`,
                                boxShadow: `0 0 30px ${edu.color}20`,
                            }}
                        >
                            {edu.icon}
                        </div>
                        <div>
                            <h3
                                className="text-2xl font-bold text-white mb-1"
                                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                                {edu.degree}
                            </h3>
                            <p style={{ color: edu.color }} className="text-lg font-medium">
                                {edu.institution}
                            </p>
                            <div className="flex items-center gap-2 mt-2 text-slate-500 text-sm font-mono">
                                <span>{edu.location}</span>
                                <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                                <span>{edu.period}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function EducationSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="education" className="relative py-32 overflow-hidden" ref={ref}>
            <div className="orb orb-cyan absolute w-[400px] h-[400px] bottom-0 right-0 opacity-10" />

            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center flex flex-col items-center"
                >
                    <p className="text-blue-400 text-sm font-mono tracking-widest uppercase mb-3">02 · Education</p>
                    <h2
                        className="text-4xl sm:text-5xl font-black text-white"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.03em' }}
                    >
                        Academic
                        <span className="gradient-text"> Foundation</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
                    {education.map((edu, i) => (
                        <EducationCard key={i} edu={edu} index={i} inView={inView} />
                    ))}
                </div>
            </div>
        </section>
    );
}
