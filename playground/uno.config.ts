import { defineConfig, presetUno, transformerVariantGroup } from 'unocss'
import { presetMaterial } from '../packages/unocss-preset-material/src'
import { fromHex } from '../packages/unocss-preset-material/src/utils'

export default defineConfig({
  presets: [
    presetUno(),
    presetMaterial({
      colors: {
        themes: [
          {
            isDark: true
          }
        ]
      }
    })
  ],
  transformers: [transformerVariantGroup()]
})
