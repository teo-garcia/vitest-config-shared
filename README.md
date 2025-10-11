# @teo-garcia/vitest-config-shared

Shared Vitest configuration for React, Next.js, and Node.js projects.

## Installation

```bash
npm install --save-dev @teo-garcia/vitest-config-shared
```

Install peer dependencies:

```bash
npm install --save-dev @testing-library/jest-dom @testing-library/react @vitejs/plugin-react @vitest/browser vitest vite-tsconfig-paths playwright-core
```

## Usage

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

### Node.js Projects

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import sharedConfig from '@teo-garcia/vitest-config-shared/general'

export default defineConfig(sharedConfig)
```

## Scripts

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

## License

MIT
