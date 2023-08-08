"use state"

import { DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { DropdownMenuItemIndicator } from "@radix-ui/react-dropdown-menu"
import IconCheck from "@/assets/svg/IconCheck.svg"
import Image from "next/image"

type SuggestionNavbarValues =
	| "Most Upvotes"
	| "Least Upvotes"
	| "Most Comments"
	| "Least Comments"

type Props = {
	value: SuggestionNavbarValues
}

export default function SuggestionNavbarDropdownMenuRadioItem({
	value,
}: Props) {
	return (
		<DropdownMenuRadioItem value={value} className="px-6 py-4 cursor-pointer flex items-center relative justify-between pr-36 hover:bg-cotton_ball">{value}
            <DropdownMenuItemIndicator className="absolute right-6">
                <Image src={IconCheck} alt=""/>
            </DropdownMenuItemIndicator>
        </DropdownMenuRadioItem>
	)
}
