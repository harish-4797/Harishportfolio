'use client';

import { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, useSpring } from 'framer-motion';

const skillCategories = [
    {
        title: 'Core Development',
        icon: '💻',
        color: '#3b82f6',
        glow: 'rgba(59,130,246,0.3)',
        skills: [
            { name: 'Python' },
            { name: 'JavaScript' },
            { name: 'TypeScript' },
            { name: 'HTML5 & CSS3' },
            { name: 'React' },
            { name: 'Next.js' },
        ],
    },
    {
        title: 'AI & Intelligence',
        icon: '🧠',
        color: '#8b5cf6',
        glow: 'rgba(139,92,246,0.3)',
        skills: [
            { name: 'Deep Learning' },
            { name: 'Computer Vision' },
            { name: 'TensorFlow' },
            { name: 'OpenAI API' },
            { name: 'Scikit-Learn' },
            { name: 'NLP' },
        ],
    },
    {
        title: 'Intelligence Stack',
        icon: '📊',
        color: '#06b6d4',
        glow: 'rgba(6,182,212,0.3)',
        skills: [
            { name: 'SQL' },
            { name: 'Pandas' },
            { name: 'Matplotlib' },
            { name: 'NumPy' },
            { name: 'Power BI' },
            { name: 'Data Mining' },
        ],
    },
    {
        title: 'Core Expertise',
        icon: '⚙️',
        color: '#10b981',
        glow: 'rgba(16,185,129,0.3)',
        skills: [
            { name: 'Problem Solving' },
            { name: 'Full Stack Dev' },
            { name: 'Research' },
            { name: 'Cloud Integration' },
            { name: 'Git & GitHub' },
            { name: 'Linux' },
        ],
    },
];

function SkillCard({ category, index, inView }: { category: typeof skillCategories[0]; index: number; inView: boolean }) {
    const [hovered, setHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    // Mouse tracking for 3D tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

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
            transition={{ duration: 0.6, delay: index * 0.15 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="glass-strong rounded-2xl p-6 relative group cursor-default flex flex-col"
            style={{
                border: `1px solid ${hovered ? category.color + '50' : 'rgba(255,255,255,0.06)'}`,
                boxShadow: hovered ? `0 0 40px ${category.glow}` : 'none',
                rotateX: hovered ? rotateX : 0,
                rotateY: hovered ? rotateY : 0,
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                transition: 'all 0.1s ease-out',
            }}
        >
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl overflow-hidden pointer-events-none"
                style={{
                    background: `radial-gradient(ellipse at top left, ${category.color}08, transparent 60%)`,
                    transform: 'translateZ(20px)'
                }}
            />

            <div className="flex items-center gap-3 mb-5" style={{ transform: 'translateZ(40px)' }}>
                <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                    style={{ background: `${category.color}20`, border: `1px solid ${category.color}30` }}
                >
                    {category.icon}
                </div>
                <h3 className="font-bold text-white text-sm sm:text-base" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {category.title}
                </h3>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto" style={{ transform: 'translateZ(30px)' }}>
                {category.skills.map((skill, i) => (
                    <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                        className="px-3 py-1.5 rounded-xl text-[12px] font-mono font-medium"
                        style={{
                            background: `${category.color}15`,
                            border: `1px solid ${category.color}25`,
                            color: category.color,
                        }}
                    >
                        {skill.name}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
}

export default function SkillsSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="skills" className="relative py-32 overflow-hidden" ref={ref}>
            <div className="orb orb-blue absolute w-[500px] h-[500px] bottom-0 -left-32 opacity-10" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center flex flex-col items-center"
                >
                    <p className="text-blue-400 text-sm font-mono tracking-widest uppercase mb-3">03 · Skills</p>
                    <h2
                        className="text-4xl sm:text-5xl font-black text-white"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.03em' }}
                    >
                        Technical
                        <span className="gradient-text"> Arsenal</span>
                    </h2>
                    <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
                        A tech stack optimized for building intelligent web applications and high-performance AI systems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                    {skillCategories.map((cat, i) => (
                        <div key={cat.title} className="flex flex-col">
                            <SkillCard category={cat} index={i} inView={inView} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
