import type { Preset } from '@unocss/core'
import type { Color, ThemeColorName } from './utils'
import { definePreset, mergeDeep } from '@unocss/core'
import { themeColorNames, getCssVariable, fromHex } from './utils'
import { DynamicScheme, Hct, TonalPalette, redFromArgb, greenFromArgb, blueFromArgb } from '@material/material-color-utilities'

type Theme = {
  cssSelector?: string
  isDark?: boolean
  // includePallettes?: boolean TODO: v1
  colors?: {
    primary: Color
    secondary?: Color
    tertiary?: Color
    // error?: Color TODO: v0.2
    neutral?: Color
    neutralVariant?: Color
    // custom?: Record<string, Color> TODO: v1
  }
}

const defaultTheme: Required<Theme> = {
  cssSelector: ':root',
  isDark: false,
  colors: {
    primary: fromHex('#6750A4')
  }
}

export type PresetMaterialColorOptions = {
  colorPrefix?: string
  cssVariablePrefix?: string
  themes?: Theme[]
}

const defaultOptions: PresetMaterialColorOptions = {
  colorPrefix: '',
  cssVariablePrefix: 'md-sys-colors-'
}

export const presetMaterialColors = definePreset((options: PresetMaterialColorOptions = {}): Preset => {
  const mergedOptions = mergeDeep(defaultOptions, options)
  const themes = options.themes && options.themes.length ? options.themes : [defaultTheme]

  return {
    name: 'unocss-preset-material-colors',
    theme: {
      colors: Object.fromEntries(
        themeColorNames.map((name) => [`${mergedOptions.colorPrefix}${name}`, `rgb(var(${getCssVariable(name, mergedOptions.cssVariablePrefix)}))`])
      )
    },
    preflights: [
      {
        getCSS: () =>
          themes
            .map((theme) => {
              const colors = Object.entries(themeColors(theme))
                .map(([colorName, rgb]) => `${getCssVariable(colorName as ThemeColorName, mergedOptions.cssVariablePrefix)}:${rgb};`)
                .join('')

              return `${theme.cssSelector ?? defaultTheme.cssSelector} {${colors}}`
            })
            .join('\n')
      }
    ]
  }
})

const themeColors = (theme: Theme): Record<ThemeColorName, string> => {
  const sourceColor = theme.colors?.primary ?? defaultTheme.colors.primary
  const defaultHue = Hct.fromInt(sourceColor).hue

  const primaryPalette = theme.colors?.primary
    ? TonalPalette.fromHueAndChroma(Hct.fromInt(theme.colors.primary).hue, 36)
    : TonalPalette.fromHueAndChroma(defaultHue, 36)

  const secondaryPalette = theme.colors?.secondary
    ? TonalPalette.fromHueAndChroma(Hct.fromInt(theme.colors.secondary).hue, 36)
    : TonalPalette.fromHueAndChroma(defaultHue, 16)

  const tertiaryPalette = theme.colors?.tertiary
    ? TonalPalette.fromHueAndChroma(Hct.fromInt(theme.colors.tertiary).hue, 36)
    : TonalPalette.fromHueAndChroma((defaultHue + 60) % 360, 24)

  const neutralPalette = theme.colors?.primary
    ? TonalPalette.fromHueAndChroma(Hct.fromInt(theme.colors.primary).hue, 6)
    : TonalPalette.fromHueAndChroma(defaultHue, 6)

  const neutralVariantPalette = theme.colors?.primary
    ? TonalPalette.fromHueAndChroma(Hct.fromInt(theme.colors.primary).hue, 8)
    : TonalPalette.fromHueAndChroma(defaultHue, 8)

  const scheme = new DynamicScheme({
    sourceColorArgb: sourceColor,
    variant: 2,
    contrastLevel: 0,
    isDark: theme.isDark ?? defaultTheme.isDark,
    primaryPalette,
    secondaryPalette,
    tertiaryPalette,
    neutralPalette,
    neutralVariantPalette
  })

  return Object.fromEntries(
    themeColorNames.map((colorName) => {
      const propertyName = colorName.replaceAll(/-(.)/g, (_, letter) => letter.toUpperCase())
      const color = scheme[propertyName as 'primary'] ?? scheme.surface
      return [colorName, `${redFromArgb(color)} ${greenFromArgb(color)} ${blueFromArgb(color)}`]
    })
  ) as Record<ThemeColorName, string>
}
