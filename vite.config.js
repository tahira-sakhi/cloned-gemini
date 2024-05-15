import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "https://github.com/tahira-sakhi/cloned-gemini.git",
});
