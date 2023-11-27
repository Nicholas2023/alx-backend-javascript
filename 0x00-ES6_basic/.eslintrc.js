module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  plugins: ['import'],
  rules: {
    'linebreak-style': 'off',
    'no-console': 'off',
  },
};
