import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        'nt-green': 'rgba(94, 133, 46,1)',
        'nt-beige': 'rgba(255, 246, 238, 1)',
        'nt-brown': 'rgba(45, 41, 35, 1)',
        'nt-yellow': 'rgba(252, 188, 0, 1)',
        'nt-green--alt': 'rgba(73, 105, 82, 1)',
        'nt-beige--alt': 'rgb(247, 246, 240)'
      },
      fontFamily: {
        sans: ['Nunito']
      },
      transitionTimingFunction: {
        swing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        rubber:
          'linear(0, 0.002, 0.01 0.9%, 0.038 1.8%, 0.156, 0.312 5.8%, 0.789 11.1%, 1.015 14.2%, 1.096, 1.157, 1.199, 1.224 20.3%, 1.231, 1.231, 1.226, 1.214 24.6%, 1.176 26.9%, 1.057 32.6%, 1.007 35.5%, 0.984, 0.968, 0.956, 0.949 42%, 0.946 44.1%, 0.95 46.5%, 0.998 57.2%, 1.007, 1.011 63.3%, 1.012 68.3%, 0.998 84%, 1)'
      }
    }
  },
  plugins: [
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey]
          const cssVariable =
            colorKey === 'DEFAULT'
              ? `--color${colorGroup}`
              : `--color${colorGroup}-${colorKey}`

          const newVars =
            typeof value === 'string'
              ? { [cssVariable]: value }
              : extractColorVars(value, `-${colorKey}`)

          return { ...vars, ...newVars }
        }, {})
      }

      addBase({
        ':root': extractColorVars(theme('colors'))
      })
    },
    function ({ addUtilities }) {
      addUtilities({
        '.backface-visible': {
          'backface-visibility': 'visible'
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden'
        }
      })
    }
  ]
}

export default config
