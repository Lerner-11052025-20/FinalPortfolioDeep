import React from 'react';
import { motion } from 'framer-motion';
import {
    FiCode, FiCpu, FiLayout, FiDatabase, FiSettings, FiGrid, FiActivity, FiLayers, FiZap, FiTerminal
} from 'react-icons/fi';
import {
    FaReact, FaNodeJs, FaJava, FaPython, FaGitAlt, FaDatabase as FaDb, FaHtml5, FaCss3, FaBootstrap
} from 'react-icons/fa';
import {
    SiJavascript, SiMongodb, SiPostman, SiVercel, SiMysql, SiTailwindcss, SiExpress, SiC, SiCplusplus, SiOracle, SiGithub
} from 'react-icons/si';

const SkillsComponent = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: FiCode,
            skills: [
                { name: "JavaScript (ES6+)", icon: SiJavascript },
                { name: "Java", icon: FaJava },
                { name: "Python", icon: FaPython },
                { name: "C Language", icon: SiC },
                { name: "C++", icon: SiCplusplus },
                { name: "SQL", icon: FaDb }
            ]
        },
        {
            title: "Frontend Technologies",
            icon: FiLayout,
            skills: [
                { name: "React.js", icon: FaReact },
                { name: "HTML5", icon: FaHtml5 },
                { name: "CSS3", icon: FaCss3 },
                { name: "Bootstrap", icon: FaBootstrap },
                { name: "Tailwind CSS", icon: SiTailwindcss },
                { name: "Responsive Web Design", icon: FiLayout }
            ]
        },
        {
            title: "Backend Technologies",
            icon: FiCpu,
            skills: [
                { name: "Node.js", icon: FaNodeJs },
                { name: "Express.js", icon: SiExpress },
                { name: "RESTful APIs", icon: FiSettings },
                { name: "JWT Authentication", icon: FiLayers },
                { name: "Session Management", icon: FiActivity },
                { name: "API Integration", icon: FiCode }
            ]
        },
        {
            title: "Databases & Tools",
            icon: FiDatabase,
            skills: [
                { name: "MongoDB", icon: SiMongodb },
                { name: "MySQL", icon: SiMysql },
                { name: "Oracle Database", icon: SiOracle },
                { name: "Git & GitHub", icon: FaGitAlt },
                { name: "Postman", icon: SiPostman },
                { name: "VS Code", icon: FiCode }
            ]
        },
        {
            title: "Libraries & Frameworks",
            icon: FiGrid,
            skills: [
                { name: "Context API", icon: FiLayers },
                { name: "JWT Auth", icon: FiActivity },
                { name: "NumPy", icon: FiCpu },
                { name: "Pandas", icon: FiDatabase },
                { name: "scikit-learn", icon: FiSettings },
                { name: "Web Audio API", icon: FiZap }
            ]
        },
        {
            title: "Concepts",
            icon: FiGrid,
            skills: [
                { name: "CRUD Operations", icon: FiDatabase },
                { name: "MVC Architecture", icon: FiLayers },
                { name: "API Integration", icon: FiCode },
                { name: "State Management", icon: FiActivity },
                { name: "Component-Based Design", icon: FiLayout },
                { name: "API Design", icon: FiSettings }
            ]
        }
    ];

    return (
        <section id="skills" className="relative py-40 px-6 overflow-hidden bg-gradient-to-b from-primary via-primary to-secondary/10">
            {/* Animated Background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-blue/10 rounded-full -z-10" />
            <div className="absolute bottom-20 left-0 w-[700px] h-[700px] bg-accent-emerald/10 rounded-full -z-10" />
            <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent-blue/5 rounded-full -z-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-gradient-to-r from-accent-blue/20 to-accent-emerald/20 border border-accent-blue/50 text-accent-blue text-[11px] font-bold uppercase tracking-widest mb-8"
                    >
                        <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                            <FiZap size={14} />
                        </motion.div>
                        Technical Expertise Matrix
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.7 }}
                        className="space-y-6"
                    >
                        <h2 className="text-7xl lg:text-8xl font-black font-display tracking-tighter text-white leading-[0.9]">
                            Master<br />
                            <span className="text-gradient italic">Skills.</span>
                        </h2>
                        <p className="text-lg text-text-secondary max-w-3xl leading-relaxed font-medium">
                            Comprehensive technical expertise spanning frontend, backend, databases, and development tools. 
                            Focused on building scalable, performant, and user-centric applications.
                        </p>
                    </motion.div>
                </div>

                {/* Categorized Skills */}
                <div className="space-y-20">
                    {skillCategories.map((category, catIdx) => (
                        <motion.div
                            key={catIdx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIdx * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            {/* Glow Background for Category */}
                            <div className="absolute -top-4 left-0 right-0 h-64 bg-gradient-to-b from-accent-blue/10 to-transparent -z-10 opacity-40" />

                            {/* Category Header */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIdx * 0.12 + 0.1 }}
                                className="flex items-center gap-5 mb-10 pb-6 border-b border-white/10"
                            >
                                <motion.div 
                                    className="p-4 rounded-2xl bg-gradient-to-br from-accent-blue/30 to-accent-emerald/20 border border-accent-blue/60 flex items-center justify-center text-accent-blue shadow-lg shadow-accent-blue/20"
                                >
                                    <category.icon size={28} />
                                </motion.div>
                                <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">{category.title}</h3>
                            </motion.div>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {category.skills.map((skill, skillIdx) => (
                                    <motion.div
                                        key={skillIdx}
                                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            delay: catIdx * 0.12 + skillIdx * 0.05, 
                                            duration: 0.6,
                                            ease: [0.16, 1, 0.3, 1]
                                        }}
                                        className="group relative p-7 rounded-[28px] bg-gradient-to-br from-white/15 to-white/5 border border-white/30 flex items-center gap-5 overflow-hidden"
                                    >
                                        {/* Glow Effect Background */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 via-transparent to-accent-emerald/5" />
                                        
                                        <motion.div 
                                            className="relative p-4 rounded-2xl bg-gradient-to-br from-accent-blue/40 to-accent-emerald/25 border border-accent-blue/50 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-accent-blue/30"
                                        >
                                            <skill.icon size={26} />
                                        </motion.div>
                                        <span className="relative text-white font-semibold text-base leading-snug">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Skills = React.memo(SkillsComponent);
export default Skills;
