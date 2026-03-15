<div align="center">

# @teo-garcia/vitest-config-shared

**Shared Vitest configuration for React and Next.js projects**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![npm](https://img.shields.io/npm/v/@teo-garcia/vitest-config-shared?color=blue)](https://www.npmjs.com/package/@teo-garcia/vitest-config-shared)
[![Vitest](https://img.shields.io/badge/Vitest-4-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev)

Part of the [@teo-garcia/templates](https://github.com/teo-garcia/templates) ecosystem

</div>

---

## Features

| Config    | Target     | Includes                                                            |
| --------- | ---------- | ------------------------------------------------------------------- |
| **react** | React/Vite | Browser mode (Playwright), React plugin, globals, coverage defaults |
| **next**  | Next.js    | React config + `vite-tsconfig-paths` + Next-oriented test globs     |

## Requirements

- Vitest 4+
- Node.js 20+

## Installation

```bash
pnpm add -D @teo-garcia/vitest-config-shared

# Peer dependencies
pnpm add -D vitest @vitejs/plugin-react @vitest/browser-playwright vite-tsconfig-paths
```

## Usage

### React projects

```ts
// vitest.config.ts
import sharedConfig from '@teo-garcia/vitest-config-shared'
import { defineConfig } from 'vitest/config'

export default defineConfig(sharedConfig)
```

### Next.js projects

```ts
// vitest.config.ts
import sharedConfig from '@teo-garcia/vitest-config-shared/next'
import { defineConfig } from 'vitest/config'

export default defineConfig(sharedConfig)
```

### Add local setup files (optional)

If your app needs extra setup (for example `@testing-library/jest-dom`), merge your local config:

```ts
import sharedConfig from '@teo-garcia/vitest-config-shared'
import { defineConfig, mergeConfig } from 'vitest/config'

export default mergeConfig(
  defineConfig(sharedConfig),
  defineConfig({
    test: {
      setupFiles: ['./vitest.setup.ts'],
    },
  })
)
```

## Exports

| Export                                  | Description                 |
| --------------------------------------- | --------------------------- |
| `@teo-garcia/vitest-config-shared`      | React/Vite config (default) |
| `@teo-garcia/vitest-config-shared/next` | Next.js optimized config    |

## Default behavior

- Enables Vitest globals.
- Runs tests in browser mode using Playwright + Chromium (headless).
- Sets sane timeouts for async/browser tests.
- Applies v8 coverage defaults for source files under `src` and `app`.

## Scripts

```json
{
  "scripts": {
    "test": "vitest",
    "test:browser": "vitest --browser",
    "test:ui": "vitest --ui",
    "coverage": "vitest run --coverage"
  }
}
```

## Related Packages

| Package                                                                                    | Description         |
| ------------------------------------------------------------------------------------------ | ------------------- |
| [@teo-garcia/eslint-config-shared](https://github.com/teo-garcia/eslint-config-shared)     | ESLint rules        |
| [@teo-garcia/prettier-config-shared](https://github.com/teo-garcia/prettier-config-shared) | Prettier formatting |
| [@teo-garcia/tsconfig-shared](https://github.com/teo-garcia/tsconfig-shared)               | TypeScript settings |
| [@teo-garcia/react-shared](https://github.com/teo-garcia/react-shared)                     | Shared React primitives |

## License

MIT

---

<div align="center">
  <sub>Built by <a href="https://github.com/teo-garcia">teo-garcia</a></sub>
</div>
