import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiPhone, FiArrowRight, FiCheck, FiAlertCircle } from 'react-icons/fi';

const ContactComponent = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
            const response = await fetch(`${apiUrl}/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                })
            });

            const result = await response.json();

            if (result.success) {
                setSubmitted(true);
                setTimeout(() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                    setErrors({});
                }, 3000);
            } else {
                setErrors({ submit: result.error || 'Failed to send message' });
            }
        } catch (error) {
            console.error('Error:', error);
            setErrors({ submit: 'Network error. Please try again.' });
        } finally {
            setIsLoading(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const contactCards = [
        { id: 1, icon: FiMail, label: 'Email', value: 'deep.professional803@gmail.com', href: 'mailto:deep.professional803@gmail.com', color: 'from-accent-blue to-blue-500' },
        { id: 2, icon: FiMapPin, label: 'Location', value: 'Surat, Gujarat, India', color: 'from-accent-emerald to-green-500' },
        { id: 3, icon: FiPhone, label: 'Phone', value: '+91 79900 82149', color: 'from-purple-500 to-pink-500' },
    ];

    const socialLinks = [
        { icon: FiGithub, href: 'https://github.com/Lerner-11052025-20', label: 'GitHub', color: 'hover:text-white' },
        { icon: FiLinkedin, href: 'https://linkedin.com/in/deepsorathiya7990', label: 'LinkedIn', color: 'hover:text-blue-400' },
    ];

    return (
        <section id="contact" className="relative py-32 px-4 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue/10 rounded-full mix-blend-multiply opacity-20" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-emerald/10 rounded-full mix-blend-multiply opacity-20" />
                <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full mix-blend-multiply opacity-10" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-blue/20 to-accent-emerald/20 border border-accent-blue/50 mb-6"
                    >
                        <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse" />
                        <span className="text-accent-blue text-[11px] font-bold uppercase tracking-widest">Let's Connect</span>
                        <FiArrowRight size={14} className="text-accent-blue" />
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight"
                    >
                        Get In <span className="bg-gradient-to-r from-accent-blue via-cyan-400 to-accent-emerald bg-clip-text text-transparent">Touch</span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-text-secondary/80 max-w-3xl mx-auto leading-relaxed"
                    >
                        Have a project in mind? Let's collaborate and create something extraordinary together. Reach out and let's discuss your next big idea.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                    {contactCards.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={card.id}
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative h-full"
                            >
                                <motion.a
                                    href={card.href || '#'}
                                    className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 transition-all duration-300 flex flex-col justify-between overflow-hidden group/card"
                                >
                                    <div className="relative z-10">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-accent-blue/20 transition-all`}>
                                            <Icon size={28} />
                                        </div>

                                        <p className="text-[11px] text-text-muted font-bold uppercase tracking-widest mb-2">
                                            {card.label}
                                        </p>
                                        <p className="text-xl font-bold text-text-primary">
                                            {card.value}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2 text-accent-blue font-semibold mt-6">
                                        <span>Connect</span>
                                        <FiArrowRight size={18} />
                                    </div>
                                </motion.a>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="relative p-10 md:p-12 rounded-3xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 shadow-2xl shadow-black/20 transition-all duration-300">
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-3xl font-bold text-white mb-2"
                            >
                                Send me a message
                            </motion.h3>
                            <p className="text-text-secondary/70 mb-8">I'll get back to you as soon as possible.</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="space-y-3"
                                >
                                    <div className="flex items-center justify-between">
                                        <label className="text-[11px] text-text-muted font-bold uppercase tracking-widest">Full Name</label>
                                        {errors.name && (
                                            <span className="text-[10px] text-red-400 font-semibold flex items-center gap-1">
                                                <FiAlertCircle size={12} /> {errors.name}
                                            </span>
                                        )}
                                    </div>
                                    <motion.input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        className={`w-full px-5 py-4 rounded-2xl text-white placeholder-white focus:outline-none transition-all duration-300 font-medium ${errors.name
                                            ? 'bg-red-500/10 border border-red-400/50 focus:border-red-400'
                                            : 'bg-white/10 border border-white/20 focus:border-accent-blue/50 focus:bg-white/15'
                                            }`}
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.15 }}
                                    className="space-y-3"
                                >
                                    <div className="flex items-center justify-between">
                                        <label className="text-[11px] text-text-muted font-bold uppercase tracking-widest">Email Address</label>
                                        {errors.email && (
                                            <span className="text-[10px] text-red-400 font-semibold flex items-center gap-1">
                                                <FiAlertCircle size={12} /> {errors.email}
                                            </span>
                                        )}
                                    </div>
                                    <motion.input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        className={`w-full px-5 py-4 rounded-2xl text-white placeholder-white focus:outline-none transition-all duration-300 font-medium ${errors.email
                                            ? 'bg-red-500/10 border border-red-400/50 focus:border-red-400'
                                            : 'bg-white/10 border border-white/20 focus:border-accent-blue/50 focus:bg-white/15'
                                            }`}
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="space-y-3"
                                >
                                    <div className="flex items-center justify-between">
                                        <label className="text-[11px] text-text-muted font-bold uppercase tracking-widest">Message</label>
                                        {errors.message && (
                                            <span className="text-[10px] text-red-400 font-semibold flex items-center gap-1">
                                                <FiAlertCircle size={12} /> {errors.message}
                                            </span>
                                        )}
                                    </div>
                                    <motion.textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        placeholder="Tell me about your project or inquiry..."
                                        className={`w-full px-5 py-4 rounded-2xl text-white placeholder-white focus:outline-none transition-all duration-300 resize-none font-medium ${errors.message
                                            ? 'bg-red-500/10 border border-red-400/50 focus:border-red-400'
                                            : 'bg-white/10 border border-white/20 focus:border-accent-blue/50 focus:bg-white/15'
                                            }`}
                                    />
                                </motion.div>

                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.25 }}
                                    disabled={isLoading || submitted}
                                    type="submit"
                                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-accent-blue via-cyan-400 to-accent-emerald text-white font-bold flex items-center justify-center gap-3 shadow-lg transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed"
                                >
                                    {submitted ? (
                                        <>
                                            <FiCheck size={20} className="text-green-300 animate-bounce" />
                                            <span>Message Sent Successfully!</span>
                                        </>
                                    ) : isLoading ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity }}
                                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                            />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <FiSend size={20} />
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Social & Info Section */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col justify-between gap-8"
                    >
                        {/* Social Links */}
                        <motion.div
                            variants={itemVariants}
                            className="group relative p-10 rounded-3xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 transition-all duration-300"
                        >

                            <h3 className="text-2xl font-bold text-white mb-8">Connect With Me</h3>
                            <div className="space-y-4">
                                {socialLinks.map((social, idx) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={idx}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 transition-all group/social"
                                        >
                                            <div className="p-3 rounded-xl bg-gradient-to-br from-accent-blue/30 to-accent-emerald/30 text-white">
                                                <Icon size={20} />
                                            </div>
                                            <span className="font-semibold text-white transition-colors">
                                                {social.label}
                                            </span>
                                            <FiArrowRight size={18} className="ml-auto transition-all" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Quick Response Card */}
                        <motion.div
                            variants={itemVariants}
                            className="group relative p-10 rounded-3xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-3 h-3 bg-emerald-400 rounded-full mt-2" />
                                <div>
                                    <p className="text-[11px] text-accent-emerald font-bold uppercase tracking-widest mb-2">Fast Response</p>
                                    <p className="text-white font-semibold mb-1">I typically respond within 24 hours</p>
                                    <p className="text-text-secondary/70 text-sm">Available for freelance projects, collaborations, and full-time opportunities.</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Contact = React.memo(ContactComponent);
export default Contact;
