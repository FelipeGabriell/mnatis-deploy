import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';
import autoprefixer from 'autoprefixer';
import plainSvg from './vite/plugin-plain-svg';
import manifest from './src/pwa/manifest.json';
export default defineConfig({
  clearScreen: !1,
  server: { port: 8080 },
  plugins: [
    createVuePlugin(),
    plainSvg({
      optimize: !0,
      svgoConfig: {
        plugins: [
          { removeTitle: !0 },
          { removeViewBox: !1 },
          { convertShapeToPath: !0 },
          { removeAttrs: { attrs: ['data-name'] } },
          { inlineStyles: { onlyMatchedOnce: !1 } },
        ],
      },
    }),
    VitePWA({ manifest }),
  ],
  root: 'src',
  publicDir: path.resolve(__dirname, 'public'),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    chunkSizeWarningLimit: 750,
    sourcemap: !0,
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src'), vue: 'vue/dist/vue.js' },
  },
  css: {
    preprocessorOptions: {
      stylus: {
        imports: [path.resolve(__dirname, 'src/styles/variables.styl')],
      },
    },
    postcss: { plugins: [autoprefixer] },
  },
});
