module.exports = {
  extends: ['eslint-config-airbnb-base'],
  globals: {
    app: 'readonly',
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'import/ignoreImports': 0,
    'import/prefer-default-export': 'off',
    'no-use-before-define': ['error', { variables: false, functions: false }],
    'import/extensions': ['error', 'ignorePackages', {
      js: 'always',
      json: 'always',
    }],
  },
};
