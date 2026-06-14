import type { Preflight } from '@unocss/core'
import {
  createSystemColors,
  createExtendedColors,
  type SystemColorsOptions,
  type ExtendedColorsOptions,
  type PaletteOptions,
  createReferencePaletteColors,
  type Palette,
} from './colors'

export const defaultSystemColorCssVariablePrefix = 'md-sys-colors-'
export const defaultExtendedColorCssVariablePrefix = 'md-extended-colors-'
export const defaultPaletteColorCssVariablePrefix = 'md-ref-palette-'

export interface GenerateCssVariablesOptions<TExtendedColors extends string = never> {
  systemColorCssVariablePrefix?: string
  extendedColorCssVariablePrefix?: string
  paletteColorCssVariablePrefix?: string
  systemColorsOptions?: SystemColorsOptions
  extendedColors?: ExtendedColorsOptions<TExtendedColors>
  paletteOptions?: PaletteOptions<TExtendedColors>
}

export const generateCssVariables = <TExtendedColors extends string = never>({
  systemColorCssVariablePrefix = defaultSystemColorCssVariablePrefix,
  extendedColorCssVariablePrefix = defaultExtendedColorCssVariablePrefix,
  paletteColorCssVariablePrefix = defaultPaletteColorCssVariablePrefix,
  systemColorsOptions,
  extendedColors = {} as ExtendedColorsOptions<TExtendedColors>,
  paletteOptions,
}: GenerateCssVariablesOptions<TExtendedColors> = {}): Record<string, string> => {
  const result = {} as Record<string, string>

  const materialColors = createSystemColors(systemColorsOptions)

  for (const key in materialColors) {
    const { r, g, b } = materialColors[key]
    result[`--${systemColorCssVariablePrefix}${key}`] = `${r} ${g} ${b}`
  }

  const resolvedExtendedColors = createExtendedColors(extendedColors, systemColorsOptions)

  for (const key in resolvedExtendedColors) {
    const { r, g, b } = resolvedExtendedColors[key]
    result[`--${extendedColorCssVariablePrefix}${key}`] = `${r} ${g} ${b}`
  }

  const referencePaletteColors = createReferencePaletteColors(systemColorsOptions, extendedColors, paletteOptions)

  for (const key in referencePaletteColors) {
    const { r, g, b } = referencePaletteColors[key]
    result[`--${paletteColorCssVariablePrefix}${key}`] = `${r} ${g} ${b}`
  }

  return result
}

export const generateThemeColors = <TExtendedColors extends string>(
  colorPrefix: string,
  extendedColors: ExtendedColorsOptions<TExtendedColors> | undefined,
  systemColorCssVariablePrefix: string,
  extendedColorCssVariablePrefix: string,
  paletteColorCssVariablePrefix: string,
  palettes: Partial<Palette<TExtendedColors>> | undefined,
): Record<string, string> => {
  const result = {
    [`${colorPrefix}primary`]: `rgb(var(--${systemColorCssVariablePrefix}primary))`,
    [`${colorPrefix}surface-tint`]: `rgb(var(--${systemColorCssVariablePrefix}surface-tint))`,
    [`${colorPrefix}on-primary`]: `rgb(var(--${systemColorCssVariablePrefix}on-primary))`,
    [`${colorPrefix}primary-container`]: `rgb(var(--${systemColorCssVariablePrefix}primary-container))`,
    [`${colorPrefix}on-primary-container`]: `rgb(var(--${systemColorCssVariablePrefix}on-primary-container))`,
    [`${colorPrefix}secondary`]: `rgb(var(--${systemColorCssVariablePrefix}secondary))`,
    [`${colorPrefix}on-secondary`]: `rgb(var(--${systemColorCssVariablePrefix}on-secondary))`,
    [`${colorPrefix}secondary-container`]: `rgb(var(--${systemColorCssVariablePrefix}secondary-container))`,
    [`${colorPrefix}on-secondary-container`]: `rgb(var(--${systemColorCssVariablePrefix}on-secondary-container))`,
    [`${colorPrefix}tertiary`]: `rgb(var(--${systemColorCssVariablePrefix}tertiary))`,
    [`${colorPrefix}on-tertiary`]: `rgb(var(--${systemColorCssVariablePrefix}on-tertiary))`,
    [`${colorPrefix}tertiary-container`]: `rgb(var(--${systemColorCssVariablePrefix}tertiary-container))`,
    [`${colorPrefix}on-tertiary-container`]: `rgb(var(--${systemColorCssVariablePrefix}on-tertiary-container))`,
    [`${colorPrefix}error`]: `rgb(var(--${systemColorCssVariablePrefix}error))`,
    [`${colorPrefix}on-error`]: `rgb(var(--${systemColorCssVariablePrefix}on-error))`,
    [`${colorPrefix}error-container`]: `rgb(var(--${systemColorCssVariablePrefix}error-container))`,
    [`${colorPrefix}on-error-container`]: `rgb(var(--${systemColorCssVariablePrefix}on-error-container))`,
    [`${colorPrefix}background`]: `rgb(var(--${systemColorCssVariablePrefix}background))`,
    [`${colorPrefix}on-background`]: `rgb(var(--${systemColorCssVariablePrefix}on-background))`,
    [`${colorPrefix}surface`]: `rgb(var(--${systemColorCssVariablePrefix}surface))`,
    [`${colorPrefix}on-surface`]: `rgb(var(--${systemColorCssVariablePrefix}on-surface))`,
    [`${colorPrefix}surface-variant`]: `rgb(var(--${systemColorCssVariablePrefix}surface-variant))`,
    [`${colorPrefix}on-surface-variant`]: `rgb(var(--${systemColorCssVariablePrefix}on-surface-variant))`,
    [`${colorPrefix}outline`]: `rgb(var(--${systemColorCssVariablePrefix}outline))`,
    [`${colorPrefix}outline-variant`]: `rgb(var(--${systemColorCssVariablePrefix}outline-variant))`,
    [`${colorPrefix}shadow`]: `rgb(var(--${systemColorCssVariablePrefix}shadow))`,
    [`${colorPrefix}scrim`]: `rgb(var(--${systemColorCssVariablePrefix}scrim))`,
    [`${colorPrefix}inverse-surface`]: `rgb(var(--${systemColorCssVariablePrefix}inverse-surface))`,
    [`${colorPrefix}inverse-on-surface`]: `rgb(var(--${systemColorCssVariablePrefix}inverse-on-surface))`,
    [`${colorPrefix}inverse-primary`]: `rgb(var(--${systemColorCssVariablePrefix}inverse-primary))`,
    [`${colorPrefix}primary-fixed`]: `rgb(var(--${systemColorCssVariablePrefix}primary-fixed))`,
    [`${colorPrefix}on-primary-fixed`]: `rgb(var(--${systemColorCssVariablePrefix}on-primary-fixed))`,
    [`${colorPrefix}primary-fixed-dim`]: `rgb(var(--${systemColorCssVariablePrefix}primary-fixed-dim))`,
    [`${colorPrefix}on-primary-fixed-variant`]: `rgb(var(--${systemColorCssVariablePrefix}on-primary-fixed-variant))`,
    [`${colorPrefix}secondary-fixed`]: `rgb(var(--${systemColorCssVariablePrefix}secondary-fixed))`,
    [`${colorPrefix}on-secondary-fixed`]: `rgb(var(--${systemColorCssVariablePrefix}on-secondary-fixed))`,
    [`${colorPrefix}secondary-fixed-dim`]: `rgb(var(--${systemColorCssVariablePrefix}secondary-fixed-dim))`,
    [`${colorPrefix}on-secondary-fixed-variant`]: `rgb(var(--${systemColorCssVariablePrefix}on-secondary-fixed-variant))`,
    [`${colorPrefix}tertiary-fixed`]: `rgb(var(--${systemColorCssVariablePrefix}tertiary-fixed))`,
    [`${colorPrefix}on-tertiary-fixed`]: `rgb(var(--${systemColorCssVariablePrefix}on-tertiary-fixed))`,
    [`${colorPrefix}tertiary-fixed-dim`]: `rgb(var(--${systemColorCssVariablePrefix}tertiary-fixed-dim))`,
    [`${colorPrefix}on-tertiary-fixed-variant`]: `rgb(var(--${systemColorCssVariablePrefix}on-tertiary-fixed-variant))`,
    [`${colorPrefix}surface-dim`]: `rgb(var(--${systemColorCssVariablePrefix}surface-dim))`,
    [`${colorPrefix}surface-bright`]: `rgb(var(--${systemColorCssVariablePrefix}surface-bright))`,
    [`${colorPrefix}surface-container-lowest`]: `rgb(var(--${systemColorCssVariablePrefix}surface-container-lowest))`,
    [`${colorPrefix}surface-container-low`]: `rgb(var(--${systemColorCssVariablePrefix}surface-container-low))`,
    [`${colorPrefix}surface-container`]: `rgb(var(--${systemColorCssVariablePrefix}surface-container))`,
    [`${colorPrefix}surface-container-high`]: `rgb(var(--${systemColorCssVariablePrefix}surface-container-high))`,
    [`${colorPrefix}surface-container-highest`]: `rgb(var(--${systemColorCssVariablePrefix}surface-container-highest))`,
  }

  for (const color in extendedColors) {
    result[`${colorPrefix}${color}`] = `rgb(var(--${extendedColorCssVariablePrefix}${color}))`
    result[`${colorPrefix}on-${color}`] = `rgb(var(--${extendedColorCssVariablePrefix}on-${color}))`
    result[`${colorPrefix}${color}-container`] = `rgb(var(--${extendedColorCssVariablePrefix}${color}-container))`
    result[`${colorPrefix}on-${color}-container`] = `rgb(var(--${extendedColorCssVariablePrefix}on-${color}-container))`
  }

  if (palettes?.primary) {
    for (const tone of palettes.primary) {
      result[`${colorPrefix}primary-${tone}`] = `rgb(var(--${paletteColorCssVariablePrefix}primary-${tone}))`
    }
  }

  if (palettes?.secondary) {
    for (const tone of palettes.secondary) {
      result[`${colorPrefix}secondary-${tone}`] = `rgb(var(--${paletteColorCssVariablePrefix}secondary-${tone}))`
    }
  }

  if (palettes?.tertiary) {
    for (const tone of palettes.tertiary) {
      result[`${colorPrefix}tertiary-${tone}`] = `rgb(var(--${paletteColorCssVariablePrefix}tertiary-${tone}))`
    }
  }

  if (palettes?.neutral) {
    for (const tone of palettes.neutral) {
      result[`${colorPrefix}neutral-${tone}`] = `rgb(var(--${paletteColorCssVariablePrefix}neutral-${tone}))`
    }
  }

  if (palettes?.['neutral-variant']) {
    for (const tone of palettes['neutral-variant']) {
      result[`${colorPrefix}neutral-variant-${tone}`] =
        `rgb(var(--${paletteColorCssVariablePrefix}neutral-variant-${tone}))`
    }
  }

  if (palettes?.error) {
    for (const tone of palettes.error) {
      result[`${colorPrefix}error-${tone}`] = `rgb(var(--${paletteColorCssVariablePrefix}error-${tone}))`
    }
  }

  for (const name in extendedColors) {
    if (palettes?.[name]) {
      for (const tone of palettes[name]) {
        result[`${colorPrefix}${name}-${tone}`] = `rgb(var(--${paletteColorCssVariablePrefix}${name}-${tone}))`
      }
    }
  }

  return result
}

export interface ThemeOptions extends SystemColorsOptions {
  selector?: string
}

export const generatePreflights = <TExtendedColors extends string>(
  { selector = ':root', ...systemColorsOptions }: ThemeOptions,
  extendedColors: ExtendedColorsOptions<TExtendedColors> | undefined,
  systemColorCssVariablePrefix: string,
  extendedColorCssVariablePrefix: string,
  paletteColorCssVariablePrefix: string,
  paletteTones: Partial<Palette<TExtendedColors>> | undefined,
): Preflight => {
  const variables = generateCssVariables({
    systemColorCssVariablePrefix,
    extendedColorCssVariablePrefix,
    paletteColorCssVariablePrefix,
    systemColorsOptions,
    extendedColors,
    paletteOptions: paletteTones,
  })

  return {
    getCSS: () =>
      `${selector} { ${Object.entries(variables)
        .map(([color, value]) => `${color}: ${value};`)
        .join('')} }`,
  }
}
