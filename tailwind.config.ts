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
			fontFamily: {
				'orbitron': ['Orbitron', 'sans-serif'],
				'space': ['Space Grotesk', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))',
					dark: 'hsl(var(--primary-dark))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					glow: 'hsl(var(--secondary-glow))'
				},
				tertiary: {
					DEFAULT: 'hsl(var(--tertiary))',
					foreground: 'hsl(var(--tertiary-foreground))',
					glow: 'hsl(var(--tertiary-glow))'
				},
				nebula: {
					DEFAULT: 'hsl(var(--nebula))',
					foreground: 'hsl(var(--nebula-foreground))'
				},
				star: {
					DEFAULT: 'hsl(var(--star))',
					glow: 'hsl(var(--star-glow))'
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
					foreground: 'hsl(var(--accent-foreground))',
					glow: 'hsl(var(--accent-glow))'
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
				}
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
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'float-gentle': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-20px) rotate(2deg)' }
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 40px hsl(var(--primary) / 0.4), 0 0 60px hsl(var(--secondary) / 0.2)' 
					},
					'50%': { 
						boxShadow: '0 0 60px hsl(var(--primary) / 0.6), 0 0 100px hsl(var(--secondary) / 0.4)' 
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 40px hsl(var(--primary) / 0.4), 0 0 60px hsl(var(--secondary) / 0.2)'
					},
					'50%': {
						boxShadow: '0 0 60px hsl(var(--primary) / 0.6), 0 0 100px hsl(var(--secondary) / 0.4)'
					}
				},
				'fade-in-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
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
				'slide-up': {
					'0%': { 
						transform: 'translateY(10px)',
						opacity: '0'
					},
					'100%': { 
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'orbit': {
					'0%': {
						transform: 'rotate(0deg) translateX(100px) rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg) translateX(100px) rotate(-360deg)'
					}
				},
				'shooting-star': {
					'0%': {
						transform: 'translateX(-100vw) translateY(-100vh)',
						opacity: '1'
					},
					'70%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateX(100vw) translateY(100vh)',
						opacity: '0'
					}
				},
				'twinkle': {
					'0%, 100%': {
						opacity: '0.6',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.1)'
					}
				},
				'cosmic-drift': {
					'0%, 100%': {
						transform: 'translate(0, 0) rotate(0deg)',
						opacity: '0.3'
					},
					'33%': {
						transform: 'translate(50px, -50px) rotate(120deg)',
						opacity: '0.5'
					},
					'66%': {
						transform: 'translate(-50px, 50px) rotate(240deg)',
						opacity: '0.4'
					}
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-gentle': 'float-gentle 6s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'slide-up': 'slide-up 0.4s ease-out',
				'orbit': 'orbit 20s linear infinite',
				'shooting-star': 'shooting-star 3s linear infinite',
				'twinkle': 'twinkle 100s linear infinite',
				'cosmic-drift': 'cosmic-drift 60s ease-in-out infinite',
				'shimmer': 'shimmer 3s linear infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
				'gradient-space': 'linear-gradient(135deg, hsl(240 60% 4%), hsl(270 60% 8%), hsl(280 50% 12%))',
				'gradient-nebula': 'linear-gradient(135deg, hsl(270 100% 70%), hsl(195 100% 60%), hsl(320 90% 65%))',
				'gradient-cosmic': 'linear-gradient(135deg, hsl(195 100% 60%), hsl(280 90% 70%), hsl(270 100% 70%))',
				'gradient-primary': 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-glow)))',
				'gradient-secondary': 'linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--secondary-glow)))',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
