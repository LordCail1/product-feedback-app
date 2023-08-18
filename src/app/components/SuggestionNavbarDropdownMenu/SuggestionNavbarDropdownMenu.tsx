"use client"

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAppSelector } from "@/hooks/redux/reduxHooks"
import { useState } from "react"
import IconArrowUp from "@/assets/svg/IconArrowUpWhite.svg"
import Image from "next/image"
import SuggestionNavbarDropdownMenuRadioItem from "./SuggestionNavbarDropdownMenuRadioItem/SuggestionNavbarDropdownMenuRadioItem"
import { cn } from "@/lib/utils"

export default function SuggestionNavbarDropdownMenu() {
	const filterValue = useAppSelector(
		(state) => state.suggestionsFilter.value.suggestionsFilter
	)
	const [expanded, setExpanded] = useState(false)

	return (
		<DropdownMenu onOpenChange={() => setExpanded(!expanded)}>
			<DropdownMenuTrigger className="flex items-center md:ml-10">
				<span className="text-sm font-normal">
					Sort By : <span className="font-bold">Most Upvotes</span>
				</span>
				<Image
					src={IconArrowUp}
					alt=""
					className={cn("ml-2 transition-transform", {
						"rotate-180 transform": expanded,
					})}
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
