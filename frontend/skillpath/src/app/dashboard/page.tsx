import Link from "next/link";
import { ArrowRight, BookOpen, Flame, GraduationCap, Timer } from "lucide-react";
import MobileNav from "@/src/components/layout/MobileNav";

export default function DashboardPage() {
	const stats = [
		{ label: "Courses Enrolled", value: "8", icon: BookOpen, color: "bg-[#7B9EF5]" },
		{ label: "Hours Learned", value: "126", icon: Timer, color: "bg-[#7B9EF5]" },
		{ label: "Skills Mastered", value: "17", icon: GraduationCap, color: "bg-[#FF9D4F]" },
		{ label: "Current Streak", value: "15 days", icon: Flame, color: "bg-black" },
	];

	const courses = [
		{
			title: "Frontend Engineering Path",
			lessons: "14 of 24 lessons completed",
			progress: 58,
			gradient: "from-[#7B9EF5] via-[#4B7DF7] to-[#FF9D4F]",
			image:
				"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
			imagePosition: "center",
		},
		{
			title: "React + TypeScript Mastery",
			lessons: "7 of 18 lessons completed",
			progress: 39,
			gradient: "from-[#7B9EF5] via-[#4B7DF7] to-[#FF9D4F]",
			image:
				"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
			imagePosition: "center top",
		},
	];

	return (
		<main
			className="sp-shell"
		>
			<div className="sp-container max-w-7xl space-y-8">
				<header className="space-y-2">
					<h1 className="font-heading text-3xl font-bold md:text-4xl">Welcome back, Alex!</h1>
					<p className="text-[#4B5563]">Continue your learning journey</p>
				</header>

				<section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{stats.map((item) => (
						<article key={item.label} className="sp-card p-6">
							<div className={`flex h-14 w-14 items-center justify-center rounded-[20px] ${item.color} text-white`}>
								<item.icon size={20} />
							</div>
							<p className="mt-5 font-heading text-[32px] font-bold leading-none">{item.value}</p>
							<p className="mt-2 text-sm text-[#6B7280]">{item.label}</p>
						</article>
					))}
				</section>

				<section className="space-y-4">
					<h2 className="font-heading text-2xl font-bold">Your Courses</h2>
					<div className="grid gap-5 md:grid-cols-2">
						{courses.map((course) => (
							<article key={course.title} className="sp-card p-5 md:p-6">
								<div
									className="relative h-37.5 overflow-hidden rounded-[20px] bg-[#dbeafe]"
									style={{
										backgroundImage: `linear-gradient(180deg, rgba(17, 24, 39, 0.1) 0%, rgba(17, 24, 39, 0.35) 100%), url('${course.image}')`,
										backgroundPosition: course.imagePosition,
										backgroundRepeat: "no-repeat",
										backgroundSize: "cover",
									}}
								>
									<div className={`absolute inset-0 bg-linear-to-r ${course.gradient} opacity-20`} />
								</div>
								<h3 className="mt-5 font-heading text-xl font-bold">{course.title}</h3>
								<p className="mt-1 text-sm text-[#6B7280]">{course.lessons}</p>
								<div className="mt-4 flex items-center gap-3">
									<div className="h-2 flex-1 rounded-full bg-[#e5e7eb]">
										<div className={`h-2 rounded-full bg-linear-to-r ${course.gradient}`} style={{ width: `${course.progress}%` }} />
									</div>
									<span className="text-sm font-semibold text-[#4B5563]">{course.progress}%</span>
								</div>
								<Link href="/lesson/4" className="sp-btn mt-5 w-full bg-black text-white!">
									Continue Learning <ArrowRight size={16} />
								</Link>
							</article>
						))}
					</div>
				</section>
			</div>
			<MobileNav />
		</main>
	);
}
