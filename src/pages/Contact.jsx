import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
	const formRef = useRef(null);
	const isInView = useInView(formRef, { once: true, amount: 0.3 });
	const [formStatus, setFormStatus] = useState({ state: null, message: '' });
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});
	const [errors, setErrors] = useState({});

	useEffect(() => {
		emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });

		if (errors[name]) {
			setErrors({ ...errors, [name]: null });
		}
	};

	const validateForm = () => {
		const newErrors = {};

		if (!formData.name.trim()) newErrors.name = "Name is required";
		if (!formData.email.trim()) newErrors.email = "Email is required";
		else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Email is invalid";
		if (!formData.message.trim()) newErrors.message = "Message is required";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) return;

		setFormStatus({ state: 'loading', message: 'Sending message...' });

		const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
		const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

		try {
			await emailjs.send(
				serviceId,
				templateId,
				{
					name: formData.name,
					email: formData.email,
					subject: formData.subject || "Portfolio Contact Form",
					message: formData.message
				}
			);

			setFormStatus({
				state: 'success',
				message: 'Message sent successfully! I\'ll get back to you soon.'
			});
			setFormData({ name: '', email: '', subject: '', message: '' });
		} catch (error) {
			console.error('Error sending email:', error);
			setFormStatus({
				state: 'error',
				message: 'There was an error sending your message. Please try again or contact me directly via email.'
			});
		}
	};

	return (
		<section className="relative min-h-screen py-24 px-6 overflow-hidden">
			<div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-cyan-500 rounded-full blur-[180px] opacity-10 animate-slow-float -z-10" />
			<div className="absolute bottom-[15%] right-[5%] w-[400px] h-[400px] bg-blue-600 rounded-full blur-[200px] opacity-15 animate-slow-float-reverse -z-10" />


			<motion.div
				initial={{ width: 0 }}
				animate={{ width: '100%' }}
				transition={{ duration: 1.5 }}
				className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
			/>

			<div className="max-w-7xl mx-auto">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<motion.span
						className="text-cyan-400 uppercase text-sm tracking-widest inline-block"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Reach out
					</motion.span>

					<motion.div
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="w-16 h-[2px] mx-auto my-3 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
					/>

					<motion.h1
						className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<span className="text-white">Let's </span>
						<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Connect</span>
						<motion.span
							initial={{ width: 0 }}
							animate={{ width: '100%' }}
							transition={{ duration: 1.2, delay: 0.8 }}
							className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-cyan-400/60 to-transparent"
						/>
					</motion.h1>

					<motion.p
						className="text-gray-300 max-w-2xl mx-auto text-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						Have a project idea or just want to chat? I'm always open to discussing new opportunities and creative collaborations.
					</motion.p>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8 lg:gap-16">
					<motion.div
						className="md:col-span-1 space-y-8"
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<div className="relative">
							<div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-cyan-400/10 blur-sm -z-10 rounded-xl opacity-75" />
							<div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 shadow-lg relative overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500">
								<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

								<div className="flex flex-col space-y-6 relative z-10">
									<div>
										<h3 className="text-white font-semibold text-lg mb-4">Contact Information</h3>

										<div className="space-y-4">
											<a
												href="mailto:nemanja@samac.dev"
												className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
											>
												<span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/50 transition-colors">
													<FaEnvelope />
												</span>
												<span className="group-hover:text-cyan-300">nemanja@samac.dev</span>
											</a>

											<div className="flex items-center gap-3 text-gray-300">
												<span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
													<FaMapMarkerAlt />
												</span>
												<span>Belgrade, Serbia</span>
											</div>

											<div className="flex items-center gap-3 text-gray-300">
												<span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
													<FaClock />
												</span>
												<span>Available 9 AM - 5 PM CET</span>
											</div>
										</div>
									</div>

									<div>
										<h3 className="text-white font-semibold text-lg mb-4">Connect With Me</h3>
										<div className="flex space-x-4">
											<motion.a
												whileHover={{ y: -3, scale: 1.1 }}
												transition={{ type: "spring", stiffness: 400, damping: 10 }}
												href="https://github.com/nemanjasamac"
												target="_blank"
												rel="noopener noreferrer"
												className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all"
											>
												<FaGithub />
											</motion.a>
											<motion.a
												whileHover={{ y: -3, scale: 1.1 }}
												transition={{ type: "spring", stiffness: 400, damping: 10 }}
												href="https://www.linkedin.com/in/nemanjasamac/"
												target="_blank"
												rel="noopener noreferrer"
												className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all"
											>
												<FaLinkedin />
											</motion.a>
											<motion.a
												whileHover={{ y: -3, scale: 1.1 }}
												transition={{ type: "spring", stiffness: 400, damping: 10 }}
												href="https://x.com/SamacDev"
												target="_blank"
												rel="noopener noreferrer"
												className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all"
											>
												<FaTwitter />
											</motion.a>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-md">
							<h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
								<span className="text-cyan-400 text-sm">?</span>
								Frequently Asked
							</h3>

							<div className="space-y-4">
								{[
									{
										q: "What's your availability?",
										a: "I'm currently accepting new projects with starting dates in June 2025."
									},
									{
										q: "How do you charge for projects?",
										a: "I work on either hourly rates or fixed project quotes depending on scope and requirements."
									},
									{
										q: "Do you work remotely?",
										a: "Yes, I work 100% remotely with clients worldwide."
									}
								].map((item, idx) => (
									<div key={idx} className="space-y-1">
										<p className="text-cyan-300 text-sm font-medium">{item.q}</p>
										<p className="text-gray-400 text-sm">{item.a}</p>
									</div>
								))}
							</div>
						</div>
					</motion.div>

					<motion.div
						ref={formRef}
						className="md:col-span-2"
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
					>
						<div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl relative overflow-hidden">
							<div className="absolute top-[5%] right-[-5%] w-[200px] h-[200px] bg-cyan-500 rounded-full blur-[100px] opacity-10 -z-10" />
							<div className="absolute bottom-[-10%] left-[-5%] w-[200px] h-[200px] bg-blue-600 rounded-full blur-[100px] opacity-10 -z-10" />

							<div className="p-8">
								<h2 className="text-white text-2xl font-bold mb-6">Send Me a Message</h2>

								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div>
											<label htmlFor="name" className="block text-gray-300 text-sm mb-2">Your Name</label>
											<div className="relative">
												<input
													type="text"
													id="name"
													name="name"
													value={formData.name}
													onChange={handleChange}
													className={`w-full bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-lg py-3 px-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors placeholder-gray-500`}
													placeholder="John Doe"
												/>
												{errors.name && (
													<p className="text-red-400 text-xs mt-1">{errors.name}</p>
												)}
											</div>
										</div>

										<div>
											<label htmlFor="email" className="block text-gray-300 text-sm mb-2">Your Email</label>
											<div className="relative">
												<input
													type="email"
													id="email"
													name="email"
													value={formData.email}
													onChange={handleChange}
													className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-lg py-3 px-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors placeholder-gray-500`}
													placeholder="john@example.com"
												/>
												{errors.email && (
													<p className="text-red-400 text-xs mt-1">{errors.email}</p>
												)}
											</div>
										</div>
									</div>

									<div>
										<label htmlFor="subject" className="block text-gray-300 text-sm mb-2">Subject</label>
										<input
											type="text"
											id="subject"
											name="subject"
											value={formData.subject}
											onChange={handleChange}
											className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors placeholder-gray-500"
											placeholder="Project Inquiry"
										/>
									</div>

									<div>
										<label htmlFor="message" className="block text-gray-300 text-sm mb-2">Message</label>
										<div className="relative">
											<textarea
												id="message"
												name="message"
												value={formData.message}
												onChange={handleChange}
												rows={5}
												className={`w-full bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-lg py-3 px-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors resize-none placeholder-gray-500`}
												placeholder="Tell me about your project or question..."
											></textarea>
											{errors.message && (
												<p className="text-red-400 text-xs mt-1">{errors.message}</p>
											)}
										</div>
									</div>

									{formStatus.state && (
										<div className={`p-4 rounded-lg text-sm ${formStatus.state === 'success'
												? 'bg-green-500/20 text-green-300 border border-green-500/30'
												: formStatus.state === 'error'
													? 'bg-red-500/20 text-red-300 border border-red-500/30'
													: 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
											}`}>
											{formStatus.message}
										</div>
									)}

									<motion.button
										type="submit"
										disabled={formStatus.state === 'loading'}
										whileHover={{ scale: 1.03 }}
										whileTap={{ scale: 0.97 }}
										className="w-full py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black font-medium rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center justify-center gap-2 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
									>
										<span className="relative z-10">
											{formStatus.state === 'loading' ? 'Sending...' : 'Send Message'}
										</span>

										{formStatus.state !== 'loading' && (
											<motion.svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												initial={{ x: 0 }}
												animate={{ x: [0, 5, 0] }}
												transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", repeatDelay: 3 }}
											>
												<line x1="5" y1="12" x2="19" y2="12"></line>
												<polyline points="12 5 19 12 12 19"></polyline>
											</motion.svg>
										)}

										{formStatus.state === 'loading' && (
											<svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
												<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
												<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
											</svg>
										)}

										<span className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></span>
									</motion.button>
								</form>
							</div>
						</div>

						<motion.div
							className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-md"
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ duration: 0.6, delay: 0.6 }}
						>
							<h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
								<span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
								What to Expect
							</h3>

							<div className="relative pl-6">
								<div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-cyan-400 to-transparent"></div>

								{[
									{ step: "Confirmation", desc: "I'll confirm receipt of your message within 24 hours" },
									{ step: "Initial Call", desc: "We'll schedule a discovery call if needed" },
									{ step: "Proposal", desc: "I'll provide a detailed proposal based on your requirements" },
									{ step: "Collaboration", desc: "We start working together to bring your vision to life" }
								].map((item, idx) => (
									<div key={idx} className="mb-4 relative">
										<div className="absolute -left-6 top-2 w-2.5 h-2.5 rounded-full bg-cyan-400/30 flex items-center justify-center">
											<div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
										</div>

										<h4 className="text-cyan-300 text-sm font-medium">{item.step}</h4>
										<p className="text-gray-400 text-sm">{item.desc}</p>
									</div>
								))}
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>

			<svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" height="60" viewBox="0 0 1440 60" fill="none">
				<path d="M0,30 C480,50 960,10 1440,30 L1440,60 L0,60 Z" fill="url(#footer-fade)" />
				<defs>
					<linearGradient id="footer-fade" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor="#00d3f1" stopOpacity="0.05" />
						<stop offset="100%" stopColor="#030712" stopOpacity="0.2" />
					</linearGradient>
				</defs>
			</svg>
		</section>
	);
}