import { motion } from 'framer-motion';

export default function Tools() {
    const tools = [
        "Adobe Premiere Pro",
        "Adobe After Effects",
        "DaVinci Resolve",
        "CapCut"
    ];

    return (
        <section id="tools" className="py-24 px-6 sm:px-12 bg-[#151030] relative overflow-hidden">
            {/* Background glowing effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-secondary-accent)]/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-white"
                >
                    Tools I Use
                </motion.h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15, type: "spring", stiffness: 100 }}
                            whileHover={{
                                scale: 1.05,
                                y: -3,
                                boxShadow: "0 0 25px rgba(67, 97, 238, 0.3)",
                                borderColor: "rgba(67, 97, 238, 0.5)"
                            }}
                            className="bg-[var(--color-primary-bg)] px-8 py-5 rounded-full shadow-lg font-bold border border-white/5 text-[var(--color-secondary-text)] hover:text-white cursor-default transition-all duration-300"
                        >
                            {tool}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

