import userData from "@/data/user"
import Image from "next/image"
import { FC } from "react"
import Socials from "./Socials"

const Header: FC = () => {
	const { name, bio, avatar, title } = userData

	return (
		<header className="w-full flex flex-col gap-4 items-center py-4">
			<div className="w-[170px] sm:w-[200px] aspect-square object-cover">
				<Image
					src={avatar}
					width={200}
					height={200}
					className="rounded-full w-full border-2 border-light-card-border dark:border-dark-card-border"
					alt="Image"
					priority
				/>
			</div>
			<h1 className="text-2xl sm:text-3xl font-semibold">{name}</h1>
			<h2 className="text-lg sm:text-xl">{title}</h2>
			<Socials />
			<p className="w-full md:w-2/3 text-center">{bio}</p>
		</header>
	)
}

export default Header
