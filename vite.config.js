import { defineConfig } from 'vite';

export default defineConfig( {
  base: '/maplestory-zakum/', // or 'https://cdn.example.com/assets/'
  optimizeDeps: { exclude: ["@babylonjs/havok"] }
} );

