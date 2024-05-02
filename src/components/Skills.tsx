import userData from "@/data/user"
import { FC } from "react"

const Skills: FC = () => {
	const { skills } = userData

	return (
		<section>
			<h2 className="text-2xl font-bold">Skills</h2>
			<div className="flex gap-2 py-4 flex-wrap">
				{skills.map((skill, i) => (
					<span
						key={i}
						className="bg-gray-200 dark:bg-dark-card py-2 px-4 rounded-full text-sm font-semibold text-center"
					>
						{skill}
					</span>
				))}
			</div>
		</section>
	)
}

export default Skills
