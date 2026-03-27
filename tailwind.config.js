/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // JA Korea Brand Colors
        'ja-blue': {
          50: '#f0f6ff',
          100: '#e0edff',
          200: '#bfd5ff',
          300: '#99baff',
          400: '#6b94ff',
          500: '#4770ff',
          600: '#0054a6',
          700: '#004a95',
          800: '#003d7a',
          900: '#002d5a',
        },
        // Google Brand Colors
        'google-blue': '#4285f4',
        'google-red': '#ea4335',
        'google-yellow': '#fbbc04',
        'google-green': '#34a853',
      },
      keyframes: {
        'spin-pause': {
          '0%': { transform: 'rotate(0deg)' },
          '40%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-pause': 'spin-pause 3s ease-in-out infinite',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
