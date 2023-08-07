import Link from "next/link"

export default function Page() {
	return (
		<div className="relative mb-6 flex flex-col rounded-xl bg-white p-6">
			<div className="mb-6 flex justify-between items-center">
				<h3 className="font-bold text-lg">Roadmap</h3>
				<Link
					href="/roadmap"
					className="font-semibold text-rainbow_fish underline transition-colors hover:text-periwinkle_blue text-base"
				>
					View
				</Link>
			</div>
			<ul className="flex flex-col">
				<li className="mb-4 flex justify-between">
					<div className="flex items-center">
						<div className="h-2 w-2 rounded-full bg-creamy_peach"></div>
						<span className="ml-4">Planned</span>
					</div>
					<span className="font-bold">6</span>
				</li>
				<li className="mb-4 flex justify-between">
					<div className="flex items-center">
						<div className="h-2 w-2 rounded-full bg-singapore_orchid"></div>
						<span className="ml-4">In-Progress</span>
					</div>
					<span className="font-bold">6</span>
				</li>
				<li className="mb-4 flex justify-between">
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
