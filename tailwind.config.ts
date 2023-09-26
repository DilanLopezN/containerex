import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{jsx,tsx}',
    './src/components/**/*.{jsx,tsx}',
    './src/app/**/*.{jsx,tsx}',
    './src/**/*.{jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'light': '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -4px rgba(255, 255, 255, 0.1)'
      }
    },
  },
  plugins: [],
}
export default config
