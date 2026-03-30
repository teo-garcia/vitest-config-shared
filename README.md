<div align="center">

# @teo-garcia/vitest-config-shared

**Shared Vitest configuration for React and Next.js projects**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![npm](https://img.shields.io/npm/v/@teo-garcia/vitest-config-shared?color=blue)](https://www.npmjs.com/package/@teo-garcia/vitest-config-shared)
[![Vitest](https://img.shields.io/badge/Vitest-4-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev)

Part of the [@teo-garcia/templates](https://github.com/teo-garcia/templates)
ecosystem

</div>

---

## Presets

| Config    | Target     | Includes                                                            |
| --------- | ---------- | ------------------------------------------------------------------- |
| **react** | React/Vite | Browser mode (Playwright), React plugin, globals, coverage defaults |
| **next**  | Next.js    | React config + vite-tsconfig-paths + Next-oriented test globs       |

---

## Requirements

- Vitest 4+
- Node.js 24+

---

## Exports

| Export                                  | Description                 |
| --------------------------------------- | --------------------------- |
| `@teo-garcia/vitest-config-shared`      | React/Vite config (default) |
| `@teo-garcia/vitest-config-shared/next` | Next.js optimized config    |

---

## Default Behavior

- Enables Vitest globals
- Runs tests in browser mode using Playwright + Chromium (headless)
- Sets sane timeouts for async and browser tests
- Applies v8 coverage defaults for source files under `src` and `app`

---

## Related Packages

| Package                              | Description         |
| ------------------------------------ | ------------------- |
| `@teo-garcia/eslint-config-shared`   | ESLint rules        |
| `@teo-garcia/prettier-config-shared` | Prettier formatting |
| `@teo-garcia/tsconfig-shared`        | TypeScript settings |
| `@teo-garcia/react-shared`           | React primitives    |

---

## License

MIT

---

<div align="center">
  <sub>Built by <a href="https://github.com/teo-garcia">teo-garcia</a></sub>
</div>
