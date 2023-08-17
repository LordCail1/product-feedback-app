import React from "react"

type Props = {
	feedbackBoardTitle: React.ReactNode
	category: React.ReactNode
	roadmap: React.ReactNode
}

export default function Layout({
	category,
	feedbackBoardTitle,
	roadmap,
}: Props) {
	return (
		<section className="hidden max-h-56 shrink-0 basis-[255px] flex-row md:flex lg:max-h-max lg:flex-col">
			{feedbackBoardTitle}
			{category}
			{roadmap}
		</section>
	)
}
