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
    browser: {
      enabled: true,
      provider: "playwright",
      name: "chromium",
      headless: true,
    },
  },
};

export default config;
