import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"light-bg": "#f3f4f6",
				"dark-bg": "#1a202c",
				"light-text": "#2d3748",
				"dark-text": "#f3f4f6",
				"light-card": "#fff",
				"dark-card": "#2d3748",
				"light-card-border": "#2d3748",
				"dark-card-border": "#4a5568",
			},
		},
	},
	darkMode: "selector",
	plugins: [],
}
export default config
