import { expect, it } from 'vitest'
import { createGenerator } from '@unocss/core'
import presetMini from '@unocss/preset-mini'
import { presetMaterial } from 'unocss-preset-material'

it('works', async () => {
    const uno = await createGenerator({
      presets: [
        presetMini(),
        presetMaterial()
      ],
    }).generate(`<div class="bg-background"></div>`, { preflights: false })

    expect(uno.css).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-background{--un-bg-opacity:1;background-color:rgb(17 19 24 / var(--un-bg-opacity));}"
    `);
})