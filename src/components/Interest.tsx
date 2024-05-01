import userData from "@/data/user"
import { FC } from "react"

const Interest: FC = () => {
	const { interests } = userData
	return (
		<section>
			<h2 className="text-2xl font-bold">Interests</h2>
			<div className="flex gap-2 py-4 flex-wrap">
				{interests.map((interest, i) => (
					<span
						key={i}
						className="bg-gray-200 py-2 px-4 rounded-full text-sm font-semibold"
					>
						{interest}
					</span>
				))}
			</div>
		</section>
	)
}

export default Interest
