"use client"

import { cn } from "@/lib/utils"
import { useAppSelector } from "@/hooks/redux/reduxHooks"

export default function DarkOverlay() {
    const expanded = useAppSelector((state) => state.sidebar.value.expanded)
	return (
		<main className={cn("invisible absolute bottom-0 top-20 w-full z-10 bg-black opacity-0 transition-opacity", {
            "opacity-50 visible": expanded,
            

        })}>DarkOverlay</main>
	)
}
