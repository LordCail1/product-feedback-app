"use client"

import { Button } from "@/components/ui/button"
import { toggleSidebar } from "@/features/sidebarSlice"
import { useAppDispatch, useAppSelector } from "@/hooks/redux/reduxHooks"
import IconClose from "@/assets/svg/IconClose.svg"
import IconHamburger from "@/assets/svg/IconHamburger.svg"
import Image from "next/image"
import React from "react"

export default function HamburgerBtn() {
	const expanded = useAppSelector((state) => state.sidebar.value.expanded)
	const dispatch = useAppDispatch()
	return (
		<Button
			className="absolute right-2 top-1/2 z-10 -translate-y-1/2 hover:bg-transparent"
			variant={"ghost"}
			onClick={() => dispatch(toggleSidebar())}
		>
			<Image
				src={expanded ? IconClose : IconHamburger}
				alt=""
			/>
		</Button>
	)
}
