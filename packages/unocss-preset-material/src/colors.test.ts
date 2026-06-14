import { describe, expect, test } from 'vitest'
import { createSystemColors, createExtendedColors, createReferencePaletteColors, defaultPaletteTones } from './colors'

describe('colors', () => {
  describe('createSystemColors', () => {
    test('should generate system colors', () => {
      expect(createSystemColors()).toMatchInlineSnapshot(`
        {
          "background": {
            "b": 254,
            "g": 247,
            "r": 253,
          },
          "error": {
            "b": 75,
            "g": 54,
            "r": 168,
          },
          "error-container": {
            "b": 134,
            "g": 115,
            "r": 249,
          },
          "inverse-on-surface": {
            "b": 161,
            "g": 155,
            "r": 160,
          },
          "inverse-primary": {
            "b": 253,
            "g": 195,
            "r": 212,
          },
          "inverse-surface": {
            "b": 18,
            "g": 13,
            "r": 15,
          },
          "on-background": {
            "b": 58,
            "g": 49,
            "r": 52,
          },
          "on-error": {
            "b": 247,
            "g": 247,
            "r": 255,
          },
          "on-error-container": {
            "b": 35,
            "g": 5,
            "r": 110,
          },
          "on-primary": {
            "b": 255,
            "g": 247,
            "r": 253,
          },
          "on-primary-container": {
            "b": 108,
            "g": 60,
            "r": 73,
          },
          "on-primary-fixed": {
            "b": 87,
            "g": 40,
            "r": 53,
          },
          "on-primary-fixed-variant": {
            "b": 118,
            "g": 69,
            "r": 82,
          },
          "on-secondary": {
            "b": 255,
            "g": 247,
            "r": 253,
          },
          "on-secondary-container": {
            "b": 99,
            "g": 79,
            "r": 85,
          },
          "on-secondary-fixed": {
            "b": 80,
            "g": 60,
            "r": 66,
          },
          "on-secondary-fixed-variant": {
            "b": 110,
            "g": 88,
            "r": 95,
          },
          "on-surface": {
            "b": 58,
            "g": 49,
            "r": 52,
          },
          "on-surface-variant": {
            "b": 104,
            "g": 93,
            "r": 97,
          },
          "on-tertiary": {
            "b": 249,
            "g": 247,
            "r": 255,
          },
          "on-tertiary-container": {
            "b": 86,
            "g": 57,
            "r": 95,
          },
          "on-tertiary-fixed": {
            "b": 66,
            "g": 38,
            "r": 74,
          },
          "on-tertiary-fixed-variant": {
            "b": 96,
            "g": 66,
            "r": 105,
          },
          "outline": {
            "b": 131,
            "g": 121,
            "r": 125,
          },
          "outline-variant": {
            "b": 187,
            "g": 176,
            "r": 181,
          },
          "primary": {
            "b": 137,
            "g": 87,
            "r": 101,
          },
          "primary-container": {
            "b": 253,
            "g": 195,
            "r": 212,
          },
          "primary-fixed": {
            "b": 253,
            "g": 195,
            "r": 212,
          },
          "primary-fixed-dim": {
            "b": 238,
            "g": 182,
            "r": 198,
          },
          "scrim": {
            "b": 0,
            "g": 0,
            "r": 0,
          },
          "secondary": {
            "b": 113,
            "g": 92,
            "r": 98,
          },
          "secondary-container": {
            "b": 248,
            "g": 222,
            "r": 232,
          },
          "secondary-fixed": {
            "b": 248,
            "g": 222,
            "r": 232,
          },
          "secondary-fixed-dim": {
            "b": 234,
            "g": 208,
            "r": 218,
          },
          "shadow": {
            "b": 0,
            "g": 0,
            "r": 0,
          },
          "surface": {
            "b": 254,
            "g": 247,
            "r": 253,
          },
          "surface-bright": {
            "b": 254,
            "g": 247,
            "r": 253,
          },
          "surface-container": {
            "b": 245,
            "g": 236,
            "r": 242,
          },
          "surface-container-high": {
            "b": 240,
            "g": 230,
            "r": 236,
          },
          "surface-container-highest": {
            "b": 236,
            "g": 224,
            "r": 231,
          },
          "surface-container-low": {
            "b": 250,
            "g": 241,
            "r": 248,
          },
          "surface-container-lowest": {
            "b": 255,
            "g": 255,
            "r": 255,
          },
          "surface-dim": {
            "b": 228,
            "g": 216,
            "r": 222,
          },
          "surface-tint": {
            "b": 137,
            "g": 87,
            "r": 101,
          },
          "surface-variant": {
            "b": 236,
            "g": 224,
            "r": 231,
          },
          "tertiary": {
            "b": 112,
            "g": 82,
            "r": 123,
          },
          "tertiary-container": {
            "b": 227,
            "g": 191,
            "r": 244,
          },
          "tertiary-fixed": {
            "b": 227,
            "g": 191,
            "r": 244,
          },
          "tertiary-fixed-dim": {
            "b": 213,
            "g": 178,
            "r": 229,
          },
        }
      `)
    })
  })

  describe('createExtendedColors', () => {
    test('should generate extended colors', () => {
      expect(createExtendedColors({ test: { color: '#ff00ff' } })).toMatchInlineSnapshot(`
        {
          "on-test": {
            "b": 249,
            "g": 247,
            "r": 255,
          },
          "on-test-container": {
            "b": 94,
            "g": 57,
            "r": 99,
          },
          "test": {
            "b": 119,
            "g": 80,
            "r": 125,
          },
          "test-container": {
            "b": 237,
            "g": 192,
            "r": 248,
          },
        }
      `)
    })
  })

  describe('createReferencePaletteColors', () => {
    test('should generate reference palette colors', () => {
      expect(createReferencePaletteColors()).toMatchInlineSnapshot(`{}`)
    })
  })

  describe('defaultPaletteTones', () => {
    test('should generate default palette tones', () => {
      expect(defaultPaletteTones).toMatchInlineSnapshot(`
        [
          0,
          5,
          10,
          15,
          20,
          25,
          30,
          35,
          40,
          50,
          60,
          70,
          80,
          90,
          95,
          98,
          99,
          100,
        ]
      `)
    })
  })
})
