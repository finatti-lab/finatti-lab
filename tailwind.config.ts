import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terracota: {
          DEFAULT: '#B5511F',
          dark: '#9A4419',
          light: '#C86B3A',
        },
        areia: {
          DEFAULT: '#E0CDBA',
          light: '#F0E5D8',
          dark: '#D0BDA8',
        },
        teal: {
          DEFAULT: '#30605D',
          dark: '#264A48',
          light: '#3D7773',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
