import { defineConfig, presetIcons, presetMini, transformerVariantGroup } from 'unocss'
import { presetMaterial } from 'unocss-preset-material'

export default defineConfig({
  presets: [
    presetMini(),
    presetIcons({
      warn: true,
    }),
    presetMaterial(),
  ],
  transformers: [transformerVariantGroup()],
})
