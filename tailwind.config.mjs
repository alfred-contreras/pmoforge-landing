/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md}'],
  theme: {
    extend: {
      colors: {
        // Paleta industrial-forge: ink (graphite) + ember (forge orange)
        ink: {
          50:  '#F6F8FB',
          100: '#E8EDF3',
          200: '#CCD5E0',
          300: '#9BA9BC',
          500: '#56657A',
          700: '#243044',
          900: '#0B1525'
        },
        ember: {
          50:  '#FFF6E5',
          100: '#FFE6B8',
          200: '#FFC97A',
          400: '#FFA63D',
          500: '#FF7A1A',
          600: '#E55F0A',
          700: '#B84507'
        },
        // Atmósfera oscura heredada de la casa madre Forge Labs (ver src/styles/forge-fondo.css).
        // Superficies oscuras + texto claro/cream para contraste AA sobre el ink.
        forge: {
          ink:    '#0B1525', // fondo base
          ink2:   '#0E1A2E', // alternancia de secciones
          panel:  '#11203A', // tarjetas / paneles
          panel2: '#15274A'
        },
        cream: '#FFF6E5', // títulos / highlights cálidos sobre ink
        paper: '#F3EEE3', // texto principal claro sobre ink
        mute:  '#9AA6BA'  // texto secundario sobre ink
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
        serif: ['"Fraunces Variable"', 'Georgia', 'serif']
      }
    }
  },
  plugins: []
};
