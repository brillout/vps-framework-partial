import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [react(), ssr()],
  build: {
    rollupOptions: {
      input: {
        'vite-plugin-ssr.config': require.resolve('./vite-plugin-ssr.config'),
        'components': require.resolve('./components')
      },
        /*
      output: {
        //entryFileNames: '[name].js',
  entryFileNames: (chunkInfo) => {
          const preserveFiles = ['pageFiles'];
    console.log(chunkInfo.name)
          const useDefault = preserveFiles.includes(chunkInfo.name);
          return useDefault ? '[name].js' : 'assets/[hash].js';
        },
      }
        //*/
    }
  }
}
export default config
