/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e6f7ff',
          100: '#bae7ff',
          200: '#91d5ff',
          300: '#69c0ff',
          400: '#40a9ff',
          500: '#1890ff',
          600: '#096dd9',
          700: '#0050b3',
          800: '#003a8c',
          900: '#002766',
        },
        secondary: {
          50: '#e6fcff',
          100: '#b3f5ff',
          200: '#80eeff',
          300: '#4de6ff',
          400: '#26dfff',
          500: '#00d8ff',
          600: '#00b8d9',
          700: '#0099b3',
          800: '#007a8c',
          900: '#005c66',
        },
        accent: {
          50: '#fff0e6',
          100: '#ffd9b3',
          200: '#ffc180',
          300: '#ffa94d',
          400: '#ff9026',
          500: '#ff7700',
          600: '#d96300',
          700: '#b35000',
          800: '#8c3d00',
          900: '#662d00',
        },
        success: {
          500: '#52c41a',
        },
        warning: {
          500: '#faad14',
        },
        error: {
          500: '#f5222d',
        },
        holographic: {
          base: 'rgba(16, 24, 39, 0.7)',
          light: 'rgba(59, 130, 246, 0.1)',
          border: 'rgba(59, 130, 246, 0.3)',
          glow: 'rgba(59, 130, 246, 0.5)',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)' },
        },
        scan: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
        'radial-gradient': 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(16, 24, 39, 0.95) 100%)',
        'holographic-gradient': 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(0, 216, 255, 0.2) 50%, rgba(59, 130, 246, 0.2) 100%)',
        'scan-line': 'linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.3), transparent)',
      },
      backgroundSize: {
        'grid-20': '20px 20px',
      },
    },
  },
  plugins: [],
};