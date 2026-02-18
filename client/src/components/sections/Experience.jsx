import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCalendar, FiMapPin, FiCheckCircle, FiZap } from 'react-icons/fi';

const HackathonCardComponent = ({ hackathon, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15, duration: 0.6 }}
        className="relative overflow-hidden rounded-[32px] p-10 group"
    >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/5 border border-white/30 -z-10" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10">
            <div className="flex items-start gap-6">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-accent-blue/40 to-accent-emerald/25 border border-accent-blue/50 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-accent-blue/30">
                    <FiCode size={32} />
                </div>
                <div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">{hackathon.name}</h3>
                    <p className="text-accent-blue font-semibold text-lg">{hackathon.organization}</p>
                </div>
            </div>
            <div className="flex flex-col gap-3 text-base text-text-secondary font-medium">
                <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-xl">
                    <FiCalendar size={18} className="text-accent-blue" />
                    {hackathon.period}
                </div>
                <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-xl">
                    <FiMapPin size={18} className="text-accent-blue" />
                    {hackathon.location}
                </div>
            </div>
        </div>

        <div className="space-y-4">
            {hackathon.achievements.map((achievement, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + i * 0.08 }}
                    className="flex items-start gap-4 text-text-secondary leading-relaxed group/item"
                >
                    <div className="mt-1.5 flex-shrink-0">
                        <FiCheckCircle size={20} className="text-accent-emerald" />
                    </div>
                    <span className="text-base">{achievement}</span>
                </motion.div>
            ))}
        </div>
    </motion.div>
);

const HackathonCard = React.memo(HackathonCardComponent);

const HackathonComponent = () => {
    const hackathons = [
        {
            name: "Odoo Hackathon",
            organization: "Nirma University",
            period: "October 2024",
            location: "Ahmedabad, India",
            achievements: [
                "Participated in a 48-hour hackathon with a cross-functional team of 4 developers to build a full-stack web application using MERN stack.",
                "Implemented secure JWT-based authentication system ensuring 100% protection against unauthorized access with robust session management.",
                "Developed RESTful API endpoints with Express.js achieving 200ms average response time for all CRUD operations.",
                "Created responsive UI components using React.js and Tailwind CSS with cross-browser compatibility and mobile-first design approach."
            ]
        },
        {
            name: "HackNuthon",
            organization: "Nirma University",
            period: "November 2024",
            location: "Ahmedabad, India",
            achievements: [
                "Collaborated with teammates in a 36-hour hackathon sprint to develop an innovative solution addressing real-world challenges.",
                "Designed and implemented backend architecture using Node.js and Express.js with optimized database queries using MongoDB.",
                "Built interactive frontend features using React.js and modern CSS with smooth animations and seamless user experience.",
                "Demonstrated technical expertise in full-stack development, problem-solving, and agile teamwork under time constraints."
            ]
        }
    ];

    return (
        <section id="hackathons" className="relative py-40 px-6 overflow-hidden bg-gradient-to-b from-primary via-primary to-secondary/10">
            {/* Animated Background */}
            <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent-blue/10 rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-accent-emerald/10 rounded-full -z-10" />
            <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-accent-blue/5 rounded-full -z-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent-blue/20 to-accent-emerald/20 border border-accent-blue/50 text-accent-blue text-[11px] font-bold uppercase tracking-widest mb-8"
                    >
                        <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                            <FiZap size={14} />
                        </motion.div>
                        Learning & Growth
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.7 }}
                        className="space-y-6"
                    >
                        <h2 className="text-7xl lg:text-8xl font-black font-display tracking-tighter text-white leading-[0.9]">
                            Hackathon<br />
                            <span className="text-gradient italic">Participants.</span>
                        </h2>
                        <p className="text-lg text-text-secondary max-w-3xl leading-relaxed font-medium">
                            Passionate about innovation and competitive problem-solving. Participated in multiple hackathons
                            at Nirma University, building real-world solutions under tight deadlines.
                        </p>
                    </motion.div>
                </div>

                {/* Hackathons Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {hackathons.map((hackathon, index) => (
                        <HackathonCard key={index} hackathon={hackathon} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Hackathon = React.memo(HackathonComponent);

export default Hackathon;
