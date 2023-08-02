"use client"

import { useAppDispatch } from "@/hooks/redux/reduxHooks"
import { changeCategory } from "@/features/categorySlice"
import colors from "@/assets/colors"
import React from "react"

type Props = {
	text: Category
	category: Category
}

export default function CategoryBtn({ text, category }: Props) {
	const dispatch = useAppDispatch()

	const condition = category === text

	function handleChangeCategoryClick(e: React.MouseEvent<HTMLDivElement>) {
		e.preventDefault()
		dispatch(changeCategory(text))
	}

	return (
		<div
			className="bg-rain mx-2 my-3 flex grow-0 cursor-pointer items-center justify-center rounded-lg bg-cotton_ball px-4 py-1 hover:bg-pale_phthalo_blue transition-colors"
			onClick={handleChangeCategoryClick}
			style={{
				backgroundColor: condition
					? colors.rainbow_fish
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
