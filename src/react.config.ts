import { defineConfig, mergeConfig } from "vitest/config";
import generalConfig from "./general.config.js";
import react from "@vitejs/plugin-react";

export default mergeConfig(
  generalConfig,
  defineConfig({
    plugins: [react()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["@teo-garcia/vitest-config-shared/setup"],
      browser: {
        enabled: true,
        provider: "playwright",
        name: "chromium",
        headless: true,
      },
      include: ["{src,app}/**/*.{test,spec}.{ts,tsx}"],
    },
  })
);
