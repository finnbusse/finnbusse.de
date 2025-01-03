import { defineConfig } from "vite";

export default defineConfig({
    root: "public", // Entwicklungs-Root ist public
    base: "./", // Verwende relative Pfade für Assets
    build: {
        outDir: "../dist", // Build-Output wird in dist gespeichert
        emptyOutDir: true, // Leert den dist-Ordner vor jedem neuen Build
        assetsDir: "static", // Alle Assets werden in dist/static gespeichert
        rollupOptions: {
            input: {
                main: "./public/index.html", // Haupt-HTML
            },
        },
    }
});
