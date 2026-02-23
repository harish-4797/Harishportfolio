'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const projects = [
    {
        id: 'alzheimer',
        number: '01',
        title: "Early Alzheimer's Detection",
        subtitle: 'Healthcare AI · Deep Learning',
        description:
            'A multi-stage dementia prediction system using CNN and MobileNet architectures trained on the ADNI dataset. Classifies MRI brain scans into Normal Cognition, Mild Cognitive Impairment, and Alzheimer\'s Disease stages with high accuracy — enabling early intervention before severe symptoms manifest.',
        icon: '🧠',
        accent: '#3b82f6',
        glow: 'rgba(59,130,246,0.25)',
        tags: ['CNN', 'MobileNet', 'TensorFlow', 'ADNI Dataset', 'MRI Classification', 'Python', 'Keras'],
        metrics: [
            { label: 'Classification Accuracy', value: '94.2%', color: '#3b82f6' },
            { label: 'Dataset Images', value: '6,400+', color: '#8b5cf6' },
            { label: 'Disease Stages', value: '4 Classes', color: '#06b6d4' },
        ],
        visual: (
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Animated brain visualization */}
                <div className="relative">
                    {[0, 1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full border"
                            style={{
                                width: 60 + i * 35,
                                height: 60 + i * 35,
                                borderColor: `rgba(59,130,246,${0.6 - i * 0.12})`,
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                            transition={{ duration: 4 + i, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
                        />
                    ))}
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
                        style={{ background: 'linear-gradient(135deg, #1e3a8a, #4c1d95)' }}>
                        🧠
                    </div>
                </div>
                {/* MRI scan lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute left-0 right-0 h-px"
                        style={{ top: `${20 + i * 12}%`, background: 'rgba(59,130,246,0.3)' }}
                        animate={{ opacity: [0, 0.8, 0], x: ['-100%', '100%'] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4, ease: 'linear' }}
                    />
                ))}
            </div>
        ),
    },
    {
        id: 'retinopathy',
        number: '02',
        title: 'Diabetic Retinopathy Detection',
        subtitle: 'Healthcare AI · Computer Vision',
        description:
            'An automated fundus image classification system using EfficientNet-B5 to detect and grade Diabetic Retinopathy severity. The model processes retinal photographs to identify disease progression from No DR to Proliferative DR, enabling mass screening without specialist intervention.',
        icon: '👁️',
        accent: '#8b5cf6',
        glow: 'rgba(139,92,246,0.25)',
        tags: ['EfficientNet-B5', 'TensorFlow', 'Computer Vision', 'Fundus Images', 'Severity Grading', 'Python'],
        metrics: [
            { label: 'Model Architecture', value: 'EfficientNet-B5', color: '#8b5cf6' },
            { label: 'Severity Grades', value: '5 Levels', color: '#3b82f6' },
            { label: 'Task Type', value: 'Multi-class', color: '#06b6d4' },
        ],
        visual: (
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Eye animation */}
                <div className="relative w-32 h-24 flex items-center justify-center">
                    <div className="w-32 h-20 rounded-full overflow-hidden flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(59,130,246,0.1))', border: '1px solid rgba(139,92,246,0.4)' }}>
                        {/* Iris */}
                        <motion.div
                            className="w-16 h-16 rounded-full flex items-center justify-center"
                            style={{ background: 'radial-gradient(circle, #4c1d95, #1e1b4b)' }}
                            animate={{ scale: [1, 1.08, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            {/* Pupil */}
                            <motion.div
                                className="w-6 h-6 rounded-full bg-black"
                                animate={{ scale: [1, 0.7, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                        </motion.div>
                    </div>
                    {/* Scan line */}
                    <motion.div
                        className="absolute left-0 right-0 h-0.5"
                        style={{ background: 'rgba(139,92,246,0.8)' }}
                        animate={{ top: ['10%', '90%', '10%'], opacity: [0, 1, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                    />
                </div>
            </div>
        ),
    },
    {
        id: 'analytics',
        number: '03',
        title: 'Business Analytics Dashboard',
        subtitle: 'Data Analytics · Power BI',
        description:
            'End-to-end data pipeline and analytics solution built during my internship at Codegnan. Performed large-scale data cleaning and transformation using Pandas, developed interactive Power BI dashboards, and generated actionable business insights that directly influenced operational decisions.',
        icon: '📊',
        accent: '#06b6d4',
        glow: 'rgba(6,182,212,0.25)',
        tags: ['Python', 'Pandas', 'Power BI', 'Data Cleaning', 'SQL', 'Business Intelligence', 'Visualization'],
        metrics: [
            { label: 'Data Processed', value: '100K+ Rows', color: '#06b6d4' },
            { label: 'Dashboard Views', value: 'Real-time', color: '#3b82f6' },
            { label: 'Insights Generated', value: '20+ KPIs', color: '#8b5cf6' },
        ],
        visual: (
            <div className="relative w-full h-full p-4 flex flex-col gap-2 justify-center">
                {/* Mini dashboard UI */}
                {[0.85, 0.62, 0.91, 0.44, 0.73].map((val, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <span className="text-slate-500 text-xs font-mono w-12">Metric {i + 1}</span>
                        <div className="flex-1 h-2 rounded-full bg-white/5">
                            <motion.div
                                className="h-full rounded-full"
                                style={{ background: `linear-gradient(90deg, #06b6d4, #3b82f6)` }}
                                initial={{ width: 0 }}
                                animate={{ width: `${val * 100}%` }}
                                transition={{ duration: 1.5, delay: i * 0.2, ease: 'easeOut' }}
                            />
                        </div>
                        <span className="text-cyan-400 text-xs font-mono w-10">{Math.round(val * 100)}%</span>
                    </div>
                ))}
                <div className="flex gap-2 mt-1">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((m, i) => (
                        <div key={m} className="flex-1 flex flex-col items-center gap-1">
                            <motion.div
                                className="w-full rounded-sm"
                                style={{ background: 'rgba(6,182,212,0.5)', minHeight: 4 }}
                                initial={{ height: 4 }}
                                animate={{ height: `${[20, 35, 28, 45, 38, 52][i]}px` }}
                                transition={{ duration: 1, delay: i * 0.1 + 0.5 }}
                            />
                            <span className="text-slate-600 text-xs">{m}</span>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
];

function ProjectCard({ project, index, inView }: { project: typeof projects[0]; index: number; inView: boolean }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="project-card glass-strong rounded-3xl overflow-hidden relative group"
            style={{
                border: `1px solid ${hovered ? project.accent + '40' : 'rgba(255,255,255,0.06)'}`,
                boxShadow: hovered ? `0 20px 80px ${project.glow}` : 'none',
            }}
            id={`project-${project.id}`}
        >
            {/* Visual area */}
            <div
                className="relative h-48 overflow-hidden"
                style={{ background: `radial-gradient(ellipse at center, ${project.accent}15, transparent 70%), rgba(255,255,255,0.02)` }}
            >
                {project.visual}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0f2e]/60" />

                {/* Number badge */}
                <div className="absolute top-4 left-4">
                    <span className="font-mono text-6xl font-black opacity-10 text-white">{project.number}</span>
                </div>

                {/* Icon */}
                <div
                    className="absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                    style={{ background: `${project.accent}20`, border: `1px solid ${project.accent}40` }}
                >
                    {project.icon}
                </div>
            </div>

            {/* Content */}
            <div className="p-7">
                <p className="text-xs font-mono mb-2" style={{ color: project.accent }}>{project.subtitle}</p>
                <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                    {project.metrics.map((m) => (
                        <div key={m.label} className="text-center glass rounded-xl p-3">
                            <div className="font-bold text-sm" style={{ color: m.color, fontFamily: "'Space Grotesk', sans-serif" }}>
                                {m.value}
                            </div>
                            <div className="text-slate-600 text-xs mt-1 leading-tight">{m.label}</div>
                        </div>
                    ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 rounded-lg text-xs font-mono"
                            style={{
                                background: `${project.accent}12`,
                                border: `1px solid ${project.accent}25`,
                                color: project.accent,
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function ProjectsSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="projects" className="relative py-32 overflow-hidden" ref={ref}>
            <div className="orb orb-cyan absolute w-[400px] h-[400px] top-1/3 right-0 opacity-10" />

            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center flex flex-col items-center"
                >
                    <p className="text-blue-400 text-sm font-mono tracking-widest uppercase mb-3">03 · Projects</p>
                    <h2
                        className="text-4xl sm:text-5xl font-black text-white"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.03em' }}
                    >
                        Building at the
                        <span className="gradient-text"> Frontier</span>
                    </h2>
                    <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
                        Real AI systems solving real medical problems — not toy demos.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} inView={inView} />
                    ))}
                </div>
            </div>
        </section>
    );
}
