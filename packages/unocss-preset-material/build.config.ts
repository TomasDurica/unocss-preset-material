import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index', 'src/utils'],
  clean: true,
  declaration: true,
  rollup: {
    dts: {
      respectExternal: false
    }
  }
})
