/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F1B36',
          50: '#F0F4FA',
          100: '#DCE4F2',
          200: '#B8CBE5',
          700: '#15254A',
          800: '#0F1B36',
          900: '#0A1224',
          950: '#060B17',
        },
        'deep-navy': {
          DEFAULT: '#032D42',
          light: '#074868',
          dark: '#021F2D',
        },
        'primary-blue': {
          DEFAULT: '#146CE8',
          50: '#E8F3FF',
          100: '#D4E7FE',
          200: '#A9CFFE',
          500: '#146CE8',
          600: '#0D56C0',
          700: '#093E8F',
        },
        'light-blue': {
          DEFAULT: '#E8F3FF',
          hover: '#DBECFE',
        },
        'brand-bg': '#F5F7FB',
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F8FAFC',
          subtle: '#EEF2F6',
          card: '#FFFFFF',
        },
        slate: {
          850: '#152033',
          900: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(15, 27, 54, 0.05), 0 1px 2px rgba(15, 27, 54, 0.03)',
        'card': '0 4px 20px -2px rgba(15, 27, 54, 0.06), 0 2px 6px -1px rgba(15, 27, 54, 0.03)',
        'card-hover': '0 12px 30px -4px rgba(20, 108, 232, 0.12), 0 4px 12px -2px rgba(15, 27, 54, 0.04)',
        'premium': '0 20px 40px -10px rgba(15, 27, 54, 0.15)',
        'glow': '0 0 30px rgba(20, 108, 232, 0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}

