import FeedbackList from "../FeedbackList/FeedbackList"
import React from "react"
import Revalidator from "@/app/components/Revalidator/Revalidator"
import SuggestionNavbar from "@/app/components/SuggestionNavbar/SuggestionNavbar"

export default function MainFeedback() {
	return (
		<section className="relative ml-0 flex basis-[825px] flex-col lg:ml-8">
			<SuggestionNavbar />
			<Revalidator>
				<FeedbackList />
			</Revalidator>
		</section>
	)
}

