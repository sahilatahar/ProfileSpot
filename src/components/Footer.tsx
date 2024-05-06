"use client"
import { motion } from "framer-motion"
import { fadeUpChild } from "@/animations/motionProps"
import { FiGithub } from "react-icons/fi"

function Footer() {
	return (
		<footer className="flex justify-center">
			<motion.a
				className="flex items-center gap-2"
				target="_blank"
				href="https://github.com/sahilatahar/ProfileSpot"
				variants={fadeUpChild}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				<span>View the code on GitHub</span>
				<FiGithub className="w-6 h-6" />
			</motion.a>
		</footer>
	)
}

export default Footer
