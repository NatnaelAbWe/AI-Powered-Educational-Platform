import Link from "next/link";
import {
	ArrowLeft,
	BookOpen,
	Check,
	Code,
	PlayCircle,
	Send,
	Sparkles,
	X,
} from "lucide-react";
import MobileNav from "@/src/components/layout/MobileNav";

export default function LessonPage() {
	return (
		<main className="sp-shell bg-[#C5D4F5]">
			<div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 xl:flex-row">
				<section className="w-full xl:w-[70%] xl:max-w-[900px]">
					<Link href="/roadmap/frontend-engineering" className="inline-flex items-center gap-2 text-sm text-[#4B5563]">
						<ArrowLeft size={16} /> Back to Roadmap
					</Link>

					<article className="sp-card mt-4 p-6 md:p-8">
						<header className="flex flex-wrap items-start justify-between gap-4">
							<div>
								<p className="inline-flex items-center gap-2 rounded-full bg-[#fce7f7] px-3 py-1 text-sm font-semibold text-[#E84FC1]">
									<BookOpen size={14} /> Lesson 4
								</p>
								<h1 className="mt-4 font-heading text-3xl font-bold md:text-4xl">CSS Fundamentals</h1>
								<p className="mt-2 text-[#4B5563]">Learn the basics of styling web pages</p>
							</div>
							<div className="rounded-[20px] bg-[#f9fafb] px-4 py-2 text-sm font-semibold text-[#4B5563]">25 min</div>
						</header>

						<div className="mt-8 space-y-6 text-[16px] leading-7 text-[#374151]">
							<section>
								<h2 className="font-heading text-xl font-bold text-[#111827]">Why CSS matters</h2>
								<p className="mt-2">
									CSS controls layout, spacing, color, and responsiveness, letting you turn plain markup into polished interfaces.
								</p>
							</section>

							<pre className="overflow-x-auto rounded-[20px] bg-[#1F2937] p-5 text-sm text-[#f9fafb]">
								<code>{`.card {
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  padding: 24px;
}`}</code>
							</pre>

							<div className="rounded-[20px] border border-[#e84fc14d] bg-[linear-gradient(135deg,rgba(232,79,193,0.1)_0%,rgba(123,158,245,0.1)_100%)] p-4">
								<h3 className="font-heading text-lg font-bold text-[#E84FC1]">Pro Tip</h3>
								<p className="mt-1 text-sm text-[#4B5563]">
									Use a spacing rhythm such as 16px, 24px, and 32px to make sections feel visually aligned.
								</p>
							</div>
						</div>

						<div className="mt-8 grid gap-3 md:grid-cols-3">
							<button type="button" className="sp-btn w-full bg-black text-white">
								<Check size={16} /> Mark as Complete
							</button>
							<button type="button" className="sp-btn w-full bg-[#E84FC1] text-white">
								<Code size={16} /> Generate Practice
							</button>
							<button type="button" className="sp-btn w-full bg-[#7B9EF5] text-white">
								<Sparkles size={16} /> Ask AI Help
							</button>
						</div>
					</article>
				</section>

				<aside className="w-full rounded-[28px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] xl:w-[384px]">
					<header className="flex items-center justify-between rounded-t-[28px] bg-[linear-gradient(135deg,#E84FC1_0%,#7B9EF5_100%)] px-5 py-4 text-white">
						<div className="flex items-center gap-2 font-heading font-bold">
							<Sparkles size={16} /> AI Assistant
						</div>
						<button type="button" className="rounded-full p-1 text-white/85 hover:bg-white/20">
							<X size={16} />
						</button>
					</header>

					<div className="border-b border-[#e5e7eb] px-4">
						<div className="flex text-sm font-medium">
							{["Chat Assistant", "Fix My Code", "Explain Concept"].map((tab, idx) => (
								<button
									key={tab}
									type="button"
									className={`flex-1 border-b-2 px-2 py-3 ${idx === 0 ? "border-[#E84FC1] text-[#E84FC1]" : "border-transparent text-[#6B7280]"}`}
								>
									{tab}
								</button>
							))}
						</div>
					</div>

					<div className="space-y-4 bg-[#F9FAFB] p-4">
						<div className="flex gap-2">
							<div className="mt-1 h-8 w-8 rounded-full bg-[#E84FC1]" />
							<div className="max-w-[84%] rounded-2xl bg-white p-3 text-sm text-[#111827] shadow-sm">
								Need help understanding selector specificity?
								<p className="mt-1 text-[11px] text-[#9ca3af]">10:24 AM</p>
							</div>
						</div>
						<div className="flex justify-end gap-2">
							<div className="max-w-[84%] rounded-2xl bg-[#E84FC1] p-3 text-sm text-white">
								Yes, compare id, class, and element rules quickly.
								<p className="mt-1 text-[11px] text-white/75">10:25 AM</p>
							</div>
							<div className="mt-1 h-8 w-8 rounded-full bg-[#7B9EF5]" />
						</div>
					</div>

					<div className="border-t border-[#e5e7eb] bg-white p-4">
						<div className="flex items-center gap-2">
							<input
								type="text"
								placeholder="Ask something about this lesson..."
								className="w-full rounded-[20px] bg-[#F3F4F6] px-4 py-3 text-sm outline-none"
							/>
							<button type="button" className="sp-btn bg-[linear-gradient(135deg,#E84FC1_0%,#7B9EF5_100%)] px-3 text-white shadow-[0_4px_16px_rgba(232,79,193,0.3)]">
								<Send size={15} />
							</button>
						</div>
					</div>
				</aside>
			</div>
			<MobileNav />
		</main>
	);
}
