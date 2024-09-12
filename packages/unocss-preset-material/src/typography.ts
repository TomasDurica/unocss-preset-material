import type { Preset } from '@unocss/core'
import { mergeDeep } from '@unocss/core'
import { definePreset } from '@unocss/core'

type Weight = 400 | 500
type Size = number

export type PresetMaterialTypographyOptions = {
  fonts?: {
    brand?: string
    plain?: string
  }
}

const defaultOptions = {
  fonts: {
    brand: `"Roboto", sans-serif`,
    plain: `"Roboto", sans-serif`
  }
}

export const presetMaterialTypography = definePreset((options: PresetMaterialTypographyOptions = {}): Preset => {
  const mergedOptions = mergeDeep(defaultOptions, options)

  const brand = (weight: Weight, size: Size, height: Size, spacing: Size = 0) => {
    return {
      font: `${weight} ${size / 16}rem/${height / 16}rem ${mergedOptions.fonts.brand}`,
      'letter-spacing': `${spacing / 16}rem`
    }
  }

  const plain = (weight: Weight, size: Size, height: Size, spacing: Size = 0) => {
    return {
      font: `${weight} ${size / 16}rem/${height / 16}rem ${mergedOptions.fonts.plain}`,
      'letter-spacing': `${spacing / 16}rem`
    }
  }

  return {
    name: 'unocss-preset-material-typography',
    rules: [
      ['display-large', brand(400, 57, 64, -0.25)],
      ['display-medium', brand(400, 45, 52)],
      ['display-small', brand(400, 36, 44)],
      ['headline-large', brand(400, 32, 42)],
      ['headline-medium', brand(400, 32, 42)],
      ['headline-small', brand(400, 24, 32)],
      ['title-large', brand(400, 22, 28)],
      ['title-medium', plain(500, 16, 24, 0.15)],
      ['title-small', plain(500, 14, 20, 0.1)],
      ['body-large', plain(400, 16, 24, 0.5)],
      ['body-medium', plain(400, 14, 20, 0.25)],
      ['body-small', plain(400, 12, 16, 0.4)],
      ['label-large', plain(500, 14, 20, 0.1)],
      ['label-medium', plain(500, 12, 16, 0.5)],
      ['label-small', plain(500, 11, 16, 0.5)]
    ]
  }
})
