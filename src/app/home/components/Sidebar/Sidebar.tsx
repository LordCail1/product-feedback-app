"use client"

import { useAppSelector } from "@/hooks/redux/reduxHooks"
import { cn } from "@/lib/utils"
import React from "react"

export default function Sidebar() {
	const expanded = useAppSelector((state) => state.sidebar.value.expanded)

	return (
		<nav
			className={cn(
				"absolute -right-72 bottom-0 top-20 w-72 bg-slate-300 transition-transform ease-in-out md:invisible z-10",
				{
					"-translate-x-72 transform": expanded,
				}
			)}
		>
			Sidebar
		</nav>
	)
}
