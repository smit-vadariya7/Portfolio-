import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 sm:px-12 bg-[#151030] relative overflow-hidden">
            {/* Background glowing effects */}
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[var(--color-accent)]/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--color-secondary-accent)]/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="text-center lg:text-left">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tighter">Let's Work Together</h2>
                    <p className="text-lg md:text-xl text-[var(--color-secondary-text)] mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        I’m currently building my portfolio and open to collaborations with creators and brands. Contact me via email or LinkedIn to discuss your projects.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                        <motion.a
                            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(114, 9, 183, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            href="mailto:smitvadariya.25@gmail.com"
                            className="inline-flex justify-center items-center bg-gradient-to-r from-[#7209B7] to-[#4361EE] text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:from-[#B5179E] hover:to-[#4CC9F0] transition-all duration-300"
                        >
                            Email Me
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            href="https://www.linkedin.com/in/smit-vadariya/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex justify-center items-center bg-white/5 text-white px-10 py-5 rounded-full font-bold text-lg border border-white/10 backdrop-blur-sm transition-all duration-300"
                        >
                            Connect on LinkedIn
                        </motion.a>
                    </div>
                </div>

                {/* Decorative Visual Element */}
                <div className="hidden lg:flex justify-center items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative w-80 h-80 flex items-center justify-center"
                    >
                        <div className="absolute inset-0 border-2 border-dashed border-[var(--color-secondary-accent)]/20 rounded-full animate-[spin_25s_linear_infinite]"></div>
                        <div className="w-64 h-64 bg-[#1F1A3A]/80 backdrop-blur-md rounded-[32px] border border-white/5 shadow-2xl flex flex-col items-center justify-center p-8 text-center">
                            <span className="text-6xl mb-6">👋</span>
                            <h3 className="text-2xl font-black text-white tracking-tight">Open for Work</h3>
                            <p className="text-sm text-[var(--color-secondary-text)] mt-3 font-medium uppercase tracking-widest">Available for Video Editing & Motion Graphics</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}



