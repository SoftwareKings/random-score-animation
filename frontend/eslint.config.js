// eslint.config.js
import vuePlugin from 'eslint-plugin-vue'
import vueStandardCfg from '@vue/eslint-config-standard'

export default [
  {
    files: ['src/**/*.{js,ts,vue}'],
  },
  {
    plugins: { vue: vuePlugin },
    ...vueStandardCfg,
  },
  {
    rules: {
      'vue/max-attributes-per-line': 'off'
    }
  }
]
