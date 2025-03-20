import { defineConfig } from "vitepress";
import {
    containerPreview,
    componentPreview,
} from "@vitepress-demo-preview/plugin";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Gene-Design",
    description: "基于Vue3 + Ts 开发的gene design",
    appearance: false, // 关闭 darkMode @todo 深色模式完成后打开
    base: "/gene-design/",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "开始使用", link: "/get-started" },
            { text: "组件", link: "/components/button" },
        ],
        search: {
            provider: "local",
        },
        sidebar: [
            {
                text: "指南",
                collapsed: false,
                items: [{ text: "快速开始", link: "/get-started" }],
            },
            {
                text: "基础组件",
                collapsed: false,
                items: [
                    { text: "按钮 Button", link: "components/button" },
                    { text: "图标 Icon", link: "components/icon" },
                    { text: "面包屑 Breadcrumb", link: "components/breadcrumb" },
                    { text: "文字气泡 Tooltip", link: "components/tooltip" },
                ],
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/LenovoResearch-UXD/gene-design" },
        ],
    },
    markdown: {
        config(md) {
            md.use(containerPreview);
            md.use(componentPreview);
        },
    },
});