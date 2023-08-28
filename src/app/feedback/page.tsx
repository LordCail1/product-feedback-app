import { Metadata } from "next"
import FeedbackManipulator from "@/app/components/FeedbackManipulator/FeedbackManipulator"

export const metadata: Metadata = {
	title: "Create Feedback",
	description: "create feedback",
}

export default function Page() {

	return (
		<section className="relative h-screen">
			<FeedbackManipulator editing={false} />
		</section>
	)
}
