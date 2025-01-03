import { defineConfig } from 'vite';

export default defineConfig({
    root: 'public',         // Sagt Vite, dass deine index.html in /public liegt
    build: {
        outDir: '../dist',    // Baut das Ergebnis in ../dist (relativ zum root)
        emptyOutDir: true,
    }
});