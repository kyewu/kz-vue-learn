import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import UnoCSS from 'unocss/vite'
import Layouts from 'vite-plugin-vue-layouts'
import Pages from 'vite-plugin-pages'
import VueRouter from 'unplugin-vue-router/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4210,
  },
  plugins: [
    VueRouter(), // VueRouter must be placed before Vue
    vue(),
    Pages({
      dirs: [
        { dir: 'src/pages', baseRoute: '' },
      ],
      exclude: ['**/*.js', '**/components/*.vue'],
    }),
    Layouts({
      layoutsDirs: 'src/layouts', // layout file存放目录
      pagesDirs: 'src/pages',
      defaultLayout: 'default', // 对应src/layouts/default.vue
    }),
    vueJsx(),
    VueDevTools(),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
