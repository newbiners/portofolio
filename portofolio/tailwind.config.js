/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        // => @media (min-width: 320px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '730px',
        // => @media (min-width: 730px) { ... }
        
        'me': '840px',
        // => @media (min-width: 840px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      spacing: {
        '27': '4.5rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
      },
    },
    screens: {
      'sml': '60px',
      // => @media (text-size: 60px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
