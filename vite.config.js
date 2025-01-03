import { defineConfig } from 'vite';

export default defineConfig({
    root: '.', // Projekt-Root
    publicDir: 'public', // Verzeichnis für statische Dateien
    build: {
        outDir: 'dist', // Ausgabeordner
        rollupOptions: {
            input: './index.html', // Einstiegspunkt
        },
    },
});
