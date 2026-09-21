#!/bin/bash
set -ex

echo "--- install"
corepack enable
yarn install --frozen-lockfile
echo "--- clone sourcegraph/sourcegraph"
CLONE_DIR=$(mktemp -d)
git clone --depth 1 https://github.com/sourcegraph/sourcegraph "$CLONE_DIR"
PACKAGE=$(npm pack --pack-destination "$CLONE_DIR")
cd "$CLONE_DIR"
mkdir -p annotations
echo "--- pnpm install"
pnpm install --frozen-lockfile
echo "--- pnpm add"
pnpm add --save-dev --workspace-root "$CLONE_DIR/$PACKAGE"
echo "--- diff"
git diff
echo "--- generate"
pnpm generate
echo "--- build-ts"
pnpm build-ts
echo "--- eslint"
pnpm eslint client/web/src/jscontext.ts client/web/src/testSetup.test.ts client/web/src/user/settings/UserSettingsArea.tsx
