import { ArrowLeft, Link as LinkIcon, MoreVertical, Paperclip, Phone, Send, Video, X } from "lucide-react";
import MobileNav from "@/src/components/layout/MobileNav";

export default function ChatPage() {
	return (
		<main className="sp-shell bg-[#C5D4F5]">
			<div className="mx-auto grid w-full max-w-[1280px] overflow-hidden rounded-[28px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] lg:grid-cols-[70%_30%]">
				<section className="flex min-h-[76vh] flex-col">
					<header className="flex items-center justify-between border-b border-[#e5e7eb] px-4 py-4 md:px-6">
						<div className="flex items-center gap-3">
							<button type="button" className="rounded-full bg-[#f3f4f6] p-2 text-[#4B5563]">
								<ArrowLeft size={16} />
							</button>
							<div className="h-10 w-10 rounded-full bg-[linear-gradient(135deg,#E84FC1_0%,#7B9EF5_100%)]" />
							<div>
								<p className="font-heading text-base font-bold text-[#111827]">Marta Solomon</p>
								<p className="text-xs text-[#4ADE80]">Online</p>
							</div>
						</div>
						<div className="flex items-center gap-2 text-[#6B7280]">
							<button type="button" className="rounded-full bg-[#f3f4f6] p-2">
								<Phone size={16} />
							</button>
							<button type="button" className="rounded-full bg-[#f3f4f6] p-2">
								<Video size={16} />
							</button>
							<button type="button" className="rounded-full bg-[#f3f4f6] p-2">
								<MoreVertical size={16} />
							</button>
						</div>
					</header>

					<div className="flex-1 space-y-5 overflow-y-auto bg-[#f9fafb] px-4 py-5 md:px-6">
						<p className="mx-auto w-fit rounded-full bg-[#eef2ff] px-3 py-1 text-xs text-[#6B7280]">Today</p>

						<div className="flex max-w-[75%] gap-3">
							<div className="h-9 w-9 rounded-full bg-[linear-gradient(135deg,#E84FC1_0%,#7B9EF5_100%)]" />
							<div>
								<div className="rounded-2xl bg-white p-3 text-sm text-[#111827] shadow-sm">
									Could you review my CSS Grid assignment before tomorrow?
								</div>
								<p className="mt-1 text-xs text-[#9ca3af]">10:42 AM</p>
							</div>
						</div>

						<div className="ml-auto max-w-[75%] text-right">
							<div className="inline-block rounded-2xl bg-[#E84FC1] p-3 text-left text-sm text-white">
								Absolutely, I&apos;ll send feedback plus a cleaner layout strategy.
							</div>
							<p className="mt-1 text-xs text-[#9ca3af]">10:44 AM</p>
						</div>
					</div>

					<footer className="border-t border-[#e5e7eb] bg-white px-4 py-4 md:px-6">
						<div className="flex items-center gap-3">
							<button type="button" className="rounded-full bg-[#f3f4f6] p-2 text-[#6B7280]">
								<Paperclip size={16} />
							</button>
							<input
								type="text"
								placeholder="Type your message..."
								className="w-full rounded-full bg-[#f3f4f6] px-4 py-3 text-sm outline-none"
							/>
							<button type="button" className="sp-btn bg-[#E84FC1] px-4 text-white">
								<Send size={16} />
							</button>
						</div>
					</footer>
				</section>

				<aside className="hidden border-l border-[#e5e7eb] p-5 lg:block">
					<div className="flex justify-end">
						<button type="button" className="rounded-full bg-[#f3f4f6] p-2 text-[#6B7280]">
							<X size={15} />
						</button>
					</div>

					<div className="mt-4 text-center">
						<div className="mx-auto h-20 w-20 rounded-full bg-[linear-gradient(135deg,#E84FC1_0%,#7B9EF5_100%)]" />
						<p className="mt-4 font-heading text-xl font-bold">Marta Solomon</p>
						<p className="text-sm text-[#6B7280]">Mentor</p>
						<select className="mt-3 w-full rounded-[20px] border border-[#e5e7eb] bg-[#f9fafb] px-3 py-2 text-sm text-[#4B5563] outline-none">
							<option>Lead Team</option>
						</select>
					</div>

					<section className="mt-8">
						<h3 className="font-heading text-base font-bold">Shared Files</h3>
						<div className="mt-3 space-y-2">
							{[
								{ name: "grid-assignment.pdf", size: "2.1 MB" },
								{ name: "ui-checklist.docx", size: "824 KB" },
							].map((file) => (
								<div key={file.name} className="flex items-center gap-3 rounded-2xl px-3 py-2 transition hover:bg-[#f3f4f6]">
									<div className="rounded-xl bg-[#e0ebff] p-2 text-[#7B9EF5]">PDF</div>
									<div>
										<p className="text-sm font-medium text-[#111827]">{file.name}</p>
										<p className="text-xs text-[#6B7280]">{file.size}</p>
									</div>
								</div>
							))}
						</div>
					</section>

					<section className="mt-8">
						<h3 className="font-heading text-base font-bold">Shared Links</h3>
						<div className="mt-3 space-y-2">
							{["CSS Grid Docs", "Design System Board"].map((link) => (
								<div key={link} className="rounded-2xl px-3 py-2 transition hover:bg-[#f3f4f6]">
									<p className="flex items-center gap-2 text-sm font-medium text-[#111827]">
										<LinkIcon size={14} /> {link}
									</p>
									<p className="mt-1 text-xs text-[#6B7280]">https://skillpath.dev/resources</p>
								</div>
							))}
						</div>
					</section>
				</aside>
			</div>
			<MobileNav />
		</main>
	);
}
