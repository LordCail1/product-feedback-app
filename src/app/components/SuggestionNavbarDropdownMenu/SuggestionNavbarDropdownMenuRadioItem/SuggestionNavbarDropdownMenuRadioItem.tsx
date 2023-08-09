"use state"

import { DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { DropdownMenuItemIndicator } from "@radix-ui/react-dropdown-menu"
import IconCheck from "@/assets/svg/IconCheck.svg"
import Image from "next/image"
import { SuggestionFilter } from "@/types"
import { useAppDispatch } from "@/hooks/redux/reduxHooks"
import { changeSuggestionsFilter } from "@/features/suggestionsFilterSlice"

type Props = {
	value: SuggestionFilter
}

export default function SuggestionNavbarDropdownMenuRadioItem({
	value,
}: Props) {

	const dispatch = useAppDispatch()



	return (
		<DropdownMenuRadioItem
			value={value}
			className="relative flex cursor-pointer items-center justify-between px-6 py-4 pr-36 hover:bg-cotton_ball"
			onSelect={() => dispatch(changeSuggestionsFilter(value))}
		>
			{value}
			<DropdownMenuItemIndicator className="absolute right-6">
				<Image
					src={IconCheck}
					alt=""
				/>
			</DropdownMenuItemIndicator>
		</DropdownMenuRadioItem>
	)
}
