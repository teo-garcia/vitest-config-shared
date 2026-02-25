import { playwright } from "@vitest/browser-playwright";
import { defineConfig, mergeConfig } from "vitest/config";
import generalConfig from "./general.config.js";
import react from "@vitejs/plugin-react";

export default mergeConfig(
  generalConfig,
  defineConfig({
    plugins: [react()],
    test: {
      globals: true,
      include: ["{src,app}/**/*.{test,spec}.{ts,tsx}"],
      browser: {
        enabled: true,
        provider: playwright({ launch: { headless: true } }),
        instances: [{ browser: "chromium" }],
      },
    },
  })
);
