import Link from "next/link"

export default function RoadmapContainer() {
	return (
		<div className="relative mb-6 ml-2 flex flex-grow basis-1/3 flex-col rounded-xl bg-white p-6 lg:ml-0">
			<div className="mb-6 flex items-center justify-between">
				<h3 className="text-lg font-bold">Roadmap</h3>
				<Link
					href="/roadmap"
					className="text-base font-semibold text-rainbow_fish underline transition-colors hover:text-periwinkle_blue"
				>
					View
				</Link>
			</div>
			<ul className="flex flex-col">
				<li className="mb-2 flex justify-between">
					<div className="flex items-center">
						<div className="h-2 w-2 rounded-full bg-creamy_peach"></div>
						<span className="ml-4">Planned</span>
					</div>
					<span className="font-bold">6</span>
				</li>
				<li className="mb-2 flex justify-between">
					<div className="flex items-center">
						<div className="h-2 w-2 rounded-full bg-singapore_orchid"></div>
						<span className="ml-4">In-Progress</span>
					</div>
					<span className="font-bold">6</span>
				</li>
				<li className="mb-2 flex justify-between">
					<div className="flex items-center">
						<div className="h-2 w-2 rounded-full bg-blue_mana"></div>
						<span className="ml-4">Live</span>
					</div>
					<span className="font-bold">6</span>
				</li>
			</ul>
		</div>
	)
}
