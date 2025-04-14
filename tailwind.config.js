/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        }
      }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(slate|purple|cyan|pink|blue|orange|green)-(400|500|600|700|800|900)/,
      variants: ['hover', 'focus', 'active']
    },
    {
      pattern: /(from|to|via)-(slate|purple|cyan|pink|blue|orange|green)-(400|500|600|700|800|900)/,
      variants: ['hover', 'focus', 'active']
    },
    {
      pattern: /gap-[0-9]+/,
    },
    'backdrop-blur-xl',
    'opacity-50',
    'opacity-80',
    'opacity-90',
    'w-full',
    'h-full',
    'rounded-xl',
    'rounded-lg',
    'rounded-full'
  ]
} 