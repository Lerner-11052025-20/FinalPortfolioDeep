import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiPhone, FiArrowRight, FiCheck, FiAlertCircle } from 'react-icons/fi';

const ContactComponent = () => {
    // Initialize EmailJS
    useState(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);
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
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setShowModal(true);
        }
    };

    const confirmSend = async () => {
        setShowModal(false);
        setIsLoading(true);

        // 1-second process delay as requested
        await new Promise(resolve => setTimeout(resolve, 1000));

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                reply_to: formData.email,
                message: formData.message,
            };

            console.log('Sending Email with Params:', templateParams);
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            console.log('EmailJS Response:', result);

            if (result.status === 200) {
                setShowSuccessOverlay(true);
                setFormData({ name: '', email: '', message: '' });
                setErrors({});

                // Auto hide success overlay after 4 seconds
                setTimeout(() => {
                    setShowSuccessOverlay(false);
                }, 4000);
            } else {
                setErrors({ submit: 'Failed to send message. Please try again later.' });
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
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
            {/* Success Overlay */}
            {showSuccessOverlay && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-xl bg-black/40"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-white/10 border border-white/20 p-12 rounded-3xl text-center shadow-2xl max-w-md mx-4"
                    >
                        <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/20">
                            <FiCheck size={40} className="text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                        <p className="text-text-secondary/80 text-lg mb-8">
                            Thank you for reaching out! Your message has been sent successfully. I'll get back to you soon.
                        </p>
                        <button
                            onClick={() => setShowSuccessOverlay(false)}
                            className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-opacity-90 transition-all"
                        >
                            Got it
                        </button>
                    </motion.div>
                </motion.div>
            )}

            {/* Confirmation Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="bg-zinc-900 border border-white/10 p-8 rounded-3xl max-w-md w-full shadow-2xl"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">Confirm Submission</h3>
                        <p className="text-text-secondary mb-8 leading-relaxed">
                            Are you sure you want to send this message?
                        </p>
                        <div className="flex gap-4">
                            <button
                                onClick={() => setShowModal(false)}
                                className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmSend}
                                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-accent-blue to-accent-emerald text-white font-bold shadow-lg shadow-accent-blue/20 hover:scale-[1.02] transition-all"
                            >
                                Yes, Send it
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}

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
                        Have a project in mind? Let's collaborate and create something extraordinary together.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Left: Info Cards & Social */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {contactCards.map((card, idx) => {
                                const Icon = card.icon;
                                return (
                                    <motion.a
                                        key={card.id}
                                        href={card.href || '#'}
                                        variants={itemVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-blue/30 transition-all group"
                                    >
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white mb-4 shadow-lg shadow-black/20`}>
                                            <Icon size={20} />
                                        </div>
                                        <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest mb-1">{card.label}</p>
                                        <p className="text-sm font-semibold text-white truncate">{card.value}</p>
                                    </motion.a>
                                );
                            })}
                        </div>

                        <motion.div
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10"
                        >
                            <h3 className="text-xl font-bold text-white mb-6">Social Links</h3>
                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((social, idx) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={idx}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                                        >
                                            <Icon size={18} className="text-text-secondary group-hover:text-accent-blue transition-colors" />
                                            <span className="text-sm font-medium text-text-secondary group-hover:text-white">{social.label}</span>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/20"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 animate-pulse" />
                                <div>
                                    <p className="text-sm font-bold text-white mb-1">Response Time</p>
                                    <p className="text-text-secondary/70 text-sm">I typically respond within 24 hours.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Enhanced Contact Form */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
                    >
                        <h3 className="text-2xl font-bold text-white mb-2">Send Message</h3>
                        <p className="text-text-secondary/60 text-sm mb-8">I'll get back to you as soon as possible.</p>

                        <form onSubmit={handleFormSubmit} className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-[10px] text-text-muted font-bold uppercase tracking-widest ml-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className={`w-full px-5 py-3.5 rounded-xl bg-white/5 border text-white focus:outline-none transition-all ${errors.name ? 'border-red-500/50' : 'border-white/10 focus:border-accent-blue/50'
                                        }`}
                                />
                                {errors.name && <p className="text-[10px] text-red-500 ml-1">{errors.name}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] text-text-muted font-bold uppercase tracking-widest ml-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    className={`w-full px-5 py-3.5 rounded-xl bg-white/5 border text-white focus:outline-none transition-all ${errors.email ? 'border-red-500/50' : 'border-white/10 focus:border-accent-blue/50'
                                        }`}
                                />
                                {errors.email && <p className="text-[10px] text-red-500 ml-1">{errors.email}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] text-text-muted font-bold uppercase tracking-widest ml-1">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="What's on your mind?"
                                    className={`w-full px-5 py-3.5 rounded-xl bg-white/5 border text-white focus:outline-none transition-all resize-none ${errors.message ? 'border-red-500/50' : 'border-white/10 focus:border-accent-blue/50'
                                        }`}
                                />
                                {errors.message && <p className="text-[10px] text-red-500 ml-1">{errors.message}</p>}
                            </div>

                            {errors.submit && (
                                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-xs text-center">
                                    {errors.submit}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-blue to-accent-emerald text-white font-bold flex items-center justify-center gap-3 shadow-lg shadow-accent-blue/10 hover:shadow-accent-blue/20 transition-all disabled:opacity-50"
                            >
                                {isLoading ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <FiSend size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Contact = React.memo(ContactComponent);
export default Contact;
