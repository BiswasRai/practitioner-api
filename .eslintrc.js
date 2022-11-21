/* eslint-disable comma-dangle */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  rules: {
    indent: 'off',
    'no-console': 'error',
    '@typescript-eslint/semi': 'off',
    'jsdoc/check-tag-names': 'off',
    'func-names': 'off',
    'require-jsdoc': [
      'error',
      {
        require: {
          ArrowFunctionExpression: true
        }
      }
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ]
  }
};
