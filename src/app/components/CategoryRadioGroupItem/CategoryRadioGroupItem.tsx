"use client"

import { changeCategory } from "@/features/categorySlice"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { RadioContainerCategory } from "@/types"
import { RadioGroupItem } from "@/components/ui/radio-group"
import { useAppDispatch, useAppSelector } from "@/hooks/redux/reduxHooks"
import React, { useState } from "react"

type Props = {
	categoryValue: RadioContainerCategory
}

export default function CategoryRadioGroupItem({ categoryValue }: Props) {
	const dispatch = useAppDispatch()
	const [isHovering, setIsHovering] = useState(false)
	const category = useAppSelector((state) => state.category.value.category)

	const condition = category === categoryValue

	function handleChangeCategoryClick(e: React.MouseEvent<HTMLDivElement>) {
		// e.preventDefault()
		
		dispatch(changeCategory(categoryValue))
	}

	

	return (
		<div
			className={cn(
				"mb-3 flex grow-0 cursor-pointer items-center justify-center rounded-lg bg-cotton_ball text-rainbow_fish transition-colors",
				{
					"bg-pale_phthalo_blue": isHovering,
					"bg-rainbow_fish": condition,
					"text-white": condition,
				}
			)}
			onClick={handleChangeCategoryClick}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}

		>
			<Label
				className="cursor-pointer px-4 py-2 font-semibold capitalize"
				htmlFor={categoryValue}
			>
				{categoryValue}
			</Label>
			<RadioGroupItem
				className="sr-only"
				id={categoryValue}
				value={categoryValue}
			/>
		</div>
	)
}

//
