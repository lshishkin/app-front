import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { loadEnv } from '@rsbuild/core';
import path from 'path';

// By default, `publicVars` are variables prefixed with `PUBLIC_`
const { parsed, publicVars } = loadEnv();

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: path.resolve(__dirname, './src/index.html'),
  },
  source: {
    define: {
      ...publicVars,
    },
  },
});

