import Link from "next/link";

export default function RegisterPage() {
	return (
		<main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-10 text-slate-100">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_0%,rgba(34,211,238,0.2),transparent_30%),radial-gradient(circle_at_0%_100%,rgba(245,158,11,0.18),transparent_35%)]" />

			<section className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md sm:p-8">
				<div className="mb-6">
					<Link href="/" className="text-sm text-cyan-200 hover:text-cyan-100">
						Back to home
					</Link>
					<h1 className="mt-3 font-heading text-3xl font-bold text-white">Create account</h1>
					<p className="mt-1 text-sm text-slate-300">Start your free learning journey today.</p>
				</div>

				<form className="space-y-4">
					<label className="block text-sm">
						<span className="mb-1 block text-slate-300">Full name</span>
						<input
							type="text"
							placeholder="Your full name"
							className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none ring-cyan-300 transition focus:ring-2"
						/>
					</label>

					<label className="block text-sm">
						<span className="mb-1 block text-slate-300">Email</span>
						<input
							type="email"
							placeholder="you@example.com"
							className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none ring-cyan-300 transition focus:ring-2"
						/>
					</label>

					<label className="block text-sm">
						<span className="mb-1 block text-slate-300">Password</span>
						<input
							type="password"
							placeholder="Create a password"
							className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none ring-cyan-300 transition focus:ring-2"
						/>
					</label>

					<button
						type="submit"
						className="w-full rounded-xl bg-emerald-400 px-4 py-3 font-semibold text-slate-900 transition hover:bg-emerald-300"
					>
						Register
					</button>
				</form>

				<p className="mt-5 text-center text-sm text-slate-300">
					Already have an account?{" "}
					<Link href="/auth/login" className="font-semibold text-cyan-300 hover:text-cyan-200">
						Login
					</Link>
				</p>
			</section>
		</main>
	);
}
