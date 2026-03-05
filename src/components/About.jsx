import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="min-h-screen py-24 px-8 bg-[#151030] relative overflow-hidden flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto relative z-10 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-12 text-white">About Me</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-[700px] mx-auto"
                >
                    <div className="space-y-8">
                        <p className="text-xl md:text-2xl text-[var(--color-secondary-text)] leading-[1.7] md:leading-[1.8]">
                            I’m Smit, a <span className="text-[var(--color-highlight)] font-bold">video editor</span> passionate about storytelling and visual rhythm.
                        </p>
                        <p className="text-xl md:text-2xl text-[var(--color-secondary-text)] leading-[1.7] md:leading-[1.8]">
                            My journey started with frontend development, but I soon realized that writing code wasn’t where my real passion lived. What truly pulled me in was the creative process shaping moments, controlling pacing, and turning raw footage into something meaningful.
                        </p>
                        <p className="text-xl md:text-2xl text-[var(--color-secondary-text)] leading-[1.7] md:leading-[1.8]">
                            Video editing became the space where creativity and precision meet.
                        </p>
                        <p className="text-xl md:text-2xl text-[var(--color-secondary-text)] leading-[1.7] md:leading-[1.8]">
                            Today, I focus on creating engaging edits that capture attention and keep viewers watching. Every cut, transition, and frame is an opportunity to tell a better story.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
