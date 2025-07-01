import { defineConfig, mergeConfig } from "vitest/config";
import reactConfig from "./react.config.js";
import tsconfigPaths from "vite-tsconfig-paths";

export default mergeConfig(
  reactConfig,
  defineConfig({
    plugins: [tsconfigPaths()],
    test: {
      include: [
        "app/**/*.{test,spec}.{ts,tsx}",
        "{src,lib,components}/**/*.{test,spec}.{ts,tsx}",
      ],
    },
  })
);
