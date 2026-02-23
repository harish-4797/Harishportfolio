'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
    {
        title: 'AI & Deep Learning',
        icon: '🧠',
        color: '#3b82f6',
        glow: 'rgba(59,130,246,0.3)',
        skills: [
            { name: 'Python', level: 92 },
            { name: 'TensorFlow / Keras', level: 88 },
            { name: 'CNN Architecture', level: 90 },
            { name: 'MobileNet', level: 85 },
            { name: 'EfficientNet', level: 83 },
            { name: 'PyTorch', level: 72 },
        ],
    },
    {
        title: 'Data Intelligence',
        icon: '📊',
        color: '#8b5cf6',
        glow: 'rgba(139,92,246,0.3)',
        skills: [
            { name: 'SQL / MySQL', level: 88 },
            { name: 'Pandas / NumPy', level: 90 },
            { name: 'Power BI', level: 82 },
            { name: 'Data Visualization', level: 85 },
            { name: 'Statistical Analysis', level: 78 },
            { name: 'Excel / Sheets', level: 80 },
        ],
    },
    {
        title: 'Web Development',
        icon: '🌐',
        color: '#06b6d4',
        glow: 'rgba(6,182,212,0.3)',
        skills: [
            { name: 'HTML / CSS', level: 85 },
            { name: 'React.js', level: 75 },
            { name: 'JavaScript', level: 78 },
            { name: 'REST APIs', level: 72 },
            { name: 'Git / GitHub', level: 82 },
            { name: 'Next.js', level: 68 },
        ],
    },
    {
        title: 'Tools & Platforms',
        icon: '⚙️',
        color: '#10b981',
        glow: 'rgba(16,185,129,0.3)',
        skills: [
            { name: 'VS Code', level: 95 },
            { name: 'Google Colab', level: 90 },
            { name: 'Jupyter Notebook', level: 88 },
            { name: 'Linux / Terminal', level: 72 },
            { name: 'Matplotlib / Seaborn', level: 85 },
            { name: 'OpenCV', level: 75 },
        ],
    },
];

function SkillCard({ category, index, inView }: { category: typeof skillCategories[0]; index: number; inView: boolean }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="glass-strong rounded-3xl p-7 relative overflow-hidden group cursor-default"
            style={{
                border: `1px solid ${hovered ? category.color + '50' : 'rgba(255,255,255,0.06)'}`,
                boxShadow: hovered ? `0 0 40px ${category.glow}` : 'none',
                transform: hovered ? 'translateY(-6px) scale(1.01)' : 'translateY(0) scale(1)',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
        >
            {/* Background glow */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at top left, ${category.color}08, transparent 60%)` }}
            />

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                    style={{ background: `${category.color}20`, border: `1px solid ${category.color}30` }}
                >
                    {category.icon}
                </div>
                <h3 className="font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {category.title}
                </h3>
            </div>

            {/* Skills */}
            <div className="space-y-4">
                {category.skills.map((skill, i) => (
                    <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1.5">
                            <span className="text-slate-400 text-sm">{skill.name}</span>
                            <span className="text-xs font-mono" style={{ color: category.color }}>
                                {skill.level}%
                            </span>
                        </div>
                        <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                            <motion.div
                                className="h-full rounded-full"
                                initial={{ width: 0 }}
                                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                                transition={{ duration: 1, delay: index * 0.15 + i * 0.08 + 0.3, ease: 'easeOut' }}
                                style={{ background: `linear-gradient(90deg, ${category.color}, ${category.color}80)` }}
                            />
                        </div>
                    </div>
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

            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center flex flex-col items-center"
                >
                    <p className="text-blue-400 text-sm font-mono tracking-widest uppercase mb-3">02 · Skills</p>
                    <h2
                        className="text-4xl sm:text-5xl font-black text-white"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.03em' }}
                    >
                        Technical
                        <span className="gradient-text"> Arsenal</span>
                    </h2>
                    <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
                        A precision toolkit built for AI, data, and the web — deployed on real healthcare problems.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6">
                    {skillCategories.map((cat, i) => (
                        <div key={cat.title} className="w-full md:w-[calc(50%-12px)] xl:w-[calc(25%-18px)]">
                            <SkillCard category={cat} index={i} inView={inView} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
