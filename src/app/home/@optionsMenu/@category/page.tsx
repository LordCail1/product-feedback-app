"use client"

import CategoryRadioGroupItem from "../../components/CategoryRadioGroupItem/CategoryRadioGroupItem"
import { RadioGroup } from "@/components/ui/radio-group"
import { useAppSelector } from "@/hooks/redux/reduxHooks"
import CategoryRadioGroup from "../../components/CategoryRadioGroup/CategoryRadioGroup"

export default function Page() {

	return (
		<CategoryRadioGroup className="relative mb-6 flex flex-wrap items-start rounded-xl bg-white p-6" defaultValue="all">
			<CategoryRadioGroupItem
				categoryValue="all"
			/>
			<CategoryRadioGroupItem
				categoryValue="UI"
			/>
			<CategoryRadioGroupItem
				categoryValue="UX"
			/>
			<CategoryRadioGroupItem
				categoryValue="enhancement"
			/>
			<CategoryRadioGroupItem
				categoryValue="bug"
			/>
			<CategoryRadioGroupItem
				categoryValue="feature"
			/>
		</CategoryRadioGroup>
	)
}
