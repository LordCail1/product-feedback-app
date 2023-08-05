import React from "react"

type Props = {
	feedbackBoardTitle: React.ReactNode
	category: React.ReactNode
	roadmap: React.ReactNode
}

export default function Layout({
	feedbackBoardTitle,
	category,
	roadmap,
}: Props) {
	return (
		<section className="flex basis-[255px] shrink-0 flex-col">
			{feedbackBoardTitle}
			{category}
			{roadmap}
		</section>
	)
}
