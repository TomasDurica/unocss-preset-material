import { describe, expect, it } from 'vitest'
import { createGenerator } from '@unocss/core'
import { presetMaterialTypography } from 'unocss-preset-material'

const generateCss = async (className: string) => {
  const uno = await createGenerator({
    presets: [presetMaterialTypography()]
  }).generate(`<div class="${className}"></div>`)

  return uno.css
}

describe('preset-material-typography', () => {
  it('generates css rules for `display-large`', async () => {
    expect(await generateCss('display-large')).toMatchInlineSnapshot(`
      "/* layer: default */
      .display-large{font:400 3.5625rem/4rem "Roboto", sans-serif;letter-spacing:-0.015625rem;}"
    `)
  })

  it('generates css rules for `display-medium`', async () => {
    expect(await generateCss('display-medium')).toMatchInlineSnapshot(`
      "/* layer: default */
      .display-medium{font:400 2.8125rem/3.25rem "Roboto", sans-serif;letter-spacing:0rem;}"
    `)
  })

  it('generates css rules for `display-small`', async () => {
    expect(await generateCss('display-small')).toMatchInlineSnapshot(`
      "/* layer: default */
      .display-small{font:400 2.25rem/2.75rem "Roboto", sans-serif;letter-spacing:0rem;}"
    `)
  })

  it('generates css rules for `headline-large`', async () => {
    expect(await generateCss('headline-large')).toMatchInlineSnapshot(`
      "/* layer: default */
      .headline-large{font:400 2rem/2.625rem "Roboto", sans-serif;letter-spacing:0rem;}"
    `)
  })

  it('generates css rules for `headline-medium`', async () => {
    expect(await generateCss('headline-medium')).toMatchInlineSnapshot(`
      "/* layer: default */
      .headline-medium{font:400 2rem/2.625rem "Roboto", sans-serif;letter-spacing:0rem;}"
    `)
  })

  it('generates css rules for `headline-small`', async () => {
    expect(await generateCss('headline-small')).toMatchInlineSnapshot(`
      "/* layer: default */
      .headline-small{font:400 1.5rem/2rem "Roboto", sans-serif;letter-spacing:0rem;}"
    `)
  })

  it('generates css rules for `title-large`', async () => {
    expect(await generateCss('title-large')).toMatchInlineSnapshot(`
      "/* layer: default */
      .title-large{font:400 1.375rem/1.75rem "Roboto", sans-serif;letter-spacing:0rem;}"
    `)
  })

  it('generates css rules for `title-medium`', async () => {
    expect(await generateCss('title-medium')).toMatchInlineSnapshot(`
      "/* layer: default */
      .title-medium{font:500 1rem/1.5rem "Roboto", sans-serif;letter-spacing:0.009375rem;}"
    `)
  })

  it('generates css rules for `title-small`', async () => {
    expect(await generateCss('title-small')).toMatchInlineSnapshot(`
      "/* layer: default */
      .title-small{font:500 0.875rem/1.25rem "Roboto", sans-serif;letter-spacing:0.00625rem;}"
    `)
  })

  it('generates css rules for `body-large`', async () => {
    expect(await generateCss('body-large')).toMatchInlineSnapshot(`
      "/* layer: default */
      .body-large{font:400 1rem/1.5rem "Roboto", sans-serif;letter-spacing:0.03125rem;}"
    `)
  })

  it('generates css rules for `body-medium`', async () => {
    expect(await generateCss('body-medium')).toMatchInlineSnapshot(`
      "/* layer: default */
      .body-medium{font:400 0.875rem/1.25rem "Roboto", sans-serif;letter-spacing:0.015625rem;}"
    `)
  })

  it('generates css rules for `body-small`', async () => {
    expect(await generateCss('body-small')).toMatchInlineSnapshot(`
      "/* layer: default */
      .body-small{font:400 0.75rem/1rem "Roboto", sans-serif;letter-spacing:0.025rem;}"
    `)
  })

  it('generates css rules for `label-large`', async () => {
    expect(await generateCss('label-large')).toMatchInlineSnapshot(`
      "/* layer: default */
      .label-large{font:500 0.875rem/1.25rem "Roboto", sans-serif;letter-spacing:0.00625rem;}"
    `)
  })

  it('generates css rules for `label-medium`', async () => {
    expect(await generateCss('label-medium')).toMatchInlineSnapshot(`
      "/* layer: default */
      .label-medium{font:500 0.75rem/1rem "Roboto", sans-serif;letter-spacing:0.03125rem;}"
    `)
  })

  it('generates css rules for `label-small`', async () => {
    expect(await generateCss('label-small')).toMatchInlineSnapshot(`
      "/* layer: default */
      .label-small{font:500 0.6875rem/1rem "Roboto", sans-serif;letter-spacing:0.03125rem;}"
    `)
  })
})
