import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import reactConfig from "./react.js";

/**
 * Shared Vitest configuration for Next.js projects.
 * Extends the base React config with tsconfig path resolution
 * and broader include patterns for Next's app directory.
 */

const nextConfig = mergeConfig(reactConfig, {
  plugins: [tsconfigPaths()],
  test: {
    include: [
      "app/**/*.{test,spec}.{ts,tsx}",
      "{src,lib,components}/**/*.{test,spec}.{ts,tsx}",
    ],
  },
});

export default nextConfig;
