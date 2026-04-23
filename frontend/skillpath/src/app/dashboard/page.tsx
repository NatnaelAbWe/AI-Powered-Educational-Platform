export default function DashboardPage() {
	const stats = [
		{ label: "Active Courses", value: "4" },
		{ label: "Completed Lessons", value: "27" },
		{ label: "Weekly Study Time", value: "6.5 hrs" },
		{ label: "Current Streak", value: "9 days" },
	];

	const upcoming = [
		"Finish React state management module",
		"Practice 2 JavaScript coding challenges",
		"Review API authentication notes",
		"Start roadmap checkpoint quiz",
	];

	return (
		<main className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100 md:px-10">
			<div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-3">
				<section className="space-y-6 lg:col-span-2">
					<header className="space-y-2">
						<h1 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">Dashboard</h1>
						<p className="text-sm text-slate-400 md:text-base">
							A simple overview of your learning progress and your next study actions.
						</p>
					</header>

					<div className="grid gap-4 sm:grid-cols-2">
						{stats.map((item) => (
							<article
								key={item.label}
								className="rounded-xl border border-slate-800 bg-slate-900/70 p-5"
							>
								<p className="text-xs uppercase tracking-wide text-slate-400">{item.label}</p>
								<p className="mt-2 font-heading text-2xl font-semibold text-slate-100">{item.value}</p>
							</article>
						))}
					</div>

					<section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
						<h2 className="font-heading text-xl font-medium text-slate-100">Progress Summary</h2>
						<p className="mt-2 text-sm leading-6 text-slate-400">
							You are currently maintaining a steady pace. Keep completing one lesson per day
							to stay on track with this month&apos;s goals.
						</p>
						<div className="mt-4 h-2 rounded-full bg-slate-800">
							<div className="h-2 w-2/3 rounded-full bg-slate-200" />
						</div>
						<p className="mt-2 text-xs text-slate-400">66% monthly goal completed</p>
					</section>
				</section>

				<aside className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
					<h2 className="font-heading text-xl font-medium text-slate-100">Upcoming Tasks</h2>
					<ul className="mt-4 space-y-3">
						{upcoming.map((task) => (
							<li
								key={task}
								className="rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-300"
							>
								{task}
							</li>
						))}
					</ul>
					<button
						type="button"
						className="mt-5 w-full rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-white"
					>
						Continue Learning
					</button>
				</aside>
			</div>
		</main>
	);
}
