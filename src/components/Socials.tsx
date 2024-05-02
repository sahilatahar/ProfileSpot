import userData from "@/data/user"
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
		<section className="flex gap-6 sm:gap-10 justify-center py-4 flex-wrap">
			<a
				href={gmail}
				className="flex flex-col items-center gap-2"
				target="_blank"
			>
				<FiMail className="w-6 h-6 sm:w-10 sm:h-10" />
				<span className="font-semibold text-xs">Gmail</span>
			</a>
			<a
				href={linkedin}
				className="flex flex-col items-center gap-2"
				target="_blank"
			>
				<FiLinkedin className="w-6 h-6 sm:w-10 sm:h-10" />
				<span className="font-semibold text-xs">LinkedIn</span>
			</a>
			<a
				href={github}
				className="flex flex-col items-center gap-2"
				target="_blank"
			>
				<FiGithub className="w-6 h-6 sm:w-10 sm:h-10" />
				<span className="font-semibold text-xs">GitHub</span>
			</a>
			<a
				href={instagram}
				className="flex flex-col items-center gap-2"
				target="_blank"
			>
				<FiInstagram className="w-6 h-6 sm:w-10 sm:h-10" />
				<span className="font-semibold text-xs">Instagram</span>
			</a>
			<a
				href={twitter}
				className="flex flex-col items-center gap-2"
				target="_blank"
			>
				<FiTwitter className="w-6 h-6 sm:w-10 sm:h-10" />
				<span className="font-semibold text-xs">Twitter</span>
			</a>
		</section>
	)
}

export default Socials
