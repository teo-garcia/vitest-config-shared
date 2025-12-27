# Vitest Config Shared

Shared Vitest configurations for the templates ecosystem.

## Install

```bash
pnpm add -D @teo-garcia/vitest-config-shared vitest
```

## Usage

```ts
import sharedConfig from '@teo-garcia/vitest-config-shared/react'
import { defineConfig } from 'vitest/config'

export default defineConfig(sharedConfig)
```

Available presets:

- `@teo-garcia/vitest-config-shared/react`
- `@teo-garcia/vitest-config-shared/next`

## License

MIT
