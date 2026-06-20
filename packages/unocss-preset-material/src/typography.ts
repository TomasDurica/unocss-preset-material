import { StaticShortcutMap } from '@unocss/core'

export interface TypographyOptions {
  prefix?: string
  brand?: string
  plain?: string
}

export const generateTypographyFontFamilies = ({
  brand = '"Roboto", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  plain = '"Roboto", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
}: TypographyOptions = {}): Record<string, string> => {
  return {
    brand,
    plain,
  }
}

export const createTypographyShortcuts = ({ prefix = `type-` }: TypographyOptions = {}): StaticShortcutMap => {
  return {
    [`${prefix}display-large`]: 'text-57px leading-16 tracking--0.25px font-400 font-brand',
    [`${prefix}display-medium`]: 'text-45px leading-13 tracking-0 font-400 font-brand',
    [`${prefix}display-small`]: 'text-9 leading-11 tracking-0 font-400 font-brand',
    [`${prefix}headline-large`]: 'text-8 leading-10 tracking-0 font-400 font-brand',
    [`${prefix}headline-medium`]: 'text-7 leading-9 tracking-0 font-400 font-brand',
    [`${prefix}headline-small`]: 'text-6 leading-8 tracking-0 font-400 font-brand',
    [`${prefix}title-large`]: 'text-5.5 leading-7 tracking-0 font-400 font-brand',
    [`${prefix}title-medium`]: 'text-4 leading-6 tracking-0.15px font-500 font-plain',
    [`${prefix}title-small`]: 'text-3.5 leading-5 tracking-0.1px font-500 font-plain',
    [`${prefix}body-large`]: 'text-4 leading-6 tracking-0.5px font-400 font-plain',
    [`${prefix}body-medium`]: 'text-3.5 leading-5 tracking-0.25px font-400 font-plain',
    [`${prefix}body-small`]: 'text-3 leading-4 tracking-0.4px font-400 font-plain',
    [`${prefix}label-large`]: 'text-3.5 leading-5 tracking-0.1px font-500 font-plain',
    [`${prefix}label-medium`]: 'text-3 leading-4 tracking-0.5px font-500 font-plain',
    [`${prefix}label-small`]: 'text-11px leading-4 tracking-0.5px font-500 font-plain',
  }
}
