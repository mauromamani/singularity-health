/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        customOrange: 'hsl(var(--custom-orange))',

        /* Purple */
        'pet-purple-1000': 'hsl(var(--pet-purple-1000))',
        'pet-purple-900': 'hsl(var(--pet-purple-900))',
        'pet-purple-800': 'hsl(var(--pet-purple-800))',

        /* Blue */
        'pet-blue-1000': 'hsl(var(--pet-blue-1000))',
        'pet-blue-900': 'hsl(var(--pet-blue-900))',

        /* Orange */
        'pet-orange-1000': 'hsl(var(--pet-orange-1000))',
        'pet-orange-900': 'hsl(var(--pet-orange-900))',
        'pet-orange-800': 'hsl(var(--pet-orange-800))',
        'pet-orange-700': 'hsl(var(--pet-orange-700))',

        /* Yellow */
        'pet-yellow-1000': 'hsl(var(--pet-yellow-1000))',
        'pet-yellow-900': 'hsl(var(--pet-yellow-900))',
        'pet-yellow-800': 'hsl(var(--pet-yellow-800))',

        /* Grey */
        'pet-grey-1000': 'hsl(var(--pet-grey-1000))',
        'pet-grey-900': 'hsl(var(--pet-grey-900))',
        'pet-grey-800': 'hsl(var(--pet-grey-800))',

        /* White */
        'pet-white-1000': 'hsl(var(--pet-white-1000))',
        'pet-white-900': 'hsl(var(--pet-white-900))',
      },
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif'],
        'museo-sans-rounded': ['Museo Sans Rounded', 'sans-serif'],
        'segoe-ui': ['Segoe UI Variable Static Display', 'sans-serif'],
      },
      screens: {
        '2xl': '1440px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
