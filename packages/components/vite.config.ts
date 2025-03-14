// vitest.config.ts
/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import svgLoader from "vite-svg-loader";



// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx(),
    svgLoader({
        defaultImport: 'component'
    }),

    ],
    // test: {
    //     globals: true,
    //     environment: "jsdom",
    // },
});

// "test": "vitest --coverage"



