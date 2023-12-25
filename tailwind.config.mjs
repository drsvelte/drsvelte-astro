/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
		extend: {},
	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [
		require("daisyui"),
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/container-queries'),
	],

	// daisyUI config (optional - here are the default values)
	daisyui: {
		themes: [
			{
				dcyftheme: {
					"primary": "#853694",
					"secondary": "#006580",						
					"accent": "#934BA1",
					"neutral": "#f3e8ff",
					"base-100": "#f3f4f6",
					"info": "#16a34a",
					"success": "#9333ea",
					"warning": "#e11d48",
					"error": "#b91c1c",
				},
			},
			"light", "dark", "bumblebee", "cupcake", "emerald", "valentine", "corporate", "retro", "cyberpunk", "aqua", "loft", "dracula", "black", "business", "acid", "autumn", "winter",
		],
		darkTheme: "dark", // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ":root", // The element that receives theme color CSS variables
	},
}
