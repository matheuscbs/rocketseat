import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".jsx"], // Certifique-se de que .tsx está listado aqui
  },
});
