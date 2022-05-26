import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteFonts from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  ViteFonts({
    // Custom fonts.
    custom: {
      /**
       * Fonts families lists
       */
      families: [{
        /**
         * Name of the font family.
         */
        name: 'Ubuntu Condensed',
        /**
         * Local name of the font. Used to add `src: local()` to `@font-rule`.
         */
        local: 'UbuntuCondensed',
        /**
         * Regex(es) of font files to import. The names of the files will
         * predicate the `font-style` and `font-weight` values of the `@font-rule`'s.
         */
        src: './src/assets/fonts/*.ttf',
      }],

      /**
       * Defines the default `font-display` value used for the generated
       * `@font-rule` classes.
       */
      display: 'auto',

      /**
       * Using `<link rel="preload">` will trigger a request for the WebFont
       * early in the critical rendering path, without having to wait for the
       * CSSOM to be created.
       */
      preload: true,

      /**
       * Using `<link rel="prefetch">` is intended for prefetching resources
       * that will be used in the next navigation/page load
       * (e.g. when you go to the next page)
       *
       * Note: this can not be used with `preload`
       */
      prefetch: false,
    },
  }),],
  server: {
    https: true,
    watch: {
      usePolling: true
    }
  }
})
