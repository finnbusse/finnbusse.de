import { defineConfig } from 'vite';

export default defineConfig({
    root: 'public', // Quellordner
    base: '/', // Basis-URL für Ressourcen
    build: {
        outDir: '../dist', // Zielordner für den Build
        emptyOutDir: true,
        assetsDir: 'static', // Platz für Assets wie JS und CSS
        rollupOptions: {
            input: './public/index.html', // Haupt-HTML-Datei
        },
    }
});
