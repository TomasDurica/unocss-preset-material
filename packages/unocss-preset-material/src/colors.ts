import {
  argbFromHex,
  argbFromLab,
  argbFromRgb,
  Blend,
  blueFromArgb,
  DynamicScheme,
  greenFromArgb,
  Hct,
  redFromArgb,
  Variant as VariantEnum,
} from '@material/material-color-utilities'

export type SystemPalette = 'primary' | 'secondary' | 'tertiary' | 'neutral' | 'neutral-variant' | 'error'

export const defaultPaletteTones = [0, 5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100] as const

export interface RGBColor {
  r: number
  g: number
  b: number
}

export type Color = string | { hex: string } | RGBColor | { l: number; a: number; b: number }

export type Variant =
  | 'monochrome'
  | 'neutral'
  | 'tonal-spot'
  | 'vibrant'
  | 'expressive'
  | 'fidelity'
  | 'content'
  | 'rainbow'
  | 'fruit-salad'

export interface SystemColorsOptions {
  primary?: Color
  secondary?: Color
  tertiary?: Color
  neutral?: Color
  neutralVariant?: Color
  error?: Color
  isDark?: boolean
  contrastLevel?: number
  variant?: Variant
  specVersion?: '2021' | '2025'
  platform?: 'phone' | 'watch'
}

export const createSystemColors = (systemColorsOptions: SystemColorsOptions = {}): Record<string, RGBColor> => {
  const scheme = createDynamicScheme(systemColorsOptions)

  return {
    primary: argbToColor(scheme.primary),
    'surface-tint': argbToColor(scheme.surfaceTint),
    'on-primary': argbToColor(scheme.onPrimary),
    'primary-container': argbToColor(scheme.primaryContainer),
    'on-primary-container': argbToColor(scheme.onPrimaryContainer),
    secondary: argbToColor(scheme.secondary),
    'on-secondary': argbToColor(scheme.onSecondary),
    'secondary-container': argbToColor(scheme.secondaryContainer),
    'on-secondary-container': argbToColor(scheme.onSecondaryContainer),
    tertiary: argbToColor(scheme.tertiary),
    'on-tertiary': argbToColor(scheme.onTertiary),
    'tertiary-container': argbToColor(scheme.tertiaryContainer),
    'on-tertiary-container': argbToColor(scheme.onTertiaryContainer),
    error: argbToColor(scheme.error),
    'on-error': argbToColor(scheme.onError),
    'error-container': argbToColor(scheme.errorContainer),
    'on-error-container': argbToColor(scheme.onErrorContainer),
    background: argbToColor(scheme.surface), // Fix for the deprecated background color
    'on-background': argbToColor(scheme.onSurface), // Fix for the deprecated on-background color
    surface: argbToColor(scheme.surface),
    'on-surface': argbToColor(scheme.onSurface),
    'surface-variant': argbToColor(scheme.surfaceVariant),
    'on-surface-variant': argbToColor(scheme.onSurfaceVariant),
    outline: argbToColor(scheme.outline),
    'outline-variant': argbToColor(scheme.outlineVariant),
    shadow: argbToColor(scheme.shadow),
    scrim: argbToColor(scheme.scrim),
    'inverse-surface': argbToColor(scheme.inverseSurface),
    'inverse-on-surface': argbToColor(scheme.inverseOnSurface),
    'inverse-primary': argbToColor(scheme.inversePrimary),
    'primary-fixed': argbToColor(scheme.primaryFixed),
    'on-primary-fixed': argbToColor(scheme.onPrimaryFixed),
    'primary-fixed-dim': argbToColor(scheme.primaryFixedDim),
    'on-primary-fixed-variant': argbToColor(scheme.onPrimaryFixedVariant),
    'secondary-fixed': argbToColor(scheme.secondaryFixed),
    'on-secondary-fixed': argbToColor(scheme.onSecondaryFixed),
    'secondary-fixed-dim': argbToColor(scheme.secondaryFixedDim),
    'on-secondary-fixed-variant': argbToColor(scheme.onSecondaryFixedVariant),
    'tertiary-fixed': argbToColor(scheme.tertiaryFixed),
    'on-tertiary-fixed': argbToColor(scheme.onTertiaryFixed),
    'tertiary-fixed-dim': argbToColor(scheme.tertiaryFixedDim),
    'on-tertiary-fixed-variant': argbToColor(scheme.onTertiaryFixedVariant),
    'surface-dim': argbToColor(scheme.surfaceDim),
    'surface-bright': argbToColor(scheme.surfaceBright),
    'surface-container-lowest': argbToColor(scheme.surfaceContainerLowest),
    'surface-container-low': argbToColor(scheme.surfaceContainerLow),
    'surface-container': argbToColor(scheme.surfaceContainer),
    'surface-container-high': argbToColor(scheme.surfaceContainerHigh),
    'surface-container-highest': argbToColor(scheme.surfaceContainerHighest),
  }
}

export interface ExtendedColor {
  color: Color
  harmonize?: boolean
  variant?: Variant
}

export type ExtendedColorsOptions<TExtendedColors extends string = string> = Record<TExtendedColors, ExtendedColor>

export const createExtendedColors = <TExtendedColors extends string>(
  extendedColors: ExtendedColorsOptions<TExtendedColors>,
  systemColorsOptions: SystemColorsOptions = {},
): Record<string, RGBColor> => {
  const result = {} as Record<string, RGBColor>

  for (const name in extendedColors) {
    const scheme = createHarmonizedScheme(extendedColors[name], systemColorsOptions)

    result[name] = argbToColor(scheme.primary)
    result[`on-${name}`] = argbToColor(scheme.onPrimary)
    result[`${name}-container`] = argbToColor(scheme.primaryContainer)
    result[`on-${name}-container`] = argbToColor(scheme.onPrimaryContainer)
  }

  return result
}

export type Palette<TExtendedColors extends string = string> = Record<
  SystemPalette | TExtendedColors,
  readonly number[]
>

export type PaletteOptions<TExtendedColors extends string = string> =
  | undefined
  | boolean
  | Partial<Palette<TExtendedColors>>
  | ((palettes: Palette<TExtendedColors>) => Partial<Palette<TExtendedColors>>)

export const createPaletteTones = <TExtendedColors extends string>(
  extendedColors: ExtendedColorsOptions<TExtendedColors> | undefined,
  paletteOptions?: PaletteOptions<TExtendedColors>,
): Partial<Palette<TExtendedColors>> | undefined => {
  if (!paletteOptions) {
    return undefined
  }

  if (typeof paletteOptions === 'object') {
    return paletteOptions
  }

  let palette = {
    primary: defaultPaletteTones,
    secondary: defaultPaletteTones,
    tertiary: defaultPaletteTones,
    neutral: defaultPaletteTones,
    'neutral-variant': defaultPaletteTones,
    error: defaultPaletteTones,
  } as Palette<TExtendedColors>

  if (extendedColors) {
    for (const name in extendedColors) {
      palette[name] = defaultPaletteTones
    }
  }

  if (typeof paletteOptions === 'function') {
    return paletteOptions(palette)
  }

  return palette
}

export const createReferencePaletteColors = <TExtendedColors extends string>(
  systemColorsOptions: SystemColorsOptions = {},
  extendedColors?: ExtendedColorsOptions<TExtendedColors>,
  paletteOptions?: PaletteOptions<TExtendedColors>,
): Record<string, RGBColor> => {
  const tones = createPaletteTones(extendedColors, paletteOptions)

  const result = {} as Record<string, RGBColor>

  const scheme = createDynamicScheme(systemColorsOptions)

  if (tones?.primary) {
    for (const tone of tones.primary) {
      result[`primary-${tone}`] = argbToColor(scheme.primaryPalette.tone(tone))
    }
  }

  if (tones?.secondary) {
    for (const tone of tones.secondary) {
      result[`secondary-${tone}`] = argbToColor(scheme.secondaryPalette.tone(tone))
    }
  }

  if (tones?.tertiary) {
    for (const tone of tones.tertiary) {
      result[`tertiary-${tone}`] = argbToColor(scheme.tertiaryPalette.tone(tone))
    }
  }

  if (tones?.neutral) {
    for (const tone of tones.neutral) {
      result[`neutral-${tone}`] = argbToColor(scheme.neutralPalette.tone(tone))
    }
  }

  if (tones?.['neutral-variant']) {
    for (const tone of tones['neutral-variant']) {
      result[`neutral-variant-${tone}`] = argbToColor(scheme.neutralVariantPalette.tone(tone))
    }
  }

  if (tones?.error) {
    for (const tone of tones.error) {
      result[`error-${tone}`] = argbToColor(scheme.errorPalette.tone(tone))
    }
  }

  for (const name in extendedColors) {
    const extendedScheme = createHarmonizedScheme(extendedColors[name], systemColorsOptions)

    if (tones?.[name]) {
      for (const tone of tones[name]) {
        result[`${name}-${tone}`] = argbToColor(extendedScheme.primaryPalette.tone(tone))
      }
    }
  }

  return result
}

const createDynamicScheme = ({
  primary = '#6750A4',
  secondary,
  tertiary,
  neutral,
  neutralVariant,
  error,
  isDark = false,
  contrastLevel = 0,
  variant = 'tonal-spot',
  specVersion = '2025',
  platform = 'phone',
}: SystemColorsOptions = {}) => {
  const variantEnum = variantToVariantEnum(variant)

  return new DynamicScheme({
    sourceColorHct: colorToHct(primary),
    contrastLevel,
    isDark,
    secondaryPalette: secondary
      ? new DynamicScheme({
          sourceColorHct: colorToHct(secondary),
          contrastLevel,
          isDark,
          variant: variantEnum,
          specVersion,
          platform,
        }).primaryPalette
      : undefined,
    tertiaryPalette: tertiary
      ? new DynamicScheme({
          sourceColorHct: colorToHct(tertiary),
          contrastLevel,
          isDark,
          variant: variantEnum,
          specVersion,
          platform,
        }).primaryPalette
      : undefined,
    neutralPalette: neutral
      ? new DynamicScheme({
          sourceColorHct: colorToHct(neutral),
          contrastLevel,
          isDark,
          variant: variantEnum,
          specVersion,
          platform,
        }).neutralPalette
      : undefined,
    neutralVariantPalette: neutralVariant
      ? new DynamicScheme({
          sourceColorHct: colorToHct(neutralVariant),
          contrastLevel,
          isDark,
          variant: variantEnum,
          specVersion,
          platform,
        }).neutralVariantPalette
      : undefined,
    errorPalette: error
      ? new DynamicScheme({
          sourceColorHct: colorToHct(error),
          contrastLevel,
          isDark,
          variant: variantEnum,
          specVersion,
          platform,
        }).primaryPalette
      : undefined,
    variant: variantEnum,
    specVersion,
    platform,
  })
}

const createHarmonizedScheme = (
  { color, harmonize = false, variant }: ExtendedColor,
  {
    primary = '#6750A4',
    isDark = false,
    contrastLevel = 0,
    variant: themeVariant = 'tonal-spot',
    specVersion = '2025',
    platform = 'phone',
  }: SystemColorsOptions = {},
) => {
  const sourceColorHct = harmonize
    ? Hct.fromInt(Blend.harmonize(colorToArgb(color), colorToArgb(primary)))
    : colorToHct(color)

  return new DynamicScheme({
    sourceColorHct,
    contrastLevel,
    isDark,
    variant: variantToVariantEnum(variant ?? themeVariant),
    specVersion,
    platform,
  })
}

const colorToArgb = (color: Color) => {
  if (typeof color === 'string') {
    return argbFromHex(color)
  } else if ('hex' in color) {
    return argbFromHex(color.hex)
  } else if ('r' in color) {
    return argbFromRgb(color.r, color.g, color.b)
  } else {
    return argbFromLab(color.l, color.a, color.b)
  }
}

const colorToHct = (color: Color) => {
  return Hct.fromInt(colorToArgb(color))
}

const argbToColor = (argb: number): RGBColor => {
  return { r: redFromArgb(argb), g: greenFromArgb(argb), b: blueFromArgb(argb) }
}

const variantToVariantEnum = (value: Variant): VariantEnum => {
  switch (value) {
    case 'monochrome':
      return VariantEnum.MONOCHROME
    case 'neutral':
      return VariantEnum.NEUTRAL
    case 'tonal-spot':
      return VariantEnum.TONAL_SPOT
    case 'vibrant':
      return VariantEnum.VIBRANT
    case 'expressive':
      return VariantEnum.EXPRESSIVE
    case 'fidelity':
      return VariantEnum.FIDELITY
    case 'content':
      return VariantEnum.CONTENT
    case 'rainbow':
      return VariantEnum.RAINBOW
    case 'fruit-salad':
      return VariantEnum.FRUIT_SALAD
  }
}
