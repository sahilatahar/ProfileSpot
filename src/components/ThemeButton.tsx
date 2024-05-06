"use client"
import { fadeToLeft } from "@/animations/motionProps"
import useTheme from "@/hooks/useTheme"
import { motion } from "framer-motion"
import { FiMoon, FiSun } from "react-icons/fi"

function ThemeButton() {
	const { theme, toggleTheme } = useTheme()

	return (
		<motion.button
			className="absolute -top-4 right-4 p-2 rounded-full transition-colors duration-300 ease-in-out outline-none border-none"
			onClick={toggleTheme}
			variants={fadeToLeft}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			{theme === "light" ? <FiMoon size={26} /> : <FiSun size={26} />}
		</motion.button>
	)
}

export default ThemeButton
