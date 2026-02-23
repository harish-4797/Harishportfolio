'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';

const projects = [
    {
        id: 'alzheimer',
        number: '01',
        title: "Early Alzheimer’s Detection",
        subtitle: 'Healthcare AI · Deep Learning',
        description:
            'Developed a deep learning model using CNN and Mobile-Net Architectures for early detection of Alzheimer’s Disease from MRI images. The project aims to mitigate disease severity by enabling detection before symptoms like memory loss escalate.',
        icon: '🧠',
        accent: '#3b82f6',
        glow: 'rgba(59,130,246,0.25)',
        tags: ['Python', 'TensorFlow', 'CNN', 'Mobile-Net', 'Medical Imaging'],
        metrics: [
            { label: 'Precision', value: 'High', color: '#3b82f6' },
            { label: 'Dataset', value: 'ADNI', color: '#8b5cf6' },
            { label: 'Domain', value: 'Neurology', color: '#06b6d4' },
        ],
        visual: (
            <div className="relative w-full h-full flex items-center justify-center">
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
            </div>
        ),
    },
    {
        id: 'retinopathy',
        number: '02',
        title: 'Diabetic Retinopathy Detection',
        subtitle: 'Computer Vision · Health AI',
        description:
            'severity classification using pre-trained EfficientNet-B5 on fundus images. Focuses on minimal preprocessing and maximum accuracy to assist medical experts in early diagnosis of diabetic vision loss.',
        icon: '👁️',
        accent: '#8b5cf6',
        glow: 'rgba(139,92,246,0.25)',
        tags: ['Python', 'TensorFlow', 'EfficientNet', 'Computer Vision', 'Keras'],
        metrics: [
            { label: 'Architecture', value: 'EfficientNet', color: '#8b5cf6' },
            { label: 'Classes', value: '5 Grades', color: '#3b82f6' },
            { label: 'Domain', value: 'Eye Care', color: '#06b6d4' },
        ],
        visual: (
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-32 h-24 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(59,130,246,0.1))', border: '1px solid rgba(139,92,246,0.4)' }}>
                        <motion.div
                            className="w-12 h-12 rounded-full flex items-center justify-center"
                            style={{ background: 'radial-gradient(circle, #4c1d95, #1e1b4b)' }}
                            animate={{ scale: [1, 1.08, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <motion.div
                                className="w-4 h-4 rounded-full bg-black shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                                animate={{ scale: [1, 0.7, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        ),
    },
];



function ProjectCard({ project, index, inView }: { project: typeof projects[0]; index: number; inView: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className="project-card glass-strong rounded-3xl relative w-full flex flex-col h-auto overflow-visible border border-white/5 hover:border-white/10 transition-colors"
            id={`project-${project.id}`}
        >
            <div
                className="relative h-56 overflow-hidden flex-shrink-0"
                style={{
                    background: `radial-gradient(ellipse at center, ${project.accent}15, transparent 70%), rgba(255,255,255,0.02)`,
                }}
            >
                {project.visual}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020817]/40" />

                <div className="absolute top-6 left-6">
                    <span className="font-mono text-6xl font-black opacity-10 text-white">{project.number}</span>
                </div>

                <div
                    className="absolute top-6 right-6 w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-lg glass"
                    style={{
                        background: `${project.accent}20`,
                        border: `1px solid ${project.accent}40`,
                    }}
                >
                    {project.icon}
                </div>
            </div>

            <div className="p-8 md:p-10 pb-12 flex flex-col flex-1 px-8 md:px-12">
                <p className="text-xs font-mono mb-2 uppercase tracking-widest" style={{ color: project.accent }}>{project.subtitle}</p>
                <h3
                    className="text-2xl md:text-3xl font-bold text-white mb-4"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    {project.title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-10 break-words">
                    {project.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                    {project.metrics.map((m) => (
                        <div key={m.label} className="text-center glass rounded-xl p-4 flex flex-col justify-center border-white/5">
                            <div className="font-bold text-base" style={{ color: m.color, fontFamily: "'Space Grotesk', sans-serif" }}>
                                {m.value}
                            </div>
                            <div className="text-slate-500 text-[10px] mt-1 leading-tight uppercase tracking-widest font-mono">{m.label}</div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-4 py-2 rounded-lg text-[10px] font-mono whitespace-nowrap"
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

            <div className="max-w-[1400px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center flex flex-col items-center"
                >
                    <p className="text-blue-400 text-sm font-mono tracking-widest uppercase mb-3">05 · Projects</p>
                    <h2
                        className="text-4xl sm:text-5xl font-black text-white"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.03em' }}
                    >
                        Building at the
                        <span className="gradient-text"> Frontier</span>
                    </h2>
                    <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
                        Building intelligent interfaces and specialized AI systems that bridge the gap between complex data and user experience.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start justify-center max-w-6xl mx-auto">
                    {projects.map((project, i) => (
                        <div key={project.id} className="flex flex-col h-auto">
                            <ProjectCard project={project} index={i} inView={inView} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
