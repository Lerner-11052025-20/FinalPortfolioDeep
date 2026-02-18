import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiZap } from 'react-icons/fi';
import {
    FaReact, FaNodeJs, FaPython
} from 'react-icons/fa';
import {
    SiTailwindcss, SiMongodb, SiExpress, SiTypescript, SiFlask, SiPandas
} from 'react-icons/si';

const ProjectCardComponent = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="group relative overflow-hidden rounded-[28px] h-full"
    >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/5 border border-white/30 -z-10" />

        <div className="relative p-8 h-full flex flex-col">
            {/* Project Image */}
            <div className="mb-6 relative h-48 rounded-xl overflow-hidden bg-white/10 border border-white/20 group/image">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-accent-blue/30 to-accent-emerald/20 flex items-center justify-center">
                        <FiCode size={48} className="text-accent-blue opacity-40" />
                    </div>
                )}
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>

            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent-blue/20 border border-accent-blue/40 text-accent-blue text-[10px] font-bold uppercase tracking-widest mb-4 w-fit">
                {project.category}
            </div>

            {/* Project Title */}
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-snug">{project.title}</h3>

            {/* Project Description */}
            <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-grow">
                {project.description}
            </p>

            {/* Technologies */}
            <div className="space-y-4 mb-6">
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.03 }}
                            className="px-3 py-1.5 rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-emerald/15 border border-accent-blue/30 text-accent-blue text-xs font-semibold"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-4 border-t border-white/10">
                {project.github && project.github !== "#" && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm font-semibold text-center justify-center transition-all duration-300"
                    >
                        <FiGithub size={16} />
                        Code
                    </a>
                )}
                {project.demo && project.demo !== "#" && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-r from-accent-blue/30 to-accent-emerald/25 border border-accent-blue/40 text-white text-sm font-semibold text-center justify-center transition-all duration-300"
                    >
                        <FiExternalLink size={16} />
                        Demo
                    </a>
                )}
            </div>
        </div>
    </motion.div>
);

const ProjectCard = React.memo(ProjectCardComponent);

const ProjectsComponent = () => {
    const projects = [
        {
            title: "EcoFinds",
            category: "Full Stack",
            description: "Sustainable items marketplace built with MERN stack. Features eco-friendly product listings, secure payments, and environmental impact tracking for conscious consumers.",
            technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvfGVufDB8fDB8fHww",
            github: "https://github.com",
            demo: "#"
        },
        {
            title: "StayVista Hub",
            category: "Full Stack",
            description: "Comprehensive hotel booking platform with secure user authentication, real-time room availability, and seamless booking management. Engineered for scalability and reliability.",
            technologies: ["React", "Node.js", "MongoDB", "Clerk Auth"],
            image: "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
            github: "https://github.com",
            demo: "#"
        },
        {
            title: "Movie Recommender System",
            category: "Web App",
            description: "Python-based movie recommendation engine using collaborative filtering and content-based algorithms. Provides personalized movie suggestions with 85%+ accuracy.",
            technologies: ["Python", "Pandas", "Scikit-learn", "Flask"],
            image: "https://images.unsplash.com/photo-1619164669943-536b56d813a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TW92aWUlMjBSZWNvbW1lbmRlciUyMFN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D",
            github: "https://github.com",
            demo: "#"
        },
        {
            title: "Spotify Clone",
            category: "Web App",
            description: "Frontend-only Spotify clone with modern UI/UX. Features music player controls, playlists, and responsive design using React and Tailwind CSS.",
            technologies: ["React", "Tailwind CSS", "Spotify API", "Framer Motion"],
            image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop",
            github: "https://github.com",
            demo: "#"
        },
        {
            title: "Advanced Todo List",
            category: "Web App",
            description: "Feature-rich task management app with categories, priorities, deadlines, and local storage. Built with React and TypeScript for type safety and better development experience.",
            technologies: ["React", "TypeScript", "Tailwind", "Local Storage"],
            image: "https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWR2YW5jZWQlMjBUb2RvJTIwTGlzdHxlbnwwfHwwfHx8MA%3D%3D",
            github: "https://github.com",
            demo: "#"
        },
        {
            title: "Developer Portfolio",
            category: "Web App",
            description: "Modern portfolio website showcasing projects and skills. Features smooth animations, dark mode, and responsive design with glassmorphism effects.",
            technologies: ["React", "Tailwind", "Framer Motion", "Vite"],
            image: "https://images.unsplash.com/photo-1615454782617-e69bbd4f2969?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fERldmVsb3BlciUyMFBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D",
            github: "https://github.com",
            demo: "#"
        }
    ];

    return (
        <section id="projects" className="relative py-40 px-6 overflow-hidden bg-gradient-to-b from-primary via-primary to-secondary/10">
            {/* Animated Background Blur Globs */}
            <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent-blue/20 rounded-full blur-[150px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-accent-emerald/15 rounded-full blur-[180px] -z-10 animate-pulse" />
            <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[160px] -z-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent-blue/20 to-accent-emerald/20 border border-accent-blue/50 backdrop-blur-xl text-accent-blue text-[11px] font-bold uppercase tracking-widest mb-8"
                    >
                        <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                            <FiZap size={14} />
                        </motion.div>
                        Built Solutions
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.7 }}
                        className="space-y-6"
                    >
                        <h2 className="text-7xl lg:text-8xl font-black font-display tracking-tighter text-white leading-[0.9]">
                            Featured<br />
                            <span className="text-gradient italic">Projects.</span>
                        </h2>
                        <p className="text-lg text-text-secondary max-w-3xl leading-relaxed font-medium">
                            A showcase of full-stack applications, machine learning models, and creative web solutions
                            built with modern technologies and best development practices.
                        </p>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Projects = React.memo(ProjectsComponent);

export default Projects;
