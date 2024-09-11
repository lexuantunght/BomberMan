import { defineConfig, splitVendorChunkPlugin } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
    base: './',
    plugins: [splitVendorChunkPlugin(), tsconfigPaths()],
    server: {
        port: 5500,
    },
    define: {
        __PLATFORM__: JSON.stringify(process.env.PLATFORM || process.platform),
        __DEV__: process.env.NODE_ENV == 'development',
    },
    build: {
        outDir: path.resolve(__dirname, 'build'),
        emptyOutDir: true,
        assetsInlineLimit: 0,
        rollupOptions: {
            output: {
                entryFileNames: 'js/[name].[hash].js',
                chunkFileNames: 'js/[name].[hash].js',
                assetFileNames: (assetInfo) => {
                    let extType = 'assets';
                    // if (assetInfo.name && /\.(css)$/.test(assetInfo.name)) {
                    // 	extType = 'css';
                    // }
                    return `${extType}/[name].[hash][extname]`;
                },
            },
        },
        copyPublicDir: true,
    },
    publicDir: path.resolve(__dirname, 'public'),
    esbuild: {
        legalComments: 'none',
    },
    clearScreen: true,
});
