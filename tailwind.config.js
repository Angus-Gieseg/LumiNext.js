/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        modern: ['Modern_Age', 'sans-serif'],
      },
      colors: {
        'primary-purple': '#4c2a7c',
        'light-purple': '#6c4f99',
        'secondary-orange': '#ff9e30',
        'light-orange': '#ffbf5a',
        background: '#F5F5F5',
        'light-gray-text': '#A0A0A0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
