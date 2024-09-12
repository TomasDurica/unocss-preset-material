import { describe, expect, it } from 'vitest'
import { createGenerator } from '@unocss/core'
import presetMini from '@unocss/preset-mini'
import { presetMaterialColors } from 'unocss-preset-material'

const generateCss = async (className: string) => {
  const uno = await createGenerator({
    presets: [presetMini(), presetMaterialColors()]
  }).generate(`<div class="${className}"></div>`, { preflights: false })

  return uno.css
}

describe('preset-material-colors', () => {
  it('generates preflights with theme colors', async () => {
    const uno = await createGenerator({
      presets: [presetMaterialColors()]
    }).generate(``, { preflights: true })

    expect(uno.css).toMatchInlineSnapshot(`
      "/* layer: preflights */
      :root {--md-sys-colors-primary:101 85 143;--md-sys-colors-on-primary:255 255 255;--md-sys-colors-primary-container:233 221 255;--md-sys-colors-on-primary-container:77 61 117;--md-sys-colors-secondary:98 91 113;--md-sys-colors-on-secondary:255 255 255;--md-sys-colors-secondary-container:232 222 248;--md-sys-colors-on-secondary-container:74 68 88;--md-sys-colors-tertiary:126 82 96;--md-sys-colors-on-tertiary:255 255 255;--md-sys-colors-tertiary-container:255 217 227;--md-sys-colors-on-tertiary-container:99 59 72;--md-sys-colors-error:186 26 26;--md-sys-colors-on-error:255 255 255;--md-sys-colors-error-container:255 218 214;--md-sys-colors-on-error-container:147 0 10;--md-sys-colors-surface-dim:222 216 224;--md-sys-colors-surface:253 247 255;--md-sys-colors-surface-bright:253 247 255;--md-sys-colors-surface-container-lowest:255 255 255;--md-sys-colors-surface-container-low:248 242 250;--md-sys-colors-surface-container:242 236 244;--md-sys-colors-surface-container-high:236 230 238;--md-sys-colors-surface-container-highest:230 224 233;--md-sys-colors-on-surface:29 27 32;--md-sys-colors-on-surface-variant:73 69 78;--md-sys-colors-outline:122 117 127;--md-sys-colors-outline-variant:202 196 207;--md-sys-colors-inverse-surface:50 47 53;--md-sys-colors-inverse-on-surface:245 239 247;--md-sys-colors-inverse-primary:207 189 254;--md-sys-colors-scrim:0 0 0;--md-sys-colors-shadow:0 0 0;}"
    `)
  })

  it('generates color for `primary`', async () => {
    expect(await generateCss('text-primary')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-primary{--un-text-opacity:1;color:rgb(var(--md-sys-colors-primary) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-primary')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-primary{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-primary) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `on-primary`', async () => {
    expect(await generateCss('text-on-primary')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-on-primary{--un-text-opacity:1;color:rgb(var(--md-sys-colors-on-primary) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-on-primary')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-on-primary{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-on-primary) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `primary-container`', async () => {
    expect(await generateCss('text-primary-container')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-primary-container{--un-text-opacity:1;color:rgb(var(--md-sys-colors-primary-container) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-primary-container')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-primary-container{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-primary-container) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `on-primary-container`', async () => {
    expect(await generateCss('text-on-primary-container')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-on-primary-container{--un-text-opacity:1;color:rgb(var(--md-sys-colors-on-primary-container) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-on-primary-container')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-on-primary-container{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-on-primary-container) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `secondary`', async () => {
    expect(await generateCss('text-secondary')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-secondary{--un-text-opacity:1;color:rgb(var(--md-sys-colors-secondary) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-secondary')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-secondary{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-secondary) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `on-secondary`', async () => {
    expect(await generateCss('text-on-secondary')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-on-secondary{--un-text-opacity:1;color:rgb(var(--md-sys-colors-on-secondary) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-on-secondary')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-on-secondary{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-on-secondary) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `secondary-container`', async () => {
    expect(await generateCss('text-secondary-container')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-secondary-container{--un-text-opacity:1;color:rgb(var(--md-sys-colors-secondary-container) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-secondary-container')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-secondary-container{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-secondary-container) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `on-secondary-container`', async () => {
    expect(await generateCss('text-on-secondary-container')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-on-secondary-container{--un-text-opacity:1;color:rgb(var(--md-sys-colors-on-secondary-container) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-on-secondary-container')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-on-secondary-container{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-on-secondary-container) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `tertiary`', async () => {
    expect(await generateCss('text-tertiary')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-tertiary{--un-text-opacity:1;color:rgb(var(--md-sys-colors-tertiary) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-tertiary')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-tertiary{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-tertiary) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `on-tertiary`', async () => {
    expect(await generateCss('text-on-tertiary')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-on-tertiary{--un-text-opacity:1;color:rgb(var(--md-sys-colors-on-tertiary) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-on-tertiary')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-on-tertiary{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-on-tertiary) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `tertiary-container`', async () => {
    expect(await generateCss('text-tertiary-container')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-tertiary-container{--un-text-opacity:1;color:rgb(var(--md-sys-colors-tertiary-container) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-tertiary-container')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-tertiary-container{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-tertiary-container) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `on-tertiary-container`', async () => {
    expect(await generateCss('text-on-tertiary-container')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-on-tertiary-container{--un-text-opacity:1;color:rgb(var(--md-sys-colors-on-tertiary-container) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-on-tertiary-container')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-on-tertiary-container{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-on-tertiary-container) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `error`', async () => {
    expect(await generateCss('text-error')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-error{--un-text-opacity:1;color:rgb(var(--md-sys-colors-error) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-error')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-error{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-error) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `on-error`', async () => {
    expect(await generateCss('text-on-error')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-on-error{--un-text-opacity:1;color:rgb(var(--md-sys-colors-on-error) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-on-error')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-on-error{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-on-error) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `error-container`', async () => {
    expect(await generateCss('text-error-container')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-error-container{--un-text-opacity:1;color:rgb(var(--md-sys-colors-error-container) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-error-container')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-error-container{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-error-container) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `on-error-container`', async () => {
    expect(await generateCss('text-on-error-container')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-on-error-container{--un-text-opacity:1;color:rgb(var(--md-sys-colors-on-error-container) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-on-error-container')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-on-error-container{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-on-error-container) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `surface-dim`', async () => {
    expect(await generateCss('text-surface-dim')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-surface-dim{--un-text-opacity:1;color:rgb(var(--md-sys-colors-surface-dim) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-surface-dim')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-surface-dim{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-surface-dim) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `surface`', async () => {
    expect(await generateCss('text-surface')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-surface{--un-text-opacity:1;color:rgb(var(--md-sys-colors-surface) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-surface')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-surface{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-surface) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `surface-bright`', async () => {
    expect(await generateCss('text-surface-bright')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-surface-bright{--un-text-opacity:1;color:rgb(var(--md-sys-colors-surface-bright) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-surface-bright')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-surface-bright{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-surface-bright) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `surface-container-lowest`', async () => {
    expect(await generateCss('text-surface-container-lowest')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-surface-container-lowest{--un-text-opacity:1;color:rgb(var(--md-sys-colors-surface-container-lowest) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-surface-container-lowest')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-surface-container-lowest{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-surface-container-lowest) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `surface-container-low`', async () => {
    expect(await generateCss('text-surface-container-low')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-surface-container-low{--un-text-opacity:1;color:rgb(var(--md-sys-colors-surface-container-low) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-surface-container-low')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-surface-container-low{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-surface-container-low) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `surface-container`', async () => {
    expect(await generateCss('text-surface-container')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-surface-container{--un-text-opacity:1;color:rgb(var(--md-sys-colors-surface-container) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-surface-container')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-surface-container{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-surface-container) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `surface-container-high`', async () => {
    expect(await generateCss('text-surface-container-high')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-surface-container-high{--un-text-opacity:1;color:rgb(var(--md-sys-colors-surface-container-high) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-surface-container-high')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-surface-container-high{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-surface-container-high) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `surface-container-highest`', async () => {
    expect(await generateCss('text-surface-container-highest')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-surface-container-highest{--un-text-opacity:1;color:rgb(var(--md-sys-colors-surface-container-highest) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-surface-container-highest')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-surface-container-highest{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-surface-container-highest) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `on-surface`', async () => {
    expect(await generateCss('text-on-surface')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-on-surface{--un-text-opacity:1;color:rgb(var(--md-sys-colors-on-surface) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-on-surface')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-on-surface{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-on-surface) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `on-surface-variant`', async () => {
    expect(await generateCss('text-on-surface-variant')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-on-surface-variant{--un-text-opacity:1;color:rgb(var(--md-sys-colors-on-surface-variant) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-on-surface-variant')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-on-surface-variant{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-on-surface-variant) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `outline`', async () => {
    expect(await generateCss('text-outline')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-outline{--un-text-opacity:1;color:rgb(var(--md-sys-colors-outline) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-outline')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-outline{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-outline) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `outline-variant`', async () => {
    expect(await generateCss('text-outline-variant')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-outline-variant{--un-text-opacity:1;color:rgb(var(--md-sys-colors-outline-variant) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-outline-variant')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-outline-variant{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-outline-variant) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `inverse-surface`', async () => {
    expect(await generateCss('text-inverse-surface')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-inverse-surface{--un-text-opacity:1;color:rgb(var(--md-sys-colors-inverse-surface) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-inverse-surface')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-inverse-surface{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-inverse-surface) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `inverse-on-surface`', async () => {
    expect(await generateCss('text-inverse-on-surface')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-inverse-on-surface{--un-text-opacity:1;color:rgb(var(--md-sys-colors-inverse-on-surface) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-inverse-on-surface')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-inverse-on-surface{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-inverse-on-surface) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `inverse-primary`', async () => {
    expect(await generateCss('text-inverse-primary')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-inverse-primary{--un-text-opacity:1;color:rgb(var(--md-sys-colors-inverse-primary) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-inverse-primary')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-inverse-primary{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-inverse-primary) / var(--un-bg-opacity));}"
    `)
  })

  it('generates color for `scrim`', async () => {
    expect(await generateCss('text-scrim')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-scrim{--un-text-opacity:1;color:rgb(var(--md-sys-colors-scrim) / var(--un-text-opacity));}"
    `)

    expect(await generateCss('bg-scrim')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-scrim{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-scrim) / var(--un-bg-opacity));}"
    `)
  })
  it('generates color for `shadow`', async () => {
    expect(await generateCss('text-shadow')).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-shadow{--un-text-shadow:0 0 1px var(--un-text-shadow-color, rgb(0 0 0 / 0.2)),0 0 1px var(--un-text-shadow-color, rgb(1 0 5 / 0.1));text-shadow:var(--un-text-shadow);}"
    `)

    expect(await generateCss('bg-shadow')).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-shadow{--un-bg-opacity:1;background-color:rgb(var(--md-sys-colors-shadow) / var(--un-bg-opacity));}"
    `)
  })
})
