/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"inter": ["Inter", ...defaultTheme.fontFamily.sans],
				"lexend": ["Lexend", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				customgreen100: "#F9FCF4",
				customteal500: "#023849"
			}

		},
	},
	plugins: [],
}
