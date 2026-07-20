import { mergeConfig } from 'vitest/config'
import reactConfig from './react.js'

/**
 * Shared Vitest configuration for Next.js projects.
 * Extends the base React config with tsconfig path resolution
 * and broader include patterns for Next's app directory.
 */

const nextConfig = mergeConfig(reactConfig, {
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

export default nextConfig
