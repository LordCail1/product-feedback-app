"use client"

import CategoryRadioGroup from "@/app/home/components/CategoryRadioGroup/CategoryRadioGroup"
import CategoryRadioGroupItem from "@/app/home/components/CategoryRadioGroupItem/CategoryRadioGroupItem"




export default function CategoryContainer() {
  return (
    <CategoryRadioGroup
			className="relative mb-6 ml-2 flex flex-grow basis-1/3 flex-wrap items-center justify-center rounded-xl bg-white p-6 lg:ml-0 lg:flex-row lg:items-start lg:justify-start"
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
