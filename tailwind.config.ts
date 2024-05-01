import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"

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
				// "dark-bg": "#1a202c",
				"light-text": "#2d3748",
				// "dark-text": "#f7fafc",
				"light-card": "#fff",
				// "dark-card": "#2d3748",
				"light-card-hover": "#f7fafc",
				// "dark-card-hover": "#2d3748",
				"light-card-border": "#2d3748",
				// "dark-card-border": "#4a5568",
				"light-card-shadow": "#e2e8f0",
				// "dark-card-shadow": "#2d3748",
				"dark-bg": "#1e293b",
				"dark-text": colors.gray[400],
				"dark-card": "#0f172a",
				"dark-card-hover": "#1e293b",
				"dark-card-border": colors.gray[700],
				"dark-card-shadow": "#1e293b",
			},
		},
	},
	plugins: [],
}
export default config
