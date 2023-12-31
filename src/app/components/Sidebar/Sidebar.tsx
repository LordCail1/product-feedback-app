"use client"

import { cn } from "@/lib/utils"
import { useAppSelector } from "@/hooks/redux/reduxHooks"
import React from "react"
import CategoryContainer from "../CategoryContainer/CategoryContainer"
import RoadmapContainer from "../RoadmapContainer/RoadmapContainer"

export default function Sidebar() {
	const expanded = useAppSelector((state) => state.sidebar.value.expanded)

	return (
		<nav
			className={cn(
				"absolute -right-72 bottom-0 top-20 z-10 flex w-72 flex-col bg-ghost_white p-4 transition-transform ease-in-out md:invisible",
				{
					"-translate-x-72 transform": expanded,
				}
			)}
		>
			<CategoryContainer />
			<RoadmapContainer />
		</nav>
	)
}
