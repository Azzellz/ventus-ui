import type { App } from "vue";
import { VButton } from "./common";

export default {
    // 只注册通用组件
    install(app: App) {
        app.component("VButton", VButton);
    },
};

export * from "./common";
export * from "./effect";
export * from "./tool";

export * from "naive-ui";
