/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'bgd': "url('/src/images/bg9.jpg')",
        'bgp':"url('/src/images/bg11.jpg')",
        'bg1':"url('/src/images/bg5.jpg')",
        'bgp1':"url('/src/images/bg13.jpg')"
        
        
        
      },
      animation: {
        typewriter: 'typewriter 2s steps(11) forwards',
      },
      keyframes: {
        typewriter: {
          to: { left: '100%' },
        },
      },
    },
  },
  plugins: [],
}

