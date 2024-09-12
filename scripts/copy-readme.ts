import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const resolveFile = (path: string) => {
    const dirName = fileURLToPath(import.meta.url)
    return resolve(dirName, '..', path)
}

copyFileSync(resolveFile('../README.md'), resolveFile('../packages/unocss-preset-material/README.md'))