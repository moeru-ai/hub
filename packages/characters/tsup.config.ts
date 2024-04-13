import { defineConfig } from 'tsup'

export default defineConfig({
//   clean: true,
  clean: false,
  dts: true,
  entry: ['src/index.ts'],
  format: 'esm',
})