import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        aluno: resolve(__dirname, 'aluno.html'),
        professor: resolve(__dirname, 'professor.html'),
      },
    },
  },
})
