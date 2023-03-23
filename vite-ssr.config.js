import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from "path";
import EnvironmentPlugin from 'vite-plugin-environment'


export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            ssr: 'resources/js/ssr.js',
        }),
        EnvironmentPlugin(['SENTRY_LARAVEL_DSN', 'APP_ENV']),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources'),
            'ziggy': path.resolve(__dirname, 'vendor/tightenco/ziggy/src/js'),
        }
    },
    ssr: {
        noExternal: [
            'laravel-vite-plugin',
            '@inertiajs/server',
        ],
    },
});
