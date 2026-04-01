
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Financial Color Palette
				navy: {
					DEFAULT: '#1B365D',
					50: '#E8F0F7',
					100: '#C7D9E8',
					200: '#9CB8D3',
					300: '#7196BE',
					400: '#4675A9',
					500: '#1B365D',
					600: '#162B4A',
					700: '#112037',
					800: '#0C1524',
					900: '#070A11'
				},
				corporate: {
					DEFAULT: '#2C5AA0',
					50: '#E9F1FD',
					100: '#CAD9F9',
					200: '#9BB7F3',
					300: '#6C95ED',
					400: '#3D73E7',
					500: '#2C5AA0',
					600: '#234880',
					700: '#1A3660',
					800: '#112440',
					900: '#081220'
				},
				financial: {
					DEFAULT: '#0F5132',
					50: '#F0F9F4',
					100: '#DCF1E3',
					200: '#BBE2C8',
					300: '#8CCDA4',
					400: '#56B17A',
					500: '#339B5B',
					600: '#0F5132',
					700: '#1B5E3F',
					800: '#184A33',
					900: '#153D2B',
					950: '#0A2116'
				},
				investment: {
					DEFAULT: '#32CD32',
					50: '#EAFBEA',
					100: '#CDF4CD',
					200: '#A3EBA3',
					300: '#79E279',
					400: '#4FD94F',
					500: '#32CD32',
					600: '#28A428',
					700: '#1E7B1E',
					800: '#145214',
					900: '#0A290A'
				},
				gold: {
					DEFAULT: '#D4AF37',
					50: '#FDFBF4',
					100: '#F9F3E2',
					200: '#F2E4BB',
					300: '#EBD594',
					400: '#E4C66D',
					500: '#D4AF37',
					600: '#B8952B',
					700: '#8C701F',
					800: '#604B13',
					900: '#342607'
				}
			},
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'inter': ['Inter', 'sans-serif'],
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
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'growth': {
					'0%': { transform: 'scaleY(0)' },
					'100%': { transform: 'scaleY(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'growth': 'growth 1s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
