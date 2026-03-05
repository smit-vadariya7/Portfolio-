import React from 'react';

const skills = [
    "Video Editing",
    "Adobe Premiere Pro",
    "After Effects",
    "Color Grading",
    "Sound Design"
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 sm:px-12 bg-[var(--color-primary-bg)] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--color-secondary-accent)]/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">Skills</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group bg-[var(--color-secondary-bg)] p-8 md:p-10 rounded-2xl shadow-lg border border-white/5 flex items-center justify-center text-center hover:shadow-[0_0_30px_rgba(67,97,238,0.2)] hover:-translate-y-2 hover:border-[var(--color-secondary-accent)]/40 transition-all duration-500 min-h-[140px] cursor-default"
                        >
                            <h3 className="text-xl font-bold text-[var(--color-secondary-text)] group-hover:text-[var(--color-highlight)] transition-colors duration-300">
                                {skill}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}



