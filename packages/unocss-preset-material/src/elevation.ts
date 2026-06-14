import { type Rule } from '@unocss/core'

export const createElevationRules = (cssVariablePrefix: string): Rule[] => {
  const keyColor = `color-mix(in srgb, rgb(var(--${cssVariablePrefix}shadow, #000000)) 30%, transparent)`
  const ambientColor = `color-mix(in srgb, rgb(var(--${cssVariablePrefix}shadow, #000000)) 15%, transparent)`

  return [
    ['elevation-0', { 'box-shadow': 'none' }],
    ['elevation-1', { 'box-shadow': `0px 1px 2px 0px ${keyColor}, 0px 1px 3px 1px ${ambientColor}` }],
    ['elevation-2', { 'box-shadow': `0px 1px 2px 0px ${keyColor}, 0px 2px 6px 2px ${ambientColor}` }],
    ['elevation-3', { 'box-shadow': `0px 1px 3px 0px ${keyColor}, 0px 4px 8px 3px ${ambientColor}` }],
    ['elevation-4', { 'box-shadow': `0px 2px 3px 0px ${keyColor}, 0px 6px 10px 4px ${ambientColor}` }],
    ['elevation-5', { 'box-shadow': `0px 4px 4px 0px ${keyColor}, 0px 8px 12px 6px ${ambientColor}` }],
  ]
}
