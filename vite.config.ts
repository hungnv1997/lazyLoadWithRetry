import react from "@vitejs/plugin-react";
import path from "node:path";
import { createLogger, defineConfig } from "vite";
import dts from "vite-plugin-dts";
const logger = createLogger();
const originalWarning = logger.warn;
logger.warn = (msg, options) => {
  if (msg.includes("vite") && msg.includes(" dynamic import")) return;
  originalWarning(msg, options);
};
export default defineConfig({
  customLogger: logger,
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "MyLib",
      formats: ["es", "umd"],
      fileName: (format) => `react-lazy-load-with-retries.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  // esbuild: {
  //     jsxInject: `import React from 'react'`,
  // },
});
