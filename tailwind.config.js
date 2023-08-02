/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				singapore_orchid: "#AD1FEA",
				rainbow_fish: "#4661E6",
				raven_night: "#373F68",
				garden_fairy: "#CDD2EE",
				cotton_ball: "#F2F4FF",
				ghost_white: "#F7F8FD",
				jewel_cave: "#3A4374",
				ocean_night: "#647196",
				creamy_peach: "#F49F85",
				blue_mana: "#62BCFA",
				pale_phthalo_blue: "#CFD7FF",
			},
		},
	},
	plugins: [],
}
