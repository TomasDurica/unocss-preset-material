import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from '@unocss/vite'

const resolvePackage = (name: string) => {
  return resolve(__dirname, `../packages/${name}/src/index.ts`)
}

export default defineConfig({
  optimizeDeps: {
    entries: [],
  },
  plugins: [
    vue(),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'unocss-preset-material': resolvePackage('unocss-preset-material')
    }
  }
})
