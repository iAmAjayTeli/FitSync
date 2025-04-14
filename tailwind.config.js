/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
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
    'bg-blue-500',
    'bg-orange-500',
    'bg-green-500',
    'bg-cyan-500',
    'text-blue-500',
    'text-orange-500',
    'text-green-500',
    'text-cyan-500',
    {
      pattern: /bg-(slate|purple|cyan|pink)-(400|500|600|700|800|900)/,
      variants: ['hover', 'focus', 'active']
    },
  ]
} 