import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: path.resolve(__dirname, "./index.jsx"),
      name: "React Flags Components",
      fileName: (format) => `deadly-simple-gallery.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      plugins: [],
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  server: {
    port: 3000,
  },
  test: {
    globals: false,
    environment: "jsdom",
    includeSource: ["./**/*.{js,ts}"],
  },
  plugins: [react(), svgr()],
});
