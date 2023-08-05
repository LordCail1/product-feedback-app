"use client"

import { useAppDispatch } from "@/hooks/redux/reduxHooks"
import { changeCategory } from "@/features/categorySlice"
import colors from "@/assets/colors"
import React, { useState } from "react"
import { Category } from "@/types"

type Props = {
	category: Category
	categoryValue: Category
	text: string
}

export default function CategoryBtn({
	category,
	categoryValue,
	text,
}: Props) {
	const dispatch = useAppDispatch()
	const [isHovering, setIsHovering] = useState(false)

	const condition = category === categoryValue

	function handleChangeCategoryClick(e: React.MouseEvent<HTMLDivElement>) {
		e.preventDefault()
		dispatch(changeCategory(categoryValue))
	}

	return (
		<div
			className="mx-2 my-3 flex grow-0 cursor-pointer items-center justify-center rounded-lg px-4 py-1 transition-colors"
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
			<label
				className={"cursor-pointer"}
				htmlFor={text}
			>
				{text}
			</label>
			<input
				className="sr-only"
				id={text}
				name="category"
				type="radio"
				value={text}
			/>
		</div>
	)
}

//
