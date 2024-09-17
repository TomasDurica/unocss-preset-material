import { describe, expect, it } from 'vitest'
import { createGenerator } from '@unocss/core'
import { presetMaterialShapes } from 'unocss-preset-material'

const generateCss = async (className: string) => {
  const uno = await createGenerator({
    presets: [presetMaterialShapes()]
  }).generate(`<div class="${className}"></div>`)

  return uno.css
}

describe('preset-material-shapes', () => {
  it('generates css rules for `shape-full`', async () => {
    expect(await generateCss('shape-full')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-full{border-radius:9999px;}"
    `)
  })

  it('generates css rules for `shape-none`', async () => {
    expect(await generateCss('shape-none')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-none{border-radius:0;}"
    `)
  })

  it('generates css rules for `shape-xl`', async () => {
    expect(await generateCss('shape-xl')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-xl{border-radius:1.75rem;}"
    `)

    expect(await generateCss('shape-xl-top')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-xl-top{border-top-left-radius:1.75rem;border-top-right-radius:1.75rem;}"
    `)

    expect(await generateCss('shape-xl-bottom')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-xl-bottom{border-bottom-left-radius:1.75rem;border-bottom-right-radius:1.75rem;}"
    `)

    expect(await generateCss('shape-xl-start')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-xl-start{border-start-start-radius:1.75rem;border-end-start-radius:1.75rem;}"
    `)

    expect(await generateCss('shape-xl-end')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-xl-end{border-start-end-radius:1.75rem;border-end-end-radius:1.75rem;}"
    `)
  })

  it('generates css rules for `shape-l`', async () => {
    expect(await generateCss('shape-l')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-l{border-radius:1rem;}"
    `)

    expect(await generateCss('shape-l-top')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-l-top{border-top-left-radius:1rem;border-top-right-radius:1rem;}"
    `)

    expect(await generateCss('shape-l-bottom')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-l-bottom{border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;}"
    `)

    expect(await generateCss('shape-l-start')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-l-start{border-start-start-radius:1rem;border-end-start-radius:1rem;}"
    `)

    expect(await generateCss('shape-l-end')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-l-end{border-start-end-radius:1rem;border-end-end-radius:1rem;}"
    `)
  })

  it('generates css rules for `shape-m`', async () => {
    expect(await generateCss('shape-m')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-m{border-radius:.75rem;}"
    `)

    expect(await generateCss('shape-m-top')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-m-top{border-top-left-radius:.75rem;border-top-right-radius:.75rem;}"
    `)

    expect(await generateCss('shape-m-bottom')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-m-bottom{border-bottom-left-radius:.75rem;border-bottom-right-radius:.75rem;}"
    `)

    expect(await generateCss('shape-m-start')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-m-start{border-start-start-radius:.75rem;border-end-start-radius:.75rem;}"
    `)

    expect(await generateCss('shape-m-end')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-m-end{border-start-end-radius:.75rem;border-end-end-radius:.75rem;}"
    `)
  })

  it('generates css rules for `shape-s`', async () => {
    expect(await generateCss('shape-s')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-s{border-radius:.5rem;}"
    `)

    expect(await generateCss('shape-s-top')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-s-top{border-top-left-radius:.5rem;border-top-right-radius:.5rem;}"
    `)

    expect(await generateCss('shape-s-bottom')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-s-bottom{border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem;}"
    `)

    expect(await generateCss('shape-s-start')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-s-start{border-start-start-radius:.5rem;border-end-start-radius:.5rem;}"
    `)

    expect(await generateCss('shape-s-end')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-s-end{border-start-end-radius:.5rem;border-end-end-radius:.5rem;}"
    `)
  })

  it('generates css rules for `shape-xs`', async () => {
    expect(await generateCss('shape-xs')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-xs{border-radius:.25rem;}"
    `)

    expect(await generateCss('shape-xs-top')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-xs-top{border-top-left-radius:.25rem;border-top-right-radius:.25rem;}"
    `)

    expect(await generateCss('shape-xs-bottom')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-xs-bottom{border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem;}"
    `)

    expect(await generateCss('shape-xs-start')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-xs-start{border-start-start-radius:.25rem;border-end-start-radius:.25rem;}"
    `)

    expect(await generateCss('shape-xs-end')).toMatchInlineSnapshot(`
      "/* layer: default */
      .shape-xs-end{border-start-end-radius:.25rem;border-end-end-radius:.25rem;}"
    `)
  })
})
