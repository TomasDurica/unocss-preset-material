import { describe, expect, test } from 'vitest'
import { presetMaterial } from './preset'

describe('preset', () => {
  describe('presetMaterial', () => {
    test('should generate preset', () => {
      expect(presetMaterial()).toMatchInlineSnapshot(`
        {
          "name": "unocss-preset-material",
          "preflights": [
            {
              "getCSS": [Function],
            },
          ],
          "rules": [
            [
              /\\^shape-\\(none\\|xs\\|sm\\|md\\|lg\\|lg-inc\\|xl\\|xl-inc\\|xxl\\|full\\)\\(-\\(\\?:top\\|bottom\\|start\\|end\\|top-start\\|top-end\\|bottom-start\\|bottom-end\\)\\)\\?\\$/,
              [Function],
              {
                "autocomplete": "shape-(none|xs|sm|md|lg|lg-inc|xl|xl-inc|xxl|full)-(top|bottom|start|end)",
              },
            ],
            [
              "elevation-0",
              {
                "box-shadow": "none",
              },
            ],
            [
              "elevation-1",
              {
                "box-shadow": "0px 1px 2px 0px color-mix(in srgb, rgb(var(--md-sys-colors-shadow, #000000)) 30%, transparent), 0px 1px 3px 1px color-mix(in srgb, rgb(var(--md-sys-colors-shadow, #000000)) 15%, transparent)",
              },
            ],
            [
              "elevation-2",
              {
                "box-shadow": "0px 1px 2px 0px color-mix(in srgb, rgb(var(--md-sys-colors-shadow, #000000)) 30%, transparent), 0px 2px 6px 2px color-mix(in srgb, rgb(var(--md-sys-colors-shadow, #000000)) 15%, transparent)",
              },
            ],
            [
              "elevation-3",
              {
                "box-shadow": "0px 1px 3px 0px color-mix(in srgb, rgb(var(--md-sys-colors-shadow, #000000)) 30%, transparent), 0px 4px 8px 3px color-mix(in srgb, rgb(var(--md-sys-colors-shadow, #000000)) 15%, transparent)",
              },
            ],
            [
              "elevation-4",
              {
                "box-shadow": "0px 2px 3px 0px color-mix(in srgb, rgb(var(--md-sys-colors-shadow, #000000)) 30%, transparent), 0px 6px 10px 4px color-mix(in srgb, rgb(var(--md-sys-colors-shadow, #000000)) 15%, transparent)",
              },
            ],
            [
              "elevation-5",
              {
                "box-shadow": "0px 4px 4px 0px color-mix(in srgb, rgb(var(--md-sys-colors-shadow, #000000)) 30%, transparent), 0px 8px 12px 6px color-mix(in srgb, rgb(var(--md-sys-colors-shadow, #000000)) 15%, transparent)",
              },
            ],
          ],
          "shortcuts": [
            {
              "type-body-large": "text-4 leading-6 tracking-0.5px font-400 font-plain",
              "type-body-medium": "text-3.5 leading-5 tracking-0.25px font-400 font-plain",
              "type-body-small": "text-3 leading-4 tracking-0.4px font-400 font-plain",
              "type-display-large": "text-57px leading-16 tracking--0.25px font-400 font-brand",
              "type-display-medium": "text-45px leading-13 tracking-0 font-400 font-brand",
              "type-display-small": "text-9 leading-11 tracking-0 font-400 font-brand",
              "type-headline-large": "text-8 leading-10 tracking-0 font-400 font-brand",
              "type-headline-medium": "text-7 leading-9 tracking-0 font-400 font-brand",
              "type-headline-small": "text-6 leading-8 tracking-0 font-400 font-brand",
              "type-label-large": "text-3.5 leading-5 tracking-0.1px font-500 font-plain",
              "type-label-medium": "text-3 leading-4 tracking-0.5px font-500 font-plain",
              "type-label-small": "text-11px leading-4 tracking-0.5px font-500 font-plain",
              "type-title-large": "text-5.5 leading-7 tracking-0 font-400 font-brand",
              "type-title-medium": "text-4 leading-6 tracking-0.15px font-500 font-plain",
              "type-title-small": "text-3.5 leading-5 tracking-0.1px font-500 font-plain",
            },
          ],
          "theme": {
            "colors": {
              "background": "rgb(var(--md-sys-colors-background))",
              "error": "rgb(var(--md-sys-colors-error))",
              "error-container": "rgb(var(--md-sys-colors-error-container))",
              "inverse-on-surface": "rgb(var(--md-sys-colors-inverse-on-surface))",
              "inverse-primary": "rgb(var(--md-sys-colors-inverse-primary))",
              "inverse-surface": "rgb(var(--md-sys-colors-inverse-surface))",
              "on-background": "rgb(var(--md-sys-colors-on-background))",
              "on-error": "rgb(var(--md-sys-colors-on-error))",
              "on-error-container": "rgb(var(--md-sys-colors-on-error-container))",
              "on-primary": "rgb(var(--md-sys-colors-on-primary))",
              "on-primary-container": "rgb(var(--md-sys-colors-on-primary-container))",
              "on-primary-fixed": "rgb(var(--md-sys-colors-on-primary-fixed))",
              "on-primary-fixed-variant": "rgb(var(--md-sys-colors-on-primary-fixed-variant))",
              "on-secondary": "rgb(var(--md-sys-colors-on-secondary))",
              "on-secondary-container": "rgb(var(--md-sys-colors-on-secondary-container))",
              "on-secondary-fixed": "rgb(var(--md-sys-colors-on-secondary-fixed))",
              "on-secondary-fixed-variant": "rgb(var(--md-sys-colors-on-secondary-fixed-variant))",
              "on-surface": "rgb(var(--md-sys-colors-on-surface))",
              "on-surface-variant": "rgb(var(--md-sys-colors-on-surface-variant))",
              "on-tertiary": "rgb(var(--md-sys-colors-on-tertiary))",
              "on-tertiary-container": "rgb(var(--md-sys-colors-on-tertiary-container))",
              "on-tertiary-fixed": "rgb(var(--md-sys-colors-on-tertiary-fixed))",
              "on-tertiary-fixed-variant": "rgb(var(--md-sys-colors-on-tertiary-fixed-variant))",
              "outline": "rgb(var(--md-sys-colors-outline))",
              "outline-variant": "rgb(var(--md-sys-colors-outline-variant))",
              "primary": "rgb(var(--md-sys-colors-primary))",
              "primary-container": "rgb(var(--md-sys-colors-primary-container))",
              "primary-fixed": "rgb(var(--md-sys-colors-primary-fixed))",
              "primary-fixed-dim": "rgb(var(--md-sys-colors-primary-fixed-dim))",
              "scrim": "rgb(var(--md-sys-colors-scrim))",
              "secondary": "rgb(var(--md-sys-colors-secondary))",
              "secondary-container": "rgb(var(--md-sys-colors-secondary-container))",
              "secondary-fixed": "rgb(var(--md-sys-colors-secondary-fixed))",
              "secondary-fixed-dim": "rgb(var(--md-sys-colors-secondary-fixed-dim))",
              "shadow": "rgb(var(--md-sys-colors-shadow))",
              "surface": "rgb(var(--md-sys-colors-surface))",
              "surface-bright": "rgb(var(--md-sys-colors-surface-bright))",
              "surface-container": "rgb(var(--md-sys-colors-surface-container))",
              "surface-container-high": "rgb(var(--md-sys-colors-surface-container-high))",
              "surface-container-highest": "rgb(var(--md-sys-colors-surface-container-highest))",
              "surface-container-low": "rgb(var(--md-sys-colors-surface-container-low))",
              "surface-container-lowest": "rgb(var(--md-sys-colors-surface-container-lowest))",
              "surface-dim": "rgb(var(--md-sys-colors-surface-dim))",
              "surface-tint": "rgb(var(--md-sys-colors-surface-tint))",
              "surface-variant": "rgb(var(--md-sys-colors-surface-variant))",
              "tertiary": "rgb(var(--md-sys-colors-tertiary))",
              "tertiary-container": "rgb(var(--md-sys-colors-tertiary-container))",
              "tertiary-fixed": "rgb(var(--md-sys-colors-tertiary-fixed))",
              "tertiary-fixed-dim": "rgb(var(--md-sys-colors-tertiary-fixed-dim))",
            },
            "fontFamily": {
              "brand": ""Roboto", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif",
              "plain": ""Roboto", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif",
            },
          },
        }
      `)
    })
  })
})
