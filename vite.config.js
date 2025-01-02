import { defineConfig } from "vite";

export default defineConfig({
    root: './public', // Der Ordner, in dem `index.html` liegt
    build: {
        outDir: '../dist', // Ausgabeort für den Build
        emptyOutDir: true, // Löscht den `dist`-Ordner vor jedem neuen Build
    },
});
