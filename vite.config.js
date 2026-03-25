import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),        // React JSX 변환 + Fast Refresh (저장 시 즉시 반영)
        tailwindcss(),  // Tailwind CSS v4 — config 파일 없이 바로 동작합니다.
    ],

    server: {
        port: 3000,
        open: true,
        // 개발 시 브라우저는 Vite(3000)만 보고, /api 는 Spring Boot(8080)로 전달 → CORS 우회
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
            },
        },
    },

    build: {
        outDir: 'dist',
        sourcemap: true,
    },
});