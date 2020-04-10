module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    camelcase: [
      2,
      {
        properties: 'never',
      },
    ],
    'consistent-return': 0,
    'array-callback-return': 0,
    'no-return-assign': 0,
    'max-len': 0,
    'no-undef': 0,
    'no-param-reassign': 0,
    'object-curly-newline': [
      'error',
      {
        consistent: true,
      },
    ],
    'no-underscore-dangle': 0,
    'prefer-destructuring': 0,
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
  },
  parser: 'babel-eslint',
};
