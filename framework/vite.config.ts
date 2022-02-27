import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'

const bla: UserConfig = {
  plugins: [react(), ssr()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        /*
  entryFileNames: (chunkInfo) => {
          const preserveFiles = ['pageFiles'];
          const useDefault = preserveFiles.includes(chunkInfo.name);
          return useDefault ? '[name].js' : 'assets/[hash].js';
        },
        */
      }
    }
  }
}
  /*
export default defineConfig({
  plugins: [react(), ssr()],
  entryFileNames: (chunkInfo) => {
          const preserveFiles = ['pageFiles'];
          const useDefault = preserveFiles.includes(chunkInfo.name);
          return useDefault ? '[name].js' : 'assets/[hash].js';
        },
  input: {
  }
})
        */
