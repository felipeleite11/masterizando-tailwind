import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

import { Sidebar } from "./components/Sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Masterizando Tailwind CSS",
	description: "Masterizando Tailwind CSS"
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR" className="antialiased">
			<body className={inter.className}>
				<div className="min-h-screen flex lg:grid lg:grid-cols-app dark:bg-zinc-900">
					<Sidebar />
					
					<main className="px-8 pt-28 lg:pt-8 pb-12 lg:grid-start-2 w-full max-w-[100vw]">
						{children}
					</main>
				</div>
			</body>
		</html>
	)
}
