
import Hero from '../sections/Hero';
import ProjectCard from '../components/ProjectCard';
import ParticlesBackground from '../components/ParticlesBackground';

export default function Home() {
    return (
        <>
            <Hero />
            <section id="projects">
            <ParticlesBackground />

                <ProjectCard
                    project={{
                        title: 'Lawcrative',
                        subtitle: 'A legal-tech platform for lawyers',
                        image: '/src/assets/projects/lawcrative.jpg',
                        description: 'Legal-tech SaaS platform built for lawyers.',
                        features: [
                            'AI-generated case summaries using GPT',
                            'Integrated document and calendar management',
                            'Team roles with granular access',
                        ],
                        tech: ['Vue', 'Tailwind', 'Express', 'MySQL', 'GPT-4'],
                    }}
                />


            </section>
        </>
    );
}
