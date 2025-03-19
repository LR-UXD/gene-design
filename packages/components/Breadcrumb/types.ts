// types.ts
import type { RouteLocationRaw } from 'vue-router';


export interface BreadcrumbProps {
    separator?: string;
    items: Array<{ label: string; to?: string }>; // 添加 items 属性
}

export interface BreadcrumbItemProps {
    to?: RouteLocationRaw; // 路由跳转目标
    replace?: boolean; // 是否使用 replace 方式跳转
}

export interface BreadcrumbItem {
    text: string; // 面包屑项的文本内容
    to?: RouteLocationRaw; // 路由跳转目标
    replace?: boolean; // 是否使用 replace 方式跳转
}



