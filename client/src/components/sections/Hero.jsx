import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiGithub, FiMail, FiLinkedin, FiNavigation, FiStar, FiArrowDown } from 'react-icons/fi';
import profilePic from '../../assets/profile.png';
import resumeFile from '../../assets/resume.jpg';

const HeroComponent = () => {
    const socialLinks = [
        { icon: <FiGithub size={20} />, href: 'https://github.com/Lerner-11052025-20', label: 'GitHub' },
        { icon: <FiMail size={20} />, href: 'mailto:deep.professional803@gmail.com', label: 'Email' },
        { icon: <FiLinkedin size={20} />, href: 'https://linkedin.com/in/deepsorathiya7990', label: 'LinkedIn' },
    ];

    return (
        <section id="home" className="h-screen min-h-[700px] pt-64 pb-10 px-6 relative overflow-hidden flex items-start lg:items-center">
            {/* Enhanced Background Glows with Multiple Layers */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-blue/15 rounded-full blur-[150px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-accent-emerald/10 rounded-full blur-[180px] -z-10 animate-pulse" />
            <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[160px] -z-10" />

            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 items-start">
                {/* Left Column */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >


                    {/* Title */}
                    <div className="space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-7xl lg:text-[100px] font-black font-display text-white tracking-tighter leading-[0.95]"
                        >
                            React.js<br />
                            <motion.span
                                className="bg-gradient-to-r from-accent-blue via-cyan-400 to-accent-emerald bg-clip-text text-transparent block"
                                initial={{ backgroundPosition: "0%" }}
                                animate={{ backgroundPosition: "100%" }}
                                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                                style={{ backgroundSize: "200% 100%" }}
                            >
                                Developer
                            </motion.span>
                            Portfolio
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg text-white/70 font-medium leading-relaxed max-w-2xl"
                        >
                            Building modern, scalable web applications with React, JavaScript, and cutting-edge technologies.
                            Transforming ideas into exceptional digital experiences.
                        </motion.p>
                    </div>

                    {/* Badge with Enhanced Animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-accent-blue/10 to-accent-emerald/10 border border-white/20 backdrop-blur-xl text-white text-xxs font-bold transition-all duration-300 group"
                    >
                        <FiStar className="text-accent-emerald" />
                        <span className="opacity-90">React Developer & UI/UX Enthusiast | Based in Ahmedabad, India</span>
                    </motion.div>

                    {/* Actions with Enhanced Styling */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap items-center gap-6 pt-4"
                    >
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-accent-emerald to-accent-blue text-white font-bold flex items-center gap-3 shadow-xl transition-all duration-300 group"
                        >
                            Get in Touch
                            <FiArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                        <motion.a
                            href={resumeFile}
                            download="Deep_Sorathiya_Resume.jpg"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full border border-white/20 text-white font-bold flex items-center gap-3 transition-all duration-300 backdrop-blur-xl"
                        >
                            <FiDownload size={20} />
                            Download Resume
                        </motion.a>
                    </motion.div>

                    {/* Socials with Enhanced Styling */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-5 pt-4"
                    >
                        {socialLinks.map((social, idx) => (
                            <motion.a
                                key={idx}
                                href={social.href}
                                target={social.href.startsWith('http') ? '_blank' : undefined}
                                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                whileHover={{ y: -6, scale: 1.15 }}
                                whileTap={{ scale: 0.9 }}
                                className="group relative"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + idx * 0.1 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue to-accent-emerald rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 backdrop-blur-xl flex items-center justify-center text-white hover:text-accent-blue transition-all shadow-lg hover:shadow-accent-blue/50 group-hover:border-accent-blue/50">
                                    {social.icon}
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex gap-8 pt-8 border-t border-white/10"
                    >
                        {[{ num: '3+', label: 'Years Learning' }, { num: '5+', label: 'Projects' }, { num: '8.5', label: 'CGPA' }].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + idx * 0.1 }}
                            >
                                <h3 className="text-2xl font-black bg-gradient-to-r from-accent-blue to-accent-emerald bg-clip-text text-transparent">{stat.num}</h3>
                                <p className="text-xs text-text-muted uppercase tracking-widest font-bold">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Column: Profile Frame */}
                <motion.div
                    className="relative flex justify-center lg:justify-end group"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        {/* Glow Background */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-accent-blue/30 to-accent-emerald/30 rounded-[70px] blur-[50px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />

                        {/* Frame */}
                        <motion.div
                            className="w-[350px] h-[350px] md:w-[550px] md:h-[550px] rounded-[64px] shadow-2xl relative overflow-hidden lg:mr-10 border-2 border-white/20 transition-all duration-500 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl"
                        >
                            <div className="w-full h-full bg-primary overflow-hidden relative">
                                <motion.img
                                    src={profilePic}
                                    alt="Deep R. Sorathiya"
                                    className="w-full h-full object-cover object-top"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.5 }}
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/10 via-transparent to-accent-emerald/10 pointer-events-none" />
                            </div>
                        </motion.div>

                        {/* Focus Card */}
                        <motion.div
                            initial={{ x: 50, opacity: 0, scale: 0.9 }}
                            animate={{ x: 0, opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            whileHover={{ scale: 1.08, x: 10, boxShadow: "0 30px 80px rgba(59, 130, 246, 0.4)" }}
                            className="absolute -bottom-6 -right-6 md:-right-10 w-auto min-w-[200px] bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-[24px] p-4 flex items-center gap-3 shadow-2xl shadow-black/40 z-20 transition-all duration-300 hover:border-accent-blue/50"
                        >
                            <motion.div
                                className="w-10 h-10 rounded-xl bg-accent-blue/20 flex items-center justify-center text-accent-blue shadow-lg shadow-accent-blue/20"
                                animate={{ rotate: [0, 45, 0] }}
                                transition={{ duration: 0.6 }}
                            >
                                <FiNavigation size={20} className="rotate-45" />
                            </motion.div>
                            <div>
                                <p className="text-[9px] text font-light uppercase tracking-widest mb-0.5">Focus Area</p>
                                <p className="text-sm font-bold text-white tracking-tight">Full-Stack Dev</p>
                            </div>
                        </motion.div>

                        {/* Achievement Badge */}
                        <motion.div
                            initial={{ y: 50, opacity: 0, scale: 0.9 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            whileHover={{ scale: 1.08, boxShadow: "0 20px 60px rgba(34, 197, 94, 0.4)" }}
                            className="absolute -top-8 -left-8 md:-left-12 w-fit bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 rounded-[24px] px-6 py-3 flex items-center gap-2 shadow-xl z-20 hover:border-accent-emerald/50 transition-all"
                        >
                            <div className="w-8 h-8 rounded-full bg-accent-emerald/20 flex items-center justify-center text-accent-emerald">
                                <FiStar size={16} />
                            </div>
                            <div>
                                <p className="text-[10px] text-text-muted font-bold uppercase">Top Performer</p>
                                <p className="text-sm font-bold text-white">92% Sem 1</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>



            {/* Enhanced Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
            >
                <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-[10px] text-text-muted font-black uppercase tracking-[0.3em] ml-1"
                >
                    Scroll
                </motion.span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="text-accent-blue"
                >
                    <FiArrowDown size={24} />
                </motion.div>
            </motion.div>
        </section>
    );
};

const Hero = React.memo(HeroComponent);
export default Hero;
