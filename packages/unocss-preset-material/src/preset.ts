import { type Preset } from '@unocss/core'
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
import { createTypographyShortcuts, generateTypographyFontFamilies, type TypographyOptions } from './typography'
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

  return {
    name: 'unocss-preset-material',

    rules: [
      ...(shapes ? [createShapeRule(typeof shapes === 'boolean' ? undefined : shapes)] : []),
      ...(elevation ? createElevationRules(systemColorCssVariablePrefix) : []),
    ],

    shortcuts: [
      ...(typography ? [createTypographyShortcuts(typeof typography === 'boolean' ? undefined : typography)] : []),
    ],

    theme: {
      colors: generateThemeColors(
        colorPrefix,
        extendedColors,
        systemColorCssVariablePrefix,
        extendedColorCssVariablePrefix,
        paletteColorCssVariablePrefix,
        paletteTones,
      ),
      fontFamily: typography ? generateTypographyFontFamilies() : {},
    },

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
