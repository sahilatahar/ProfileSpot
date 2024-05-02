import type { Metadata } from "next"
import { Libre_Franklin } from "next/font/google"
import "./globals.css"

const libreFranklin = Libre_Franklin({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "ProjectShot",
	description: "A profile page",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={libreFranklin.className}>{children}</body>
		</html>
	)
}
