import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "../styles/globals.css";

const headingFont = Space_Grotesk({
	variable: "--font-heading",
	subsets: ["latin"],
});

const bodyFont = Outfit({
	variable: "--font-body",
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
