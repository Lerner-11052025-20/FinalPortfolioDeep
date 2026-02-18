import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiFileText, FiBriefcase, FiArrowRight } from 'react-icons/fi';
import resumeFile from '../../assets/resume.jpg';

const NavbarComponent = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Hackathons', href: '#hackathons' },
    ];

    return (
        <nav className={`fixed left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'top-6 px-6' : 'top-0 px-0'}`}>
            <div className={`transition-all duration-500 ${isScrolled 
                ? 'max-w-7xl mx-auto bg-gradient-to-b from-white/10 to-white/5 border border-white/20 rounded-full backdrop-blur-xl px-8 py-3 shadow-2xl shadow-black/20' 
                : 'w-full bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl px-10 py-4 border-b border-white/10'}`}>
                <div className={`${isScrolled ? '' : 'max-w-7xl mx-auto'} flex items-center justify-between`}>
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        className="text-2xl font-black font-display tracking-tight text-white hover:text-accent-blue transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Deep<span className="bg-gradient-to-r from-accent-blue to-accent-emerald bg-clip-text text-transparent">.</span>
                    </motion.a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-12">
                        <div className="flex items-center gap-12 border-r border-white/10 pr-12">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setActiveLink(link.href)}
                                    className="relative text-sm font-semibold text-text-secondary hover:text-white transition-colors group tracking-wide"
                                    whileHover={{ y: -2 }}
                                >
                                    {link.name}
                                    <motion.div
                                        layoutId="underline"
                                        className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-blue to-accent-emerald ${activeLink === link.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                                        initial={false}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.a>
                            ))}
                        </div>

                        <div className="flex items-center gap-6">
                            <motion.a
                                href={resumeFile}
                                download="Deep_Sorathiya_Resume.jpg"
                                className="flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-accent-blue transition-all group"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="p-2 rounded-lg bg-accent-blue/10 group-hover:bg-accent-blue/20 transition-all">
                                    <FiFileText size={16} className="text-accent-blue" />
                                </div>
                                Resume
                            </motion.a>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.08, boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-accent-blue via-accent-blue to-accent-emerald text-white text-sm font-bold flex items-center gap-2 shadow-lg shadow-accent-blue/30 transition-all duration-300 hover:text-white"
                            >
                                Hire Me <FiBriefcase size={16} />
                            </motion.a>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <motion.button
                        className="md:hidden text-text-primary relative z-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <AnimatePresence mode="wait">
                            {isMobileMenuOpen ? (
                                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                    <FiX size={24} />
                                </motion.div>
                            ) : (
                                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                                    <FiMenu size={24} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-24 left-4 right-4 bg-gradient-to-b from-white/15 to-white/5 border border-white/20 backdrop-blur-xl rounded-[32px] p-8 flex flex-col gap-6 md:hidden z-40 shadow-2xl shadow-black/20"
                        >
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-bold text-text-primary hover:text-accent-blue transition-colors group relative"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <span className="flex items-center gap-2">
                                        <motion.div 
                                            className="w-1 h-1 rounded-full bg-accent-blue opacity-0 group-hover:opacity-100"
                                            whileHover={{ backgroundColor: "rgb(34, 197, 94)" }}
                                        />
                                        {link.name}
                                    </span>
                                </motion.a>
                            ))}
                            <motion.div 
                                className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.3 }}
                            />
                            <div className="flex flex-col gap-4">
                                <motion.a
                                    href={resumeFile}
                                    download="Deep_Sorathiya_Resume.jpg"
                                    className="flex items-center gap-3 text-text-primary text-lg font-bold hover:text-accent-blue transition-all group"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <div className="p-3 rounded-xl bg-accent-blue/20 group-hover:bg-accent-blue/30 transition-all">
                                        <FiFileText size={20} className="text-accent-blue" />
                                    </div>
                                    Resume
                                </motion.a>
                                <motion.a
                                    href="#contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-accent-blue to-accent-emerald text-white text-lg font-bold flex items-center justify-center gap-3 shadow-lg shadow-accent-blue/30 hover:shadow-accent-blue/50 transition-all"
                                    whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    Hire Me <FiBriefcase size={20} />
                                </motion.a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

const Navbar = React.memo(NavbarComponent);
export default Navbar;
