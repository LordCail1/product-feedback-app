"use client"

import { useAppDispatch, useAppSelector } from "@/hooks/redux/reduxHooks"
import { changeCategory } from "@/features/categorySlice"
import colors from "@/assets/colors"
import React, { useState } from "react"
import { Category } from "@/types"
import { RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

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
			className="mb-3 flex grow-0 cursor-pointer items-center justify-center rounded-lg transition-colors"
			onClick={handleChangeCategoryClick}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
			style={{
				backgroundColor: condition
					? colors.rainbow_fish
					: isHovering
					? colors.pale_phthalo_blue
					: colors.cotton_ball,
				color: condition ? colors.white : colors.rainbow_fish,
			}}
		>
			<Label
				className="cursor-pointer capitalize py-2 px-4"
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
