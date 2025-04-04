import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: [
      "5083-191-156-18-15.ngrok-free.app", // Dominio actual de Ngrok
      ".ngrok-free.app", // Opcional: Permitir cualquier subdominio Ngrok
    ],
  },
  plugins: [react(), tailwindcss()],
});
