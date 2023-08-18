import CreateFeedbackLink from "@/app/home/components/CreateFeedbackLink/CreateFeedbackLink"
import Image from "next/image"
import LightBulb from "@/assets/svg/LightBulb.svg"
import SuggestionNavbarDropdownMenu from "../SuggestionNavbarDropdownMenu/SuggestionNavbarDropdownMenu"


export default function SuggestionNavbar() {
	return (
		<nav className="mb-6 flex items-center bg-raven_night px-6 py-2 text-white md:rounded-xl md:py-6 md:pl-6 md:pr-4">
			<Image
				alt=""
				src={LightBulb}
				className="hidden md:block"
			/>
			<h3 className="ml-4 hidden text-lg font-bold md:block">
				6 Suggestions
			</h3>
			<SuggestionNavbarDropdownMenu />
			<CreateFeedbackLink />
		</nav>
	)
}
