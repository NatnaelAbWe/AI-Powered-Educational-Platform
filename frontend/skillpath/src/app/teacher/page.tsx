import { BarChart3, Eye, MessageCircle, PenSquare, Plus, Trash2, Users, Wallet } from "lucide-react";
import MobileNav from "@/src/components/layout/MobileNav";

const stats = [
	{ label: "Total Students", value: "1,240", color: "bg-[#7B9EF5]", icon: Users },
	{ label: "Active Courses", value: "12", color: "bg-[#7B9EF5]", icon: BarChart3 },
	{ label: "Total Revenue", value: "148,500 ETB", color: "bg-[#FF9D4F]", icon: Wallet },
	{ label: "Messages", value: "34", color: "bg-black", icon: MessageCircle },
];

const courses = [
	{ title: "Modern React Patterns", meta: "230 students • 18 lessons", status: "Published" },
	{ title: "TypeScript for Teams", meta: "120 students • 14 lessons", status: "Published" },
	{ title: "Design System Masterclass", meta: "0 students • 22 lessons", status: "Draft" },
];

export default function TeacherDashboardPage() {
	return (
		<main className="sp-shell bg-[#C5D4F5]">
			<div className="sp-container max-w-[1280px] space-y-8">
				<header className="flex flex-wrap items-center justify-between gap-3">
					<div>
						<h1 className="font-heading text-3xl font-bold md:text-4xl">Teacher Dashboard</h1>
						<p className="mt-2 text-[#4B5563]">Manage your courses and students</p>
					</div>
					<button type="button" className="sp-btn bg-black text-white">
						<Plus size={16} /> Create Course
					</button>
				</header>

				<section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{stats.map((item) => (
						<article key={item.label} className="sp-card p-6">
							<div className={`flex h-14 w-14 items-center justify-center rounded-[20px] text-white ${item.color}`}>
								<item.icon size={20} />
							</div>
							<p className="mt-5 font-heading text-3xl font-bold">{item.value}</p>
							<p className="mt-2 text-sm text-[#6B7280]">{item.label}</p>
						</article>
					))}
				</section>

				<section className="sp-card p-6 md:p-8">
					<div className="border-b border-[#e5e7eb] pb-2">
						<div className="flex gap-5 text-sm font-medium">
							<button type="button" className="border-b-2 border-[#7B9EF5] pb-2 text-[#7B9EF5]">
								My Courses
							</button>
							<button type="button" className="pb-2 text-[#6B7280]">
								Students
							</button>
							<button type="button" className="pb-2 text-[#6B7280]">
								Analytics
							</button>
						</div>
					</div>

					<div className="mt-5 space-y-3">
						{courses.map((course) => {
							const published = course.status === "Published";

							return (
								<div key={course.title} className="flex flex-wrap items-center justify-between gap-4 rounded-[20px] bg-[#f3f4f6] p-4 transition hover:bg-[#e5e7eb]">
									<div className="flex min-w-0 items-center gap-3">
										<div className="h-16 w-16 rounded-[20px] bg-[linear-gradient(135deg,#7B9EF5_0%,#4B7DF7_100%)]" />
										<div>
											<p className="font-heading text-base font-bold text-[#111827]">{course.title}</p>
											<p className="text-sm text-[#6B7280]">{course.meta}</p>
											<span className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${published ? "bg-[#dcfce7] text-[#15803d]" : "bg-[#fef9c3] text-[#a16207]"}`}>
												{course.status}
											</span>
										</div>
									</div>
									<div className="flex items-center gap-2 text-[#6B7280]">
										<button type="button" className="rounded-xl p-2 transition hover:bg-white" aria-label="View course">
											<Eye size={16} />
										</button>
										<button type="button" className="rounded-xl p-2 transition hover:bg-white" aria-label="Edit course">
											<PenSquare size={16} />
										</button>
										<button type="button" className="rounded-xl p-2 text-red-500 transition hover:bg-white" aria-label="Delete course">
											<Trash2 size={16} />
										</button>
									</div>
								</div>
							);
						})}
					</div>
				</section>
			</div>
			<MobileNav />
		</main>
	);
}
