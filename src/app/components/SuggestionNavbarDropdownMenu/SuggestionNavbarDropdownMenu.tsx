"use client"

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import IconArrowUp from "@/assets/svg/IconArrowUpWhite.svg"
import SuggestionNavbarDropdownMenuRadioItem from "./SuggestionNavbarDropdownMenuRadioItem/SuggestionNavbarDropdownMenuRadioItem"
import { useState } from "react"
import { useAppSelector } from "@/hooks/redux/reduxHooks"

export default function SuggestionNavbarDropdownMenu() {
	const filterValue = useAppSelector(
		(state) => state.suggestionsFilter.value.suggestionsFilter
	)
	const [expanded, setExpanded] = useState(false)

	return (
		<DropdownMenu onOpenChange={() => setExpanded(!expanded)}>
			<DropdownMenuTrigger className="ml-10 flex items-center">
				<span className="text-sm font-normal">
					Sort By : <span className="font-bold">Most Upvotes</span>
				</span>
				<Image
					src={IconArrowUp}
					alt=""
					className="ml-2 transition-transform"
					style={{
						transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
					}}
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="p-0">
				<DropdownMenuRadioGroup value={filterValue}>
					<SuggestionNavbarDropdownMenuRadioItem value="Most Upvotes" />
					<DropdownMenuSeparator className="m-0" />
					<SuggestionNavbarDropdownMenuRadioItem value="Least Upvotes" />
					<DropdownMenuSeparator className="m-0" />
					<SuggestionNavbarDropdownMenuRadioItem value="Most Comments" />
					<DropdownMenuSeparator className="m-0" />
					<SuggestionNavbarDropdownMenuRadioItem value="Least Comments" />
					<DropdownMenuSeparator className="m-0" />
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
