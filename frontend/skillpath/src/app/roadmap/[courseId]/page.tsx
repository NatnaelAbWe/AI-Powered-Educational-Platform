import { CheckCircle2, Circle, Lock, Play, Sparkles } from "lucide-react";
import MobileNav from "@/src/components/layout/MobileNav";

const roadmapSteps = [
	{ id: "01", title: "HTML Essentials", duration: "20 min", state: "completed" },
	{ id: "02", title: "CSS Layout Fundamentals", duration: "30 min", state: "completed" },
	{ id: "03", title: "Responsive Design Patterns", duration: "28 min", state: "available" },
	{ id: "04", title: "CSS Fundamentals", duration: "25 min", state: "current" },
	{ id: "05", title: "Flexbox Mastery", duration: "22 min", state: "locked" },
	{ id: "06", title: "Grid in Real Projects", duration: "32 min", state: "locked" },
] as const;

const stateStyles = {
	completed: "bg-[#4ADE80] text-white",
	current: "scale-110 bg-[#E84FC1] text-white shadow-[0_0_0_8px_rgba(232,79,193,0.18)]",
	available: "border border-[#7B9EF5] bg-white text-[#111827]",
	locked: "bg-[#E5E7EB] text-[#6B7280]",
};

export default function RoadmapPage() {
	return (
		<main className="sp-shell bg-[#C5D4F5]">
			<div className="mx-auto w-full max-w-[900px] space-y-8">
				<section className="sp-card p-6 md:p-8">
					<div className="flex flex-wrap items-end justify-between gap-5">
						<div>
							<h1 className="font-heading text-3xl font-bold md:text-[28px]">Frontend Engineering Path</h1>
							<p className="mt-2 text-[#4B5563]">Master modern UI development from zero to production</p>
						</div>
						<div className="text-right">
							<p className="font-heading text-4xl font-bold text-[#E84FC1] md:text-[42px]">58%</p>
							<p className="text-sm text-[#6B7280]">Complete</p>
						</div>
					</div>
					<div className="mt-6 h-3 rounded-full bg-[#f0f3fc]">
						<div className="h-3 w-[58%] rounded-full bg-[linear-gradient(135deg,#E84FC1_0%,#FF9D4F_100%)]" />
					</div>
				</section>

				<section className="relative px-1 py-2 md:px-6">
					<div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,#E84FC1_0%,#7B9EF5_50%,#FF9D4F_100%)]" />
					<div className="space-y-7">
						{roadmapSteps.map((step, index) => {
							const left = index % 2 === 0;
							const icon =
								step.state === "completed" ? (
									<CheckCircle2 size={18} />
								) : step.state === "current" ? (
									<Play size={18} />
								) : step.state === "locked" ? (
									<Lock size={18} />
								) : (
									<Circle size={18} />
								);

							return (
								<div key={step.id} className={`flex ${left ? "justify-start" : "justify-end"}`}>
									<div className={`flex w-full max-w-[360px] items-center ${left ? "flex-row" : "flex-row-reverse"}`}>
										<div className="h-[2px] w-8 bg-[#9ca3af]" />
										<article className={`w-[320px] rounded-[28px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] ${stateStyles[step.state]}`}>
											<div className="mb-3 inline-flex rounded-full bg-black/10 px-3 py-1 text-xs font-semibold">Lesson {step.id}</div>
											<h3 className="font-heading text-base font-bold">{step.title}</h3>
											<p className="mt-2 text-sm opacity-90">{step.duration}</p>
											<div className="mt-3 inline-flex items-center gap-2 text-sm font-medium">{icon} {step.state}</div>
										</article>
									</div>
								</div>
							);
						})}
					</div>
				</section>

				<section className="sp-card p-6 text-center md:p-8">
					<h2 className="font-heading text-2xl font-bold">Need extra support before your next lesson?</h2>
					<p className="mt-2 text-[#4B5563]">Get guided hints, challenge breakdowns, and concept explanations.</p>
					<button type="button" className="sp-btn mt-5 bg-black text-white">
						<Sparkles size={16} /> Ask AI Assistant
					</button>
				</section>
			</div>
			<MobileNav />
		</main>
	);
}
