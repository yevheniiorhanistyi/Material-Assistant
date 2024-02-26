module.exports = {
  extends: ['eslint-config-airbnb-base'],
  globals: {
    app: 'readonly',
  },
  rules: {
    'import/ignoreImports': 0,
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      js: 'always',
      json: 'always',
    }],
  },
};
