"use client"
import useTheme from "@/hooks/useTheme"
import { FiMoon, FiSun } from "react-icons/fi"

function ThemeButton() {
	const { theme, toggleTheme } = useTheme()

	return (
		<button
			className="bg-light-card dark:bg-dark-card fixed -top-4 right-4 p-2 rounded-full border border-light-card-border dark:border-dark-card-border transition-colors duration-300 ease-in-out"
			onClick={toggleTheme}
		>
			{theme === "light" ? <FiMoon size={26} /> : <FiSun size={26} />}
		</button>
	)
}

export default ThemeButton
