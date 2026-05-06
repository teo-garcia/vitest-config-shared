import { execFileSync } from 'node:child_process'
import {
  mkdtempSync,
  mkdirSync,
  readFileSync,
  readdirSync,
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

mkdirSync(tarballDir)
mkdirSync(consumerDir)

execFileSync('pnpm', ['pack', '--pack-destination', tarballDir], {
  cwd: packageRoot,
  stdio: 'inherit',
})

const tarballName = readdirSync(tarballDir).find((file) =>
  file.endsWith('.tgz')
)

if (!tarballName) {
  throw new Error('pnpm pack did not create a tarball')
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
      },
    },
    null,
    2
  )}\n`
)

execFileSync('pnpm', ['install', '--ignore-scripts'], {
  cwd: consumerDir,
  stdio: 'inherit',
})

const reactConfig = (await import('@teo-garcia/vitest-config-shared')).default
const nextConfig = (await import('@teo-garcia/vitest-config-shared/next'))
  .default

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

console.log('vitest packed consumer smoke ok')
