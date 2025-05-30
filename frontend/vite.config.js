import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    eslintPlugin({
      cache: false,
      overrideConfigFile: resolve(__dirname, '.eslintrc.cjs'),
      include: ['src/**/*.vue', 'src/**/*.js', 'src/**/*.ts', 'tests/**/*.spec.ts'],
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['tests/**/*.spec.ts']
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      }
    }
  }
})
