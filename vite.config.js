import { defineConfig } from 'vite';

export default defineConfig({
    root: './public',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        assetsDir: 'styles', // Verschiebt CSS in `dist/styles`
    },
});
