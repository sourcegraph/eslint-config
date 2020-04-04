#!/bin/bash
set -ex

echo "--- yarn"
yarn
echo "--- clone sourcegraph/sourcegraph"
CONFIG_DIR=$(pwd)
CLONE_DIR=$(mktemp -d)
git clone --depth 1 https://github.com/sourcegraph/sourcegraph "$CLONE_DIR"
cd "$CLONE_DIR"
echo "--- yarn"
yarn --frozen-lockfile
echo "--- yarn cmd/precise-code-intel"
pushd cmd/precise-code-intel
yarn --frozen-lockfile
popd
echo "--- yarn add"
yarn add --dev "$CONFIG_DIR"
yarn deduplicate
yarn
echo "--- diff"
git diff
echo "--- build-ts"
yarn build-ts
echo "--- eslint"
yarn all:eslint
