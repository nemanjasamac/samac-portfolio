import { useEffect } from 'react';
import Hero from '../sections/Hero';
import ProjectsSection from '../sections/Projects';
import SkillsSection from '../sections/Skills';
import MiniAbout from '../sections/MiniAbout';
import { debounce } from '../utils/debounce';

export default function Home({ onNavigate }) {
    useEffect(() => {
        const handleScroll = debounce(() => {
        }, 100);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen">
            <Hero />
            <ProjectsSection onNavigate={onNavigate} />
            <SkillsSection />
            <MiniAbout />
        </div>
    );
}
