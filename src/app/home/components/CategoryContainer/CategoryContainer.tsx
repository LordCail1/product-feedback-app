"use client"

import CategoryRadioGroup from "@/app/home/components/CategoryRadioGroup/CategoryRadioGroup"
import CategoryRadioGroupItem from "@/app/home/components/CategoryRadioGroupItem/CategoryRadioGroupItem"

export default function CategoryContainer() {
	return (
		<CategoryRadioGroup
			className="relative flex basis-44 flex-wrap mb-4 items-center gap-y-0 rounded-xl bg-white p-6 md:mb-6 md:ml-2 md:flex-grow md:basis-1/3 md:justify-center lg:ml-0 lg:flex-row lg:items-start lg:justify-start"
			defaultValue="all"
		>
			<CategoryRadioGroupItem categoryValue="all" />
			<CategoryRadioGroupItem categoryValue="UI" />
			<CategoryRadioGroupItem categoryValue="UX" />
			<CategoryRadioGroupItem categoryValue="enhancement" />
			<CategoryRadioGroupItem categoryValue="bug" />
			<CategoryRadioGroupItem categoryValue="feature" />
		</CategoryRadioGroup>
	)
}
