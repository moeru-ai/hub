import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts', 'src/alichat.ts', 'src/plist.ts'],
  format: 'esm',
})
