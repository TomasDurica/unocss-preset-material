import { defineConfig } from 'vitest/config'

const config = defineConfig({
  test: {
    server: {
      deps: {
        inline: ['@material/material-color-utilities'],
      },
    },
  },
})

export default config as any
