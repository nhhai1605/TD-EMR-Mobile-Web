import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin(), eslintPlugin()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
    raw: {
      extensions: ['html', 'txt'],
      glob: ['**.html'], // or glob
    },
  },
});
