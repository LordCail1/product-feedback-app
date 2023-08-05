import Link from "next/link"

export default function Page() {
	return (
		<div className="relative mb-6 flex rounded-xl bg-white p-6 flex-col">
			<div className="flex justify-between">
				<h3>Roadmap</h3>
				<Link href={"/roadmap"} className="">View</Link>
			</div>
			<ul className="flex flex-col">
				<li>
					<div></div>
					<span></span>
					<span></span>
				</li>
				<li>
					<div></div>
					<span></span>
					<span></span>
				</li>
				<li>
					<div></div>
					<span></span>
					<span></span>
				</li>
			</ul>
		</div>
	)
}
