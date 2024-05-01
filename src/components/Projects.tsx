import userData from "@/data/user"
import { FC } from "react"
import { IoLogoGithub } from "react-icons/io"
import { MdOpenInNew } from "react-icons/md"

const Projects: FC = () => {
	const { projects } = userData

	return (
		<section>
			<h2 className="text-2xl font-bold">Top Projects</h2>
			<div className="flex gap-4 py-4 flex-col sm:flex-row">
				{projects.map((project, i) => (
					<div
						key={i}
						className="bg-light-card border border-light-card-border p-6 aspect-video w-full sm:w-[350px] rounded-xl"
					>
						<h3 className="text-xl font-bold">{project.title}</h3>
						<p className="pt-2 line-clamp-4">
							{project.description}
						</p>
						<div className="pt-4 flex gap-8 items-center">
							<a href={project.github_url} target="_blank">
								<IoLogoGithub size={36} />
							</a>
							<a href={project.live_url} target="_blank">
								<MdOpenInNew size={32} />
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Projects
