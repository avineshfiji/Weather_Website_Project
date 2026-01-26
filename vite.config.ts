import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import materialSymbols from "vite-plugin-material-symbols";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), materialSymbols()],
});
