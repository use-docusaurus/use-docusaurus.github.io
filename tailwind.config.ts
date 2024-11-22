import {type Config} from 'tailwindcss';
import {
  scopedPreflightStyles,
  isolateInsideOfContainer,
} from 'tailwindcss-scoped-preflight';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.js', './src/**/*.tsx', './*.ts'],
  corePlugins: {container: false},
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer('.twp', {
        except: '.no-twp', // optional, to exclude some elements under .twp from being preflighted, like external markup
      }),
    }),
  ],
} satisfies Config;
