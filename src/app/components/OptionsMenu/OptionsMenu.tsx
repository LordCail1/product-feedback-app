import React from "react"
import FeedbackBoardTitleDesktop from "@/app/components/FeedbackBoardTitleDesktop/FeedbackBoardTitleDesktop"
import CategoryContainer from "@/app/components/CategoryContainer/CategoryContainer"
import RoadmapContainer from "@/app/components/RoadmapContainer/RoadmapContainer"

export default function OptionsMenu() {
	return (
		<section className="hidden max-h-56 shrink-0 basis-[255px] flex-row md:flex lg:max-h-max lg:flex-col">
			<FeedbackBoardTitleDesktop />
			<CategoryContainer />
			<RoadmapContainer />
		</section>
	)
}
