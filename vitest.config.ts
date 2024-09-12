import { defineConfig } from 'vitest/config'
import { resolve } from 'node:path'

const resolvePackage = (name: string) => {
  return resolve(__dirname, `./packages/${name}/src/index.ts`)
}

export default defineConfig({
  optimizeDeps: {
    entries: [],
  },
  resolve: {
    alias: {
      'unocss-preset-material': resolvePackage('unocss-preset-material')
    }
  }
})