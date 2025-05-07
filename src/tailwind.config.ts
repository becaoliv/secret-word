export default {
    content: [
      "./index.html",
      "./src/**/*.{ts,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          'flash-neon': 'flashNeon 2s infinite alternate',
        },
        keyframes: {
          flashNeon: {
            '0%': { 
              opacity: '1', 
              transform: 'scale(1)',
              filter: 'drop-shadow(0 0 10px #7dd3fc) drop-shadow(0 0 20px #7dd3fc)',
            },
            '50%': { 
              opacity: '0.6', 
              transform: 'scale(1.03)',
              filter: 'drop-shadow(0 0 5px #7dd3fc)',
            },
            '100%': { 
              opacity: '1', 
              transform: 'scale(1)',
              filter: 'drop-shadow(0 0 10px #7dd3fc) drop-shadow(0 0 20px #7dd3fc)',
            },
          },
        },
      },
    },
    plugins: [],
  }