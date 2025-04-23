import { defineConfig } from 'vite';

export default defineConfig( {
  base: '/game-dev/', // or 'https://cdn.example.com/assets/'
  optimizeDeps: { exclude: ["@babylonjs/havok"] }
} );

