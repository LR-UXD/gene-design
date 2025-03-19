import DefaultTheme from "vitepress/theme";
import { type App } from "vue";
import genedesign from "gene-design";
import { ElementPlusContainer } from "@vitepress-demo-preview/component";

import List from "../../demo/icon/List.vue";

import "@vitepress-demo-preview/component/dist/style.css";
import "gene-design/dist/index.css";

export default {
    ...DefaultTheme,
    enhanceApp({ app }: { app: App }) {
        app.component("demo-preview", ElementPlusContainer);
        app.use(genedesign);
        app.component("List", List);
    },
};
