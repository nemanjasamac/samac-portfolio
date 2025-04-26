import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import avatar from '../assets/avatar.png'; // update path if needed
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function AboutPage() {
    const lineRef = useRef(null);
    const isInView = useInView(lineRef, { once: false, margin: '-100px' });

    const timelineEntries = [
        {
            year: '2019',
            icon: '🧠',
            title: 'Started Learning Programming',
            desc: 'Discovered the world of code and built my first HTML/CSS pages.',
        },
        {
            year: '2020',
            icon: '🛠️',
            title: 'Built First Full-Stack App',
            desc: 'Used Node.js and PostgreSQL to build a personal portfolio manager.',
        },
        {
            year: '2022',
            icon: '⚖️',
            title: 'Worked in Legal-Tech Projects',
            desc: 'Collaborated with lawyers to automate case handling and scheduling.',
        },
        {
            year: '2024',
            icon: '🤖',
            title: 'SaaS & AI Exploration',
            desc: 'Building full-stack products and experimenting with AI features.',
        },
    ];
    return (
        <section className="min-h-screen mt-12 px-6 py-24 flex flex-col justify-center text-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                {/* Bio */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 text-center md:text-left"
                >
                    <p className="text-cyan-400 uppercase text-xs tracking-widest mb-2">Module 1</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                        I'm Nemanja, a <span className="text-blue-500">Full-Stack Engineer</span>
                    </h1>
                    <p className="text-gray-300 text-lg mb-4">
                        I build modern, elegant web apps with clean code, scalable structure, and purposeful design. From frontend to backend, I turn concepts into digital reality.
                    </p>
                    <p className="text-gray-400">
                        I specialize in React, Vue, Node.js, PostgreSQL and Tailwind CSS — always eager to learn and push limits.
                    </p>

                    {/* Socials */}
                    <div className="flex gap-6 mt-6 text-cyan-400 text-xl justify-center md:justify-start">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                            <FaTwitter />
                        </a>
                    </div>
                </motion.div>

                {/* Avatar */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 flex justify-center"
                >
                    <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_40px_#06b6d4] hover:scale-105 transition-transform duration-500">
                        <img src={avatar} alt="Nemanja Avatar" className="object-cover w-full h-full" />
                    </div>
                </motion.div>
            </div>
            <section className="mt-24 w-full max-w-5xl mx-auto text-center z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-8 text-white"
                >
                    Tech I Work With
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 text-4xl text-cyan-400"
                >
                    <div className="hover:text-white hover:scale-110 transition">
                        <i className="devicon-react-original" title="React"></i>
                    </div>
                    <div className="hover:text-white hover:scale-110 transition">
                        <i className="devicon-vuejs-plain" title="Vue.js"></i>
                    </div>
                    <div className="hover:text-white hover:scale-110 transition">
                        <i className="devicon-nodejs-plain" title="Node.js"></i>
                    </div>
                    <div className="hover:text-white hover:scale-110 transition">
                        <i className="devicon-postgresql-plain" title="PostgreSQL"></i>
                    </div>
                    <div className="hover:text-white hover:scale-110 transition">
                        <i className="devicon-mysql-plain" title="MySQL"></i>
                    </div>
                    <div className="hover:text-white hover:scale-110 transition">
                        <i className="devicon-tailwindcss-plain" title="Tailwind CSS"></i>
                    </div>
                    <div className="hover:text-white hover:scale-110 transition">
                        <i className="devicon-javascript-plain" title="JavaScript"></i>
                    </div>
                    <div className="hover:text-white hover:scale-110 transition">
                        <i className="devicon-typescript-plain" title="TypeScript"></i>
                    </div>
                    <div className="hover:text-white hover:scale-110 transition">
                        <i className="devicon-python-plain" title="Python"></i>
                    </div>
                    <div className="hover:text-white hover:scale-110 transition">
                        <i className="devicon-git-plain" title="Git"></i>
                    </div>
                </motion.div>
                <p className="mt-6 text-sm text-gray-400 italic">
                    These are just a few tools I love — my toolbox keeps evolving.
                </p>


            </section>
            {/* Timeline Section */}
            <section className="mt-32 max-w-4xl mx-auto px-4 text-left">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-white text-center"
                >
                    My Journey
                </motion.h2>

                <div className="relative pl-6">
                    {/* Animated vertical line */}
                    <motion.div
                        ref={lineRef}
                        initial={{ height: 0 }}
                        animate={{ height: isInView ? '100%' : 0 }}
                        transition={{ duration: 1 }}
                        className="absolute left-1 top-0 w-[2px] bg-cyan-500/40"
                        style={{ originY: 0 }}
                    />

                    <div className="space-y-10">
                        {timelineEntries.map((entry, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                {/* Glowing dot */}
                                <div className="absolute -left-[15px] top-1 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-pulse" />

                                <h3 className="text-cyan-300 text-sm mb-1 font-semibold">{entry.year}</h3>
                                <h4 className="text-white text-lg font-bold flex items-center gap-2">
                                    <span className="text-xl">{entry.icon}</span>
                                    {entry.title}
                                </h4>
                                <p className="text-gray-400 mt-1">{entry.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Core Values */}
            <section className="mt-32 max-w-6xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-white text-center"
                >
                    How I Think About Code
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-10 text-center text-gray-300">
                    {[
                        {
                            title: "Why I Code",
                            desc: "To turn ideas into elegant, lasting digital systems that solve real problems.",
                        },
                        {
                            title: "What I Believe",
                            desc: "Clean code, thoughtful architecture, and simplicity win over complexity.",
                        },
                        {
                            title: "How I Build",
                            desc: "From backend logic to frontend finesse — full-stack with performance and clarity.",
                        },
                    ].map((block, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-md rounded-xl px-6 py-8 border border-white/10 shadow-md"
                        >
                            <h3 className="text-xl font-bold text-white mb-2">{block.title}</h3>
                            <p className="text-sm text-gray-400">{block.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
            {/* CTA */}

            <section className="mt-32 mb-20 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center bg-white/5 backdrop-blur-lg rounded-xl px-8 py-12 border border-white/10 shadow-md"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Let’s Build Something Together
                    </h2>
                    <p className="text-gray-400 mb-6">
                        Got a project in mind or just want to say hello?
                        I’m always open to new ideas, collaborations, or just a good dev convo.
                    </p>
                    <a
                        href="/#contact"
                        className="inline-block px-6 py-3 bg-cyan-500 text-black font-semibold rounded-full shadow-md hover:bg-cyan-400 transition"
                    >
                        Let’s Connect →
                    </a>
                </motion.div>
            </section>
            {/*  Fun Facts   */}
            {/* 🌟 Fun Facts Section */}
            <section className="mt-12 px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-bold text-white mb-10 text-center"
                >
                    A Few Fun Facts
                </motion.h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.15 }}
                    className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
                >
                    {[
                        { emoji: '🌙', text: 'Night owl dev — peak productivity at 2am' },
                        { emoji: '🏋️‍♂️', text: 'Loves lifting weights (and coding on rest days)' },
                        { emoji: '💻', text: 'Working on Lawcrative (legal-tech SaaS)' },
                        { emoji: '🧠', text: 'Learning LangChain & AI tools' },
                    ].map((fact, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5 }}
                            className="px-5 py-3 bg-white/5 border border-white/10 text-gray-300 rounded-full backdrop-blur-md text-sm flex items-center gap-3 shadow-md hover:shadow-cyan-500/20 hover:scale-105 transition"
                        >
                            <span className="text-xl">{fact.emoji}</span>
                            {fact.text}
                        </motion.div>
                    ))}
                </motion.div>
            </section>


        </section>

    );
}
