// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'


export default defineConfig({
  base: "./",
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib.ts'),
      name: 'lib',
      fileName: 'lib',
    }
  },
  plugins: [dts()]
})