import { execFileSync } from 'node:child_process'
import {
  mkdtempSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const packageRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..'
)
const packageJson = JSON.parse(
  readFileSync(path.join(packageRoot, 'package.json'), 'utf8')
)
const tempRoot = mkdtempSync(path.join(tmpdir(), 'teo-vitest-consumer-'))
const tarballDir = path.join(tempRoot, 'tarballs')
const consumerDir = path.join(tempRoot, 'consumer')

process.on('exit', () => {
  rmSync(tempRoot, { force: true, recursive: true })
})

function run(command, args, options = {}) {
  return execFileSync(command, args, {
    cwd: options.cwd ?? consumerDir,
    stdio: options.stdio ?? 'inherit',
  })
}

mkdirSync(tarballDir)
mkdirSync(consumerDir)

run('pnpm', ['pack', '--pack-destination', tarballDir], {
  cwd: packageRoot,
})

const tarballName = readdirSync(tarballDir).find((file) =>
  file.endsWith('.tgz')
)

if (!tarballName) {
  throw new Error('pnpm pack did not create a tarball')
}

const tarballFiles = run('tar', ['-tzf', path.join(tarballDir, tarballName)], {
  cwd: packageRoot,
  stdio: 'pipe',
})
  .toString('utf8')
  .trim()
  .split('\n')
  .sort()
const expectedTarballFiles = [
  'package/LICENSE',
  'package/README.md',
  'package/angular.d.ts',
  'package/angular.js',
  'package/next.d.ts',
  'package/next.js',
  'package/package.json',
  'package/react.d.ts',
  'package/react.js',
].sort()

if (JSON.stringify(tarballFiles) !== JSON.stringify(expectedTarballFiles)) {
  throw new Error(
    `Unexpected packed files:\n${tarballFiles.map((file) => `- ${file}`).join('\n')}`
  )
}

writeFileSync(
  path.join(consumerDir, 'package.json'),
  `${JSON.stringify(
    {
      private: true,
      type: 'module',
      dependencies: {
        [packageJson.name]: `file:${path.join(tarballDir, tarballName)}`,
        ...packageJson.peerDependencies,
        '@types/node': '^24.0.0',
        typescript: '^6.0.0',
        vite: '^8.0.0',
      },
    },
    null,
    2
  )}\n`
)

writeFileSync(
  path.join(consumerDir, 'tsconfig.json'),
  `${JSON.stringify(
    {
      compilerOptions: {
        lib: ['DOM', 'ESNext'],
        module: 'NodeNext',
        moduleResolution: 'NodeNext',
        noEmit: true,
        strict: true,
        target: 'ES2022',
        types: ['node'],
        verbatimModuleSyntax: true,
      },
      include: ['index.ts'],
    },
    null,
    2
  )}\n`
)

writeFileSync(
  path.join(consumerDir, 'index.ts'),
  `import angularConfig from '${packageJson.name}/angular'
import nextConfig from '${packageJson.name}/next'
import reactConfig from '${packageJson.name}'
import type { ViteUserConfig } from 'vitest/config'

export const configs: ViteUserConfig[] = [
  angularConfig,
  nextConfig,
  reactConfig,
]
`
)

run('pnpm', ['install', '--ignore-scripts'])

const reactConfig = (await import(packageJson.name)).default
const nextConfig = (await import(`${packageJson.name}/next`)).default
const angularConfig = (await import(`${packageJson.name}/angular`)).default

if (
  !reactConfig.test?.browser?.enabled ||
  !reactConfig.test.browser.headless ||
  reactConfig.test.browser.instances?.[0]?.viewport?.width !== 1280
) {
  throw new Error('unexpected react browser config shape')
}

if (!nextConfig.test?.include?.some((pattern) => pattern.startsWith('app/'))) {
  throw new Error('unexpected next include patterns')
}

if (nextConfig.resolve?.tsconfigPaths !== true) {
  throw new Error('Next config does not enable native tsconfig paths')
}

if (
  angularConfig.test?.environment !== 'jsdom' ||
  !angularConfig.test?.include?.some((pattern) => pattern.includes('src/'))
) {
  throw new Error('unexpected angular config shape')
}

run('pnpm', ['exec', 'tsc', '--noEmit'])

console.log('vitest packed consumer smoke ok')
