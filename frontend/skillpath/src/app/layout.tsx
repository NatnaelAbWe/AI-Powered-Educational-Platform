import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../styles/globals.css";

const headingFont = Poppins({
	variable: "--font-heading",
	weight: ["600", "700"],
	subsets: ["latin"],
});

const bodyFont = Inter({
	variable: "--font-body",
	weight: ["400", "500", "600"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "SkillPath",
	description: "AI-powered roadmap platform for tech learning",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
