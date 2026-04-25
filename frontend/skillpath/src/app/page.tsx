import Link from "next/link";
import { ArrowRight, CheckCircle2, Map, MessageSquareText, Sparkles, Trophy } from "lucide-react";

const highlights = [
	{
		title: "Interactive Roadmaps",
		text: "Learn step-by-step with visual progress tracking",
		icon: Map,
		iconBox: "bg-[#7B9EF5]",
	},
	{
		title: "AI Learning Assistant",
		text: "Get instant help and explanations anytime",
		icon: Sparkles,
		iconBox: "bg-[#7B9EF5]",
	},
	{
		title: "Direct Teacher Support",
		text: "Chat with instructors and get personalized help",
		icon: MessageSquareText,
		iconBox: "bg-[#FF9D4F]",
	},
	{
		title: "Earn Certificates",
		text: "Showcase your achievements to employers",
		icon: Trophy,
		iconBox: "bg-black",
	},
];

const freePlan = [
	"Access to 3 beginner courses",
	"Basic AI assistance (10 questions/day)",
	"Community forum access",
	"Progress tracking",
];

const premiumPlan = [
	"Access to ALL courses",
	"Unlimited AI assistance",
	"Direct teacher chat support",
	"Live coding sessions",
	"Priority support",
	"Certificate of completion",
	"Download course materials",
];

export default function HomePage() {
	return (
		<main className="bg-[#C5D4F5] text-[#111827]">
			<header className="fixed inset-x-0 top-0 z-40 border-b border-[#e8eefc] bg-white/95 shadow-sm backdrop-blur">
				<div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-4 py-4 md:px-8">
					<div className="flex items-center gap-3">
						<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white">
							<Sparkles size={18} />
						</div>
						<span className="font-heading text-2xl font-bold leading-none md:text-3xl">SkillPath</span>
					</div>
					<nav className="hidden items-center gap-10 text-base font-medium text-[#243B66] md:flex">
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
					<div className="flex items-center gap-3 md:gap-4">
						<Link href="/auth/login" className="sp-btn rounded-[18px] border border-[#dfe7fb] bg-white px-5 py-2 text-base text-black">
							Login
						</Link>
						<Link href="/auth/register" className="sp-btn rounded-[20px] bg-black px-6 py-2 text-white!">
							Sign Up
						</Link>
					</div>
				</div>
			</header>

			<section className="mx-auto w-full max-w-[1320px] px-4 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
				<div className="mx-auto max-w-4xl text-center">
					<p className="mx-auto inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#2E4368] shadow-[0_3px_12px_rgba(0,0,0,0.08)] md:text-lg">
						<Sparkles size={18} className="text-[#FF9D4F]" /> Trusted by 10,000+ learners
					</p>
					<h1 className="mt-10 font-heading text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-5xl md:text-7xl md:leading-[1.02]">
						<span className="block text-black">Learn Tech Skills</span>
						<span className="block bg-[linear-gradient(135deg,#7B9EF5_0%,#FF9D4F_100%)] bg-clip-text text-transparent">
							the Smart Way
						</span>
					</h1>
					<p className="mx-auto mt-8 max-w-[980px] text-lg text-[#3D516F] md:text-2xl md:leading-[1.45]">
						Master programming through interactive roadmaps and AI-powered learning. From beginner to expert, we guide every step of your journey.
					</p>
					<div className="mt-10 flex flex-wrap items-center justify-center gap-5">
						<Link href="/auth/register" className="sp-btn min-w-[220px] rounded-[24px] bg-black px-8 py-3 text-lg text-white! md:min-w-[260px] md:text-2xl">
							Start Learning <ArrowRight size={26} />
						</Link>
						<Link
							href="/dashboard"
							className="sp-btn min-w-[180px] rounded-[24px] bg-[#F4F4F5] px-8 py-3 text-lg text-black shadow-sm md:min-w-[220px] md:text-2xl"
						>
							View Demo
						</Link>
					</div>
				</div>
				<div className="mt-16 rounded-[40px] bg-[#F4F4F5] p-5 md:p-10">
					<div className="overflow-hidden rounded-[30px]">
						<img
							src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80"
							alt="Students collaborating around laptops"
							className="h-[240px] w-full object-cover md:h-[660px]"
						/>
					</div>
				</div>
			</section>

			<section id="features" className="mx-auto w-full max-w-[1320px] px-4 pb-20 md:px-8 md:pb-28">
				<h2 className="text-center font-heading text-3xl font-bold tracking-[-0.02em] md:text-5xl">Everything You Need to Succeed</h2>
				<p className="mt-4 text-center text-base text-[#3D516F] md:text-2xl">
					Powerful features designed to accelerate your learning
				</p>
				<div className="mx-auto mt-8 grid max-w-5xl gap-7 md:grid-cols-2 md:gap-10">
					{highlights.map((item) => (
						<article key={item.title} className="sp-card mx-auto w-full max-w-[470px] rounded-[30px] p-6 md:p-7">
							<div className={`flex h-16 w-16 items-center justify-center rounded-[18px] text-white ${item.iconBox}`}>
								<item.icon size={28} />
							</div>
							<h3 className="mt-5 font-heading text-xl font-bold leading-tight md:text-3xl">{item.title}</h3>
							<p className="mt-3 text-sm text-[#4B5563] md:text-lg md:leading-[1.4]">{item.text}</p>
						</article>
					))}
				</div>
			</section>

			<section id="pricing" className="mx-auto w-full max-w-[1320px] px-4 pb-20 md:px-8 md:pb-28">
				<h2 className="text-center font-heading text-3xl font-bold tracking-[-0.02em] md:text-5xl">Choose Your Plan</h2>
				<p className="mt-4 text-center text-base text-[#3D516F] md:text-2xl">Start free, upgrade when you&apos;re ready</p>
				<div className="mx-auto mt-8 grid max-w-5xl items-start gap-7 md:grid-cols-2 md:gap-10">
					<article className="sp-card mx-auto w-full max-w-[470px] rounded-[30px] p-6 md:p-8">
						<h3 className="font-heading text-3xl font-bold leading-none md:text-4xl">Free</h3>
						<p className="mt-4 flex items-end gap-3 leading-none">
							<span className="font-heading text-5xl font-bold md:text-6xl">0</span>
							<span className="pb-1 text-base text-[#4B5563] md:text-lg">ETB / forever</span>
						</p>
						<ul className="mt-6 space-y-3 text-sm text-[#4B5563] md:text-base">
							{freePlan.map((item) => (
								<li key={item} className="flex items-center gap-2">
									<CheckCircle2 size={18} className="shrink-0 text-[#4ADE80]" />
									{item}
								</li>
							))}
						</ul>
						<Link href="/auth/register" className="sp-btn mt-8 w-full rounded-[20px] bg-black py-3 text-lg text-white! md:text-xl">
							Start Free
						</Link>
					</article>
					<article className="relative mx-auto w-full max-w-[470px] rounded-[30px] bg-black p-6 text-white shadow-[0_14px_40px_rgba(0,0,0,0.22)] md:p-8">
						<span className="absolute left-6 top-5 rounded-full bg-[#7B9EF5] px-3 py-1 text-[11px] font-semibold text-white md:text-xs">
							Most Popular
						</span>
						<h3 className="mt-12 font-heading text-3xl font-bold leading-none md:text-4xl">Premium</h3>
						<p className="mt-4 flex items-end gap-3 leading-none">
							<span className="font-heading text-5xl font-bold md:text-6xl">1,500</span>
							<span className="pb-1 text-base text-white/80 md:text-lg">ETB / month</span>
						</p>
						<ul className="mt-6 space-y-3 text-sm text-white/85 md:text-base">
							{premiumPlan.map((item) => (
								<li key={item} className="flex items-center gap-2">
									<CheckCircle2 size={18} className="shrink-0 text-[#00DF8F]" />
									{item}
								</li>
							))}
						</ul>
						<Link href="/payment" className="sp-btn mt-8 w-full rounded-[20px] bg-white py-3 text-lg text-black! md:text-xl">
							Upgrade Now
						</Link>
					</article>
				</div>
			</section>

			<footer id="about" className="border-t border-[#d9deeb] bg-[#F4F4F5] py-8 md:py-10">
				<div className="mx-auto w-full max-w-[1320px] px-4 md:px-8">
					<div className="flex flex-col items-center justify-between gap-5 md:flex-row md:gap-4">
						<div className="flex items-center gap-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
								<Sparkles size={16} />
							</div>
							<span className="font-heading text-xl font-bold text-[#111827]">SkillPath</span>
						</div>
						<div className="flex items-center gap-5 text-sm text-[#4B5563] md:text-base">
							<a href="#">Privacy</a>
							<a href="#">Terms</a>
							<a href="#">Contact</a>
						</div>
					</div>
					<div className="mt-5 h-px w-full bg-[#d9deeb]" />
					<p className="mt-4 text-center text-xs text-[#4B5563] md:text-sm">Copyright 2026 SkillPath. All rights reserved.</p>
				</div>
			</footer>
		</main>
	);
}
