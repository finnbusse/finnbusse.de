import { defineConfig } from "vite";

export default defineConfig({
    root: "public", // Der Quellordner
    base: "/", // Basis-URL für alle Ressourcen
    build: {
        outDir: "../dist", // Zielverzeichnis
        emptyOutDir: true, // Löscht vorherige Builds
        assetsDir: "static", // Alle Assets werden im "static"-Ordner gespeichert
        rollupOptions: {
            input: {
                main: "./public/index.html", // Haupt-HTML-Datei
            },
        },
    }
});
