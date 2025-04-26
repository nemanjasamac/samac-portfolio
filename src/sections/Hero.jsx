import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import avatar from '../assets/avatar.png';
import { FaReact, FaVuejs, FaNodeJs, FaGitAlt, FaCss3Alt } from 'react-icons/fa';
import { SiPostgresql, SiJavascript, SiMysql } from 'react-icons/si';

export default function Hero() {
    const allIcons = [
        { icon: <FaReact aria-label="React" />, link: 'https://reactjs.org' },
        { icon: <FaVuejs aria-label="Vue.js" />, link: 'https://vuejs.org' },
        { icon: <FaGitAlt aria-label="Git" />, link: 'https://git-scm.com' },
        { icon: <FaNodeJs aria-label="Node.js" />, link: 'https://nodejs.org/en' },
        { icon: <FaCss3Alt aria-label="CSS3" />, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { icon: <SiPostgresql aria-label="PostgreSQL" />, link: 'https://www.postgresql.org' },
        { icon: <SiMysql aria-label="MySQL" />, link: 'https://www.mysql.com' },
        { icon: <SiJavascript aria-label="JavaScript" />, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' }
    ];

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-black via-[#0b0c10] to-gray-900 text-white px-6 overflow-hidden"
        >
            {/* Starfield */}
            <div className="absolute inset-0 z-0 pointer-events-none animate-[var(--animation-twinkle)]">
                <svg
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <radialGradient id="star-gradient" cx="50%" cy="50%" r="80%">
                            <stop offset="0%" stopColor="white" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    {Array.from({ length: 120 }).map((_, i) => (
                        <circle
                            key={i}
                            cx={Math.random() * 100 + '%'}
                            cy={Math.random() * 100 + '%'}
                            r={Math.random() * 1.2 + 0.3}
                            fill="url(#star-gradient)"
                            opacity={Math.random() * 0.6 + 0.2}
                        />
                    ))}
                </svg>
            </div>

            {/*  Aurora  */}
            <div className="absolute top-[8%] left-[10%] w-[300px] h-[300px] bg-cyan-400 rounded-full blur-3xl opacity-20 animate-[var(--animation-slow-float)] z-0" />
            <div className="absolute bottom-[12%] right-[5%] w-[400px] h-[400px] bg-blue-500 rounded-full blur-[100px] opacity-25 animate-[var(--animation-slow-float-reverse)] z-0" />

            {/*  Avatar + Orbit  */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="z-20 flex flex-col items-center relative"
            >
                <div className="relative w-[200px] h-[200px] flex items-center justify-center">
                    <div className="absolute w-full h-full animate-[spin-slow_25s_linear_infinite] group">
                        {allIcons.map((tech, i) => (
                            <a
                                key={i}
                                href={tech.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`absolute w-6 h-6 text-cyan-300 cursor-pointer transition-transform duration-300 hover:scale-125 hover:text-white drop-shadow-[0_0_4px_#67e8f9] group-hover:animate-none`}
                                style={{
                                    top: '50%',
                                    left: '50%',
                                    transform: `rotate(${(360 / allIcons.length) * i}deg) translateX(90px)`
                                }}
                            >
                                {tech.icon}
                            </a>
                        ))}
                    </div>

                    {/* Avatar Center */}
                    <img
                        src={avatar}
                        alt="Samac Avatar"
                        className="w-24 h-24 rounded-full border-2 border-cyan-500 shadow-xl transition-transform duration-500 hover:scale-105"
                    />
                </div>

                <h2 className="text-cyan-400 uppercase tracking-[0.3em] text-sm mt-4">
                    Hello, I’m Nemanja Samac
                </h2>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mt-2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Full-Stack Developer
                    </span>
                    <br />
                    <span className="italic text-gray-400">Building futuristic solutions</span>
                </h1>
                <p className="mt-6 max-w-xl text-gray-300 text-lg">
                    I craft seamless digital experiences using modern tech and clean architecture.
                </p>
                <div className="mt-10 flex gap-4 justify-center">
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black rounded-full font-semibold transition shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
                    >
                        View Projects
                    </a>
                    <a
                        href="mailto:nemanja@samac.dev"
                        className="px-6 py-3 bg-white/10 border border-white/20 hover:bg-white/20 text-white rounded-full font-semibold transition"
                    >
                        Let’s Connect
                    </a>
                </div>
            </motion.div>

            {/*  Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
                <div className="flex flex-col items-center">
                    <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-center justify-center">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce"></div>
                    </div>
                    <div className="text-xs text-cyan-400 mt-1 animate-pulse">Scroll</div>
                </div>
            </div>
        </section>
    );
}
