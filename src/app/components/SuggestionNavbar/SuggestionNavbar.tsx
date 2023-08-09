import Image from "next/image"
import LightBulb from "@/assets/svg/LightBulb.svg"
import SuggestionNavbarDropdownMenu from "../SuggestionNavbarDropdownMenu/SuggestionNavbarDropdownMenu"

export default function SuggestionNavbar() {
	return (
		<nav className="mb-6 flex rounded-xl bg-raven_night p-6 text-white">
			<Image
				alt=""
				src={LightBulb}
			/>
			<h3 className="ml-4 text-lg font-bold">6 Suggestions</h3>
			<SuggestionNavbarDropdownMenu />
		</nav>
	)
}
