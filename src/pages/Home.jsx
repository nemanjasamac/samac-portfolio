import Hero from '../sections/Hero';
import ProjectsSection from '../sections/Projects';

export default function Home({ onNavigate }) {
    return (
        <div className="min-h-screen">
            <Hero />
            <ProjectsSection onNavigate={onNavigate} />
        </div>
    );
}
