import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiGithub, FiExternalLink } from 'react-icons/fi';
import lawcrativeImage from '../assets/projects/lawcrative.jpg';
import medAgentImage from '../assets/projects/medagentx.jpg';
import portfolioImage from '../assets/projects/portfolio.jpg';

const allProjects = [
	{
		id: 'lawcrative',
		title: 'Lawcrative',
		subtitle: 'A legal-tech platform for lawyers',
		image: lawcrativeImage,
		description: 'A legal-tech SaaS platform designed for lawyers and law firms in the Balkans, built to fully digitalize everyday operations, eliminate paperwork, and boost productivity through advanced AI features, case and calendar management, and integrated client communication.',
		category: 'SaaS',
		features: [
			'AI Assistance: Automated case summaries, legal document analysis, and smart search using GPT-4, with plans to migrate to local LLaMA models for enhanced security and cost optimization.',
			'Case & Client Management: Centralized organization of cases, clients, tasks, and deadlines, with intelligent cross-linking of information.',
			'Integrated Communication: Unique built-in chat system that merges SMS, email, and internal messaging directly within each case file.',
			'Legal Calendar: Electronic calendar with automatic reminders for hearings, deadlines, and meetings, fully linked to specific cases.',
			'Document Management: Secure storage, versioning, and search functionality for legal documents, including automatic PDF processing with OCR.',
			'Client Portal: Personalized access for clients to exchange documents, track case progress, and schedule meetings.',
			'Full Customization: Platform can be tailored to the specific processes, templates, and branding of each law firm.'
		],
		tech: ['Vue.js', 'Express.js', 'Python', 'MySQL', 'GPT-4 / LLaMA', 'FastAPI'],
		link: 'https://lawcrative.com',
		github: 'https://github.com/nemanjasamac/lawcrative-app',
	},
	{
		id: 'med-agent-x',
		title: 'MedAgentX',
		subtitle: 'AI-powered healthcare assistant',
		image: medAgentImage,
		description: 'A revolutionary healthcare platform that leverages advanced AI to help users understand medical symptoms, access reliable health information, and make better healthcare decisions through natural language interactions.',
		category: 'Healthcare',
		features: [
			'Advanced symptom analysis using medical knowledge graph and NLP',
			'Personalized health insights based on user health profiles',
			'Integration with medical databases for evidence-based responses',
			'Multi-language support for global accessibility',
			'HIPAA-compliant data handling with end-to-end encryption'
		],
		tech: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'BioGPT', 'Python'],
		link: 'https://github.com/nemanjasamac/med-agent-x',
		github: 'https://github.com/nemanjasamac/med-agent-x',
	},
	{
		id: 'personal-portfolio',
		title: 'Developer Portfolio',
		subtitle: 'Interactive web development showcase',
		image: portfolioImage,
		description: 'A modern, responsive portfolio website built to showcase my web development projects and skills. Features smooth animations, interactive elements, and an intuitive user experience designed to highlight my work in the most engaging way possible.',
		category: 'Web Development',
		features: [
			'Interactive 3D particle background with WebGL',
			'Smooth page transitions with Framer Motion',
			'Responsive design optimized for all devices',
			'Dark mode theme with custom animations',
			'Dynamic project filtering and categorization',
			'Optimized performance with lazy loading and code splitting'
		],
		tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'React Router'],
		link: 'https://samac.dev',
		github: 'https://github.com/nemanjasamac/samac-portfolio',
	},
];

export default function SingleProject() {
	const { projectId } = useParams();

	const project = allProjects.find(
		(p) => p.id === projectId ||
			p.title.toLowerCase().replace(/\s+/g, '-') === projectId ||
			p.title.toLowerCase().replace(/\s+/g, '') === projectId
	);

	if (!project) {
		return (
			<div className="min-h-screen flex items-center justify-center text-white">
				<div className="text-center">
					<h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
					<p className="text-gray-400 mb-6">The project you're looking for doesn't exist or has been removed.</p>
					<Link
						to="/projects"
						className="px-5 py-3 bg-cyan-500 text-black rounded-lg shadow-lg hover:bg-cyan-400 transition-all"
					>
						Back to Projects
					</Link>
				</div>
			</div>
		);
	}

	return (
		<section className="relative min-h-screen py-24 px-6 overflow-hidden">
			<div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-blue-500 rounded-full blur-[200px] opacity-10 animate-slow-float -z-10" />
			<div className="absolute bottom-[15%] right-[10%] w-[350px] h-[350px] bg-cyan-400 rounded-full blur-[180px] opacity-15 animate-slow-float-reverse -z-10" />

			<div className="max-w-5xl mx-auto relative z-10">
				<Link
					to="/projects"
					className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
				>
					<FiArrowLeft />
					Back to Projects
				</Link>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{project.title}</h1>
					<p className="text-gray-300 text-lg">{project.subtitle}</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8 }}
					className="rounded-xl overflow-hidden shadow-lg mb-12"
				>
					<img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="space-y-12"
				>
					<div>
						<h2 className="text-2xl font-bold text-white mb-4">Description</h2>
						<p className="text-gray-300 leading-relaxed">{project.description}</p>
					</div>

					<div>
						<h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
						<ul className="list-disc list-inside space-y-2 text-gray-300">
							{project.features.map((feature, index) => (
								<li key={index}>{feature}</li>
							))}
						</ul>
					</div>

					<div>
						<h2 className="text-2xl font-bold text-white mb-4">Tech Stack</h2>
						<div className="flex flex-wrap gap-3">
							{project.tech.map((tech, index) => (
								<span
									key={index}
									className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300"
								>
									{tech}
								</span>
							))}
						</div>
					</div>

					<div>
						<h2 className="text-2xl font-bold text-white mb-4">Links</h2>
						<div className="flex items-center gap-4">
							{project.link && (
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 px-5 py-2 bg-cyan-500 text-black rounded-lg shadow-lg hover:bg-cyan-400 transition-all"
								>
									<FiExternalLink />
									Live Demo
								</a>
							)}
							{project.github && (
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 px-5 py-2 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 transition-all"
								>
									<FiGithub />
									GitHub Repo
								</a>
							)}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}