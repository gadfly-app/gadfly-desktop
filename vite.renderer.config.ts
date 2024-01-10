import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import { defineConfig } from 'vite';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// https://vitejs.dev/config
export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls,
      },
    }),
    vuetify({ autoImport: true }),
    AutoImport({
      dts: true,
      imports: [
        // presets
        'vue',
        'vue-router',
        {
          '@auth0/auth0-vue': ['useAuth0'],
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
});
