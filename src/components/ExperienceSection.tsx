'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
    {
        title: 'Data Analyst Trainee',
        company: 'Codegnan Destination',
        location: 'Hyderabad, India',
        period: 'Feb 2025 – June 2025',
        type: 'Internship',
        color: '#3b82f6',
        icon: '📊',
        description:
            'Assisted in derive actionable business insights by cleaning, analyzing, and visualizing large datasets using Python, Pandas, and Excel.',
        highlights: [
            'Built interactive dashboards and reports using Power BI',
            'Supported data-driven decision-making for strategic planning',
            'Collaborated with senior analysts to identify trends and patterns',
            'Deriving actionable insights from complex data streams',
        ],
        skills: ['Python', 'Pandas', 'Power BI', 'SQL', 'Data Analytics', 'Excel'],
    },
    {
        title: 'Full Stack Developer',
        company: 'Data Valley',
        location: 'Virtual',
        period: 'Feb 2024 – April 2024',
        type: 'Internship',
        color: '#8b5cf6',
        icon: '💻',
        description:
            'Participated in regular training sessions and workshops to develop core skills in full-stack development and machine learning integration.',
        highlights: [
            'Developed skills in comprehensive data analysis',
            'Explored machine learning model implementation',
            'Engaged in hands-on workshops and training modules',
            'Learned modern full-stack development workflows',
        ],
        skills: ['Full Stack', 'Machine Learning', 'Data Analysis', 'Problem Solving', 'Git'],
    },
    {
        title: 'B.Tech — Information Technology',
        company: 'Vasireddy Venkatadri Institute of Technology',
        location: 'Guntur, Andhra Pradesh',
        period: '2020 – 2024',
        type: 'Education',
        color: '#06b6d4',
        icon: '🎓',
        description:
            'Bachelor of Technology in Information Technology. Focused on applying deep learning to healthcare diagnostics as part of academic research.',
        highlights: [
            'Research Publication on Alzheimer\'s Detection',
            'Conference Presentation on AI in Healthcare',
            'Specialized in CNN and MobileNet Architectures',
            'Core focus on Algorithms and Data Analytics',
        ],
        skills: ['Python', 'Deep Learning', 'SQL', 'Data Structures', 'Research', 'Healthcare AI'],
    },
];

function ExperienceCard({ exp, index, inView }: { exp: typeof experiences[0]; index: number; inView: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="relative flex gap-8"
        >
            {/* Timeline line + node */}
            <div className="flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3, type: 'spring' }}
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 z-10"
                    style={{
                        background: `linear-gradient(135deg, ${exp.color}30, ${exp.color}10)`,
                        border: `1px solid ${exp.color}50`,
                        boxShadow: `0 0 20px ${exp.color}30`,
                    }}
                >
                    {exp.icon}
                </motion.div>
                {index < experiences.length - 1 && (
                    <motion.div
                        className="w-px flex-1 mt-3"
                        initial={{ scaleY: 0 }}
                        animate={inView ? { scaleY: 1 } : {}}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
                        style={{
                            background: `linear-gradient(180deg, ${exp.color}60, transparent)`,
                            transformOrigin: 'top',
                        }}
                    />
                )}
            </div>

            {/* Card */}
            <div
                className="glass-strong rounded-3xl p-7 mb-8 flex-1 group hover:border-opacity-50 transition-all duration-400"
                style={{
                    border: `1px solid rgba(255,255,255,0.06)`,
                }}
            >
                {/* Top row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span
                                className="text-xs font-mono px-2 py-0.5 rounded-md"
                                style={{ background: `${exp.color}20`, color: exp.color }}
                            >
                                {exp.type}
                            </span>
                            <span className="text-slate-500 text-xs font-mono">{exp.period}</span>
                        </div>
                        <h3
                            className="text-lg font-bold text-white"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                            {exp.title}
                        </h3>
                        <p style={{ color: exp.color }} className="text-sm font-medium">
                            {exp.company} · {exp.location}
                        </p>
                    </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-5">{exp.description}</p>

                {/* Highlights */}
                <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                            <span style={{ color: exp.color }} className="mt-0.5 flex-shrink-0">▹</span>
                            {h}
                        </li>
                    ))}
                </ul>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                    {exp.skills.map((s) => (
                        <span
                            key={s}
                            className="px-2 py-1 rounded-lg text-xs font-mono"
                            style={{
                                background: `${exp.color}12`,
                                border: `1px solid ${exp.color}25`,
                                color: `${exp.color}CC`,
                            }}
                        >
                            {s}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function ExperienceSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="experience" className="relative py-32 overflow-hidden" ref={ref}>
            <div className="orb orb-purple absolute w-[400px] h-[400px] top-0 left-1/2 opacity-08" />

            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center flex flex-col items-center"
                >
                    <p className="text-blue-400 text-sm font-mono tracking-widest uppercase mb-3">04 · Experience</p>
                    <h2
                        className="text-4xl sm:text-5xl font-black text-white"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.03em' }}
                    >
                        Career
                        <span className="gradient-text"> Timeline</span>
                    </h2>
                    <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
                        Every role sharpened a different edge of the blade.
                    </p>
                </motion.div>

                <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
                    {experiences.map((exp, i) => (
                        <ExperienceCard key={exp.company} exp={exp} index={i} inView={inView} />
                    ))}
                </div>
            </div>
        </section>
    );
}
