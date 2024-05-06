"use client"
import { fadeUpChild, fadeUpParent } from "@/animations/motionProps"
import userData from "@/data/user"
import { motion } from "framer-motion"
import { FC } from "react"
import { BiCategory } from "react-icons/bi"
import { FiLink } from "react-icons/fi"

const Links: FC = () => {
	const { links } = userData
	return (
		<motion.section
			variants={fadeUpParent}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<motion.h2 className="text-2xl font-bold" variants={fadeUpChild}>
				Important Links
			</motion.h2>
			<motion.div
				className="flex flex-col gap-4 py-4"
				variants={fadeUpParent}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				{links.map((c, i) => (
					<motion.div
						className="bg-light-card dark:bg-dark-card border border-light-card-border dark:border-dark-card-border p-4 sm:p-6 w-full rounded-xl space-y-2"
						key={i}
						variants={fadeUpParent}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<motion.h2 className="text-xl font-bold pb-2 sm:pb-4 flex gap-2 items-center">
							<BiCategory size={24} />
							{c.category}
						</motion.h2>
						{c.resources.map((link, i) => (
							<motion.a
								key={i}
								href={link.url}
								className="w-full rounded-xl flex gap-4 items-center font-semibold hover:underline text-sm sm:text-base"
								target="_blank"
								variants={fadeUpChild}
							>
								<FiLink className="min-w-4 min-h-4" />
								<span>{link.title}</span>
							</motion.a>
						))}
					</motion.div>
				))}
			</motion.div>
		</motion.section>
	)
}

export default Links
