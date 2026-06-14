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
              "type-display-large",
              {
                "font": "400 3.5625rem/4rem "Roboto", sans-serif",
                "letter-spacing": "-0.015625rem",
              },
            ],
            [
              "type-display-medium",
              {
                "font": "400 2.8125rem/3.25rem "Roboto", sans-serif",
                "letter-spacing": "0rem",
              },
            ],
            [
              "type-display-small",
              {
                "font": "400 2.25rem/2.75rem "Roboto", sans-serif",
                "letter-spacing": "0rem",
              },
            ],
            [
              "type-headline-large",
              {
                "font": "400 2rem/2.5rem "Roboto", sans-serif",
                "letter-spacing": "0rem",
              },
            ],
            [
              "type-headline-medium",
              {
                "font": "400 1.75rem/2.25rem "Roboto", sans-serif",
                "letter-spacing": "0rem",
              },
            ],
            [
              "type-headline-small",
              {
                "font": "400 1.5rem/2rem "Roboto", sans-serif",
                "letter-spacing": "0rem",
              },
            ],
            [
              "type-title-large",
              {
                "font": "400 1.375rem/1.75rem "Roboto", sans-serif",
                "letter-spacing": "0rem",
              },
            ],
            [
              "type-title-medium",
              {
                "font": "500 1rem/1.5rem "Roboto", sans-serif",
                "letter-spacing": "0.009375rem",
              },
            ],
            [
              "type-title-small",
              {
                "font": "500 0.875rem/1.25rem "Roboto", sans-serif",
                "letter-spacing": "0.00625rem",
              },
            ],
            [
              "type-body-large",
              {
                "font": "400 1rem/1.5rem "Roboto", sans-serif",
                "letter-spacing": "0.03125rem",
              },
            ],
            [
              "type-body-medium",
              {
                "font": "400 0.875rem/1.25rem "Roboto", sans-serif",
                "letter-spacing": "0.015625rem",
              },
            ],
            [
              "type-body-small",
              {
                "font": "400 0.75rem/1rem "Roboto", sans-serif",
                "letter-spacing": "0.025rem",
              },
            ],
            [
              "type-label-large",
              {
                "font": "500 0.875rem/1.25rem "Roboto", sans-serif",
                "letter-spacing": "0.00625rem",
              },
            ],
            [
              "type-label-medium",
              {
                "font": "500 0.75rem/1rem "Roboto", sans-serif",
                "letter-spacing": "0.03125rem",
              },
            ],
            [
              "type-label-small",
              {
                "font": "500 0.6875rem/1rem "Roboto", sans-serif",
                "letter-spacing": "0.03125rem",
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
          },
        }
      `)
    })
  })
})
