---
title: Breadcrumb
description: Breadcrumb 组件文档

next:
  link: /components/tooltip
  text: tooltip 组件

prev:
  link: /components/icon
  text: icon
---

# breadcrumb

## 基础用法

面包屑的基本用法,最多渲染数量为4，超出的部分将显示为省略号。

::: preview
demo-preview=../demo/breadcrumb/Basic.vue
:::



## 自定义分隔符

使用 separator 属性来自定义分隔符。

::: preview
demo-preview=../demo/breadcrumb/Separator.vue
:::




## 参数化配置

使用 to 属性来实现路由跳转目标；可接受a标签.


::: preview
demo-preview=../demo/breadcrumb/Props.vue
:::



## Breadcrumb API

### Props

| Name              | Description                       | Type                                                             | Default |
| ----------------- | --------------------------------- | ---------------------------------------------------------------- | ------- |
| separator              | 分隔符                          | `string`                                                       |   /    |
| to             | 路由跳转目标 (a标签的href)                | `string`                                                       | -     |

