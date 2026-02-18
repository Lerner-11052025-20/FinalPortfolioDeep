import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Hackathon from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

const AppComponent = () => {
    return (
        <div className="min-h-screen bg-primary text-text-primary font-sans selection:bg-accent-blue/30 selection:text-white">
            {/* Global Background Layer */}
            <div className="fixed inset-0 -z-50 bg-[#0f172a]" />

            {/* Subtle Decorative Gradients - Optimized Performance */}
            <div className="fixed inset-0 -z-40 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-blue/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent-emerald/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>

            <Navbar />

            <main className="relative z-10">
                <Hero />
                <About />
                <Skills />
                <Hackathon />
                <Projects />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default React.memo(AppComponent);
