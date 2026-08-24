import { playwright } from '@vitest/browser-playwright'
import react from '@vitejs/plugin-react'

/**
 * Shared Vitest configuration for React projects.
 * - Runs unit tests in Vitest Browser mode (Chromium, headless by default).
 * - Uses vitest's built-in globals (describe, expect, test...).
 *
 * Consumers should import this file and wrap it with `defineConfig`:
 *   import shared from '@teo-garcia/vitest-config-shared'
 *   export default defineConfig(shared)
 */

const config = {
  plugins: [react()],
  test: {
    globals: true,
    include: ['{app,src}/**/*.{test,spec}.{ts,tsx}'],
    testTimeout: 10_000,
    hookTimeout: 10_000,
    teardownTimeout: 5_000,
    sequence: {
      hooks: 'stack',
    },
    // Coverage contract shared by every template (frontend and backend):
    // text for the terminal, lcov for CI upload, html for local browsing;
    // reports land in ./coverage; generated code, test scaffolding and
    // framework entrypoints are excluded so the numbers describe app code.
    // Thresholds are deliberately not enforced -- templates ship a starter
    // suite, so a floor here would fail every new project on day one.
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'html'],
      reportsDirectory: './coverage',
      include: ['{app,src}/**/*.{ts,tsx}'],
      exclude: [
        '**/*.{test,spec}.{ts,tsx}',
        '**/*.d.ts',
        '**/__mocks__/**',
        '**/__screenshots__/**',
        '**/lib/test/**',
        '**/lib/mocks/**',
        '**/*.gen.ts',
        '**/routeTree.gen.ts',
      ],
    },
    browser: {
      enabled: true,
      provider: playwright(),
      headless: true,
      instances: [
        {
          browser: 'chromium',
          viewport: { width: 1280, height: 720 },
        },
      ],
    },
  },
}

export default config
