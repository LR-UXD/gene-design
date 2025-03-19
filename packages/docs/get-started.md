---
search: false
next:
  link: /components/button
  text: Button 按钮
---
# 最新 Vue3 + TS 打造 Gene-Design 的组件库

## 安装


```bash
npm i gene-design --save
```

## 开始使用

**全局使用**


```js
// 引入所有组件
import genedesign from 'gene-design'
// 引入样式
import 'gene-design/dist/index.css'

import App from './App.vue'
// 全局使用
createApp(App).use(gElement).mount('#app')
```

```vue
<template>
  <g-button>我是 Button</g-button>
</template>
```

**单个导入**

Gene-Design 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。


```vue
<template>
  <g-button>我是 Button</g-button>
</template>
<script>
  import { gButton } from ' g-element'
  export default {
    components: { gButton },
  }
</script>
```

## 亮点

::: details
- Vite + Vitest + Vitepress 工具链
- monorepo 分包管理
- github actions 实现 CI/CD 自动化部署
- 展示 发布“开箱即用” 的 npm 包
- 文档生成工具，组件库打包和发布以及其他周边流程应有尽有，提供一揽子解决方案。
:::

