// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          orange: {
            600: '#ff6600', // Hacker News orange
            700: '#e05d00',
          },
          blue: {
            800: '#000080', // Traditional link blue
          },
          gray: {
            50: '#f9f9f9',
            100: '#f6f6ef', // Hacker News background
            200: '#eee',
            300: '#ddd',
            400: '#999',
            500: '#828282', // Hacker News secondary text
            600: '#666',
            700: '#555',
            800: '#333',
            900: '#222',
          },
        },
        fontFamily: {
          sans: ['Verdana', 'Geneva', 'sans-serif'],
          mono: ['Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'],
          serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        },
        typography: {
          DEFAULT: {
            css: {
              color: '#222',
              a: {
                color: '#000080',
                '&:hover': {
                  textDecoration: 'underline',
                },
              },
              h1: {
                color: '#222',
                fontWeight: '600',
              },
              h2: {
                color: '#222',
                fontWeight: '600',
              },
              h3: {
                color: '#222',
                fontWeight: '600',
              },
              h4: {
                color: '#222',
                fontWeight: '600',
              },
              code: {
                fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace',
                backgroundColor: '#f6f6ef',
                padding: '0.125rem 0.25rem',
                borderRadius: '0.25rem',
              },
            },
          },
        },
      },
    },
    plugins: [require('@tailwindcss/typography')],
  };