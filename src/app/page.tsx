import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Interest from "@/components/Interest"
import Links from "@/components/Links"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import ThemeButton from "@/components/ThemeButton"

export default function Home() {
	return (
		<main className="space-y-8">
			<Header />
			<Interest />
			<Skills />
			<Projects />
			<Links />
			<Footer />
			<ThemeButton />
		</main>
	)
}
