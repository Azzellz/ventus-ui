import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJSX from "@vitejs/plugin-vue-jsx";
import dts from "vite-plugin-dts";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: {
                index: resolve(__dirname, "./src/index.ts"),
            },
            formats: ["es"],
            name: "ventus-ui",
        },
        minify: false,
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ["vue", "naive-ui"],
            output: {
                chunkFileNames: "common/[name].js",
                entryFileNames: (file) => {
                    if (file.name == "index") {
                        return "index.js";
                    } else {
                        return "[name]/index.js";
                    }
                },
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
    plugins: [
        vue(),
        vueJSX(),
        dts({
            // reference https://blog.csdn.net/Wrysmile0308/article/details/134318030
            tsconfigPath: "tsconfig.app.json",
        }),
    ],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    },
});
