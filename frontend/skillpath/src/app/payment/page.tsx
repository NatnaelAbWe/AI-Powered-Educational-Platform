import { CreditCard, PartyPopper, ShieldCheck, Sparkles, User } from "lucide-react";
import MobileNav from "@/src/components/layout/MobileNav";

export default function PaymentPage() {
	return (
		<main className="sp-shell bg-[#C5D4F5]">
			<div className="mx-auto grid w-full max-w-[1100px] gap-6 lg:grid-cols-[60%_40%]">
				<section className="sp-card p-6 md:p-8">
					<h1 className="font-heading text-3xl font-bold">Complete Your Purchase</h1>
					<form className="mt-6 space-y-4">
						<label className="block text-sm font-medium text-[#111827]">
							Full Name
							<div className="mt-2 flex items-center gap-2 rounded-[20px] bg-[#f3f4f6] px-4 py-3">
								<User size={16} className="text-[#6B7280]" />
								<input className="w-full bg-transparent outline-none" placeholder="Alex Johnson" />
							</div>
						</label>
						<label className="block text-sm font-medium text-[#111827]">
							Email Address
							<div className="mt-2 flex items-center gap-2 rounded-[20px] bg-[#f3f4f6] px-4 py-3">
								<Sparkles size={16} className="text-[#6B7280]" />
								<input className="w-full bg-transparent outline-none" placeholder="you@example.com" />
							</div>
						</label>
						<label className="block text-sm font-medium text-[#111827]">
							Phone Number
							<div className="mt-2 flex items-center gap-2 rounded-[20px] bg-[#f3f4f6] px-4 py-3">
								<span className="text-sm font-semibold text-[#4B5563]">+251</span>
								<input className="w-full bg-transparent outline-none" placeholder="9XX XXX XXX" />
							</div>
						</label>

						<div className="rounded-[20px] border border-[#7b9ef533] bg-[linear-gradient(135deg,rgba(123,158,245,0.12)_0%,rgba(75,125,247,0.08)_100%)] p-4">
							<p className="flex items-center gap-2 font-heading text-base font-bold text-[#111827]">
								<ShieldCheck size={16} className="text-[#7B9EF5]" /> Secure Payment
							</p>
							<p className="mt-1 text-sm text-[#4B5563]">
								Your payment details are encrypted and safely processed.
							</p>
						</div>

						<button type="button" className="sp-btn w-full bg-black py-3 text-white shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
							<CreditCard size={16} /> Pay with Chapa
						</button>
					</form>
					<p className="mt-4 text-center text-xs text-[#6B7280]">By proceeding you agree to SkillPath billing terms and refund policy.</p>
				</section>

				<aside className="space-y-6">
					<section className="sp-card p-6 md:p-8">
						<div className="flex items-center gap-4">
							<div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[linear-gradient(135deg,#7B9EF5_0%,#4B7DF7_100%)] text-white">
								<Sparkles size={24} />
							</div>
							<div>
								<h2 className="font-heading text-xl font-bold">Frontend Engineering Path</h2>
								<p className="text-sm text-[#6B7280]">24 lessons • 8 hours</p>
								<span className="mt-2 inline-flex rounded-full bg-[#7b9ef533] px-3 py-1 text-xs font-semibold text-[#7B9EF5]">
									Beginner
								</span>
							</div>
						</div>

						<div className="mt-6 space-y-3 text-sm text-[#4B5563]">
							<div className="flex justify-between"><span>Course Price</span><span>2,500 ETB</span></div>
							<div className="flex justify-between"><span>Tax</span><span>375 ETB</span></div>
							<div className="flex justify-between text-[#22c55e]"><span>Discount</span><span>-250 ETB</span></div>
							<div className="border-t border-[#e5e7eb] pt-3" />
							<div className="flex justify-between font-heading text-xl font-bold text-[#7B9EF5]"><span>Total</span><span>2,625 ETB</span></div>
						</div>

						<div className="mt-5 rounded-[20px] border border-[#86efac] bg-[#f0fdf4] p-3">
							<p className="font-semibold text-[#166534]"><PartyPopper size={14} className="mr-1 inline" /> Special Offer!</p>
							<p className="mt-1 text-xs text-[#166534]">Offer expires in 03:42:11</p>
						</div>
					</section>

					<section className="sp-card p-6 md:p-8">
						<h3 className="font-heading text-xl font-bold">What&apos;s Included</h3>
						<ul className="mt-4 space-y-3 text-sm text-[#4B5563]">
							{[
								"24 structured lessons",
								"AI coding assistant support",
								"Progress dashboard and streak tracking",
								"Certificate on completion",
							].map((feature) => (
								<li key={feature} className="flex items-center gap-2">
									<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#4ADE80] text-xs text-white">✓</span>
									{feature}
								</li>
							))}
						</ul>
					</section>
				</aside>
			</div>
			<MobileNav />
		</main>
	);
}
