---
title: Button
description: Button 组件文档

next:
  link: /components/icon
  text: icon

prev:
  link: /get-started
  text: 快速开始
---

# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`、 `round`和 `circle`来定义按钮的样式。

::: preview
demo-preview=../demo/button/Basic.vue
:::

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

::: preview
demo-preview=../demo/button/Disabled.vue
:::

## 图标按钮

使用 `icon`属性来定义按钮的图标(可以和type兼容)。

::: preview
demo-preview=../demo/button/Icon.vue
:::


## 按钮尺寸

使用 `size`属性来定义按钮的尺寸。

::: preview
demo-preview=../demo/button/Size.vue
:::



## 节流模式

可以通过 `useThrottle` 属性来定义按钮是否使用节流模式 默认为 true。

::: preview
demo-preview=../demo/button/Throttle.vue
:::

## Button API

### Props

| Name              | Description                       | Type                                                             | Default |
| ----------------- | --------------------------------- | ---------------------------------------------------------------- | ------- |
| size              | 尺寸                              | `enum` - `'large'\| 'default'\| 'small'\|'mini'`                         | —       |
| type              | 类型                              | `enum` - `'primary'\| 'secondary'\| 'default'\| 'text'` | -   |
| round             | 是否为圆角按钮                    | `boolean`                                                        | false   |
| circle            | 是否为圆形按钮                    | `boolean`                                                        | false   |
| disabled          | 按钮是否为禁用状态                | `boolean`                                                        | false   |
| icon              | 按钮图标                          | `string`                                                         | -       |
| use-throttle      | 是否使用节流模式                  | `boolean`                                                        | true    |
| throttle-duration | 节流模式下，节流时间间隔(ms)      | `number`                                                         | 500     |

### Events

| Name  | Description  | Type                         |
| ----- | ------------ | ---------------------------- |
| click | 按钮点击事件 | `(event: MouseEvent)=> void` |

### Slots

| Name    | Description        |
| ------- | ------------------ |
| default | 默认插槽, 按钮内容 |
| loading | 自定义加载图标     |

### Expose

| Name     | Description    | Type                                 |
| -------- | -------------- | ------------------------------------ |
| ref      | 按钮 html 元素 | `Ref<HTMLButtonElement>`             |
| size     | 按钮尺寸       | `ComputedRef<''\|'small' \|'large'\|'mini'>` |
| type     | 按钮类型       | `ComputedRef<''\|'primary' \|...>`   |
| disabled | 按钮禁用状态   | `ComputedRef<boolean>`               |

## ButtonGroup API

### Props

| Name     | Description          | Type                                                             | Default |
| -------- | -------------------- | ---------------------------------------------------------------- | ------- |
| size     | 尺寸                 | `enum` - `'large'\| 'default'\| 'small'\| 'mini'`                         | —       |
| type     | 类型                 | `enum` - `'primary'\| 'secondary'\| 'default'\| 'text'` | -------  |
| disabled | 按钮组是否为禁用状态 | `boolean`                                                        | false   |

### Slots

| Name    | Description | Sub Component |
| ------- | ----------- | ------------- |
| default | 默认插槽    | Button        |