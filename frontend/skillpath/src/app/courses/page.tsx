export default function CoursesPage() {
	const courseItems = [
		{
			title: "Frontend Foundations",
			level: "Beginner",
			lessons: 12,
			description: "HTML, CSS, and JavaScript fundamentals to build your first web apps.",
		},
		{
			title: "React Essentials",
			level: "Intermediate",
			lessons: 18,
			description: "Components, state, props, hooks, and modern React development flow.",
		},
		{
			title: "Backend APIs",
			level: "Intermediate",
			lessons: 14,
			description: "Design and consume REST APIs with authentication and error handling.",
		},
		{
			title: "System Design Basics",
			level: "Advanced",
			lessons: 10,
			description: "Learn scalability, reliability, and architecture principles in practice.",
		},
	];

	return (
		<main className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100 md:px-10">
			<div className="mx-auto w-full max-w-6xl space-y-8">
				<header className="space-y-2">
					<h1 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">Courses</h1>
					<p className="max-w-2xl text-sm text-slate-400 md:text-base">
						Browse available learning tracks and pick a path that fits your current level.
					</p>
				</header>

				<section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{courseItems.map((course) => (
						<article
							key={course.title}
							className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm"
						>
							<div className="mb-4 flex items-center justify-between gap-2">
								<span className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-300">
									{course.level}
								</span>
								<span className="text-xs text-slate-400">{course.lessons} lessons</span>
							</div>
							<h2 className="font-heading text-lg font-medium text-slate-100">{course.title}</h2>
							<p className="mt-2 text-sm leading-6 text-slate-400">{course.description}</p>
							<button
								type="button"
								className="mt-5 w-full rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-white"
							>
								View Course
							</button>
						</article>
					))}
				</section>
			</div>
		</main>
	);
}
