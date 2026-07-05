import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { id: "homepage", name: "home", index: "01" },
    { id: "education", name: "education", index: "02" },
    { id: "experience", name: "experience", index: "03" },
    { id: "projects", name: "work", index: "04" },
    { id: "technologies", name: "skills", index: "05" },
    { id: "photography", name: "photos", index: "06" },
    { id: "about", name: "contact", index: "07" },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll while the mobile drawer is open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
                ? "bg-ink-900/80 backdrop-blur-md border-b border-white/5 py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
                {/* Wordmark */}
                <a
                    href="#homepage"
                    className="font-mono text-sm text-slate-400 transition-colors hover:text-accent"
                >
                    <span className="text-accent">~/</span>swaraj
                </a>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-7 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className="group font-mono text-sm text-slate-400 transition-colors hover:text-white"
                        >
                            <span className="mr-1 text-[10px] text-accent/70 align-super">
                                {link.index}
                            </span>
                            <span className="text-accent/80">{"//"}</span> {link.name}
                            <span className="block h-px max-w-0 bg-accent transition-all duration-300 group-hover:max-w-full" />
                        </a>
                    ))}
                </nav>

                {/* Mobile hamburger (single, animated) */}
                <button
                    onClick={() => setOpen(!open)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    className="relative z-[70] flex h-10 w-10 items-center justify-center md:hidden"
                >
                    <div className="space-y-1.5">
                        <span
                            className={`block h-0.5 w-7 bg-slate-200 transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
                        />
                        <span
                            className={`block h-0.5 w-7 bg-slate-200 transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
                        />
                        <span
                            className={`block h-0.5 w-7 bg-slate-200 transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile drawer */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[60] flex h-[100dvh] flex-col items-start justify-center gap-2 bg-ink-950/95 px-10 backdrop-blur-xl md:hidden"
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={() => setOpen(false)}
                                initial={{ opacity: 0, x: -24 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.05 * i, duration: 0.35 }}
                                className="py-2 font-mono text-2xl text-slate-300 transition-colors hover:text-accent"
                            >
                                <span className="mr-3 text-sm text-accent/70">{link.index}</span>
                                <span className="text-accent/80">{"//"}</span> {link.name}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
