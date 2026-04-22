import Link from "next/link";

const highlights = [
	{
		title: "Roadmap-First Learning",
		text: "Follow a clear sequence of lessons with locked, unlocked, and completed milestones.",
	},
	{
		title: "AI Learning Assistant",
		text: "Get code fixes, simple explanations, and practice tasks tailored to each lesson.",
	},
	{
		title: "Freemium by Design",
		text: "Preview the full roadmap, learn core lessons free, and unlock premium depth when ready.",
	},
];

export default function HomePage() {
	return (
		<main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.2),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(245,158,11,0.18),transparent_35%)]" />

			<header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-8">
				<h1 className="font-heading text-2xl font-bold tracking-tight">SkillPath</h1>
				<nav className="flex items-center gap-3 text-sm md:gap-4">
					<Link
						href="/auth/login"
						className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-cyan-300 hover:text-cyan-200"
					>
						Login
					</Link>
					<Link
						href="/auth/register"
						className="rounded-full bg-cyan-300 px-4 py-2 font-medium text-slate-900 transition hover:bg-cyan-200"
					>
						Register
					</Link>
				</nav>
			</header>

			<section className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 px-6 pb-16 pt-8 md:grid-cols-2 md:px-8 md:pt-14">
				<div className="space-y-6">
					<p className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
						AI-Powered Tech Learning
					</p>
					<h2 className="font-heading text-4xl font-bold leading-tight text-white md:text-6xl">
						Learn in a path, not in chaos.
					</h2>
					<p className="max-w-xl text-base text-slate-300 md:text-lg">
						SkillPath helps you build real software skills with roadmap-based courses,
						guided progression, and fast AI support when you get stuck.
					</p>
					<div className="flex flex-wrap gap-3">
						<Link
							href="/auth/register"
							className="rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-slate-900 transition hover:bg-emerald-300"
						>
							Start Free
						</Link>
						<Link
							href="/auth/login"
							className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
						>
							Continue Learning
						</Link>
					</div>
				</div>

				<div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-8">
					<h3 className="font-heading text-2xl font-semibold text-white">What You Get</h3>
					<ul className="mt-6 space-y-5">
						{highlights.map((item) => (
							<li key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
								<h4 className="font-heading text-lg font-semibold text-cyan-200">{item.title}</h4>
								<p className="mt-1 text-sm text-slate-300">{item.text}</p>
							</li>
						))}
					</ul>
				</div>
			</section>
		</main>
	);
}
