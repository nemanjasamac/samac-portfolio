import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import avatar from '../assets/avatar.png';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function AboutPage() {
    const lineRef = useRef(null);
    const containerRef = useRef(null);
    const isInView = useInView(lineRef, { once: false, margin: '-100px' });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    const timelineEntries = [
        {
            year: '2018',
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
            year: '2023',
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
        <section
            ref={containerRef}
            className="relative min-h-screen mt-12 px-6 py-24 flex flex-col justify-center text-white"
            style={{ position: 'relative' }} 
        >
            <div className="absolute top-20 left-[5%] w-[300px] h-[300px] bg-cyan-500 rounded-full blur-[150px] opacity-10 animate-[var(--animation-slow-float)] pointer-events-none" />
            <div className="absolute bottom-40 right-[10%] w-[400px] h-[400px] bg-blue-600 rounded-full blur-[180px] opacity-15 animate-[var(--animation-slow-float-reverse)] pointer-events-none" />

            <motion.div
                className="absolute inset-0 z-0 pointer-events-none opacity-30"
                style={{ opacity, y }}
            >
                {Array.from({ length: 5 }).map((_, i) => {
                    const points = Array.from({ length: Math.floor(Math.random() * 3) + 3 }).map(() => ({
                        x: Math.floor(Math.random() * 100),
                        y: Math.floor(Math.random() * 100)
                    }));

                    return (
                        <svg key={i} className="absolute w-full h-full">
                            {points.map((point, j, arr) => {
                                if (j === 0) return null;
                                const prev = arr[j - 1];
                                return (
                                    <motion.line
                                        key={j}
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 0.3 }}
                                        transition={{ delay: i * 0.8, duration: 1.5 }}
                                        x1={`${prev.x}`}
                                        y1={`${prev.y}`}
                                        x2={`${point.x}`}
                                        y2={`${point.y}`}
                                        stroke="#00d3f1"
                                        strokeWidth="0.3"
                                    />
                                );
                            })}
                        </svg>
                    );
                })}
            </motion.div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left"
                >
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '80px' }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-[3px] bg-gradient-to-r from-cyan-400 to-transparent mb-3 hidden md:block"
                    />
                    <p className="text-cyan-400 uppercase text-xs tracking-widest mb-2">Explorer | Developer | Creator</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        I'm Nemanja, a{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Full-Stack Engineer
                        </span>
                    </h1>
                    <p className="text-gray-300 text-lg mb-4">
                        I build modern, elegant web apps with clean code, scalable structure, and purposeful design. From frontend to backend, I turn concepts into digital reality.
                    </p>
                    <p className="text-gray-400 relative">
                        <span className="relative">
                            I specialize in React, Vue, Node.js, PostgreSQL and Tailwind CSS — always eager to learn and push limits.
                            <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1.2, delay: 1 }}
                                className="absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-cyan-400/40 to-transparent"
                            />
                        </span>
                    </p>

                    <div className="flex gap-6 mt-8 text-cyan-400 text-xl justify-center md:justify-start">
                        <motion.a
                            whileHover={{ y: -3, color: "#ffffff", scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            href="https://github.com/nemanjasamac"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition relative"
                        >
                            <FaGithub />
                            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100" />
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -3, color: "#ffffff", scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            href="https://www.linkedin.com/in/nemanja-samac/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition"
                        >
                            <FaLinkedin />
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -3, color: "#ffffff", scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            href="https://x.com/SamacDev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition"
                        >
                            <FaTwitter />
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 flex justify-center"
                >
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[150%] h-[150%] rounded-full border border-cyan-400/20 animate-[spin-slow_20s_linear_infinite]">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#06b6d4]" />
                            </div>
                        </div>

                        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cyan-400/60 shadow-[0_0_60px_rgba(6,182,212,0.4)] hover:scale-105 transition-transform duration-500 z-10">
                            <img src={avatar} alt="Nemanja Avatar" className="object-cover w-full h-full" />

                            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 to-transparent opacity-40" />
                        </div>
                    </div>
                </motion.div>
            </div>

            <section className="mt-32 w-full max-w-5xl mx-auto text-center z-10 relative">
                <motion.div
                    className="absolute inset-0 -z-10"
                    animate={{
                        background: [
                            "radial-gradient(circle at center, rgba(6,182,212,0.03) 0%, rgba(0,0,0,0) 70%)",
                            "radial-gradient(circle at center, rgba(6,182,212,0.08) 0%, rgba(0,0,0,0) 70%)",
                            "radial-gradient(circle at center, rgba(6,182,212,0.03) 0%, rgba(0,0,0,0) 70%)",
                        ]
                    }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                />

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-10 text-white relative inline-block"
                >
                    <span>Tech I Work With</span>
                    <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-cyan-400/60 to-transparent"
                    />
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 text-4xl text-cyan-400"
                >
                    {[
                        { icon: "devicon-react-original", title: "React" },
                        { icon: "devicon-vuejs-plain", title: "Vue.js" },
                        { icon: "devicon-nodejs-plain", title: "Node.js" },
                        { icon: "devicon-postgresql-plain", title: "PostgreSQL" },
                        { icon: "devicon-mysql-plain", title: "MySQL" },
                        { icon: "devicon-tailwindcss-plain", title: "Tailwind CSS" },
                        { icon: "devicon-javascript-plain", title: "JavaScript" },
                        { icon: "devicon-docker-plain", title: "Docker" },
                        { icon: "devicon-python-plain", title: "Python" },
                        { icon: "devicon-git-plain", title: "Git" }
                    ].map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                            whileHover={{
                                scale: 1.15,
                                color: "#ffffff",
                                textShadow: "0 0 15px rgba(6, 182, 212, 0.8)"
                            }}
                            className="flex flex-col items-center justify-center gap-2 transition-all duration-300"
                        >
                            <i className={tech.icon} title={tech.title}></i>
                            <span className="text-xs text-gray-400 font-medium">{tech.title}</span>
                        </motion.div>
                    ))}
                </motion.div>
                <p className="mt-8 text-sm text-gray-400 italic">
                    These are just a few tools I love — my toolbox keeps evolving.
                </p>
            </section>

            <section className="mt-32 max-w-4xl mx-auto px-4 text-left relative">
                <div className="absolute -left-20 top-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-[80px]" />
                <div className="absolute -right-20 bottom-20 w-40 h-40 bg-blue-500/10 rounded-full blur-[80px]" />

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-white text-center relative inline-block mx-auto"
                >
                    <span className="relative">
                        My Journey
                        <motion.span
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-cyan-400/60 to-transparent"
                        />
                    </span>
                </motion.h2>

                <div className="relative pl-8">
                    <motion.div
                        ref={lineRef}
                        initial={{ height: 0 }}
                        animate={{ height: isInView ? '100%' : 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute left-1 top-0 w-[2px] bg-gradient-to-b from-cyan-400 via-cyan-400/50 to-transparent"
                        style={{ originY: 0 }}
                    />

                    <div className="space-y-16">
                        {timelineEntries.map((entry, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="absolute -left-7 top-0 w-5 h-5 bg-cyan-400/20 rounded-full blur-lg" />

                                <div className="absolute -left-6 top-1 flex items-center justify-center">
                                    <div className="w-4 h-4 rounded-full bg-cyan-400/30"></div>
                                    <div className="absolute w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-pulse"></div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm rounded-xl px-6 py-5 border border-white/10 shadow-lg hover:shadow-cyan-500/10 hover:border-white/20 transition-all duration-300">
                                    <h3 className="text-cyan-300 text-sm mb-2 font-semibold tracking-wider">{entry.year}</h3>
                                    <h4 className="text-white text-xl font-bold flex items-center gap-3">
                                        <span className="text-2xl bg-white/5 p-2 rounded-lg border border-white/10">{entry.icon}</span>
                                        {entry.title}
                                    </h4>
                                    <p className="text-gray-400 mt-2 pl-12">{entry.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mt-32 max-w-6xl mx-auto px-4 relative">
                <div className="absolute left-10 bottom-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-white text-center"
                >
                    <span className="relative inline-block">
                        How I Think About Code
                        <motion.span
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-cyan-400/60 to-transparent"
                        />
                    </span>
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-10 text-center text-gray-300">
                    {[
                        {
                            title: "Why I Code",
                            icon: "✨",
                            desc: "To turn ideas into elegant, lasting digital systems that solve real problems.",
                        },
                        {
                            title: "What I Believe",
                            icon: "🔍",
                            desc: "Clean code, thoughtful architecture, and simplicity win over complexity.",
                        },
                        {
                            title: "How I Build",
                            icon: "🛠️",
                            desc: "From backend logic to frontend finesse — full-stack with performance and clarity.",
                        },
                    ].map((block, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(6, 182, 212, 0.15)" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-md rounded-xl px-6 py-8 border border-white/10 shadow-md relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="w-12 h-12 mx-auto mb-4 bg-cyan-500/10 rounded-full flex items-center justify-center text-2xl border border-cyan-400/20">
                                {block.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{block.title}</h3>
                            <p className="text-sm text-gray-400">{block.desc}</p>

                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '30%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 + (index * 0.2) }}
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="mt-32 mb-20 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ boxShadow: "0 20px 80px -20px rgba(6, 182, 212, 0.25)" }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-lg rounded-xl px-8 py-12 border border-white/10 shadow-md relative overflow-hidden"
                >
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl animate-[var(--animation-slow-float)]" />
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-[var(--animation-slow-float-reverse)]" />

                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Let's Build Something Together
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Got a project in mind or just want to say hello?<br />
                            I'm always open to new ideas, collaborations, or just a good dev convo.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-black font-semibold rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                        >
                            <span>Let's Connect</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            <section className="mt-12 px-6 pb-20">
                <div className="w-full flex justify-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold text-white mb-10 text-center relative inline-block"
                    >
                        <span className="relative">
                            A Few Fun Facts
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-cyan-400/60 to-transparent"
                            />
                        </span>
                    </motion.h2>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.15 }}
                    className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto"
                >
                    {[
                        { emoji: '🌙', text: 'Night owl dev — peak productivity at 2am' },
                        { emoji: '💻', text: 'Working on Lawcrative (legal-tech SaaS)' },
                        { emoji: '🧠', text: 'Learning LangChain & AI tools' },
                        { emoji: '🚀', text: 'Space exploration enthusiast' },
                    ].map((fact, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20, scale: 0.8 },
                                visible: { opacity: 1, y: 0, scale: 1 },
                            }}
                            whileHover={{
                                scale: 1.08,
                                boxShadow: "0 10px 20px -8px rgba(6, 182, 212, 0.3)",
                                background: "linear-gradient(to right, rgba(255,255,255,0.08), rgba(255,255,255,0.04))"
                            }}
                            transition={{ duration: 0.4 }}
                            className="px-5 py-3 bg-white/5 border border-white/10 text-gray-300 rounded-full backdrop-blur-md text-sm flex items-center gap-3 shadow-md transition-all duration-300"
                        >
                            <motion.span
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, delay: index * 0.5, repeat: Infinity, repeatDelay: 5 }}
                                className="text-xl"
                            >
                                {fact.emoji}
                            </motion.span>
                            {fact.text}
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </section>
    );
}
