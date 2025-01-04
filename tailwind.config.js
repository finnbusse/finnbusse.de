// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#2196f3',
          600: '#1e88e5',
          700: '#1976d2',
          800: '#1565c0',
          900: '#0d47a1',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
  safelist: [
    'from-yellow-500',
    'to-pink-300',
    'from-blue-600',
    'to-blue-300',
    'from-red-500',
    'to-orange-300',
    'from-green-500',
    'to-teal-300',
    'from-purple-500',
    'to-indigo-300',
  ],
};
