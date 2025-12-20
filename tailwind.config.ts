import type { Config } from 'tailwindcss'

const config: Config = {
  content: [    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',],
  theme: {
    extend: {
      colors: {
        primary: '#009FD9',       // Tech Blue
        'primary-dark': '#035370' // Blue Lagoon
      }
    }
  },
  plugins: []
}

export default config
