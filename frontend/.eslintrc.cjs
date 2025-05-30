// .eslintrc.cjs
const vueStandard = require('@vue/eslint-config-standard').default;

module.exports = {
    ...vueStandard,
    root: true,
    env: { browser: true, es2021: true },
    parserOptions: { ecmaVersion: 2022, sourceType: 'module' },
    rules: {},
};
