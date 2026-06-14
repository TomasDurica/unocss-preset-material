import { type Rule } from '@unocss/core'

export interface ShapesOptions {
  includeDirectional?: boolean
  scale?: {
    xs?: string
    sm?: string
    md?: string
    lg?: string
    'lg-inc'?: string
    xl?: string
    'xl-inc'?: string
    xxl?: string
  }
}

const getStyle = (radius: string, direction: string, includeDirectional: boolean) => {
  if (!direction) {
    return { 'border-radius': radius }
  }

  if (!includeDirectional) {
    return {}
  }

  switch (direction) {
    case '-top':
      return { 'border-start-start-radius': radius, 'border-start-end-radius': radius }
    case '-bottom':
      return { 'border-end-start-radius': radius, 'border-end-end-radius': radius }
    case '-start':
      return { 'border-start-start-radius': radius, 'border-end-start-radius': radius }
    case '-end':
      return { 'border-start-end-radius': radius, 'border-end-end-radius': radius }
    case '-top-start':
      return { 'border-start-start-radius': radius }
    case '-top-end':
      return { 'border-start-end-radius': radius }
    case '-bottom-start':
      return { 'border-end-start-radius': radius }
    case '-bottom-end':
      return { 'border-end-end-radius': radius }
    default:
      return {}
  }
}

const getShapeStyleProvider = (
  includeDirectional: boolean,
  { xs, sm, md, lg, 'lg-inc': lgInc, xl, 'xl-inc': xlInc, xxl }: ShapesOptions['scale'] = {},
) => {
  return (size: string, direction: string) => {
    switch (size) {
      case 'none':
        return getStyle('0px', direction, includeDirectional)
      case 'xs':
        return getStyle(xs ?? '4px', direction, includeDirectional)
      case 'sm':
        return getStyle(sm ?? '8px', direction, includeDirectional)
      case 'md':
        return getStyle(md ?? '12px', direction, includeDirectional)
      case 'lg':
        return getStyle(lg ?? '16px', direction, includeDirectional)
      case 'lg-inc':
        return getStyle(lgInc ?? '20px', direction, includeDirectional)
      case 'xl':
        return getStyle(xl ?? '28px', direction, includeDirectional)
      case 'xl-inc':
        return getStyle(xlInc ?? '32px', direction, includeDirectional)
      case 'xxl':
        return getStyle(xxl ?? '48px', direction, includeDirectional)
      case 'full':
        return getStyle('9999px', direction, includeDirectional)
      default:
        return {}
    }
  }
}

export const createShapeRule = ({ includeDirectional = true, scale = {} }: ShapesOptions = {}): Rule => {
  const styleProvider = getShapeStyleProvider(includeDirectional, scale)

  const regexp = includeDirectional
    ? new RegExp(
        `^shape-(none|xs|sm|md|lg|lg-inc|xl|xl-inc|xxl|full)(-(?:top|bottom|start|end|top-start|top-end|bottom-start|bottom-end))?$`,
      )
    : new RegExp('^shape-(none|xs|sm|md|lg|lg-inc|xl|xl-inc|xxl|full)$')

  const autocomplete = includeDirectional
    ? 'shape-(none|xs|sm|md|lg|lg-inc|xl|xl-inc|xxl|full)-(top|bottom|start|end)'
    : 'shape-(none|xs|sm|md|lg|lg-inc|xl|xl-inc|xxl|full)'

  return [
    regexp,
    ([, size, dir]) => {
      return styleProvider(size, dir)
    },
    { autocomplete },
  ]
}
