<div align="center">

# @teo-garcia/vitest-config-shared

**Shared Vitest configuration for React, Next.js, and Node.js projects**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![npm](https://img.shields.io/npm/v/@teo-garcia/vitest-config-shared?color=blue)](https://www.npmjs.com/package/@teo-garcia/vitest-config-shared)
[![Vitest](https://img.shields.io/badge/Vitest-3-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev)

Part of the [@teo-garcia/templates](https://github.com/teo-garcia/templates) ecosystem

</div>

---

## ✨ Features

| Config    | Target     | Includes                                       |
| --------- | ---------- | ---------------------------------------------- |
| **react** | React/Vite | Browser testing, Testing Library, React plugin |
| **next**  | Next.js    | Next.js optimizations, path resolution         |

## 📋 Requirements

- Vitest 3+
- Node.js 20+

## 🚀 Quick Start

```bash
# Install the package
pnpm add -D @teo-garcia/vitest-config-shared

# Install peer dependencies
pnpm add -D @testing-library/jest-dom @testing-library/react @vitejs/plugin-react @vitest/browser vitest vite-tsconfig-paths playwright-core
```

### React Projects

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import sharedConfig from '@teo-garcia/vitest-config-shared'

export default defineConfig(sharedConfig)
```

### Next.js Projects

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import sharedConfig from '@teo-garcia/vitest-config-shared/next'

export default defineConfig(sharedConfig)
```

## 📦 Exports

| Export                                  | Description                 |
| --------------------------------------- | --------------------------- |
| `@teo-garcia/vitest-config-shared`      | React/Vite config (default) |
| `@teo-garcia/vitest-config-shared/next` | Next.js optimized config    |

## 🔧 Scripts

Add these to your `package.json`:

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

## 🔗 Related Packages

| Package                                                                                    | Description         |
| ------------------------------------------------------------------------------------------ | ------------------- |
| [@teo-garcia/eslint-config-shared](https://github.com/teo-garcia/eslint-config-shared)     | ESLint rules        |
| [@teo-garcia/prettier-config-shared](https://github.com/teo-garcia/prettier-config-shared) | Prettier formatting |
| [@teo-garcia/tsconfig-shared](https://github.com/teo-garcia/tsconfig-shared)               | TypeScript settings |

## 📄 License

MIT

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/teo-garcia">teo-garcia</a></sub>
</div>
