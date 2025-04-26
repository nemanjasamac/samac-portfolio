
import Hero from '../sections/Hero';
import ProjectCard from '../components/ProjectCard'; // updated import

export default function Home() {
    return (
        <>
            <Hero />

            <section id="projects">
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


                {/* Add more projects here as needed */}
            </section>
        </>
    );
}
