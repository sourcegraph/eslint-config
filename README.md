# @sourcegraph/eslint-config

[![npm](https://img.shields.io/npm/v/@sourcegraph/eslint-config.svg)](https://www.npmjs.com/package/@sourcegraph/eslint-config)
[![downloads](https://img.shields.io/npm/dt/@sourcegraph/eslint-config.svg)](https://www.npmjs.com/package/@sourcegraph/eslint-config)
[![build](https://travis-ci.org/sourcegraph/eslint-config.svg?branch=master)](https://travis-ci.org/sourcegraph/eslint-config)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Shared ESLint config for Sourcegraph projects

## Install

```
npm install @sourcegraph/eslint-config
# or
yarn add @sourcegraph/eslint-config
```

Then add an `.eslintrc.json` to your project with

```json
{
  "extends": "@sourcegraph/eslint-config"
}
```

## Principles

Our lint rules are to help us write bug-free, readable and maintainable code.
Rules are usually added because the patterns they are checking for have been proven to be problematic
and frequently come up in code reviews.
The intention is to save both authors and reviewers time by providing the author early feedback at the time of writing.
Formatting concerns are intentionally left out and left to the code formatter of our choice, Prettier.

Some rules are configured as warnings - these are patterns that usually should be avoided, however have some exceptions.
Code authors are asked to double-check whether the violation is legitimate,
and either prevent it or add a comment for reviewers that justify the violation.

## TSLint

This ruleset replaces almost all of our TSLint config, however there is a handful of rules that have no equivalent in ESLint yet.
For these, it is recommended to run TSLint in addition to ESLint.
The package dist-tag `@sourcegraph/tslint-config@eslint` contains only the TSLint rules that are not yet in this ESLint config.

## Release

Releases are done automatically in CI when commits are merged into master by analyzing [Conventional Commit Messages](https://conventionalcommits.org/).
After running `yarn`, commit messages will be linted automatically when committing though a git hook.
The git hook can be circumvented for fixup commits with [git's `fixup!` autosquash feature](https://fle.github.io/git-tip-keep-your-branch-clean-with-fixup-and-autosquash.html), or by passing `--no-verify` to `git commit`.
You may have to rebase a branch before merging to ensure it has a proper commit history, or squash merge with a manually edited commit message that conforms to the convention.
