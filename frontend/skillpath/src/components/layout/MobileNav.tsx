"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Home, Map, MessageCircle, User } from "lucide-react";

const items = [
	{ href: "/dashboard", label: "Dashboard", icon: Home },
	{ href: "/roadmap/frontend-engineering", label: "Roadmap", icon: Map },
	{ href: "/lesson/4", label: "Lesson", icon: BookOpen },
	{ href: "/chat", label: "Chat", icon: MessageCircle },
	{ href: "/teacher", label: "Account", icon: User },
];

export default function MobileNav() {
	const pathname = usePathname();

	return (
		<nav className="fixed inset-x-0 bottom-0 z-50 border-t border-[#e5e7eb] bg-white/95 px-3 py-2 shadow-[0_-6px_20px_rgba(0,0,0,0.08)] backdrop-blur md:hidden">
			<ul className="grid grid-cols-5 gap-1">
				{items.map((item) => {
					const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
					const Icon = item.icon;

					return (
						<li key={item.href}>
							<Link
								href={item.href}
								className={`flex flex-col items-center justify-center rounded-[20px] px-2 py-2 text-[11px] font-medium transition ${
									isActive
										? "bg-white text-[#7B9EF5] shadow-[0_4px_14px_rgba(123,158,245,0.2)]"
										: "text-[#6B7280]"
								}`}
							>
								<Icon size={16} />
								<span className="mt-1">{item.label}</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
