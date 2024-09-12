import type { DeepPartial, Preset } from '@unocss/core'
import type { PresetMaterialColorOptions } from './colors'
import type { PresetMaterialShapesOptions } from './shapes'
import type { PresetMaterialTypographyOptions } from './typography'
import { definePreset, mergeDeep, mergeConfigs } from '@unocss/core'
import { presetMaterialColors } from './colors'
import { presetMaterialShapes } from './shapes'
import { presetMaterialTypography } from './typography'

type Enableable = {
  enabled: boolean
}

export type PresetMaterialOptions = {
  colors: Enableable & PresetMaterialColorOptions
  shapes: Enableable & PresetMaterialShapesOptions
  typography: Enableable & PresetMaterialTypographyOptions
}

const defaultOptions: PresetMaterialOptions = {
  colors: {
    enabled: true
  },
  shapes: {
    enabled: true
  },
  typography: {
    enabled: true
  }
}

export const presetMaterial = definePreset((options: DeepPartial<PresetMaterialOptions> = {}): Preset => {
  const mergedOptions = mergeDeep(defaultOptions, options)

  return {
    name: 'unocss-preset-material',
    ...mergeConfigs([
      mergedOptions.colors.enabled ? presetMaterialColors(mergedOptions.colors) : {},
      mergedOptions.shapes.enabled ? presetMaterialShapes(mergedOptions.shapes) : {},
      mergedOptions.typography.enabled ? presetMaterialTypography(mergedOptions.typography) : {}
    ])
  }
})

export { presetMaterialColors, presetMaterialShapes, presetMaterialTypography }
export type { PresetMaterialColorOptions }
