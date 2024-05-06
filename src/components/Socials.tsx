import { fadeUpChild, fadeUpParent } from "@/animations/motionProps"
import userData from "@/data/user"
import { motion } from "framer-motion"
import { FC } from "react"
import {
	FiGithub,
	FiInstagram,
	FiLinkedin,
	FiMail,
	FiTwitter,
} from "react-icons/fi"

const Socials: FC = () => {
	const { gmail, github, instagram, linkedin, twitter } = userData.socials
	return (
		<motion.section
			className="flex gap-6 sm:gap-10 justify-center py-4 flex-wrap"
			variants={fadeUpParent}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<motion.a
				href={gmail}
				className="flex flex-col items-center gap-2"
				target="_blank"
				variants={fadeUpChild}
			>
				<FiMail className="w-6 h-6 sm:w-10 sm:h-10" />
				<span className="font-semibold text-xs">Gmail</span>
			</motion.a>
			<motion.a
				href={linkedin}
				className="flex flex-col items-center gap-2"
				target="_blank"
				variants={fadeUpChild}
			>
				<FiLinkedin className="w-6 h-6 sm:w-10 sm:h-10" />
				<span className="font-semibold text-xs">LinkedIn</span>
			</motion.a>
			<motion.a
				href={github}
				className="flex flex-col items-center gap-2"
				target="_blank"
				variants={fadeUpChild}
			>
				<FiGithub className="w-6 h-6 sm:w-10 sm:h-10" />
				<span className="font-semibold text-xs">GitHub</span>
			</motion.a>
			<motion.a
				href={instagram}
				className="flex flex-col items-center gap-2"
				target="_blank"
				variants={fadeUpChild}
			>
				<FiInstagram className="w-6 h-6 sm:w-10 sm:h-10" />
				<span className="font-semibold text-xs">Instagram</span>
			</motion.a>
			<motion.a
				href={twitter}
				className="flex flex-col items-center gap-2"
				target="_blank"
				variants={fadeUpChild}
			>
				<FiTwitter className="w-6 h-6 sm:w-10 sm:h-10" />
				<span className="font-semibold text-xs">Twitter</span>
			</motion.a>
		</motion.section>
	)
}

export default Socials
