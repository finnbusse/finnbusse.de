import { defineConfig } from "vite";

export default defineConfig({
    root: "public", // Entwicklungs-Root
    base: "./", // Relative Pfade
    build: {
        outDir: "../dist", // Der Output-Ordner für den Build
        emptyOutDir: true, // Löscht den Ordner vor jedem Build
        assetsDir: "static", // Stellt sicher, dass alle Assets in "static" landen
        rollupOptions: {
            input: {
                main: "./public/index.html", // Haupt-HTML
            },
        },
    }
});
