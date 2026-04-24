import Link from "next/link";
import { ArrowRight, Check, Sparkles, Star } from "lucide-react";

const highlights = [
	{
		title: "Roadmap Learning",
		text: "Follow structured learning paths with clear milestones from beginner to job-ready.",
		color: "bg-[#7B9EF5]",
	},
	{
		title: "AI Mentor",
		text: "Ask questions, fix code, and generate practice tasks exactly when you need support.",
		color: "bg-[#E84FC1]",
	},
	{
		title: "Project Practice",
		text: "Apply every concept with guided mini-projects, challenges, and feedback loops.",
		color: "bg-[#FF9D4F]",
	},
	{
		title: "Live Progress",
		text: "Track streaks, hours, and completion in one place with a clean dashboard experience.",
		color: "bg-black",
	},
];

export default function HomePage() {
	return (
		<main className="bg-[#C5D4F5] text-[#111827]">
			<header className="fixed inset-x-0 top-0 z-40 border-b border-[#e8eefc] bg-white/95 shadow-sm backdrop-blur">
				<div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 py-4 md:px-8">
					<div className="flex items-center gap-3">
						<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black text-white">
							<Sparkles size={18} />
						</div>
						<span className="font-heading text-xl font-bold">SkillPath</span>
					</div>
					<nav className="hidden items-center gap-8 text-sm text-[#6B7280] md:flex">
						<a href="#features" className="transition hover:text-black">
							Features
						</a>
						<a href="#pricing" className="transition hover:text-black">
							Pricing
						</a>
						<a href="#about" className="transition hover:text-black">
							About
						</a>
					</nav>
					<div className="flex items-center gap-2 md:gap-3">
						<Link href="/auth/login" className="sp-btn border border-[#dfe7fb] bg-white text-[#111827]">
							Login
						</Link>
						<Link href="/auth/register" className="sp-btn bg-black text-white">
							Sign Up
						</Link>
					</div>
				</div>
			</header>

			<section className="mx-auto w-full max-w-[1200px] px-4 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
				<div className="mx-auto max-w-3xl text-center">
					<p className="mx-auto inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#4B5563] shadow-sm">
						<Star size={14} className="text-[#E84FC1]" /> Trusted by 10,000+ learners
					</p>
					<h1 className="mt-8 font-heading text-4xl font-bold leading-tight md:text-[56px]">
						<span className="block text-black">Learn Tech Skills</span>
						<span className="block bg-[linear-gradient(135deg,#E84FC1_0%,#FF9D4F_100%)] bg-clip-text text-transparent">
							the Smart Way
						</span>
					</h1>
					<p className="mx-auto mt-6 max-w-[600px] text-lg text-[#4B5563] md:text-xl">
						Path-based courses, AI assistance, and real project practice that keep your progress clear and consistent.
					</p>
					<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
						<Link href="/auth/register" className="sp-btn bg-black px-6 py-3 text-white">
							Start Learning <ArrowRight size={16} />
						</Link>
						<Link href="/dashboard" className="sp-btn bg-white px-6 py-3 text-[#111827] shadow-sm">
							View Demo
						</Link>
					</div>
				</div>
				<div className="mt-14 rounded-[32px] bg-white p-4 shadow-[0_20px_45px_rgba(17,24,39,0.15)] md:p-6">
					<div className="rounded-[24px] bg-[linear-gradient(130deg,#7B9EF5_0%,#E84FC1_45%,#FF9D4F_100%)] p-8 text-white md:p-12">
						<h3 className="font-heading text-2xl font-semibold md:text-3xl">Your Smart Learning Workspace</h3>
						<p className="mt-3 max-w-xl text-white/90">
							Track roadmap progress, open lessons with AI help, and level up with focused practice sessions.
						</p>
						<div className="mt-8 grid gap-4 md:grid-cols-3">
							{["Roadmap", "Lesson + AI", "Dashboard"].map((item) => (
								<div key={item} className="rounded-2xl bg-black/20 px-4 py-6 text-sm font-semibold backdrop-blur-sm">
									{item}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section id="features" className="mx-auto w-full max-w-[1200px] px-4 pb-20 md:px-8 md:pb-28">
				<h2 className="text-center font-heading text-3xl font-bold md:text-4xl">Everything You Need to Succeed</h2>
				<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{highlights.map((item) => (
						<article key={item.title} className="sp-card p-6">
							<div className={`flex h-14 w-14 items-center justify-center rounded-[20px] ${item.color} text-white`}>
								<Sparkles size={20} />
							</div>
							<h3 className="mt-4 font-heading text-xl font-bold">{item.title}</h3>
							<p className="mt-3 text-base text-[#4B5563]">{item.text}</p>
						</article>
					))}
				</div>
			</section>

			<section id="pricing" className="mx-auto w-full max-w-[1200px] px-4 pb-20 md:px-8 md:pb-28">
				<h2 className="text-center font-heading text-3xl font-bold md:text-4xl">Choose Your Plan</h2>
				<div className="mt-10 grid gap-6 md:grid-cols-2">
					<article className="sp-card p-8">
						<h3 className="font-heading text-2xl font-bold">Free Plan</h3>
						<p className="mt-2 text-[#4B5563]">Perfect to start your learning path.</p>
						<ul className="mt-6 space-y-3 text-[#4B5563]">
							{["Access core lessons", "Basic progress tracking", "Limited AI help"].map((item) => (
								<li key={item} className="flex items-center gap-2">
									<Check size={16} className="text-[#4ADE80]" />
									{item}
								</li>
							))}
						</ul>
						<Link href="/auth/register" className="sp-btn mt-8 w-full bg-black text-white">
							Get Started
						</Link>
					</article>
					<article className="relative scale-[1.02] rounded-[28px] bg-black p-8 text-white shadow-[0_14px_40px_rgba(0,0,0,0.2)] md:scale-105">
						<span className="absolute -top-3 left-8 rounded-full bg-[#E84FC1] px-3 py-1 text-xs font-semibold">
							Most Popular
						</span>
						<h3 className="font-heading text-2xl font-bold">Premium Plan</h3>
						<p className="mt-2 text-white/70">Deep learning with unlimited support.</p>
						<ul className="mt-6 space-y-3 text-white/85">
							{["All premium courses", "Unlimited AI mentor", "Practice generator"].map((item) => (
								<li key={item} className="flex items-center gap-2">
									<Check size={16} className="text-[#4ADE80]" />
									{item}
								</li>
							))}
						</ul>
						<Link href="/payment" className="sp-btn mt-8 w-full bg-white text-black">
							Upgrade Now
						</Link>
					</article>
				</div>
			</section>

			<footer id="about" className="border-t border-[#e8eefc] bg-white py-10">
				<div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-4 px-4 text-sm text-[#6B7280] md:flex-row md:px-8">
					<div className="flex items-center gap-3">
						<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white">
							<Sparkles size={16} />
						</div>
						<span className="font-heading text-base font-bold text-[#111827]">SkillPath</span>
					</div>
					<div className="flex items-center gap-5">
						<Link href="/dashboard">Dashboard</Link>
						<Link href="/courses">Courses</Link>
						<Link href="/chat">Chat</Link>
					</div>
					<p>Copyright 2026 SkillPath. All rights reserved.</p>
				</div>
			</footer>
		</main>
	);
}
