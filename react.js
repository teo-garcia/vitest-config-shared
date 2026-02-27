import { playwright } from "@vitest/browser-playwright";
import react from "@vitejs/plugin-react";

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
    include: ["{app,src}/**/*.{test,spec}.{ts,tsx}"],
    testTimeout: 10_000,
    hookTimeout: 10_000,
    teardownTimeout: 5_000,
    sequence: {
      hooks: "stack",
    },
    coverage: {
      provider: "v8",
      include: ["{app,src}/**/*.{ts,tsx}"],
      exclude: [
        "**/*.{test,spec}.{ts,tsx}",
        "**/__mocks__/**",
        "**/__screenshots__/**",
        "**/lib/test/**",
        "**/lib/mocks/**",
      ],
    },
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [
        {
          browser: "chromium",
          launch: { headless: true },
          context: { viewport: { width: 1280, height: 720 } },
        },
      ],
    },
  },
};

export default config;
