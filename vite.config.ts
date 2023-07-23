import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import Components from 'vite-plugin-components'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import AutoImport from 'unplugin-auto-import/vite'
import Pages from 'vite-plugin-pages'
const path = require('path');
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: [
          '@import "src/styles/variables";',
        ].join('\n'),
      },
    },
  },
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    Pages({
      dirs: 'src/views',
    }),
    Components({
      dirs: ['src/components', 'src/layouts'],
      extensions: ['vue', 'ts', 'js'],
      globalComponentsDeclaration: true,
    }),
    vuetify({
      autoImport: true,
    }),
    AutoImport({
      imports: ['vue', '@vueuse/core', '@vueuse/math', 'pinia', VueRouterAutoImports],
      vueTemplate: true,
      dts: true,
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles/', import.meta.url)),
      '@core': fileURLToPath(new URL('./src/@core/', import.meta.url)),
      '@services': fileURLToPath(new URL('./src/services/', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components/', import.meta.url)),
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    }
  },
  build: {
    chunkSizeWarningLimit: 5000,
  },
  optimizeDeps: {
    include: ['maz-ui', '@ckeditor/ckeditor5-vue'],
    exclude: ['vuetify'],
    entries: [
      './src/views/**/*.vue',
    ],
  },
})
