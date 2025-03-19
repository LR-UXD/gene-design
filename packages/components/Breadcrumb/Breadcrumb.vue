<template>
    <div class="g-breadcrumb">
        <template v-if="filteredItems.length > 4">
            <component :is="filteredItems[0]" />
            <span class="g-breadcrumb-ellipsis">...</span>
            <span class="g-breadcrumb-separator">{{ props.separator }}</span>
            <component :is="filteredItems[filteredItems.length - 2]" />
            <component :is="filteredItems[filteredItems.length - 1]" />
        </template>
        <template v-else>
            <slot />
        </template>
    </div>
</template>

<script setup lang="ts">
import { provide, useSlots, computed, ref } from 'vue';
import type { BreadcrumbProps } from './types';

defineOptions({
    name: 'GBreadcrumb',
});
const itemCount = ref(0);// 当前项的索引

const props = withDefaults(defineProps<BreadcrumbProps>(), {
    separator: '/',
});
const slots = useSlots();

const filteredItems = computed(() => {
    return (slots.default?.() || []).filter(vnode => vnode?.type && vnode.type !== Symbol.for('v-cmt'));
});


provide('breadcrumb', {
    separator: computed(() => props.separator),
    breadcrumbItems: filteredItems.value,
    registerItem: () => {
        const index = itemCount.value;
        itemCount.value++;
        return index;
    },
    getItemCount: () => itemCount.value,
});
</script>

<style scoped>
@import './style.css';
</style>