"use client"
import { fadeUpChild, fadeUpParent } from "@/animations/motionProps"
import userData from "@/data/user"
import { motion } from "framer-motion"
import { FC } from "react"

const Skills: FC = () => {
	const { skills } = userData

	return (
		<motion.section
			variants={fadeUpParent}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<motion.h2 className="text-2xl font-bold" variants={fadeUpChild}>
				Skills
			</motion.h2>
			<motion.div
				className="flex gap-2 py-4 flex-wrap"
				variants={fadeUpParent}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				{skills.map((skill, i) => (
					<motion.span
						key={i}
						className="bg-gray-200 dark:bg-dark-card py-2 px-4 rounded-full text-sm font-semibold text-center"
						variants={fadeUpChild}
					>
						{skill}
					</motion.span>
				))}
			</motion.div>
		</motion.section>
	)
}

export default Skills
