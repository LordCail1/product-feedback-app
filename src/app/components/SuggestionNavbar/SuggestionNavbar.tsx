import Image from "next/image";
import LightBulb from '@/assets/svg/LightBulb.svg'
import SuggestionNavbarDropdownMenu from "../SuggestionNavbarDropdownMenu/SuggestionNavbarDropdownMenu";

export default function SuggestionNavbar() {
	return (
		<nav className="flex rounded-xl bg-raven_night text-white p-6">
            <Image alt="" src={LightBulb}/>
            <h3 className="ml-4 font-bold text-lg">6 Suggestions</h3>
            <SuggestionNavbarDropdownMenu/>
        </nav>
	)
}
