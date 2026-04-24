import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PageProps = {
	params: Promise<{ id: string }>;
};

export default async function CourseDetailPage({ params }: PageProps) {
	const { id } = await params;

	return (
		<main className="sp-shell">
			<div className="mx-auto w-full max-w-[900px] rounded-[28px] bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
				<p className="text-sm text-[#6B7280]">Course ID: {id}</p>
				<h1 className="mt-2 font-heading text-4xl font-bold">Frontend Engineering Path</h1>
				<p className="mt-3 max-w-2xl text-[#4B5563]">
					Build practical frontend skills with a roadmap-based learning flow and project-centric lessons.
				</p>
				<Link href="/roadmap/frontend-engineering" className="sp-btn mt-6 bg-black text-white">
					Open Roadmap <ArrowRight size={16} />
				</Link>
			</div>
		</main>
	);
}
