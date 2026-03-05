import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-28 pb-12 px-6 sm:px-12 relative overflow-hidden bg-[var(--color-primary-bg)]">

            {/* --- Background Animated Elements --- */}

            {/* 1. Animated Gradient Orb (Top-Left) */}
            <motion.div
                className="absolute top-[10%] left-[5%] w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] rounded-full opacity-20 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, #7209B7 0%, #4361EE 100%)',
                    filter: 'blur(80px)'
                }}
                animate={{
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* 2. Glassmorphism Abstract Shape (Bottom-Right) */}
            <motion.div
                className="absolute bottom-[15%] right-[10%] w-[25vw] h-[25vw] min-w-[250px] min-h-[250px] border border-white/10 backdrop-blur-2xl rounded-[40px] opacity-20 pointer-events-none z-0"
                style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
                }}
                animate={{
                    y: [0, 40, 0],
                    rotate: [0, 15, 0],
                    skew: [0, 5, 0]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* 3. Wireframe Geometric Shape (Background Center) */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-10 pointer-events-none z-[-1]"
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <svg width="600" height="600" viewBox="0 0 100 100" className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px]">
                    <defs>
                        <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4CC9F0" />
                            <stop offset="100%" stopColor="#7209B7" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M50 5 L95 25 L95 75 L50 95 L5 75 L5 25 Z"
                        fill="none"
                        stroke="url(#wireGradient)"
                        strokeWidth="0.2"
                    />
                    <path d="M50 5 L50 95" fill="none" stroke="url(#wireGradient)" strokeWidth="0.1" strokeDasharray="1,1" />
                    <path d="M5 25 L95 75" fill="none" stroke="url(#wireGradient)" strokeWidth="0.1" strokeDasharray="1,1" />
                    <path d="M95 25 L5 75" fill="none" stroke="url(#wireGradient)" strokeWidth="0.1" strokeDasharray="1,1" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="url(#wireGradient)" strokeWidth="0.05" />
                </svg>
            </motion.div>

            {/* Existing Glow Backgrounds for extra depth */}
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[var(--color-accent)]/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10 w-full">

                {/* Text Content */}
                <div className="flex flex-col items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter text-[var(--color-primary-text)] leading-none">
                            Smit <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7209B7] to-[#4361EE]">Vadariya</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <p className="text-xl md:text-3xl text-[var(--color-secondary-text)] font-medium mb-12 max-w-2xl mx-auto leading-relaxed italic">
                            Visualizing stories as a <span className="text-[var(--color-highlight)] font-bold">Video Editor</span> & Motion Graphics Artist.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <motion.a
                            href="#portfolio"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(114, 9, 183, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 rounded-full text-white font-bold text-lg bg-gradient-to-r from-[#7209B7] to-[#4361EE] hover:from-[#B5179E] hover:to-[#4CC9F0] transition-all duration-300 shadow-lg"
                        >
                            View My Work
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 rounded-full text-[var(--color-primary-text)] font-bold text-lg border-2 border-white/10 backdrop-blur-sm transition-all duration-300"
                        >
                            Let's Talk
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
