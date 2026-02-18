import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowUp, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const FooterComponent = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    };

    const footerLinks = [
        { category: 'Navigation', links: [
            { label: 'Home', href: '#home' },
            { label: 'About', href: '#about' },
            { label: 'Skills', href: '#skills' },
            { label: 'Projects', href: '#projects' },
            { label: 'Hackathons', href: '#hackathons' },
        ]},
        { category: 'Resources', links: [
            { label: 'Contact', href: '#contact' },
            { label: 'GitHub', href: 'https://github.com/Lerner-11052025-20' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/deepsorathiya7990' },
            { label: 'Resume', href: '#home' },
        ]},
    ];

    const socialLinks = [
        { icon: FiGithub, href: 'https://github.com/Lerner-11052025-20', label: 'GitHub' },
        { icon: FiLinkedin, href: 'https://linkedin.com/in/deepsorathiya7990', label: 'LinkedIn' },
        { icon: FiMail, href: 'mailto:deep.professional803@gmail.com', label: 'Email' },
    ];

    const contactInfo = [
        { icon: FiMapPin, label: 'Location', value: 'Surat, Gujarat, India' },
        { icon: FiPhone, label: 'Phone', value: '+91 79900 82149' },
        { icon: FiMail, label: 'Email', value: 'deep.professional803@gmail.com' },
    ];

    return (
        <footer className="relative py-20 px-4 bg-gradient-to-b from-transparent to-secondary/30 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 md:gap-10 lg:gap-12 mb-16"
                >
                    {/* Brand Section - Span 1-2 columns on desktop */}
                    <motion.div variants={itemVariants} className="sm:col-span-1 space-y-6">
                        <div>
                            <motion.a
                                href="#home"
                                className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white block mb-4"
                            >
                                Deep<span className="text-accent-blue">.</span>
                            </motion.a>
                            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
                                Full-stack developer building modern web applications with React, Node.js & MongoDB.
                            </p>
                        </div>
                        <div>
                            <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest mb-3">Follow</p>
                            <div className="flex items-center gap-3">
                                {socialLinks.map((social, idx) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={idx}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            variants={itemVariants}
                                            className="p-2.5 rounded-lg bg-secondary border border-white/5 text-text-secondary"
                                            title={social.label}
                                        >
                                            <Icon size={16} />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Navigation Links */}
                    {footerLinks.map((section, idx) => (
                        <motion.div
                            key={section.category}
                            variants={itemVariants}
                            className="sm:col-span-1"
                        >
                            <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-accent-blue mb-6">
                                {section.category}
                            </h3>
                            <div className="space-y-3.5">
                                {section.links.map((link) => (
                                    <motion.a
                                        key={link.label}
                                        href={link.href}
                                        target={link.href.startsWith('http') ? '_blank' : undefined}
                                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="block text-text-secondary text-sm font-medium"
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                    {/* Back to Top */}
                    <motion.div
                        variants={itemVariants}
                        className="sm:col-span-1"
                    >
                        <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-accent-blue mb-6">
                            Actions
                        </h3>
                        <motion.button
                            onClick={scrollToTop}
                            className="w-full px-4 py-3 rounded-lg bg-accent-blue text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all"
                        >
                            <FiArrowUp size={16} />
                            Back to Top
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Contact Info Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="text-sm font-bold uppercase tracking-widest text-accent-blue mb-6">Contact Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                        {contactInfo.map((info, idx) => {
                            const Icon = info.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="p-5 rounded-lg bg-secondary border border-white/5 space-y-3"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 rounded-lg bg-accent-blue/10">
                                            <Icon size={16} className="text-accent-blue" />
                                        </div>
                                        <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest">
                                            {info.label}
                                        </p>
                                    </div>
                                    <p className="text-sm text-text-secondary font-medium">
                                        {info.value}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row items-center justify-between gap-6"
                >
                    <p className="text-[11px] text-text-secondary font-semibold text-center sm:text-left">
                        &copy; {currentYear} Deep. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-[11px] text-text-secondary font-semibold">
                        <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                        <span className="w-1 h-1 rounded-full bg-text-secondary" />
                        <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

const Footer = React.memo(FooterComponent);
export default Footer;
