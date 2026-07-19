import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:       'var(--color-bg)',
        accent:   'var(--color-accent)',
        brand:    'var(--color-brand)',
        'text-sec':  'var(--color-text-sec)',
        'text-body': 'var(--color-text-body)',
        'text-pri':  'var(--color-text-pri)',
      },
      fontFamily: {
        heading: 'var(--font-heading)',
        body:    'var(--font-body)',
      },
      backdropBlur: {
        glass: '12px',
      },
    },
  },
  plugins: [],
} satisfies Config
