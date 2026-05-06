import { playwright } from '@vitest/browser-playwright'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
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
    coverage: {
      provider: 'v8',
      include: ['{app,src}/**/*.{ts,tsx}'],
      exclude: [
        '**/*.{test,spec}.{ts,tsx}',
        '**/__mocks__/**',
        '**/__screenshots__/**',
        '**/lib/test/**',
        '**/lib/mocks/**',
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
})
