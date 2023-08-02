"use client"

import CategoryBtn from "@/app/components/CategoryBtn/CategoryBtn"
import { useAppSelector } from "@/hooks/redux/reduxHooks"

export default function Page() {
	const category = useAppSelector((state) => state.value.category)

	return (
		<form className="relative mb-6 flex flex-wrap items-start rounded-xl bg-white p-6">
			<CategoryBtn
				text="UI"
				category={category}
			/>
			<CategoryBtn
				text="UX"
				category={category}
			/>
			<CategoryBtn
				text="all"
				category={category}
			/>
			<CategoryBtn
				text="bug"
				category={category}
			/>
			<CategoryBtn
				text="enhancement"
				category={category}
			/>
			<CategoryBtn
				text="feature"
				category={category}
			/>
		</form>
	)
}
