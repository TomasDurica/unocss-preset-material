# unocss-preset-material

Monorepo for [unocss-preset-material](https://www.npmjs.com/package/unocss-preset-material) — a [UnoCSS](https://unocss.dev/) preset that brings [Material Design 3](https://m3.material.io/) colors, shapes, typography, and elevation to your utility-first CSS workflow.

## Documentation

Package API, configuration options, and usage examples:

**[unocss-preset-material documentation](./packages/unocss-preset-material/README.md)**

## What's inside

| Path                                                                   | Description                                                          |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`packages/unocss-preset-material`](./packages/unocss-preset-material) | The published npm package                                            |
| [`apps/demo`](./apps/demo)                                             | Interactive Vue playground showcasing colors, shapes, and typography |

## Demo

Run the local playground to explore the preset in the browser:

```sh
pnpm install
pnpm demo
```

This starts the Vite dev server in `apps/demo` and opens it automatically.

## Development

```sh
pnpm install    # install dependencies
pnpm build      # build all packages
pnpm test       # run tests
pnpm fmt        # format code
pnpm release    # bump versions and publish (maintainers)
```

## License

MIT
