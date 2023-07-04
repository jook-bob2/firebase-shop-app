import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import reactRefresh from '@vitejs/plugin-react-refresh';
import vitePluginEslint from 'vite-plugin-eslint';
import viteJsconfigPaths from 'vite-jsconfig-paths';
import envCompatible from 'vite-plugin-env-compatible';
import swcReact from 'vite-plugin-swc-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  const env = loadEnv(mode, process.cwd());

  // expose .env as process.env instead of import.meta since jest does not import meta yet
  const envWithProcessPrefix = Object.entries(env).reduce(
    (prev, [key, val]) => {
      return {
        ...prev,
        [`process.env.${key}`]: `"${val}"`,
      };
    },
    {},
  );

  return {
    build: {
      outDir: 'build',
      minify: 'esbuild',
    },
    plugins: [
      reactRefresh(),
      splitVendorChunkPlugin(),
      svgrPlugin({
        svgrOptions: {
          icon: true,
          // ...svgr options (https://react-svgr.com/docs/options/)
        },
      }),
      vitePluginEslint(),
      viteJsconfigPaths(),
      envCompatible(),
      swcReact({
        swcOptions: {
          jsc: {
            transform: {
              react: {
                runtime: 'automatic',
              },
            },
          },
          env: {
            // https://vitejs.dev/guide/build.html#browser-compatibility
            targets:
              'defaults and supports es6-module and supports es6-module-dynamic-import, not opera > 0, not samsung > 0, not and_qq > 0',
            mode: 'usage',
            coreJs: '3',
          },
        },
      }),
    ],
    define: envWithProcessPrefix,
  };
});
