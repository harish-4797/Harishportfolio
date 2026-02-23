'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const FORMSUBMIT_URL =
    'https://formsubmit.co/ajax/nimmagaddaharish4797@gmail.com';

export default function ContactSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>(
        'idle'
    );
    const [errors, setErrors] = useState<Record<string, string>>({});

    /* ── Validation ── */
    const validate = () => {
        const e: Record<string, string> = {};
        if (!form.name.trim()) e.name = 'Name is required';
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
            e.email = 'Valid email required';
        if (!form.message.trim() || form.message.length < 10)
            e.message = 'Message must be at least 10 characters';
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    /* ── Submit via FormSubmit AJAX ── */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setState('sending');

        try {
            const res = await fetch(FORMSUBMIT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    message: form.message,
                    // FormSubmit hidden fields
                    _subject: `Portfolio Contact from ${form.name}`,
                    _captcha: 'false',
                    _template: 'table',
                }),
            });

            const data = await res.json();

            if (data.success === 'true' || data.success === true) {
                setState('sent');
                setForm({ name: '', email: '', message: '' });
                setTimeout(() => setState('idle'), 7000);
            } else {
                setState('error');
                setTimeout(() => setState('idle'), 6000);
            }
        } catch {
            setState('error');
            setTimeout(() => setState('idle'), 6000);
        }
    };

    return (
        <section id="contact" className="relative py-32 overflow-hidden" ref={ref}>
            <div className="orb orb-blue absolute w-[500px] h-[500px] bottom-0 right-0 opacity-10" />
            <div className="orb orb-purple absolute w-[400px] h-[400px] top-0 left-0 opacity-[0.08]" />

            <div className="max-w-5xl mx-auto px-6">
                {/* ── Heading ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center flex flex-col items-center"
                >
                    <p className="text-blue-400 text-sm font-mono tracking-widest uppercase mb-3">
                        05 · Contact
                    </p>
                    <h2
                        className="text-4xl sm:text-5xl font-black text-white"
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            letterSpacing: '-0.03em',
                        }}
                    >
                        Let&apos;s Build
                        <span className="gradient-text"> Something Great</span>
                    </h2>
                    <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
                        Open for full-time roles, research collaborations, and interesting
                        AI projects.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* ── Left: Info cards ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {[
                            {
                                icon: '📍',
                                label: 'Location',
                                value: 'Andhra Pradesh, India',
                                sub: 'Open to remote & relocation',
                                color: '#3b82f6',
                            },
                            {
                                icon: '💼',
                                label: 'Open To',
                                value: 'AI/ML Roles • Data Science • Full Stack',
                                sub: 'Full-time · Internship · Remote',
                                color: '#8b5cf6',
                            },
                            {
                                icon: '✉️',
                                label: 'Email',
                                value: 'nimmagaddaharish4797@gmail.com',
                                sub: 'Response within 24 hours',
                                color: '#06b6d4',
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className="glass-strong rounded-2xl p-5 flex items-start gap-4 gradient-border"
                            >
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                                    style={{
                                        background: `${item.color}20`,
                                        border: `1px solid ${item.color}30`,
                                    }}
                                >
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-slate-500 mb-0.5">
                                        {item.label}
                                    </p>
                                    <p className="text-white font-semibold text-sm break-all">
                                        {item.value}
                                    </p>
                                    <p className="text-slate-500 text-xs">{item.sub}</p>
                                </div>
                            </motion.div>
                        ))}

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6 }}
                            className="flex gap-3"
                        >
                            {[
                                {
                                    label: 'LinkedIn',
                                    icon: (
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.023-3.037-1.852-3.037-1.852 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    ),
                                    href: 'https://linkedin.com/in/nimmagadda-harish',
                                    color: '#0a66c2',
                                },
                                {
                                    label: 'GitHub',
                                    icon: (
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    ),
                                    href: 'https://github.com/nimmagaddaharish',
                                    color: '#ffffff',
                                },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    id={`contact-${social.label.toLowerCase()}`}
                                    className="flex items-center gap-2 glass-strong px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
                                    style={{
                                        color: social.color,
                                        border: `1px solid ${social.color}20`,
                                    }}
                                >
                                    {social.icon}
                                    {social.label}
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* ── Right: Form ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <div
                            className="glass-strong rounded-3xl p-8"
                            style={{ border: '1px solid rgba(59,130,246,0.15)' }}
                        >
                            <AnimatePresence mode="wait">
                                {/* ✅ SUCCESS */}
                                {state === 'sent' && (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.85 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.85 }}
                                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                                        className="flex flex-col items-center justify-center h-72 text-center gap-3"
                                    >
                                        <motion.div
                                            className="text-6xl"
                                            animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
                                            transition={{ duration: 0.6, delay: 0.2 }}
                                        >
                                            🎉
                                        </motion.div>
                                        <h3
                                            className="text-white font-bold text-2xl"
                                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                        >
                                            Message Delivered!
                                        </h3>
                                        <p className="text-slate-400 text-sm">
                                            Your message is now in Harish&apos;s inbox.
                                        </p>
                                        <div
                                            className="mt-2 px-4 py-2 rounded-xl text-xs font-mono"
                                            style={{
                                                background: 'rgba(16,185,129,0.12)',
                                                border: '1px solid rgba(16,185,129,0.25)',
                                                color: '#34d399',
                                            }}
                                        >
                                            ✦ Expect a reply within 24 hours
                                        </div>
                                    </motion.div>
                                )}

                                {/* ❌ ERROR */}
                                {state === 'error' && (
                                    <motion.div
                                        key="error"
                                        initial={{ opacity: 0, scale: 0.85 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col items-center justify-center h-72 text-center gap-3"
                                    >
                                        <div className="text-5xl">⚠️</div>
                                        <h3
                                            className="text-white font-bold text-xl"
                                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                        >
                                            Submission Failed
                                        </h3>
                                        <p className="text-slate-400 text-sm max-w-xs">
                                            Please try emailing directly at{' '}
                                            <a
                                                href="mailto:nimmagaddaharish4797@gmail.com"
                                                className="text-blue-400 underline"
                                            >
                                                nimmagaddaharish4797@gmail.com
                                            </a>
                                        </p>
                                    </motion.div>
                                )}

                                {/* 📋 FORM (idle + sending) */}
                                {(state === 'idle' || state === 'sending') && (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        className="space-y-5"
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        noValidate
                                    >
                                        {/* Name */}
                                        <div>
                                            <label
                                                htmlFor="contact-name"
                                                className="block text-xs font-mono text-slate-400 mb-2 tracking-wider uppercase"
                                            >
                                                Your Name
                                            </label>
                                            <input
                                                id="contact-name"
                                                name="name"
                                                type="text"
                                                value={form.name}
                                                onChange={(e) =>
                                                    setForm({ ...form, name: e.target.value })
                                                }
                                                placeholder="e.g. Ravi Kumar"
                                                className="form-input w-full px-4 py-3 rounded-xl text-sm"
                                                disabled={state === 'sending'}
                                            />
                                            {errors.name && (
                                                <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                                                    <span>⚠</span> {errors.name}
                                                </p>
                                            )}
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label
                                                htmlFor="contact-email"
                                                className="block text-xs font-mono text-slate-400 mb-2 tracking-wider uppercase"
                                            >
                                                Your Email
                                            </label>
                                            <input
                                                id="contact-email"
                                                name="email"
                                                type="email"
                                                value={form.email}
                                                onChange={(e) =>
                                                    setForm({ ...form, email: e.target.value })
                                                }
                                                placeholder="you@company.com"
                                                className="form-input w-full px-4 py-3 rounded-xl text-sm"
                                                disabled={state === 'sending'}
                                            />
                                            {errors.email && (
                                                <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                                                    <span>⚠</span> {errors.email}
                                                </p>
                                            )}
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label
                                                htmlFor="contact-message"
                                                className="block text-xs font-mono text-slate-400 mb-2 tracking-wider uppercase"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                id="contact-message"
                                                name="message"
                                                value={form.message}
                                                onChange={(e) =>
                                                    setForm({ ...form, message: e.target.value })
                                                }
                                                placeholder="Tell me about the opportunity, project, or collaboration..."
                                                rows={5}
                                                className="form-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                                                disabled={state === 'sending'}
                                            />
                                            {errors.message && (
                                                <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                                                    <span>⚠</span> {errors.message}
                                                </p>
                                            )}
                                            <p className="text-slate-600 text-xs mt-1 text-right font-mono">
                                                {form.message.length} chars
                                            </p>
                                        </div>

                                        {/* Submit button */}
                                        <motion.button
                                            id="contact-submit"
                                            type="submit"
                                            disabled={state === 'sending'}
                                            whileTap={{ scale: 0.97 }}
                                            className="w-full py-4 rounded-xl font-semibold text-sm text-white magnetic-btn transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                                            style={{
                                                background:
                                                    'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                                boxShadow: '0 0 30px rgba(59,130,246,0.35)',
                                            }}
                                        >
                                            {state === 'sending' ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <motion.span
                                                        className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                                        animate={{ rotate: 360 }}
                                                        transition={{
                                                            repeat: Infinity,
                                                            duration: 0.75,
                                                            ease: 'linear',
                                                        }}
                                                    />
                                                    Sending...
                                                </span>
                                            ) : (
                                                'Send Message →'
                                            )}
                                        </motion.button>

                                        {/* Powered-by note */}
                                        <p className="text-center text-slate-600 text-xs font-mono">
                                            Powered by FormSubmit · Goes to nimmagaddaharish4797@gmail.com
                                        </p>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
