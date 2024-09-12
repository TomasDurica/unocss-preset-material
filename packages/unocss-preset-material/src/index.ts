import { definePreset, type Preset } from '@unocss/core'

export const presetMaterial = definePreset((): Preset => {
  return {
    name: 'unocss-preset-material',
    theme: {
      colors: {
        background: '#111318'
      }
    }
  }
})
