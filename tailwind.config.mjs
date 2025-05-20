import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary palette
        primary: {
          DEFAULT: '#8E44AD', // Main purple (updated for accessibility)
          light: '#A569BD',
          dark: '#7D3C98',
        },
        secondary: {
          DEFAULT: '#9E95A9', // Muted purple-gray
          light: '#B6AFC1',
          dark: '#837A8E',
        },
        accent: {
          DEFAULT: '#F7DC6F', // Soft yellow (updated for accessibility)
          light: '#F9E79F',
          dark: '#F4D03F',
          yellow: '#F7DC6F',
        },
        // Custom icon color
        iconColor: '#DEC7E7',
        // Semantic colors
        content: {
          DEFAULT: '#56505F', // Dark text
          muted: '#76717F',
          subtle: '#96919F',
          inverted: '#FFFFFF',
        },
        surface: {
          DEFAULT: '#FFFFFF', // Light background (updated for accessibility)
          secondary: '#F6F4FA',
          muted: '#EEEDF2',
        },
        // Dark mode variants
        'dark-content': {
          DEFAULT: '#FEFDFF', // Light text on dark background
          muted: '#DFDCE5',
          subtle: '#C5C1CE',
          inverted: '#2D2A33',
        },
        'dark-surface': {
          DEFAULT: '#2D2A33', // Dark background
          secondary: '#3A3740',
          muted: '#4A474E',
        },
      },
      spacing: {
        'xs': '0.5rem',    // 8px
        'sm': '1rem',      // 16px
        'md': '1.5rem',    // 24px
        'lg': '2rem',      // 32px
        'xl': '3rem',      // 48px
        '2xl': '4rem',     // 64px
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['2.25rem', { lineHeight: '1.3' }],
        'h3': ['1.5rem', { lineHeight: '1.4' }],
        'h4': ['1.25rem', { lineHeight: '1.4' }],
        'body': ['1.125rem', { lineHeight: '1.5' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      maxWidth: {
        'content': '75ch',
        'content-wide': '85ch',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.content.DEFAULT'),
            '--tw-prose-headings': theme('colors.content.DEFAULT'),
            '--tw-prose-links': theme('colors.primary.DEFAULT'),
            '--tw-prose-bold': theme('colors.content.DEFAULT'),
            '--tw-prose-code': theme('colors.content.DEFAULT'),
            '--tw-prose-quotes': theme('colors.content.muted'),
            maxWidth: 'none',
            fontSize: theme('fontSize.body[0]'),
            h1: {
              fontSize: theme('fontSize.h1[0]'),
              lineHeight: theme('fontSize.h1[1].lineHeight'),
              fontWeight: theme('fontWeight.bold'),
              letterSpacing: '0.03em',
              marginBottom: theme('spacing.lg'),
              fontFamily: "'Lovelace Text', serif",
            },
            h2: {
              fontSize: theme('fontSize.h2[0]'),
              lineHeight: theme('fontSize.h2[1].lineHeight'),
              fontWeight: theme('fontWeight.bold'),
              letterSpacing: '0.03em',
              marginTop: theme('spacing.xl'),
              marginBottom: theme('spacing.md'),
              fontFamily: "'Lovelace Text', serif",
            },
            h3: {
              fontSize: theme('fontSize.h3[0]'),
              lineHeight: theme('fontSize.h3[1].lineHeight'),
              fontWeight: theme('fontWeight.medium'),
              letterSpacing: '0.03em',
              marginTop: theme('spacing.lg'),
              marginBottom: theme('spacing.sm'),
              fontFamily: "'Lovelace Text', serif",
            },
            p: {
              marginBottom: theme('spacing.md'),
            },
            a: {
              color: theme('colors.primary.DEFAULT'),
              textDecoration: 'underline',
              textDecorationColor: 'rgb(142 68 173 / 0.4)', // primary color with 40% opacity
              textUnderlineOffset: '4px',
              textDecorationThickness: '2px',
              transition: 'all 300ms',
              '&:hover': {
                textDecorationColor: theme('colors.primary.DEFAULT'),
              },
            },
          },
        },
        dark: {
          css: {
            '--tw-prose-body': theme('colors.dark-content.DEFAULT'),
            '--tw-prose-headings': theme('colors.dark-content.DEFAULT'),
            '--tw-prose-links': theme('colors.primary.light'),
            '--tw-prose-bold': theme('colors.dark-content.DEFAULT'),
            '--tw-prose-code': theme('colors.dark-content.DEFAULT'),
            '--tw-prose-quotes': theme('colors.dark-content.muted'),
            a: {
              color: theme('colors.primary.light'),
              textDecorationColor: 'rgb(165 105 189 / 0.4)', // primary-light color with 40% opacity
              '&:hover': {
                textDecorationColor: theme('colors.primary.light'),
              },
            },
          },
        },
      }),
    },
    fontFamily: {
      sans: ['Glacial Indifference', ...defaultTheme.fontFamily.sans],
      mono: defaultTheme.fontFamily.mono,
      lovelace: ['Lovelace Text', 'serif'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}