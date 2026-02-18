import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiArrowUpRight, FiFileText } from 'react-icons/fi';

const PublicationCard = ({ pub, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="glass-card p-8 flex flex-col md:flex-row gap-8 items-start group hover:border-accent-blue/40 transition-all duration-500"
    >
        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-secondary border border-glass-border flex items-center justify-center text-accent-blue group-hover:bg-accent-blue/10 transition-colors">
            <FiFileText size={28} />
        </div>
        <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-2 py-1 rounded-md bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-[10px] font-bold uppercase tracking-widest">
                    {pub.year}
                </span>
                <span className="text-[10px] text-text-muted font-bold uppercase tracking-widest">
                    {pub.venue}
                </span>
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-accent-blue transition-colors leading-tight">
                {pub.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {pub.authors}
            </p>
            <div className="flex gap-4">
                <a href="#" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-text-primary hover:text-accent-blue transition-colors">
                    Preprint <FiArrowUpRight />
                </a>
                <a href="#" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-text-primary hover:text-accent-emerald transition-colors">
                    Dataset <FiArrowUpRight />
                </a>
            </div>
        </div>
    </motion.div>
);

const Publications = () => {
    const publications = [
        {
            title: "Stochastic Covariance Flows on Symmetric Positive Definite Manifolds: A Variational Approach",
            authors: "Sorathiya, D., et al. (In Prep)",
            year: "2024",
            venue: "Research Submission"
        },
        {
            title: "Kernel-Based Operator Learning for Memory Extraction in Non-Markovian Dynamical Systems",
            authors: "Sorathiya, D. (Working Paper)",
            year: "2024",
            venue: "Internal Technical Report"
        }
    ];

    return (
        <section id="publications" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-[10px] font-bold uppercase tracking-widest mb-8"
                >
                    <FiBookOpen size={12} />
                    Scholarly Works
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold font-display mb-12"
                >
                    Research <span className="text-accent-blue">Output</span>
                </motion.h2>

                <div className="grid grid-cols-1 gap-8">
                    {publications.map((pub, index) => (
                        <PublicationCard key={index} pub={pub} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Publications;
