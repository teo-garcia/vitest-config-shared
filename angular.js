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
    // Same coverage contract as the React config -- see react.js for the
    // reasoning behind the reporters, the report directory and the decision
    // not to enforce thresholds.
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'html'],
      reportsDirectory: './coverage',
      include: ['src/**/*.ts'],
      exclude: [
        '**/*.{test,spec}.ts',
        '**/*.d.ts',
        '**/__mocks__/**',
        '**/lib/test/**',
        '**/lib/mocks/**',
        'src/main.ts',
        'src/main.server.ts',
        'src/server.ts',
        'src/vitest.setup.ts',
      ],
    },
  },
}

export default config
