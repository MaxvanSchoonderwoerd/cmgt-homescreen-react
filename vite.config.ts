import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    plugins: [react()],
    base: "https://cmgt-home-screen.netlify.app/",
    build: {
      outDir: "public",
    },
    server: {
      host: "localhost",
    },
  };
});
