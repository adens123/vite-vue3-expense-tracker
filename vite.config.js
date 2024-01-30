import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  base:
    process.env.NODE_ENV === "production" ? "/vite-vue3-expense-tracker/" : "/"
});
