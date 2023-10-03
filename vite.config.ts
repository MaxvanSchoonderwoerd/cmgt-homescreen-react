import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    plugins: [react()],
    base: "http://localhost",
    build: {
      outDir: "public",
    },
    server: {
      host: "localhost",
    },
  };
});
