import React from "react"

type Props = {
	feedbackBoardTitle: React.ReactNode
	options: React.ReactNode
	roadmap: React.ReactNode
}

export default function Layout({
	feedbackBoardTitle,
	options,
	roadmap,
}: Props) {
	return (
		<section className="flex basis-[255px]">
			{feedbackBoardTitle}
			{options}
			{roadmap}
		</section>
	)
}
