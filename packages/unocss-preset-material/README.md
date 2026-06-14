# unocss-preset-material

> [!Warning]
> This library is currently in release candidate and its API may still change.

Material Design 3 interoperability for [UnoCSS](https://unocss.dev/). Generates dynamic color schemes from seed colors, exposes them as UnoCSS theme colors and CSS variables, and provides utility classes for shapes, typography, and elevation.

## Installation

```sh
pnpm add -D unocss unocss-preset-material
```

`unocss` and `@unocss/core` are peer dependencies.

## Quick start

Add the preset to your UnoCSS config:

```ts
// uno.config.ts
import { defineConfig, presetMini } from 'unocss'
import { presetMaterial } from 'unocss-preset-material'

export default defineConfig({
  presets: [
    presetMini(),
    presetMaterial(),
  ],
})
```

Use Material colors and utilities in your markup:

```html
<button class="bg-primary text-on-primary shape-md type-label-large elevation-1">
  Click me
</button>
```

## Configuration

`presetMaterial()` accepts an optional `PresetMaterialOptions` object:

| Option | Default | Description |
| --- | --- | --- |
| `themes` | `[{}]` | Theme definitions (seed colors, dark mode, CSS selector) |
| `extendedColors` | — | Custom color roles beyond the Material system palette |
| `paletteOptions` | — | Reference palette tones exposed as theme colors |
| `colorPrefix` | `''` | Prefix for generated theme color names |
| `systemColorCssVariablePrefix` | `'md-sys-colors-'` | CSS variable prefix for system colors |
| `extendedColorCssVariablePrefix` | `'md-extended-colors-'` | CSS variable prefix for extended colors |
| `paletteColorCssVariablePrefix` | `'md-ref-palette-'` | CSS variable prefix for palette tones |
| `shapes` | `true` | Enable shape utilities, or pass `ShapesOptions` |
| `typography` | `true` | Enable typography utilities, or pass `TypographyOptions` |
| `elevation` | `true` | Enable elevation utilities |

## Colors and themes

### System colors

Each theme is built from Material color utilities. Configure seed colors and scheme options per theme:

```ts
presetMaterial({
  themes: [
    {
      primary: '#6750A4',
      variant: 'tonal-spot',
      contrastLevel: 0,
      isDark: false,
    },
  ],
})
```

Available theme options (`ThemeOptions` / `SystemColorsOptions`):

| Option | Default | Description |
| --- | --- | --- |
| `primary` | `'#6750A4'` | Seed color (hex string, `{ hex }`, RGB, or LAB) |
| `secondary`, `tertiary`, `neutral`, `neutralVariant`, `error` | — | Override individual palette sources |
| `isDark` | `false` | Light or dark color scheme |
| `contrastLevel` | `0` | Contrast adjustment (-1 to 1) |
| `variant` | `'tonal-spot'` | Dynamic color variant |
| `specVersion` | `'2025'` | Material spec version (`'2021'` or `'2025'`) |
| `platform` | `'phone'` | Target platform (`'phone'` or `'watch'`) |
| `selector` | `':root'` | CSS selector for the theme's CSS variables |

Variants: `monochrome`, `neutral`, `tonal-spot`, `vibrant`, `expressive`, `fidelity`, `content`, `rainbow`, `fruit-salad`.

### Light and dark themes

Define multiple themes with different selectors:

```ts
presetMaterial({
  themes: [
    { primary: '#6750A4', isDark: false },
    { selector: '.dark', primary: '#6750A4', isDark: true },
  ],
})
```

Toggle the dark theme by adding or removing the `.dark` class on an ancestor element.

### Using colors in utilities

System colors are registered as UnoCSS theme colors and work with standard color utilities:

```html
<div class="bg-surface text-on-surface">
  <span class="text-primary">Primary text</span>
  <div class="bg-primary-container text-on-primary-container">Container</div>
</div>
```

Available system color roles include `primary`, `on-primary`, `primary-container`, `secondary`, `tertiary`, `error`, `surface`, `background`, `outline`, and the full Material 3 surface container scale.

### Extended colors

Add custom color roles that follow the same container/on-color pattern:

```ts
type Extended = 'brand'

presetMaterial<Extended>({
  extendedColors: {
    brand: {
      color: '#E91E63',
      harmonize: true,
      variant: 'vibrant',
    },
  },
})
```

This exposes `brand`, `on-brand`, `brand-container`, and `on-brand-container` as theme colors.

### Reference palettes

Enable tonal palette steps as theme colors:

```ts
presetMaterial({
  paletteOptions: true,
})
```

Use `bg-primary-40`, `text-neutral-90`, and similar utilities. Set `paletteOptions` to a partial palette object or a function `(palettes) => partial` to customize which tones are included per palette.

Default tones: `0, 5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100`.

## Shapes

Corner radius utilities based on Material shape tokens:

| Class | Radius |
| --- | --- |
| `shape-none` | 0 |
| `shape-xs` | 4px |
| `shape-sm` | 8px |
| `shape-md` | 12px |
| `shape-lg` | 16px |
| `shape-lg-inc` | 20px |
| `shape-xl` | 28px |
| `shape-xl-inc` | 32px |
| `shape-xxl` | 48px |
| `shape-full` | fully rounded |

Append a direction suffix for partial rounding: `-top`, `-bottom`, `-start`, `-end`, `-top-start`, `-top-end`, `-bottom-start`, `-bottom-end`.

```html
<div class="shape-xl-top">Rounded top corners only</div>
```

Customize defaults:

```ts
presetMaterial({
  shapes: {
    includeDirectional: true,
    scale: { md: '16px', xl: '32px' },
  },
})
```

Set `shapes: false` to disable shape utilities.

## Typography

Material type scale utilities (default prefix `type-`):

| Category | Classes |
| --- | --- |
| Display | `type-display-large`, `type-display-medium`, `type-display-small` |
| Headline | `type-headline-large`, `type-headline-medium`, `type-headline-small` |
| Title | `type-title-large`, `type-title-medium`, `type-title-small` |
| Body | `type-body-large`, `type-body-medium`, `type-body-small` |
| Label | `type-label-large`, `type-label-medium`, `type-label-small` |

Customize fonts and prefix:

```ts
presetMaterial({
  typography: {
    prefix: 'type-',
    brand: '"Roboto", sans-serif',
    plain: '"Roboto", sans-serif',
  },
})
```

Set `typography: false` to disable typography utilities.

## Elevation

Shadow utilities from level 0 to 5:

```html
<div class="elevation-1">Raised surface</div>
<div class="elevation-3">Floating element</div>
```

Shadows use the theme's `shadow` color via CSS variables. Set `elevation: false` to disable.

## Low-level API

The preset is built on color generation utilities you can use independently:

```ts
import {
  createSystemColors,
  createExtendedColors,
  createReferencePaletteColors,
  generateCssVariables,
} from 'unocss-preset-material'

// Generate CSS custom properties for a theme
const variables = generateCssVariables({
  systemColorsOptions: { primary: '#6750A4', isDark: false },
  extendedColors: { brand: { color: '#E91E63' } },
  paletteOptions: true,
})
// => { '--md-sys-colors-primary': '101 87 137', ... }
```

### Exports

| Export | Description |
| --- | --- |
| `presetMaterial` | Main UnoCSS preset factory |
| `generateCssVariables` | Build a CSS variables map from theme options |
| `createSystemColors` | Generate Material system color objects |
| `createExtendedColors` | Generate extended color role objects |
| `createReferencePaletteColors` | Generate reference palette tone objects |
| `defaultSystemColorCssVariablePrefix` | Default system color CSS variable prefix |
| `defaultExtendedColorCssVariablePrefix` | Default extended color CSS variable prefix |
| `defaultPaletteColorCssVariablePrefix` | Default palette CSS variable prefix |
| `defaultPaletteTones` | Default tonal palette steps |

Types are exported for `PresetMaterialOptions`, `ThemeOptions`, `SystemColorsOptions`, `ExtendedColorsOptions`, `PaletteOptions`, `ShapesOptions`, `TypographyOptions`, `Color`, `Variant`, and related interfaces.

## License

MIT
