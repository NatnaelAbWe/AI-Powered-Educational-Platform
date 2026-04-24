import Link from "next/link";
import { ArrowRight, Code2, Lock, Mail, Sparkles, User } from "lucide-react";

export default function RegisterPage() {
	return (
		<main className="flex min-h-screen items-center justify-center bg-[#C5D4F5] px-4 py-10">
			<section className="w-full max-w-[450px] rounded-[28px] bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
				<div className="text-center">
					<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
						<Sparkles size={18} />
					</div>
					<p className="mt-3 font-heading text-xl font-bold">SkillPath</p>
				</div>

				<div className="mt-6 text-center">
					<h1 className="font-heading text-[32px] font-bold text-[#111827]">Start Learning Today</h1>
					<p className="mt-1 text-sm text-[#4B5563]">Join thousands of developers upgrading their skills</p>
				</div>

				<form className="mt-7 space-y-4">
					<label className="block text-sm font-medium text-[#111827]">
						Full Name
						<div className="mt-2 flex items-center gap-3 rounded-[20px] border border-transparent bg-[#F9FAFB] px-4 py-3 transition focus-within:border-[#E84FC1]">
							<User size={16} className="text-[#6B7280]" />
							<input type="text" placeholder="Alex Johnson" className="w-full bg-transparent text-sm outline-none" />
						</div>
					</label>

					<label className="block text-sm font-medium text-[#111827]">
						Email Address
						<div className="mt-2 flex items-center gap-3 rounded-[20px] border border-transparent bg-[#F9FAFB] px-4 py-3 transition focus-within:border-[#E84FC1]">
							<Mail size={16} className="text-[#6B7280]" />
							<input type="email" placeholder="you@example.com" className="w-full bg-transparent text-sm outline-none" />
						</div>
					</label>

					<label className="block text-sm font-medium text-[#111827]">
						Password
						<div className="mt-2 flex items-center gap-3 rounded-[20px] border border-transparent bg-[#F9FAFB] px-4 py-3 transition focus-within:border-[#E84FC1]">
							<Lock size={16} className="text-[#6B7280]" />
							<input type="password" placeholder="Create a password" className="w-full bg-transparent text-sm outline-none" />
						</div>
						<p className="mt-2 text-xs text-[#6B7280]">Must be at least 8 characters long</p>
					</label>

					<label className="flex items-start gap-2 text-sm text-[#4B5563]">
						<input type="checkbox" className="mt-1 h-4 w-4 accent-[#E84FC1]" />
						<span>
							I agree to the <a href="#" className="font-medium text-[#E84FC1]">Terms of Service</a> and <a href="#" className="font-medium text-[#E84FC1]">Privacy Policy</a>
						</span>
					</label>

					<button type="submit" className="sp-btn w-full bg-black py-3 text-white">
						Create Account <ArrowRight size={16} />
					</button>
				</form>

				<div className="mt-6 text-center text-xs text-[#6B7280]">Or continue with</div>
				<div className="mt-4 grid grid-cols-2 gap-3">
					<button type="button" className="sp-btn border border-[#e5e7eb] bg-[#f3f4f6] text-sm text-[#111827]">
						Google
					</button>
					<button type="button" className="sp-btn border border-[#e5e7eb] bg-[#f3f4f6] text-sm text-[#111827]">
						<Code2 size={16} /> GitHub
					</button>
				</div>

				<p className="mt-6 text-center text-sm text-[#4B5563]">
					Already have an account?{" "}
					<Link href="/auth/login" className="font-semibold text-[#E84FC1]">
						Sign in
					</Link>
				</p>
			</section>
		</main>
	);
}
