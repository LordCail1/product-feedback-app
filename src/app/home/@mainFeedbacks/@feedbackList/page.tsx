import Revalidator from "@/app/components/Revalidator/Revalidator"
import FeedbackList from "../../components/FeedbackList/FeedbackList"

export default function Page() {
	return (
		<Revalidator>
			<FeedbackList />
		</Revalidator>
	)
}
