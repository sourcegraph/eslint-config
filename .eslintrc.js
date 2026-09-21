module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:jsdoc/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:unicorn/recommended',
    'plugin:jest-dom/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  globals: {
    globalThis: false, // false means not writable
  },
  plugins: ['ban', 'jsdoc', 'react', 'react-hooks', 'etc', 'rxjs', 'jest-dom', 'jsx-a11y', 'unused-imports'],
  settings: {
    react: {
      version: 'detect',
    },
    jsdoc: {
      mode: 'typescript',
    },
  },
  reportUnusedDisableDirectives: true,
  rules: {
    'arrow-body-style': 'error',
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
        name: ['test', 'only'],
        message: "Don't forget to remove .only before committing",
      },
      {
        name: ['jest', 'fn'],
        message: 'Use sinon.spy(() => undefined) instead',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash',
            importNames: ['isArray'],
            message: 'Use Array.isArray instead.',
          },
        ],
      },
    ],
    complexity: 'off',
    'constructor-super': 'error',
    curly: 'error',
    'dot-notation': 'error',
    eqeqeq: 'error',
    'guard-for-in': 'error',
    'max-classes-per-file': 'off',
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
    'no-fallthrough': 'off',
    'no-inner-declarations': 'off',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'error',
    'no-lonely-if': 'error',
    'no-magic-numbers': 'off',
    'no-new-wrappers': 'error',
    'no-redeclare': 'off',
    'no-sparse-arrays': 'error',
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
    radix: 'error',
    'require-await': 'error',
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
    'import/no-default-export': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@sourcegraph/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '*.scss',
            group: 'index',
            patternOptions: { matchBase: true },
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: [],
      },
    ],

    // JSDoc
    'jsdoc/require-returns': 'off',
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-param': 'off',
    'jsdoc/no-bad-blocks': 'error',
    'jsdoc/check-indentation': 'off',
    'jsdoc/check-tag-names': [
      'error',
      {
        // Used by typedoc
        definedTags: ['hidden', 'internal'],
        // `see` was historically accepted inline by this config.
        inlineTags: [
          'link',
          'linkcode',
          'linkplain',
          'tutorial',
          'inheritDoc',
          'label',
          'include',
          'includeCode',
          'see',
        ],
      },
    ],

    // Rules for React
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/button-has-type': 'error',
    'react/display-name': 'warn',
    'react/forbid-dom-props': ['error', { forbid: ['style'] }],
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-key': 'error',
    'react/jsx-no-bind': 'off',
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
    'react/self-closing-comp': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/prop-types': 'off', // Not needed with TypeScript

    // Rules for RxJS
    'rxjs/no-ignored-observable': 'error',
    'rxjs/no-ignored-subscription': 'error',
    'rxjs/no-async-subscribe': 'error',
    'rxjs/no-nested-subscribe': 'error',
    'rxjs/no-unbound-methods': 'error',
    'rxjs/throw-error': 'error',
    'rxjs/no-internal': 'error',
    'rxjs/no-subclass': 'error',
    'rxjs/no-unsafe-catch': 'error',
    'rxjs/no-subject-unsubscribe': 'error',

    'etc/throw-error': 'error',
    'etc/no-deprecated': 'warn',

    '@typescript-eslint/prefer-regexp-exec': 'off',
    // These are error by default for JS too
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    // Turned off this rule since it was throwing
    // TypeError: Cannot read property 'kind' of undefined
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'warn',

    'unicorn/filename-case': ['error', { cases: { camelCase: true, pascalCase: true, kebabCase: true } }],
    // This rule wraps a removed ESLint API and is incompatible with ESLint 10.
    'unicorn/expiring-todo-comments': 'off',
    'unicorn/no-process-exit': 'off',
    'unicorn/no-null': 'off', // DOM API often works with null
    'unicorn/no-useless-undefined': 'off', // conflicts with TypeScript
    'unicorn/prefer-number-properties': 'off',
    'unicorn/custom-error-definition': 'off', // false positives: https://github.com/sindresorhus/eslint-plugin-unicorn/issues/753
    'unicorn/no-nested-ternary': 'off', // if-elseif-else ternaries are commonly needed in JSX and formatted well by Prettier
    'id-length': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-array-callback-reference': 'off', // we use filter(isDefined) a lot
    'unicorn/number-literal-case': 'off',
    'unicorn/numeric-separators-style': 'off',
    'unicorn/prefer-switch': 'off',
    'unicorn/prefer-spread': 'off',
    'unicorn/template-indent': 'off',
    'unicorn/prefer-export-from': 'off',
    'unicorn/explicit-length-check': 'off',
    'unicorn/prefer-date-now': 'off',
    'unicorn/no-await-expression-member': 'off',
    'unicorn/prefer-dom-node-text-content': 'off',
    'unicorn/consistent-destructuring': 'off',
    'unicorn/no-new-array': 'off',
    'unicorn/prefer-ternary': 'off',
    'unicorn/prefer-dom-node-dataset': 'off',
    'unicorn/no-useless-spread': 'off',
    'unicorn/no-lonely-if': 'off',
    'unicorn/prefer-array-some': 'off',
    'unicorn/prefer-native-coercion-functions': 'off',
    'unicorn/relative-url-style': 'off',
    'unicorn/prefer-array-flat-map': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/no-useless-promise-resolve-reject': 'off',
    'unicorn/no-array-method-this-argument': 'off',
    'unicorn/no-array-for-each': 'off',
    'no-unsafe-optional-chaining': 'off',
    'unicorn/import-style': 'off',
    'unicorn/no-array-push-push': 'off',
    'unicorn/no-useless-switch-case': 'off',
    'unicorn/prefer-regexp-test': 'off',
    'unicorn/no-object-as-default-parameter': 'off',
    'unicorn/prefer-code-point': 'off',
    'unicorn/prefer-object-from-entries': 'off',
    'unicorn/prefer-math-trunc': 'off',
    'unicorn/text-encoding-identifier-case': 'off',
    'unicorn/no-unreadable-iife': 'off',
    'unicorn/error-message': 'off',
    'unicorn/no-thenable': 'off',
    'unicorn/prefer-array-index-of': 'off',
    // Preserve the existing policy when upgrading Unicorn. These rules were added to its recommended config in v49-v56.
    'unicorn/consistent-empty-array-spread': 'off',
    'unicorn/consistent-existence-index-check': 'off',
    'unicorn/no-anonymous-default-export': 'off',
    'unicorn/no-await-in-promise-methods': 'off',
    'unicorn/no-invalid-fetch-options': 'off',
    'unicorn/no-length-as-slice-end': 'off',
    'unicorn/no-magic-array-flat-depth': 'off',
    'unicorn/no-negation-in-equality-check': 'off',
    'unicorn/no-single-promise-in-promise-methods': 'off',
    'unicorn/no-unnecessary-polyfills': 'off',
    'unicorn/prefer-global-this': 'off',
    'unicorn/prefer-math-min-max': 'off',
    'unicorn/prefer-string-raw': 'off',
    'unicorn/prefer-structured-clone': 'off',

    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'rxjs/no-nested-subscribe': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'error',
        // TypeScript ESLint 8 also reports unnecessary Promise aggregators. Keep existing cases visible without
        // making the toolchain upgrade an immediate build break.
        '@typescript-eslint/await-thenable': 'warn',
        // The empty object type is often used for React components that accept no props. We have custom helpers
        // for checking properties of the `object` type, so preserve the exceptions from the former ban-types rule.
        '@typescript-eslint/no-empty-object-type': 'off',
        '@typescript-eslint/no-unsafe-function-type': 'error',
        '@typescript-eslint/no-wrapper-object-types': 'error',
        '@typescript-eslint/naming-convention': [
          'off',
          {
            // Properties and destructured variables often can't be controlled by us if the API is external.
            // Event logging, `__typename` etc don't follow conventions enforceable here.
            // We also need to allow implementing external interface methods, e.g. UNSAFE_componentWillReceiveProps().
            selector: 'default',
            format: null,
          },
          {
            // Helps e.g. Go engineers who are used to lowercase unexported types.
            selector: 'typeLike',
            format: ['PascalCase'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },
        ],
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          { allowExpressions: true, allowTypedFunctionExpressions: true, allowHigherOrderFunctions: true },
        ],
        '@typescript-eslint/explicit-member-accessibility': ['error', { overrides: { constructors: 'no-public' } }],
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
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
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
        // Switch to error when all cases are fixed
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        // Turned off this rule since it was throwing
        // TypeError: Cannot read property 'kind' of undefined
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            varsIgnorePattern: '.*', // TS already enforces this
            args: 'after-used',
            ignoreRestSiblings: true,
          },
        ],
        // no-use-before-define goes against the top-to-bottom rule and TypeScript protects against most temporal deadzone bugs.
        // https://dzone.com/articles/the-stepdown-rule
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        'unicorn/no-for-loop': 'off',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        'unicorn/prefer-string-starts-ends-with': 'off',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        'unicorn/prefer-includes': 'off',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'off', // https://github.com/typescript-eslint/typescript-eslint/issues/1265
        '@typescript-eslint/triple-slash-reference': 'error',
        // This rule was causing error so turned it off
        // '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true, allowBoolean: true }],
        '@typescript-eslint/restrict-template-expressions': 'off',
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

        'jsx-a11y/no-autofocus': 'off', // Rule can't account for cases where autofocus can be expected

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
        'id-length': 'off',
        'import/no-default-export': 'off',
      },
    },
    {
      files: '*.@(test|story).ts?(x)',
      rules: {
        'react/jsx-no-bind': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/button-has-type': 'off',
        'rxjs/no-ignored-subscription': 'warn',
        'unicorn/consistent-function-scoping': 'off',
      },
    },
    {
      files: '*.test.tsx',
      rules: {
        // False positive on react-test-renderer act()
        '@typescript-eslint/no-floating-promises': 'off',
      },
    },
  ],
}
