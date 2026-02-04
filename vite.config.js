import { defineConfig } from 'vite';

export default defineConfig( ( { command, mode, isSsrBuild, isPreview }) => {
  if( command === 'serve' ){
    return {
      base: '/maplestory-zakum/', // or 'https://cdn.example.com/assets/'
      optimizeDeps: { exclude: ["@babylonjs/havok"] }
    }
  }else{
    return{
      base: '/babylonjs/maplestory-zakum/', // or 'https://cdn.example.com/assets/'
      optimizeDeps: { exclude: ["@babylonjs/havok"] }
    }
  }
});
