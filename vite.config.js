import { defineConfig } from "vite";

export default defineConfig({
    root: "public", // Setzt den Root auf das Verzeichnis mit der index.html
    base: "./", // Stellt sicher, dass relative Pfade verwendet werden
    build: {
        outDir: "../dist", // Der Build-Output landet im dist-Ordner (außerhalb von public)
        emptyOutDir: true, // Löscht dist vor jedem neuen Build
        assetsDir: "static", // Speichert alle Assets in dist/static/
    },
    server: {
        open: true, // Öffnet die App automatisch im Browser
    },
});
