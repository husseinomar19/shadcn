import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}", // Scant alle bestanden in src
		"./pages/**/*.{js,ts,jsx,tsx,mdx}", // Scant bestanden in pages
		"./componenten/**/*.{js,ts,jsx,tsx,mdx}", // Scant bestanden in componenten
		"./public/**/*.{html,js}", // Zorgt ervoor dat ook public statische bestanden Tailwind krijgen
		"./node_modules/@heroui/theme/dist/components/*.{js,ts,jsx,tsx}" // Scant HeroUI componenten
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
