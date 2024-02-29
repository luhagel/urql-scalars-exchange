import { defineConfig } from 'vitest/config'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/main.ts'),
			name: 'urql-scalars-exchange',
		},
	},
	resolve: { alias: { src: resolve('src/') } },
	plugins: [
		dts({
			rollupTypes: true,
		}),
	],
})
