import { argbFromHex, argbFromRgb } from '@material/material-color-utilities'

export const themeColorNames = [
  'primary',
  'on-primary',
  'primary-container',
  'on-primary-container',
  'secondary',
  'on-secondary',
  'secondary-container',
  'on-secondary-container',
  'tertiary',
  'on-tertiary',
  'tertiary-container',
  'on-tertiary-container',
  'error',
  'on-error',
  'error-container',
  'on-error-container',
  'surface-dim',
  'surface',
  'surface-bright',
  'surface-container-lowest',
  'surface-container-low',
  'surface-container',
  'surface-container-high',
  'surface-container-highest',
  'on-surface',
  'on-surface-variant',
  'outline',
  'outline-variant',
  'inverse-surface',
  'inverse-on-surface',
  'inverse-primary',
  'scrim',
  'shadow'
] as const

export type ThemeColorName = (typeof themeColorNames)[number]

export const getCssVariable = (colorName: ThemeColorName, prefix: string = '') => {
  return `--${prefix}${colorName}`
}

export type Color = number & { ['argb']: void }

export const fromHex = (hex: string): Color => {
  return argbFromHex(hex) as Color
}

export const fromRgb = (red: number, green: number, blue: number): Color => {
  return argbFromRgb(red, green, blue) as Color
}
