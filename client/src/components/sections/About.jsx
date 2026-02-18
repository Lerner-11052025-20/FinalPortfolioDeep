import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCode, FiLayers, FiTerminal, FiActivity, FiCpu, FiAward, FiTrendingUp, FiUser, FiGlobe } from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiJavascript, SiGit, SiPostman, SiVercel, SiExpress, SiGithub } from 'react-icons/si';

const AboutComponent = () => {
    const techStack = [
        {
            category: "Frontend",
            color: "from-blue-400 to-cyan-400",
            items: [
                { name: "React.js", icon: <SiReact /> },
                { name: "JavaScript", icon: <SiJavascript /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss /> },
                { name: "HTML5 & CSS3", icon: <FiCode /> }
            ]
        },
        {
            category: "Backend",
            color: "from-emerald-400 to-teal-400",
            items: [
                { name: "Node.js", icon: <SiNodedotjs /> },
                { name: "Express.js", icon: <SiExpress /> },
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "MySQL & Oracle", icon: <FiCpu /> }
            ]
        },
        {
            category: "Languages",
            color: "from-purple-400 to-pink-400",
            items: [
                { name: "Java", icon: <FiTerminal /> },
                { name: "Python", icon: <FiCode /> },
                { name: "SQL", icon: <FiTerminal /> },
                { name: "C", icon: <FiCode /> }
            ]
        },
        {
            category: "Tools & DevOps",
            color: "from-orange-400 to-red-400",
            items: [
                { name: "Git", icon: <SiGit /> },
                { name: "GitHub", icon: <SiGithub /> },
                { name: "Postman", icon: <SiPostman /> },
                { name: "Vercel", icon: <SiVercel /> }
            ]
        }
    ];

    const achievements = [
        { label: "Excellent Academic Performance", value: "92% in Sem 1", icon: <FiAward /> },
        { label: "Top 10% Ranked", value: "Among peers", icon: <FiTrendingUp /> },
        { label: "Full-Stack Projects", value: "5+ Completed", icon: <FiCode /> },
        { label: "Open to Opportunities", value: "Entry-Level", icon: <FiTerminal /> }
    ];

    const languages = [
        { lang: "English", proficiency: "Fluent", percent: 95 },
        { lang: "Hindi", proficiency: "Native", percent: 100 },
        { lang: "Gujarati", proficiency: "Native", percent: 100 }
    ];

    return (
        <section id="about" className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-primary via-primary to-secondary/20">
            {/* Animated Background Blobs with Enhanced Blur */}
            <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-accent-blue/15 rounded-full blur-[150px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/3 -right-40 w-[700px] h-[700px] bg-accent-emerald/10 rounded-full blur-[180px] -z-10 animate-pulse" />
            <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[160px] -z-10" />

            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/30 backdrop-blur-md text-accent-blue text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                        <FiActivity size={14} className="animate-pulse" />
                        About Me
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl lg:text-7xl font-black font-display tracking-tighter text-white leading-[0.9] mb-6"
                    >
                        Crafting Digital <br />
                        <span className="text-gradient">Solutions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        I'm an aspiring software engineer with a passion for building scalable web applications. 
                        Specialized in <span className="text-white font-bold">MERN Stack</span> development with strong foundations in full-stack engineering and data-driven solutions.
                    </motion.p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Left Column: Profile & Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1 space-y-6"
                    >
                        {/* Profile Card */}
                        <motion.div
                            className="p-8 rounded-[40px] bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl overflow-hidden relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10 text-center space-y-4">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-emerald mx-auto flex items-center justify-center text-white">
                                    <FiUser size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Deep R. Sorathiya</h3>
                                    <p className="text-sm text-accent-blue font-bold">Full-Stack Developer</p>
                                </div>
                                <p className="text-xs text-text-secondary">Surat, Gujarat, India</p>
                            </div>
                        </motion.div>

                        {/* Education Card */}
                        <motion.div
                            className="p-8 rounded-[40px] bg-gradient-to-br from-accent-emerald/10 to-accent-emerald/5 border border-accent-emerald/30 backdrop-blur-xl overflow-hidden relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-emerald/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10 space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-accent-emerald/20 flex items-center justify-center text-accent-emerald group-hover:scale-110 transition-transform duration-500">
                                    <FiBookOpen size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest mb-2">Education</p>
                                    <h4 className="text-xl font-bold text-white">B.Tech CSE</h4>
                                    <p className="text-sm text-text-secondary font-medium">Nirma University</p>
                                </div>
                                <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                                    <span className="text-[10px] text-text-muted font-bold uppercase">CGPA</span>
                                    <span className="text-lg font-bold text-accent-emerald">8.5/10</span>
                                </div>
                                <div className="flex justify-between items-center text-xs text-text-secondary">
                                    <span>Aug 2023</span>
                                    <span className="px-2 py-1 bg-accent-emerald/20 rounded-full text-accent-emerald">In Progress</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Languages Card */}
                        <motion.div
                            whileHover={{ y: -8, boxShadow: "0 30px 80px rgba(168, 85, 247, 0.15)" }}
                            transition={{ duration: 0.4 }}
                            className="p-8 rounded-[40px] bg-gradient-to-br from-purple-400/10 to-purple-400/5 border border-purple-400/30 backdrop-blur-xl overflow-hidden relative group"
                        >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-12 h-12 rounded-2xl bg-purple-400/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-500">
                                        <FiGlobe size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Languages</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    {languages.map((lang, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ x: 4 }}
                                            className="space-y-1"
                                        >
                                            <div className="flex justify-between items-center">
                                                <span className="text-xs text-text-muted">{lang.proficiency}</span>
                                            </div>
                                            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${lang.percent}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: idx * 0.1 }}
                                                    className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    {/* Middle & Right Column: Tech Stack */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {techStack.map((group, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -8, boxShadow: "0 30px 80px rgba(59, 130, 246, 0.2)" }}
                                    className="p-8 rounded-[40px] bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl overflow-hidden relative group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative z-10 space-y-6">
                                        <div className="flex items-center gap-3">
                                            <div className={`p-3 rounded-2xl bg-gradient-to-br ${group.color} bg-opacity-20 text-white group-hover:scale-110 transition-transform duration-500`}>
                                                <FiCode size={20} />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">{group.category}</h3>
                                        </div>
                                        <div className="space-y-3">
                                            {group.items.map((item, itemIdx) => (
                                                <motion.div
                                                    key={itemIdx}
                                                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text-secondary flex items-center gap-3 transition-all duration-300 cursor-pointer"
                                                >
                                                    <span className="text-accent-blue text-lg">{item.icon}</span>
                                                    <span className="font-semibold text-sm">{item.name}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Philosophy Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ y: -8 }}
                            className="p-8 rounded-[40px] bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl overflow-hidden relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-emerald/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10 space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-2xl bg-accent-blue/20 text-accent-blue group-hover:scale-110 transition-transform duration-500">
                                        <FiLayers size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Development Philosophy</h3>
                                </div>
                                <p className="text-text-secondary leading-relaxed">
                                    I build <span className="text-white font-bold">resilient systems</span> by focusing on clean code, component isolation, 
                                    and optimal data flow. My approach transforms complex challenges into elegant, maintainable solutions that scale seamlessly.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Achievements Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
                >
                    {achievements.map((achievement, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -8, scale: 1.05 }}
                            className="p-6 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden group text-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10 space-y-3">
                                <div className="w-12 h-12 rounded-xl bg-accent-blue/20 flex items-center justify-center text-accent-blue mx-auto group-hover:scale-110 transition-transform duration-500">
                                    {achievement.icon}
                                </div>
                                <div>
                                    <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest mb-1">
                                        {achievement.label}
                                    </p>
                                    <p className="text-sm font-bold text-white">{achievement.value}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"
                />

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-text-secondary mb-6">Interested in collaboration or have a project in mind?</p>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.08, boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-accent-blue to-accent-emerald text-white font-bold shadow-xl transition-all duration-300"
                    >
                        Get In Touch
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

const About = React.memo(AboutComponent);
export default About;
