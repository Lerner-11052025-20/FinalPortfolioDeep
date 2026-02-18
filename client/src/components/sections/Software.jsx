import React from 'react';
import { motion } from 'framer-motion';
import { FiMonitor, FiCpu, FiHash, FiExternalLink, FiGithub } from 'react-icons/fi';
import { SiPython, SiPytorch, SiJulia } from 'react-icons/si';

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="glass-card overflow-hidden group hover:border-accent-blue/40 transition-all duration-500"
    >
        {/* IDE Header Bar */}
        <div className="bg-glass-dark border-b border-glass-border px-4 py-3 flex items-center justify-between">
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <div className="flex items-center gap-2 text-[10px] text-text-muted font-bold tracking-widest uppercase">
                <FiHash size={10} /> {project.filename}
            </div>
            <div className="px-2 py-0.5 rounded-md bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald text-[8px] font-bold uppercase tracking-widest">
                {project.status}
            </div>
        </div>

        {/* Content Area */}
        <div className="p-8">
            <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-secondary border border-glass-border rounded-2xl group-hover:scale-110 transition-transform duration-500">
                    <project.icon className="text-3xl text-text-primary" />
                </div>
                <div className="flex gap-2">
                    <a href={project.github} className="p-2 glass-nav border-white/5 text-text-muted hover:text-text-primary transition-all">
                        <FiGithub size={18} />
                    </a>
                    <a href={project.demo} className="p-2 glass-nav border-white/5 text-text-muted hover:text-text-primary transition-all">
                        <FiExternalLink size={18} />
                    </a>
                </div>
            </div>

            <p className="text-[10px] text-accent-blue font-bold uppercase tracking-[0.2em] mb-2">{project.category}</p>
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-8">
                {project.description}
            </p>

            <div className="space-y-4">
                <p className="text-[9px] text-text-muted font-bold uppercase tracking-widest flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-accent-blue" /> Key Features
                </p>
                <div className="space-y-2">
                    {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-xs text-text-secondary">
                            <FiCpu size={12} className="text-accent-emerald" />
                            {feature}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

const Software = () => {
    const projects = [
        {
            title: "SPD-Dynamics-Toolbox",
            filename: "spd-dynamics-toolbox.py",
            category: "Core Library",
            status: "Developing",
            description: "High-performance Python toolbox for simulating stochastic covariance flows on the SPD manifold.",
            icon: SiPython,
            features: [
                "Geometry-preserving ODE integrators",
                "Stochastic matrix differential equations",
                "Manifold-aware optimization"
            ],
            github: "#",
            demo: "#"
        },
        {
            title: "Memory-Net-Inference",
            filename: "memory-net-inference.py",
            category: "ML Framework",
            status: "Active",
            description: "A framework for learning non-Markovian memory kernels using neural operators and attention mechanisms.",
            icon: SiPytorch,
            features: [
                "Attention-driven Volterra kernels",
                "Scientific Machine Learning"
            ],
            github: "#",
            demo: "#"
        }
    ];

    return (
        <section id="software" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header Tag */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald text-[10px] font-bold uppercase tracking-widest mb-8"
                >
                    <FiMonitor size={12} />
                    Research Software
                </motion.div>

                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold font-display mb-12"
                >
                    Computational <span className="text-accent-blue">Hub</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Software;
