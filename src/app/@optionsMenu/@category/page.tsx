"use client"

import CategoryBtn from "@/app/components/CategoryBtn/CategoryBtn"
import { useAppSelector } from "@/hooks/redux/reduxHooks"

export default function Page() {
	const category = useAppSelector((state) => state.value.category)

	return (
		<form className="relative mb-6 flex flex-wrap items-start rounded-xl bg-white p-6">
			<CategoryBtn
				category={category}
				categoryValue="all"
				text="All"
			/>
			<CategoryBtn
				category={category}
				categoryValue="UI"
				text="UI"
			/>
			<CategoryBtn
				category={category}
				categoryValue="UX"
				text="UX"
			/>
			<CategoryBtn
				category={category}
				categoryValue="enhancement"
				text="enhancement"
			/>
			<CategoryBtn
				category={category}
				categoryValue="bug"
				text="Bug"
			/>
			<CategoryBtn
				category={category}
				categoryValue="feature"
				text="feature"
			/>
		</form>
	)
}
