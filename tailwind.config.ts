import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin"

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
			fontFamily: {
				hind: ['var(--font-hind)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
			},
  		colors: {
  			primary: {
					light: "#B3F6DD",
					DEFAULT: "var(--color-primary)",
					dark: "#80C3AA",
				},
				secondary: {
					light: "#4D4971",
					lighter: "#797794",
					lightest: "#A6A5B8",
					DEFAULT: "var(--color-secondary)",
					dark: "#1A173E",
					darker: "#13112E",
					darkest: "#0C0B1F",
				},
				tertiary: {
					light: "#F8F9F9",
					lighter: "#FAFAFB",
					lightest: "#FBFCFC",
					DEFAULT: "var(--color-tertiary)",
					dark: "#C5C6C6",
					darker: "#949495",
					darkest: "#626363",
				}
  		}
  	}
  },
  plugins: [
		require("tailwindcss-animate"),
		plugin(function ({addBase}) {
			addBase({
				":root": {
					"--color-primary": '#A0F4D5',
					"--color-secondary": '#201D4D',
					"--color-tertiary": '#F6F7F8',
				}
			})
		})
	],
};
export default config;
