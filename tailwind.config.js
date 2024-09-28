/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				bkg: 'hsl(var(--color-bkg)/<alpha-value>)',
				txt: {
					main: 'hsl(var(--color-txt-main)/<alpha-value>)',
					accent: 'hsl(var(--color-txt-accent)/<alpha-value>)'
				},
				accent: 'hsl(var(--color-accent)/<alpha-value>)',
				lines: 'hsl(var(--color-lines)/<alpha-value>)'
			}
		}
	},
	plugins: []
};
