export default function Footer() {
    return (
        <footer className="py-16 bg-[#0F0A1F] border-t border-white/5 mt-auto">
            <div className="max-w-7xl mx-auto text-center px-6">
                <p className="text-white font-black text-xl mb-4 tracking-tighter">
                    Smit <span className="text-[var(--color-highlight)]">Vadariya</span>
                </p>
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-8">
                    <a href="#about" className="text-[var(--color-secondary-text)] hover:text-[var(--color-highlight)] font-bold transition-all duration-300">About</a>
                    <a href="#skills" className="text-[var(--color-secondary-text)] hover:text-[var(--color-highlight)] font-bold transition-all duration-300">Skills</a>
                    <a href="#portfolio" className="text-[var(--color-secondary-text)] hover:text-[var(--color-highlight)] font-bold transition-all duration-300">Work</a>
                    <a href="#contact" className="text-[var(--color-secondary-text)] hover:text-[var(--color-highlight)] font-bold transition-all duration-300">Contact</a>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-[#7209B7] to-[#4361EE] mx-auto mb-8 rounded-full"></div>
                <p className="text-[var(--color-secondary-text)]/30 text-xs font-bold uppercase tracking-[0.2em]">
                    &copy; {new Date().getFullYear()} Smit Vadariya. Visual Storyteller.
                </p>
            </div>
        </footer>
    );
}

