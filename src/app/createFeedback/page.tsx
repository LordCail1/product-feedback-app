import FeedbackManipulator from "@/app/components/FeedbackManipulator/FeedbackManipulator"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Create Feedback",
	description: "create feedback",
}

export default function Page() {
	return (
		<section className="relative h-screen">
			<FeedbackManipulator />
		</section>
	)
}
