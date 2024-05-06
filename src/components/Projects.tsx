"use client"
import { fadeUpChild, fadeUpParent } from "@/animations/motionProps"
import userData from "@/data/user"
import { motion } from "framer-motion"
import { FC } from "react"
import { IoLogoGithub } from "react-icons/io"
import { MdOpenInNew } from "react-icons/md"

const Projects: FC = () => {
	const { projects } = userData

	return (
		<motion.section
			variants={fadeUpParent}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<motion.h2 className="text-2xl font-bold" variants={fadeUpChild}>
				Top Projects
			</motion.h2>
			<motion.div
				className="flex gap-4 py-4 flex-col sm:flex-row"
				variants={fadeUpParent}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				{projects.map((project, i) => (
					<motion.div
						key={i}
						className="bg-light-card dark:bg-dark-card border border-light-card-border dark:border-dark-card-border p-6 w-full sm:w-[350px] rounded-xl"
						variants={fadeUpParent}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<motion.h3
							className="text-xl font-bold"
							variants={fadeUpChild}
						>
							{project.title}
						</motion.h3>
						<motion.p
							className="pt-2 line-clamp-4"
							variants={fadeUpChild}
						>
							{project.description}
						</motion.p>
						<motion.div
							className="pt-4 flex gap-8 items-center"
							variants={fadeUpChild}
						>
							<motion.a href={project.github_url} target="_blank">
								<IoLogoGithub size={36} />
							</motion.a>
							<motion.a href={project.live_url} target="_blank">
								<MdOpenInNew size={32} />
							</motion.a>
						</motion.div>
					</motion.div>
				))}
			</motion.div>
		</motion.section>
	)
}

export default Projects
