module.exports = {
	content: ['./src/**/*.svelte'],
	theme: {
		extend: {
			fontFamily:{
				'Courier': ['Courier Prime', 'Courier', 'monospace'],
			}
		}
	},
	plugins: [
		require('tailwindcss-textshadow')
	]
};
