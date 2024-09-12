import type { Rule, Preset } from '@unocss/core'
import { mergeDeep } from '@unocss/core'
import { definePreset } from '@unocss/core'

type Size = string

export type PresetMaterialShapesOptions = {
  includeDirectional?: boolean
  scale?: {
    xl?: Size
    l?: Size
    m?: Size
    s?: Size
    xs?: Size
  }
}

const defaultOptions = {
  includeDirectional: true,
  scale: {
    xl: '1.75rem',
    l: '1rem',
    m: '.75rem',
    s: '.5rem',
    xs: '.25rem'
  }
}

export const presetMaterialShapes = definePreset((options: PresetMaterialShapesOptions = {}): Preset => {
  const mergedOptions = mergeDeep(defaultOptions, options)

  return {
    name: 'unocss-preset-material-shapes',
    rules: [
      ['shape-full', { 'border-radius': '100%' }],
      ['shape-none', { 'border-radius': '0' }],
      ...Object.entries(mergedOptions.scale).map(([scale, size]) => shapeFull(scale, size)),
      ...(mergedOptions.includeDirectional ? Object.entries(mergedOptions.scale).flatMap(([scale, size]) => shapeDirectional(scale, size)) : [])
    ]
  }
})

const shapeFull = (scale: string, size: Size): Rule<object> => {
  return [`shape-${scale}`, { 'border-radius': size }]
}

const shapeDirectional = (scale: string, size: Size): Rule<object>[] => {
  return [
    [`shape-${scale}-top`, { 'border-top-left-radius': size, 'border-top-right-radius': size }],
    [`shape-${scale}-bottom`, { 'border-bottom-left-radius': size, 'border-bottom-right-radius': size }],
    [`shape-${scale}-start`, { 'border-start-start-radius': size, 'border-end-start-radius': size }],
    [`shape-${scale}-end`, { 'border-start-end-radius': size, 'border-end-end-radius': size }]
  ]
}
