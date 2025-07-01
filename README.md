# @teo-garcia/vitest-config-shared

Shared Vitest configuration for React and Next.js projects.

## Installation

```bash
npm install --save-dev @teo-garcia/vitest-config-shared
```

You'll also need to install the peer dependencies:

```bash
npm install --save-dev @testing-library/jest-dom @testing-library/react @vitejs/plugin-react @vitest/browser vitest vite-tsconfig-paths playwright-core
```

## Usage

### For React Projects

Create a `vitest.config.ts` file in your project root:

```typescript
import { defineConfig } from "vitest/config";
import sharedConfig from "@teo-garcia/vitest-config-shared";

export default defineConfig(sharedConfig);
```

### For Next.js Projects

Create a `vitest.config.ts` file in your project root:

```typescript
import { defineConfig } from "vitest/config";
import sharedConfig from "@teo-garcia/vitest-config-shared/next";

export default defineConfig(sharedConfig);
```

### For General/Node.js Projects

Create a `vitest.config.ts` file in your project root:

```typescript
import { defineConfig } from "vitest/config";
import sharedConfig from "@teo-garcia/vitest-config-shared/general";

export default defineConfig(sharedConfig);
```

## Package.json Scripts

Add these scripts to your `package.json`:

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
