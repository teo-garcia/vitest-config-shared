import { defineConfig, mergeConfig } from 'vitest/config'
import reactConfig from './react.config.js'

export default mergeConfig(
  reactConfig,
  defineConfig({
    resolve: {
      tsconfigPaths: true,
    },
    test: {
      include: [
        'app/**/*.{test,spec}.{ts,tsx}',
        '{src,lib,components}/**/*.{test,spec}.{ts,tsx}',
      ],
    },
  })
)
