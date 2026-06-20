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

    test('should generate light system colors consistent with the theme builder', () => {
      const scheme = createSystemColors({
        primary: '#FF0000',
        secondary: '#00FF00',
        tertiary: '#0000FF',
        neutral: '#FF80FF',
        neutralVariant: '#FFFF80',
        error: '#80FFFF',
        specVersion: '2021',
      })

      expect(scheme).toEqual({
        background: {
          b: 250,
          g: 247,
          r: 255,
        },
        error: {
          b: 106,
          g: 106,
          r: 0,
        },
        'error-container': {
          b: 241,
          g: 241,
          r: 156,
        },
        'inverse-on-surface': {
          b: 244,
          g: 237,
          r: 250,
        },
        'inverse-primary': {
          b: 168,
          g: 180,
          r: 255,
        },
        'inverse-surface': {
          b: 51,
          g: 46,
          r: 53,
        },
        'on-background': {
          b: 30,
          g: 26,
          r: 32,
        },
        'on-error': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-error-container': {
          b: 80,
          g: 79,
          r: 0,
        },
        'on-primary': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-primary-container': {
          b: 42,
          g: 52,
          r: 115,
        },
        'on-primary-fixed': {
          b: 5,
          g: 9,
          r: 58,
        },
        'on-primary-fixed-variant': {
          b: 42,
          g: 52,
          r: 115,
        },
        'on-secondary': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-secondary-container': {
          b: 32,
          g: 80,
          r: 40,
        },
        'on-secondary-fixed': {
          b: 0,
          g: 34,
          r: 0,
        },
        'on-secondary-fixed-variant': {
          b: 32,
          g: 80,
          r: 40,
        },
        'on-surface': {
          b: 30,
          g: 26,
          r: 32,
        },
        'on-surface-variant': {
          b: 58,
          g: 71,
          r: 72,
        },
        'on-tertiary': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-tertiary-container': {
          b: 120,
          g: 66,
          r: 62,
        },
        'on-tertiary-fixed': {
          b: 75,
          g: 20,
          r: 17,
        },
        'on-tertiary-fixed-variant': {
          b: 120,
          g: 66,
          r: 62,
        },
        outline: {
          b: 105,
          g: 120,
          r: 121,
        },
        'outline-variant': {
          b: 182,
          g: 199,
          r: 202,
        },
        primary: {
          b: 64,
          g: 75,
          r: 144,
        },
        'primary-container': {
          b: 212,
          g: 218,
          r: 255,
        },
        'primary-fixed': {
          b: 212,
          g: 218,
          r: 255,
        },
        'primary-fixed-dim': {
          b: 168,
          g: 180,
          r: 255,
        },
        scrim: {
          b: 0,
          g: 0,
          r: 0,
        },
        secondary: {
          b: 54,
          g: 104,
          r: 64,
        },
        'secondary-container': {
          b: 176,
          g: 239,
          r: 192,
        },
        'secondary-fixed': {
          b: 176,
          g: 239,
          r: 192,
        },
        'secondary-fixed-dim': {
          b: 149,
          g: 211,
          r: 165,
        },
        shadow: {
          b: 0,
          g: 0,
          r: 0,
        },
        surface: {
          b: 250,
          g: 247,
          r: 255,
        },
        'surface-bright': {
          b: 250,
          g: 247,
          r: 255,
        },
        'surface-container': {
          b: 241,
          g: 235,
          r: 247,
        },
        'surface-container-high': {
          b: 235,
          g: 229,
          r: 241,
        },
        'surface-container-highest': {
          b: 230,
          g: 223,
          r: 235,
        },
        'surface-container-low': {
          b: 247,
          g: 240,
          r: 253,
        },
        'surface-container-lowest': {
          b: 255,
          g: 255,
          r: 255,
        },
        'surface-dim': {
          b: 221,
          g: 215,
          r: 226,
        },
        'surface-tint': {
          b: 64,
          g: 75,
          r: 144,
        },
        'surface-variant': {
          b: 209,
          g: 227,
          r: 230,
        },
        tertiary: {
          b: 146,
          g: 89,
          r: 85,
        },
        'tertiary-container': {
          b: 255,
          g: 224,
          r: 224,
        },
        'tertiary-fixed': {
          b: 255,
          g: 224,
          r: 224,
        },
        'tertiary-fixed-dim': {
          b: 255,
          g: 194,
          r: 190,
        },
      })
    })

    test('should generate light-medium-contrast system colors consistent with the theme builder', () => {
      const scheme = createSystemColors({
        primary: '#FF0000',
        secondary: '#00FF00',
        tertiary: '#0000FF',
        neutral: '#FF80FF',
        neutralVariant: '#FFFF80',
        error: '#80FFFF',
        contrastLevel: 0.5,
        specVersion: '2021',
      })

      expect(scheme).toEqual({
        background: {
          b: 250,
          g: 247,
          r: 255,
        },
        error: {
          b: 61,
          g: 61,
          r: 0,
        },
        'error-container': {
          b: 121,
          g: 121,
          r: 22,
        },
        'inverse-on-surface': {
          b: 244,
          g: 237,
          r: 250,
        },
        'inverse-primary': {
          b: 168,
          g: 180,
          r: 255,
        },
        'inverse-surface': {
          b: 51,
          g: 46,
          r: 53,
        },
        'on-background': {
          b: 20,
          g: 16,
          r: 21,
        },
        'on-error': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-error-container': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-primary': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-primary-container': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-primary-fixed': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-primary-fixed-variant': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-secondary': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-secondary-container': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-secondary-fixed': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-secondary-fixed-variant': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-surface': {
          b: 20,
          g: 16,
          r: 21,
        },
        'on-surface-variant': {
          b: 42,
          g: 55,
          r: 55,
        },
        'on-tertiary': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-tertiary-container': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-tertiary-fixed': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-tertiary-fixed-variant': {
          b: 255,
          g: 255,
          r: 255,
        },
        outline: {
          b: 70,
          g: 83,
          r: 84,
        },
        'outline-variant': {
          b: 95,
          g: 110,
          r: 111,
        },
        primary: {
          b: 28,
          g: 36,
          r: 94,
        },
        'primary-container': {
          b: 77,
          g: 89,
          r: 161,
        },
        'primary-fixed': {
          b: 77,
          g: 89,
          r: 161,
        },
        'primary-fixed-dim': {
          b: 55,
          g: 65,
          r: 132,
        },
        scrim: {
          b: 0,
          g: 0,
          r: 0,
        },
        secondary: {
          b: 17,
          g: 62,
          r: 23,
        },
        'secondary-container': {
          b: 67,
          g: 119,
          r: 78,
        },
        'secondary-fixed': {
          b: 67,
          g: 119,
          r: 78,
        },
        'secondary-fixed-dim': {
          b: 45,
          g: 94,
          r: 54,
        },
        shadow: {
          b: 0,
          g: 0,
          r: 0,
        },
        surface: {
          b: 250,
          g: 247,
          r: 255,
        },
        'surface-bright': {
          b: 250,
          g: 247,
          r: 255,
        },
        'surface-container': {
          b: 235,
          g: 229,
          r: 241,
        },
        'surface-container-high': {
          b: 224,
          g: 218,
          r: 229,
        },
        'surface-container-highest': {
          b: 213,
          g: 206,
          r: 218,
        },
        'surface-container-low': {
          b: 247,
          g: 240,
          r: 253,
        },
        'surface-container-lowest': {
          b: 255,
          g: 255,
          r: 255,
        },
        'surface-dim': {
          b: 202,
          g: 195,
          r: 207,
        },
        'surface-tint': {
          b: 64,
          g: 75,
          r: 144,
        },
        'surface-variant': {
          b: 209,
          g: 227,
          r: 230,
        },
        tertiary: {
          b: 103,
          g: 49,
          r: 45,
        },
        'tertiary-container': {
          b: 162,
          g: 104,
          r: 100,
        },
        'tertiary-fixed': {
          b: 162,
          g: 104,
          r: 100,
        },
        'tertiary-fixed-dim': {
          b: 136,
          g: 80,
          r: 76,
        },
      })
    })

    test('should generate light-high-contrast system colors consistent with the theme builder', () => {
      const scheme = createSystemColors({
        primary: '#FF0000',
        secondary: '#00FF00',
        tertiary: '#0000FF',
        neutral: '#FF80FF',
        neutralVariant: '#FFFF80',
        error: '#80FFFF',
        contrastLevel: 1,
        specVersion: '2021',
      })

      expect(scheme).toEqual({
        background: {
          b: 250,
          g: 247,
          r: 255,
        },
        error: {
          b: 50,
          g: 50,
          r: 0,
        },
        'error-container': {
          b: 82,
          g: 82,
          r: 0,
        },
        'inverse-on-surface': {
          b: 255,
          g: 255,
          r: 255,
        },
        'inverse-primary': {
          b: 168,
          g: 180,
          r: 255,
        },
        'inverse-surface': {
          b: 51,
          g: 46,
          r: 53,
        },
        'on-background': {
          b: 0,
          g: 0,
          r: 0,
        },
        'on-error': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-error-container': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-primary': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-primary-container': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-primary-fixed': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-primary-fixed-variant': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-secondary': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-secondary-container': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-secondary-fixed': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-secondary-fixed-variant': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-surface': {
          b: 0,
          g: 0,
          r: 0,
        },
        'on-surface-variant': {
          b: 0,
          g: 0,
          r: 0,
        },
        'on-tertiary': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-tertiary-container': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-tertiary-fixed': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-tertiary-fixed-variant': {
          b: 255,
          g: 255,
          r: 255,
        },
        outline: {
          b: 33,
          g: 45,
          r: 45,
        },
        'outline-variant': {
          b: 61,
          g: 74,
          r: 75,
        },
        primary: {
          b: 19,
          g: 26,
          r: 81,
        },
        'primary-container': {
          b: 45,
          g: 54,
          r: 118,
        },
        'primary-fixed': {
          b: 45,
          g: 54,
          r: 118,
        },
        'primary-fixed-dim': {
          b: 24,
          g: 32,
          r: 89,
        },
        scrim: {
          b: 0,
          g: 0,
          r: 0,
        },
        secondary: {
          b: 7,
          g: 52,
          r: 12,
        },
        'secondary-container': {
          b: 34,
          g: 82,
          r: 43,
        },
        'secondary-fixed': {
          b: 34,
          g: 82,
          r: 43,
        },
        'secondary-fixed-dim': {
          b: 13,
          g: 59,
          r: 20,
        },
        shadow: {
          b: 0,
          g: 0,
          r: 0,
        },
        surface: {
          b: 250,
          g: 247,
          r: 255,
        },
        'surface-bright': {
          b: 250,
          g: 247,
          r: 255,
        },
        'surface-container': {
          b: 230,
          g: 223,
          r: 235,
        },
        'surface-container-high': {
          b: 216,
          g: 209,
          r: 221,
        },
        'surface-container-highest': {
          b: 202,
          g: 195,
          r: 207,
        },
        'surface-container-low': {
          b: 244,
          g: 237,
          r: 250,
        },
        'surface-container-lowest': {
          b: 255,
          g: 255,
          r: 255,
        },
        'surface-dim': {
          b: 188,
          g: 182,
          r: 193,
        },
        'surface-tint': {
          b: 64,
          g: 75,
          r: 144,
        },
        'surface-variant': {
          b: 209,
          g: 227,
          r: 230,
        },
        tertiary: {
          b: 92,
          g: 38,
          r: 34,
        },
        'tertiary-container': {
          b: 123,
          g: 68,
          r: 64,
        },
        'tertiary-fixed': {
          b: 123,
          g: 68,
          r: 64,
        },
        'tertiary-fixed-dim': {
          b: 99,
          g: 45,
          r: 41,
        },
      })
    })

    test('should generate dark system colors consistent with the theme builder', () => {
      const scheme = createSystemColors({
        primary: '#FF0000',
        secondary: '#00FF00',
        tertiary: '#0000FF',
        neutral: '#FF80FF',
        neutralVariant: '#FFFF80',
        error: '#80FFFF',
        isDark: true,
        specVersion: '2021',
      })

      expect(scheme).toEqual({
        background: {
          b: 22,
          g: 18,
          r: 23,
        },
        error: {
          b: 212,
          g: 212,
          r: 128,
        },
        'error-container': {
          b: 80,
          g: 79,
          r: 0,
        },
        'inverse-on-surface': {
          b: 51,
          g: 46,
          r: 53,
        },
        'inverse-primary': {
          b: 64,
          g: 75,
          r: 144,
        },
        'inverse-surface': {
          b: 230,
          g: 223,
          r: 235,
        },
        'on-background': {
          b: 230,
          g: 223,
          r: 235,
        },
        'on-error': {
          b: 55,
          g: 55,
          r: 0,
        },
        'on-error-container': {
          b: 241,
          g: 241,
          r: 156,
        },
        'on-primary': {
          b: 22,
          g: 30,
          r: 86,
        },
        'on-primary-container': {
          b: 212,
          g: 218,
          r: 255,
        },
        'on-primary-fixed': {
          b: 5,
          g: 9,
          r: 58,
        },
        'on-primary-fixed-variant': {
          b: 42,
          g: 52,
          r: 115,
        },
        'on-secondary': {
          b: 11,
          g: 56,
          r: 17,
        },
        'on-secondary-container': {
          b: 176,
          g: 239,
          r: 192,
        },
        'on-secondary-fixed': {
          b: 0,
          g: 34,
          r: 0,
        },
        'on-secondary-fixed-variant': {
          b: 32,
          g: 80,
          r: 40,
        },
        'on-surface': {
          b: 230,
          g: 223,
          r: 235,
        },
        'on-surface-variant': {
          b: 182,
          g: 199,
          r: 202,
        },
        'on-tertiary': {
          b: 96,
          g: 43,
          r: 39,
        },
        'on-tertiary-container': {
          b: 255,
          g: 224,
          r: 224,
        },
        'on-tertiary-fixed': {
          b: 75,
          g: 20,
          r: 17,
        },
        'on-tertiary-fixed-variant': {
          b: 120,
          g: 66,
          r: 62,
        },
        outline: {
          b: 130,
          g: 145,
          r: 147,
        },
        'outline-variant': {
          b: 58,
          g: 71,
          r: 72,
        },
        primary: {
          b: 168,
          g: 180,
          r: 255,
        },
        'primary-container': {
          b: 42,
          g: 52,
          r: 115,
        },
        'primary-fixed': {
          b: 212,
          g: 218,
          r: 255,
        },
        'primary-fixed-dim': {
          b: 168,
          g: 180,
          r: 255,
        },
        scrim: {
          b: 0,
          g: 0,
          r: 0,
        },
        secondary: {
          b: 149,
          g: 211,
          r: 165,
        },
        'secondary-container': {
          b: 32,
          g: 80,
          r: 40,
        },
        'secondary-fixed': {
          b: 176,
          g: 239,
          r: 192,
        },
        'secondary-fixed-dim': {
          b: 149,
          g: 211,
          r: 165,
        },
        shadow: {
          b: 0,
          g: 0,
          r: 0,
        },
        surface: {
          b: 22,
          g: 18,
          r: 23,
        },
        'surface-bright': {
          b: 60,
          g: 55,
          r: 62,
        },
        'surface-container': {
          b: 35,
          g: 30,
          r: 36,
        },
        'surface-container-high': {
          b: 45,
          g: 40,
          r: 46,
        },
        'surface-container-highest': {
          b: 56,
          g: 51,
          r: 58,
        },
        'surface-container-low': {
          b: 30,
          g: 26,
          r: 32,
        },
        'surface-container-lowest': {
          b: 17,
          g: 13,
          r: 18,
        },
        'surface-dim': {
          b: 22,
          g: 18,
          r: 23,
        },
        'surface-tint': {
          b: 168,
          g: 180,
          r: 255,
        },
        'surface-variant': {
          b: 58,
          g: 71,
          r: 72,
        },
        tertiary: {
          b: 255,
          g: 194,
          r: 190,
        },
        'tertiary-container': {
          b: 120,
          g: 66,
          r: 62,
        },
        'tertiary-fixed': {
          b: 255,
          g: 224,
          r: 224,
        },
        'tertiary-fixed-dim': {
          b: 255,
          g: 194,
          r: 190,
        },
      })
    })

    test('should generate dark-medium-contrast system colors consistent with the theme builder', () => {
      const scheme = createSystemColors({
        primary: '#FF0000',
        secondary: '#00FF00',
        tertiary: '#0000FF',
        neutral: '#FF80FF',
        neutralVariant: '#FFFF80',
        error: '#80FFFF',
        isDark: true,
        contrastLevel: 0.5,
        specVersion: '2021',
      })

      expect(scheme).toEqual({
        background: {
          b: 22,
          g: 18,
          r: 23,
        },
        error: {
          b: 234,
          g: 235,
          r: 150,
        },
        'error-container': {
          b: 158,
          g: 158,
          r: 71,
        },
        'inverse-on-surface': {
          b: 45,
          g: 40,
          r: 46,
        },
        'inverse-primary': {
          b: 44,
          g: 53,
          r: 116,
        },
        'inverse-surface': {
          b: 230,
          g: 223,
          r: 235,
        },
        'on-background': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-error': {
          b: 43,
          g: 43,
          r: 0,
        },
        'on-error-container': {
          b: 0,
          g: 0,
          r: 0,
        },
        'on-primary': {
          b: 13,
          g: 20,
          r: 72,
        },
        'on-primary-container': {
          b: 0,
          g: 0,
          r: 0,
        },
        'on-primary-fixed': {
          b: 1,
          g: 1,
          r: 44,
        },
        'on-primary-fixed-variant': {
          b: 28,
          g: 36,
          r: 94,
        },
        'on-secondary': {
          b: 3,
          g: 45,
          r: 5,
        },
        'on-secondary-container': {
          b: 0,
          g: 0,
          r: 0,
        },
        'on-secondary-fixed': {
          b: 0,
          g: 22,
          r: 0,
        },
        'on-secondary-fixed-variant': {
          b: 17,
          g: 62,
          r: 23,
        },
        'on-surface': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-surface-variant': {
          b: 203,
          g: 221,
          r: 224,
        },
        'on-tertiary': {
          b: 85,
          g: 31,
          r: 28,
        },
        'on-tertiary-container': {
          b: 0,
          g: 0,
          r: 0,
        },
        'on-tertiary-fixed': {
          b: 65,
          g: 7,
          r: 5,
        },
        'on-tertiary-fixed-variant': {
          b: 103,
          g: 49,
          r: 45,
        },
        outline: {
          b: 162,
          g: 178,
          r: 181,
        },
        'outline-variant': {
          b: 129,
          g: 145,
          r: 147,
        },
        primary: {
          b: 203,
          g: 210,
          r: 255,
        },
        'primary-container': {
          b: 111,
          g: 123,
          r: 204,
        },
        'primary-fixed': {
          b: 212,
          g: 218,
          r: 255,
        },
        'primary-fixed-dim': {
          b: 168,
          g: 180,
          r: 255,
        },
        scrim: {
          b: 0,
          g: 0,
          r: 0,
        },
        secondary: {
          b: 170,
          g: 233,
          r: 186,
        },
        'secondary-container': {
          b: 100,
          g: 156,
          r: 113,
        },
        'secondary-fixed': {
          b: 176,
          g: 239,
          r: 192,
        },
        'secondary-fixed-dim': {
          b: 149,
          g: 211,
          r: 165,
        },
        shadow: {
          b: 0,
          g: 0,
          r: 0,
        },
        surface: {
          b: 22,
          g: 18,
          r: 23,
        },
        'surface-bright': {
          b: 72,
          g: 66,
          r: 74,
        },
        'surface-container': {
          b: 43,
          g: 38,
          r: 44,
        },
        'surface-container-high': {
          b: 54,
          g: 49,
          r: 55,
        },
        'surface-container-highest': {
          b: 65,
          g: 60,
          r: 67,
        },
        'surface-container-low': {
          b: 32,
          g: 28,
          r: 34,
        },
        'surface-container-lowest': {
          b: 10,
          g: 6,
          r: 10,
        },
        'surface-dim': {
          b: 22,
          g: 18,
          r: 23,
        },
        'surface-tint': {
          b: 168,
          g: 180,
          r: 255,
        },
        'surface-variant': {
          b: 58,
          g: 71,
          r: 72,
        },
        tertiary: {
          b: 255,
          g: 217,
          r: 217,
        },
        'tertiary-container': {
          b: 200,
          g: 140,
          r: 136,
        },
        'tertiary-fixed': {
          b: 255,
          g: 224,
          r: 224,
        },
        'tertiary-fixed-dim': {
          b: 255,
          g: 194,
          r: 190,
        },
      })
    })

    test('should generate dark-high-contrast system colors consistent with the theme builder', () => {
      const scheme = createSystemColors({
        primary: '#FF0000',
        secondary: '#00FF00',
        tertiary: '#0000FF',
        neutral: '#FF80FF',
        neutralVariant: '#FFFF80',
        error: '#80FFFF',
        isDark: true,
        contrastLevel: 1,
        specVersion: '2021',
      })

      expect(scheme).toEqual({
        background: {
          b: 22,
          g: 18,
          r: 23,
        },
        error: {
          b: 254,
          g: 255,
          r: 170,
        },
        'error-container': {
          b: 208,
          g: 209,
          r: 124,
        },
        'inverse-on-surface': {
          b: 0,
          g: 0,
          r: 0,
        },
        'inverse-primary': {
          b: 44,
          g: 53,
          r: 116,
        },
        'inverse-surface': {
          b: 230,
          g: 223,
          r: 235,
        },
        'on-background': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-error': {
          b: 0,
          g: 0,
          r: 0,
        },
        'on-error-container': {
          b: 14,
          g: 14,
          r: 0,
        },
        'on-primary': {
          b: 0,
          g: 0,
          r: 0,
        },
        'on-primary-container': {
          b: 0,
          g: 0,
          r: 34,
        },
        'on-primary-fixed': {
          b: 0,
          g: 0,
          r: 0,
        },
        'on-primary-fixed-variant': {
          b: 1,
          g: 1,
          r: 44,
        },
        'on-secondary': {
          b: 0,
          g: 0,
          r: 0,
        },
        'on-secondary-container': {
          b: 0,
          g: 15,
          r: 0,
        },
        'on-secondary-fixed': {
          b: 0,
          g: 0,
          r: 0,
        },
        'on-secondary-fixed-variant': {
          b: 0,
          g: 22,
          r: 0,
        },
        'on-surface': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-surface-variant': {
          b: 255,
          g: 255,
          r: 255,
        },
        'on-tertiary': {
          b: 0,
          g: 0,
          r: 0,
        },
        'on-tertiary-container': {
          b: 60,
          g: 0,
          r: 0,
        },
        'on-tertiary-fixed': {
          b: 0,
          g: 0,
          r: 0,
        },
        'on-tertiary-fixed-variant': {
          b: 65,
          g: 7,
          r: 5,
        },
        outline: {
          b: 222,
          g: 240,
          r: 244,
        },
        'outline-variant': {
          b: 178,
          g: 195,
          r: 198,
        },
        primary: {
          b: 233,
          g: 236,
          r: 255,
        },
        'primary-container': {
          b: 161,
          g: 174,
          r: 255,
        },
        'primary-fixed': {
          b: 212,
          g: 218,
          r: 255,
        },
        'primary-fixed-dim': {
          b: 168,
          g: 180,
          r: 255,
        },
        scrim: {
          b: 0,
          g: 0,
          r: 0,
        },
        secondary: {
          b: 188,
          g: 253,
          r: 206,
        },
        'secondary-container': {
          b: 146,
          g: 207,
          r: 161,
        },
        'secondary-fixed': {
          b: 176,
          g: 239,
          r: 192,
        },
        'secondary-fixed-dim': {
          b: 149,
          g: 211,
          r: 165,
        },
        shadow: {
          b: 0,
          g: 0,
          r: 0,
        },
        surface: {
          b: 22,
          g: 18,
          r: 23,
        },
        'surface-bright': {
          b: 83,
          g: 78,
          r: 86,
        },
        'surface-container': {
          b: 51,
          g: 46,
          r: 53,
        },
        'surface-container-high': {
          b: 62,
          g: 57,
          r: 64,
        },
        'surface-container-highest': {
          b: 74,
          g: 69,
          r: 76,
        },
        'surface-container-low': {
          b: 35,
          g: 30,
          r: 36,
        },
        'surface-container-lowest': {
          b: 0,
          g: 0,
          r: 0,
        },
        'surface-dim': {
          b: 22,
          g: 18,
          r: 23,
        },
        'surface-tint': {
          b: 168,
          g: 180,
          r: 255,
        },
        'surface-variant': {
          b: 58,
          g: 71,
          r: 72,
        },
        tertiary: {
          b: 255,
          g: 238,
          r: 240,
        },
        'tertiary-container': {
          b: 253,
          g: 190,
          r: 186,
        },
        'tertiary-fixed': {
          b: 255,
          g: 224,
          r: 224,
        },
        'tertiary-fixed-dim': {
          b: 255,
          g: 194,
          r: 190,
        },
      })
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
