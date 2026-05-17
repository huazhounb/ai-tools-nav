import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC',
        card: '#FFFFFF',
        primary: '#2563EB',
        secondary: '#7C3AED',
        success: '#10B981',
        warning: '#F59E0B',
        muted: '#475569',
        border: '#E2E8F0',
        ink: '#0F172A'
      },
      boxShadow: {
        soft: '0 8px 24px rgb(15 23 42 / 0.06)'
      }
    }
  }
} satisfies Config
