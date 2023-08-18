"use client"

import { useAppDispatch, useAppSelector } from "@/hooks/redux/reduxHooks"
import { changeCategory } from "@/features/categorySlice"
import colors from "@/assets/colors"
import React, { useState } from "react"
import { Category } from "@/types"
import { RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

type Props = {
	categoryValue: Category
}

export default function CategoryRadioGroupItem({
	categoryValue,
}: Props) {
	const dispatch = useAppDispatch()
	const [isHovering, setIsHovering] = useState(false)
	const category = useAppSelector((state) => state.category.value.category)


	const condition = category === categoryValue

	function handleChangeCategoryClick(e: React.MouseEvent<HTMLDivElement>) {
		e.preventDefault()
		dispatch(changeCategory(categoryValue))
	}

	return (
		<div
			className={cn("mb-3 flex grow-0 cursor-pointer items-center justify-center rounded-lg transition-colors bg-cotton_ball text-rainbow_fish", {
				"bg-pale_phthalo_blue": isHovering,
				"bg-rainbow_fish": condition,
				"text-white": condition,
			})}
			onClick={handleChangeCategoryClick}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
		>
			<Label
				className="cursor-pointer capitalize py-2 px-4 font-semibold"
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
