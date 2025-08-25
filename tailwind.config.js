/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 复古计算机主题色彩
        'terminal': {
          'bg': '#0a0a0a',
          'text': '#00ff00',
          'text-dim': '#00cc00',
          'accent': '#ffffff',
          'error': '#ff0000',
          'warning': '#ffff00',
          'success': '#00ff00',
        },
        'crt': {
          'scanline': 'rgba(0, 255, 0, 0.1)',
          'glow': 'rgba(0, 255, 0, 0.3)',
        }
      },
      fontFamily: {
        'mono': ['Courier New', 'Courier', 'monospace'],
        'terminal': ['Courier New', 'Courier', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s infinite',
        'scanline': 'scanline 0.1s linear infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        glow: {
          'from': { textShadow: '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00' },
          'to': { textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
