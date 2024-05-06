"use client"
import { fadeUpChild, fadeUpParent } from "@/animations/motionProps"
import userData from "@/data/user"
import { motion } from "framer-motion"
import Image from "next/image"
import { FC } from "react"
import Socials from "./Socials"

const Header: FC = () => {
	const { name, bio, avatar, title } = userData

	return (
		<motion.header
			className="w-full flex flex-col gap-4 items-center py-4 text-center"
			variants={fadeUpParent}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<motion.div
				className="w-[170px] sm:w-[200px] aspect-square object-cover"
				variants={fadeUpChild}
			>
				<Image
					src={avatar}
					width={200}
					height={200}
					className="rounded-full w-full border-2 border-light-card-border dark:border-dark-card-border"
					alt="Image"
					priority
				/>
			</motion.div>
			<motion.h1
				className="text-2xl sm:text-3xl font-semibold"
				variants={fadeUpChild}
			>
				{name}
			</motion.h1>
			<motion.h2 className="text-lg sm:text-xl" variants={fadeUpChild}>
				{title}
			</motion.h2>
			<Socials />
			<motion.p className="w-full md:w-2/3" variants={fadeUpChild}>
				{bio}
			</motion.p>
		</motion.header>
	)
}

export default Header
