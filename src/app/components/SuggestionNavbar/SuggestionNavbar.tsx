import Image from "next/image"
import LightBulb from "@/assets/svg/LightBulb.svg"
import SuggestionNavbarDropdownMenu from "../SuggestionNavbarDropdownMenu/SuggestionNavbarDropdownMenu"
import { Button } from "@/components/ui/button"
import IconPlus from "@/assets/svg/IconPlus.svg"
import Link from "next/link"

export default function SuggestionNavbar() {
	return (
		<nav className="mb-6 flex rounded-xl bg-raven_night py-6 pl-6 pr-4 text-white">
			<Image
				alt=""
				src={LightBulb}
			/>
			<h3 className="ml-4 text-lg font-bold">6 Suggestions</h3>
			<SuggestionNavbarDropdownMenu />
			<Button
				className="ml-auto flex items-center bg-singapore_orchid hover:bg-after_party_pink"
				asChild
			>
				<Link href="/createFeedback">
					<Image
						src={IconPlus}
						alt=""
						className="mr-2"
					/>
					Add Feedback
				</Link>
			</Button>
		</nav>
	)
}
