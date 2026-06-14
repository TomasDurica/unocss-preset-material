import { Rule } from '@unocss/core'

export interface TypographyOptions {
  prefix?: string
  brand?: string
  plain?: string
}

const getFontStyle = (font: string, weight: 400 | 500, size: number, height: number, spacing: number = 0) => {
  return {
    font: `${weight} ${size / 16}rem/${height / 16}rem ${font}`,
    'letter-spacing': `${spacing / 16}rem`,
  }
}

export const createTypographyRules = ({
  prefix = 'type-',
  brand = '"Roboto", sans-serif',
  plain = '"Roboto", sans-serif',
}: TypographyOptions = {}): Rule[] => {
  return [
    [`${prefix}display-large`, getFontStyle(brand, 400, 57, 64, -0.25)],
    [`${prefix}display-medium`, getFontStyle(brand, 400, 45, 52)],
    [`${prefix}display-small`, getFontStyle(brand, 400, 36, 44)],
    [`${prefix}headline-large`, getFontStyle(brand, 400, 32, 40)],
    [`${prefix}headline-medium`, getFontStyle(brand, 400, 28, 36)],
    [`${prefix}headline-small`, getFontStyle(brand, 400, 24, 32)],
    [`${prefix}title-large`, getFontStyle(brand, 400, 22, 28)],
    [`${prefix}title-medium`, getFontStyle(plain, 500, 16, 24, 0.15)],
    [`${prefix}title-small`, getFontStyle(plain, 500, 14, 20, 0.1)],
    [`${prefix}body-large`, getFontStyle(plain, 400, 16, 24, 0.5)],
    [`${prefix}body-medium`, getFontStyle(plain, 400, 14, 20, 0.25)],
    [`${prefix}body-small`, getFontStyle(plain, 400, 12, 16, 0.4)],
    [`${prefix}label-large`, getFontStyle(plain, 500, 14, 20, 0.1)],
    [`${prefix}label-medium`, getFontStyle(plain, 500, 12, 16, 0.5)],
    [`${prefix}label-small`, getFontStyle(plain, 500, 11, 16, 0.5)],
  ]
}
