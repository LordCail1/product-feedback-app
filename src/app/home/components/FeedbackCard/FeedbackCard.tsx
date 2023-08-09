import UpvoteBtn from "@/app/components/UpvoteBtn/UpvoteBtn"
import NumberCommentsIndicator from "../NumberCommentsIndicator/NumberCommentsIndicator"

export default function FeedbackCard() {
	return (
		<div className="mb-5 flex w-full shrink-0 basis-36 items-start rounded-xl bg-white relative">
			<UpvoteBtn />
			<div className="ml-10 mt-8">
				<h3 className="mb-4 text-lg font-bold">Add Tags For Solution</h3>
				<span className="font-normal text-base text-ocean_night">
					Easier to search for solutions based on a specific stack.
				</span>
			</div>
			<NumberCommentsIndicator />
		</div>
	)
}
