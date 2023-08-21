import Link from "next/link"

export default function RoadmapContainer() {
	return (
		<div className="relative ml-2 flex flex-col rounded-xl bg-white px-6 pb-6 pt-5 md:mb-6 md:flex-grow md:basis-1/3 lg:ml-0">
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
