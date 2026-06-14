import { type Preset, type Rule } from '@unocss/core'
import { createPaletteTones, type ExtendedColorsOptions, type PaletteOptions } from './colors'
import {
  defaultExtendedColorCssVariablePrefix,
  defaultPaletteColorCssVariablePrefix,
  defaultSystemColorCssVariablePrefix,
  generatePreflights,
  generateThemeColors,
  type ThemeOptions,
} from './themes'
import { createShapeRule, type ShapesOptions } from './shapes'
import { createTypographyRules, type TypographyOptions } from './typography'
import { createElevationRules } from './elevation'

export interface PresetMaterialOptions<TExtendedColors extends string = never> {
  systemColorCssVariablePrefix?: string
  extendedColorCssVariablePrefix?: string
  paletteColorCssVariablePrefix?: string
  colorPrefix?: string
  themes?: ThemeOptions[]
  extendedColors?: ExtendedColorsOptions<TExtendedColors>
  paletteOptions?: PaletteOptions<TExtendedColors>
  shapes?: ShapesOptions | boolean
  typography?: TypographyOptions | boolean
  elevation?: boolean
}

export const presetMaterial = <TExtendedColors extends string = never>({
  colorPrefix = '',
  systemColorCssVariablePrefix = defaultSystemColorCssVariablePrefix,
  extendedColorCssVariablePrefix = defaultExtendedColorCssVariablePrefix,
  paletteColorCssVariablePrefix = defaultPaletteColorCssVariablePrefix,
  themes = [{}],
  extendedColors,
  paletteOptions,
  shapes = true,
  typography = true,
  elevation = true,
}: PresetMaterialOptions<TExtendedColors> = {}): Preset => {
  if (!themes.length) {
    throw new Error('At least one theme is required')
  }

  const paletteTones = createPaletteTones(extendedColors, paletteOptions)

  const rules = [] as Rule[]

  if (shapes) {
    rules.push(createShapeRule(typeof shapes === 'boolean' ? undefined : shapes))
  }

  if (typography) {
    rules.push(...createTypographyRules(typeof typography === 'boolean' ? undefined : typography))
  }

  if (elevation) {
    rules.push(...createElevationRules(systemColorCssVariablePrefix))
  }

  return {
    name: 'unocss-preset-material',
    theme: {
      colors: generateThemeColors(
        colorPrefix,
        extendedColors,
        systemColorCssVariablePrefix,
        extendedColorCssVariablePrefix,
        paletteColorCssVariablePrefix,
        paletteTones,
      ),
    },
    rules,
    preflights: themes.map((theme) =>
      generatePreflights(
        theme,
        extendedColors,
        systemColorCssVariablePrefix,
        extendedColorCssVariablePrefix,
        paletteColorCssVariablePrefix,
        paletteTones,
      ),
    ),
  }
}
