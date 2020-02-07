const prettierrc = require('@sourcegraph/prettierrc')
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:jsdoc/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  plugins: ['ban', 'jsdoc', 'react', 'react-hooks', 'etc'],
  settings: {
    react: {
      version: 'detect',
    },
    jsdoc: {
      mode: 'typescript',
    },
  },
  rules: {
    'arrow-body-style': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'ban/ban': [
      'error',
      {
        name: ['*', 'forEach'],
        message: 'Use a for-of loop instead',
      },
      {
        name: ['describe', 'only'],
        message: "Don't forget to remove .only before committing",
      },
      {
        name: ['it', 'only'],
        message: "Don't forget to remove .only before committing",
      },
      {
        name: ['jest', 'fn'],
        message: 'Use sinon.spy(() => undefined) instead',
      },
    ],
    'callback-return': 'error',
    complexity: 'off',
    'constructor-super': 'error',
    curly: 'error',
    'dot-notation': 'error',
    eqeqeq: 'error',
    'eol-last': 'error',
    'guard-for-in': 'error',
    'linebreak-style': 'off',
    'max-classes-per-file': 'off',
    'new-parens': 'error',
    'newline-per-chained-call': 'off',
    'no-bitwise': 'off',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': 'off',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-debugger': 'error',
    'no-duplicate-imports': 'error',
    'no-empty': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-extra-semi': 'off',
    'no-fallthrough': 'off',
    'no-floating-decimal': 'error',
    'no-inner-declarations': 'off',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'error',
    'no-lonely-if': 'error',
    'no-magic-numbers': 'off',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-new-wrappers': 'error',
    'no-redeclare': 'off',
    'no-sparse-arrays': 'error',
    'no-sync': ['error', { allowAtRootLevel: true }],
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-unsafe-finally': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'off', // Crashes
    'no-var': 'error',
    'no-void': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'prefer-const': ['error', { destructuring: 'all' }],
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'off',
    quotes: ['error', prettierrc.singleQuote ? 'single' : 'double', { avoidEscape: true }], // So autofixes use the right quote style
    radix: 'error',
    'require-await': 'error',
    'spaced-comment': 'error',
    'sort-imports': 'off', // Conflicts with TypeScript and is not fully autofixable.
    'use-isnan': 'error',
    'valid-typeof': 'off',
    yoda: 'error',

    // Imports
    'import/extensions': ['error', 'never'],
    'import/no-deprecated': 'warn',
    'import/no-unused-modules': 'error',
    'import/no-cycle': 'off', // Too slow
    'import/no-self-import': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-duplicates': 'error',

    // JSDoc
    'jsdoc/require-returns': 'off',
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-param': 'off',

    // Rules for React
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/button-has-type': 'error',
    'react/display-name': 'off',
    'react/forbid-dom-props': ['error', { forbid: ['style'] }],
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-key': 'error',
    'react/jsx-no-bind': ['error', { ignoreRefs: true, ignoreDOMComponents: true }],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': ['off', { ignoreStateless: true }], // too many existing violations :/
    'react/no-redundant-should-component-update': 'error',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    'react/no-unsafe': ['error', { checkAliases: true }],
    'react/no-unused-state': 'error',
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
    'react/require-render-return': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/prop-types': 'off', // Not needed with TypeScript

    // https://github.com/cartant/eslint-plugin-etc/issues/1
    // 'etc/throw-error': 'error',
    'etc/deprecation': 'warn',

    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              Function: 'Use a concrete function type like () => T instead',
              String: {
                message: 'Use string (lowercase) instead',
                fixWith: 'string',
              },
              Boolean: {
                message: 'Use boolean (lowercase) instead',
                fixWith: 'boolean',
              },
              Number: {
                message: 'Use number (lowercase) instead',
                fixWith: 'number',
              },
            },
          },
        ],
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/class-name-casing': 'error',
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          { allowExpressions: true, allowTypedFunctionExpressions: true, allowHigherOrderFunctions: true },
        ],
        '@typescript-eslint/explicit-member-accessibility': ['error', { overrides: { constructors: 'no-public' } }],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true }],
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': 'warn',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/no-unnecessary-condition': 'off', // False positives, reenable when fixed
        '@typescript-eslint/consistent-type-assertions': [
          'warn',
          { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' },
        ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            varsIgnorePattern: '.*', // TS already enforces this
            args: 'after-used',
            ignoreRestSiblings: true,
          },
        ],
        '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'off', // https://github.com/typescript-eslint/typescript-eslint/issues/1265
        '@typescript-eslint/type-annotation-spacing': 'off',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/return-await': 'error',
        '@typescript-eslint/unbound-method': 'error',
        '@typescript-eslint/unified-signatures': 'error',

        'jsdoc/no-types': 'error',
        'jsdoc/no-undefined-types': 'off',
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-returns-type': 'off',
        'jsdoc/valid-types': 'off',
        'import/no-unresolved': 'off',
        'import/default': 'off',
        'import/named': 'off',
        'import/namespace': 'off',
        'import/no-deprecated': 'off',
        'react/no-direct-mutation-state': 'off',
        'react/jsx-no-undef': 'off',
        'no-undef': 'off',
        'no-dupe-class-members': 'off',
        'require-await': 'off',
      },
    },
    {
      files: '*.d.ts',
      rules: {
        'no-var': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
      },
    },
    {
      files: '*.@(test|story).ts?(x)',
      rules: {
        'react/jsx-no-bind': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
}
