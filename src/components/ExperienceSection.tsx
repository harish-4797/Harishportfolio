'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
    {
        title: 'Data Analyst Intern',
        company: 'Codegnan IT Solutions',
        location: 'Andhra Pradesh, India',
        period: '2023',
        type: 'Internship',
        color: '#3b82f6',
        icon: '📊',
        description:
            'Worked on real business datasets to extract actionable insights. Performed end-to-end data cleaning, transformation, and visualization using Python (Pandas, NumPy) and Power BI. Created interactive dashboards that enabled faster business decisions.',
        highlights: [
            'Built Power BI dashboards with 20+ KPI metrics',
            'Processed and cleaned 100,000+ row datasets',
            'Applied statistical analysis to business problems',
            'Automated data pipelines using Python scripts',
        ],
        skills: ['Python', 'Pandas', 'Power BI', 'SQL', 'Data Visualization', 'Statistics'],
    },
    {
        title: 'Full Stack Developer Trainee',
        company: 'Data Valley Virtual',
        location: 'Remote',
        period: '2023',
        type: 'Training',
        color: '#8b5cf6',
        icon: '💻',
        description:
            'Received intensive training in full-stack web development with exposure to ML system integration. Built web interfaces, REST APIs, and learned how to connect machine learning models to production environments.',
        highlights: [
            'Developed full-stack web applications',
            'Integrated ML models into web interfaces',
            'REST API design and consumption',
            'Learned agile development practices',
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'REST APIs', 'Machine Learning', 'Git'],
    },
    {
        title: 'B.Tech — Information Technology',
        company: 'Andhra Pradesh University',
        location: 'Andhra Pradesh, India',
        period: '2020 – 2024',
        type: 'Education',
        color: '#06b6d4',
        icon: '🎓',
        description:
            'Completed Bachelor of Technology in Information Technology. During the program, independently pursued deep learning research focusing on healthcare applications — building Alzheimer\'s Detection and Diabetic Retinopathy systems beyond curriculum.',
        highlights: [
            'Built Alzheimer\'s Detection System using CNN + MobileNet',
            'Built Diabetic Retinopathy classifier using EfficientNet-B5',
            'Studied Algorithms, DBMS, ML Fundamentals',
            'Led final year AI healthcare project',
        ],
        skills: ['Deep Learning', 'Python', 'CNN', 'MobileNet', 'EfficientNet', 'Research', 'Data Structures'],
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
