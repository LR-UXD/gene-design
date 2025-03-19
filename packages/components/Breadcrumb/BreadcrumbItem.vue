<template>
  <span class="g-breadcrumb-item">
    <component :is="to ? 'a' : 'span'" :href="to ? to : undefined"
      :class="['g-breadcrumb-item__inner', { 'is-link': !!to, 'is-grey': !isLast, 'is-black': isLast }]">
      <slot />
    </component>
    <!-- 只在不是最后一项时显示分隔符 -->
    <span v-if="!isLast" class="g-breadcrumb-separator">{{ separator }}</span>
  </span>
</template>

<script setup lang="ts">
import { inject, defineProps, computed } from 'vue';
import type { BreadcrumbItemProps } from './types';

defineOptions({
  name: 'GBreadcrumbItem',
});

const { to } = defineProps<BreadcrumbItemProps>();

const { separator, registerItem, getItemCount } = inject('breadcrumb', {
  separator: '/',
  registerItem: () => 0,
  getItemCount: () => 0,
});

const currentIndex = registerItem();

const isLast = computed(() => {
  return currentIndex === getItemCount() - 1;
});

</script>

<style scoped>
@import './style.css';
</style>
