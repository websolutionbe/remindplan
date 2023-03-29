import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import autoprefixer from "autoprefixer";
import svgLoader from 'vite-svg-loader';
import path from "path";
import EnvironmentPlugin from "vite-plugin-environment";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    assetsInclude: ['**/*.png'],
    plugins: [
        laravel({
            input: [
                'resources/scss/app.scss',
                'resources/js/app.js',
            ],
            postcss: [
                autoprefixer(),
            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        VitePWA({
            outDir: 'public/build',
            filename: 'sw.js',
            registerType: 'autoUpdate',
            devOptions: {
                enabled: false
            },
            manifest: {
                name: 'Remindplan',
                short_name: 'Remindplan',
                description: 'Get shit done',
                theme_color: '#DCE2FD',
                icons: [
                    {
                        src: '../images/icon.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: '../images/icon.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            }
        }),
        svgLoader(),
        EnvironmentPlugin(['SENTRY_LARAVEL_DSN', 'APP_ENV', 'INERTIAJS_SSR_PORT']),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources'),
            'ziggy': path.resolve(__dirname, 'vendor/tightenco/ziggy/src/js')
        }
    },
});
