import { motion } from 'framer-motion';

export default function Portfolio() {
    const projects = [
        {
            title: "Short-form Reel Edit",
            description: "Fast-paced, engaging content optimized for Instagram Reels.",
            embedUrl: "https://www.youtube.com/embed/ISrrlx01blo"
        },
        {
            title: "YouTube Video Edit",
            description: "Long-form storytelling with high retention techniques.",
            embedUrl: "https://www.youtube.com/embed/nwPEQIQRKtc"
        },
    ];

    return (
        <section id="portfolio" className="py-24 px-6 sm:px-12 bg-[var(--color-primary-bg)] relative">
            {/* Background decorative glows */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">Selected Work</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-[var(--color-secondary-bg)] rounded-3xl overflow-hidden shadow-2xl border border-white/5 hover:shadow-[0_0_40px_rgba(67,97,238,0.2)] hover:-translate-y-2 transition-all duration-500 group"
                        >
                            {/* Video Embed */}
                            <div className="w-full relative bg-black aspect-video">
                                <iframe
                                    src={project.embedUrl}
                                    width="100%"
                                    height="100%"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="border-none absolute inset-0"
                                    title={project.title}
                                />
                            </div>

                            {/* Project Info */}
                            <div className="p-8 md:p-10">
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[var(--color-highlight)] transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-[var(--color-secondary-text)] leading-relaxed text-lg">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


