import {
  defineConfig,
  presetUno,
  transformerVariantGroup,
} from 'unocss'
import { presetMaterial } from '../packages/unocss-preset-material/src'

export default defineConfig({
  presets: [
    presetUno(),
    presetMaterial()
  ],
  transformers: [
    transformerVariantGroup()
  ]
})