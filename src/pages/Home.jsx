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
        <>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Nemanja Samac",
                    "url": "https://samac.dev",
                    "jobTitle": "Full-Stack Developer",
                    "sameAs": [
                        "https://github.com/nemanjasamac",
                        "https://www.linkedin.com/in/nemanja-samac/",
                        "https://x.com/SamacDev"
                    ],
                    "knowsAbout": ["React", "Vue.js", "Node.js", "JavaScript", "Web Development"],
                    "worksFor": {
                        "@type": "Organization",
                        "name": "Freelance"
                    }
                })}
            </script>
            <div className="min-h-screen">
                <Hero />
                <ProjectsSection onNavigate={onNavigate} />
                <SkillsSection />
                <MiniAbout />
            </div>
        </>
    );
}
