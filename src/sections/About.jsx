import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-[80vh] bg-[#0b0c10] flex flex-col items-center justify-center px-6 py-20 text-white text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-cyan-400 text-sm uppercase tracking-widest mb-2">
          Module 1: About Me
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Full-Stack Developer & Problem Solver
        </h3>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          I'm a full-stack engineer with a passion for clean code, scalable systems,
          and creating engaging digital experiences. Whether it's designing intuitive UIs
          or building robust APIs, I love working across the stack to bring ideas to life.
        </p>
      </motion.div>
    </section>
  );
}
