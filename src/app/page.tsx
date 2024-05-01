import Header from "@/components/Header"
import Interest from "@/components/Interest"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"

export default function Home() {
	return (
		<main className="space-y-8">
			<Header />
			<Interest />
			<Skills />
			<Projects />
		</main>
	)
}
