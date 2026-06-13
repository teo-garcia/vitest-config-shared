/**
 * Shared Vitest configuration for Angular projects.
 * Uses jsdom in Node to match the Angular CLI Vitest default.
 *
 * Consumers should import this file and wrap it with `defineConfig`:
 *   import shared from '@teo-garcia/vitest-config-shared/angular'
 *   export default defineConfig(shared)
 */

const config = {
  test: {
    globals: true,
    include: ['src/**/*.{test,spec}.ts'],
    environment: 'jsdom',
    testTimeout: 10_000,
    hookTimeout: 10_000,
    teardownTimeout: 5_000,
    sequence: {
      hooks: 'stack',
    },
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts'],
      exclude: [
        '**/*.{test,spec}.ts',
        '**/__mocks__/**',
        '**/lib/test/**',
        '**/lib/mocks/**',
        'src/main.ts',
        'src/main.server.ts',
        'src/server.ts',
      ],
    },
  },
}

export default config
