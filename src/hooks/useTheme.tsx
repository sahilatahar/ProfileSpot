"use client"
import { useEffect, useState } from "react"

function useTheme() {
	const [theme, setTheme] = useState("light")
	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light"
		localStorage.setItem("theme", newTheme)
		setTheme(newTheme)
	}

	useEffect(() => {
		const localTheme = localStorage.getItem("theme")
		if (localTheme) {
			setTheme(localTheme)
		} else {
			const isDark = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches
			setTheme(isDark ? "dark" : "light")
		}
	}, [])

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark")
		} else {
			document.documentElement.classList.remove("dark")
		}
	}, [theme])

	return { theme, toggleTheme }
}

export default useTheme
