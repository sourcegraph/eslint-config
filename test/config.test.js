const assert = require('node:assert/strict')
const path = require('node:path')
const test = require('node:test')

const { ESLint } = require('eslint')
const config = require('../flat')

test('loads the shared config with the supported ESLint toolchain', async () => {
  const root = path.join(__dirname, '..')
  const eslint = new ESLint({
    cwd: root,
    overrideConfigFile: true,
    overrideConfig: config,
  })

  const [result] = await eslint.lintFiles(['fixtures/valid.ts'])

  assert.deepEqual(result.messages, [])
})
