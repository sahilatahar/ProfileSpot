import userData from "@/data/user"
import { FC } from "react"
import { FiLink } from "react-icons/fi"
import { BiCategory } from "react-icons/bi"

const Links: FC = () => {
	const { links } = userData
	return (
		<section>
			<h2 className="text-2xl font-bold">Important Links</h2>
			<div className="flex flex-col gap-4 py-4">
				{links.map((c, i) => (
					<div
						className="bg-light-card dark:bg-dark-card border border-light-card-border dark:border-dark-card-border p-4 sm:p-6 w-full rounded-xl space-y-2"
						key={i}
					>
						<h2 className="text-xl font-bold pb-2 sm:pb-4 flex gap-2 items-center">
							<BiCategory size={24} />
							{c.category}
						</h2>
						{c.resources.map((link, i) => (
							<a
								key={i}
								href={link.url}
								className="w-full rounded-xl flex gap-4 items-center font-semibold hover:underline text-sm sm:text-base"
								target="_blank"
							>
								<FiLink className="min-w-4 min-h-4" />
								<span>{link.title}</span>
							</a>
						))}
					</div>
				))}
			</div>
		</section>
	)
}

export default Links
