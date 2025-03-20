---
title: Tooltip
description: Tooltip 组件文档

next:
  link: /components/table
  text: table 组件

prev:
  link: /components/breadcrumb
  text: breadcrumb
---

# tooltip

## 基础用法

文字气泡支持 12 个不同的方位。分别为：上左、上、上右、下左、下、下右、左上、左、左下、右上、右、右下。content属性设置提示文字，placement属性控制气泡弹出方向。

::: preview
demo-preview=../demo/tooltip/Basic.vue
:::


## mini尺寸
适用于小场景或数字气泡样式。默认是large

::: preview
demo-preview=../demo/tooltip/Mini.vue
:::


## 触发方式
可以通过Hover、Click、Contextmenu 三种触发方式

::: preview
demo-preview=../demo/tooltip/Tigger.vue
:::


## 禁用状态

禁用状态，鼠标悬停、单击、右击均无法触发文字提示。disabled 属性。

::: preview
demo-preview=../demo/tooltip/Disabled.vue
:::


## 自定义控制
可以通过 manual 属性手动控制。

::: preview
demo-preview=../demo/tooltip/Manual.vue
:::

## 更多内容的文字提示
展示多行文本或者设置内容的格式 通过 content 插槽设置内容

::: preview
demo-preview=../demo/tooltip/Slot.vue
:::



## Tooltip API

### Props

| Name           | Description | Type                                                     | Default |
| -------------- | ----------- | -------------------------------------------------------- | ------- |
| content        | 提示文字    | `string`                                                 | -       |
| disabled       | 是否禁用    | `boolean`                                                | false   |
| placement      | 弹出位置    | `'top-start'\| 'top'\'top-end'\| 'left-start'\| 'left'\'left-end'\| 'right-start'\'right'\| 'right-end'\'bottom-start'\| 'bottom'\'bottom-end'\`                                             | bottom  |
| trigger        | 触发方式    |  `'hover'\| 'click'\|'Contextmenu'\`                      | hover   |
| size           | 尺寸        | `'large'\| 'mini'\`                                      | large   |
| manual         | 手动控制    | `boolean`                                                | false   |
| transition     | 动画        | `string`                                                 | fade    |
| show-timeout   | 显示延时    | `number`                                                 | 0       |
| hide-timeout   | 隐藏延时    | `number`                                                 | 200     |

### Events

| Name           | Description            | Type                         |
| -------------- | ---------------------- | ---------------------------- |
| visible-change | 显示隐藏状态改变时触发 | `(visible: boolean) => void` |
| click-outside  | 点击外部时触发         | `() => void`                 |

### Slots

| Name    | Description |
| ------- | ----------- |
| default | 默认插槽    |
| content | 内容插槽    |

### Expose

| Name | Description | Type         |
| ---- | ----------- | ------------ |
| show | 显示        | `() => void` |
| hide | 隐藏        | `() => void` |