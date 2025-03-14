<script setup lang="ts">
import { ref, computed, inject } from 'vue'
import type { ButtonEmits, ButtonProps } from './types';
import { throttle } from 'lodash-es';
import { BUTTON_GROUP_CTX_KEY } from './constants'
import gIcon from '../Icon/Icon.vue';




defineOptions({
    name: 'gButton',
})
const props = withDefaults(defineProps<ButtonProps>(), {
    tag: "button",
    nativeType: "button",
    useThrottle: true,
    throttleDuration: 500,
})
const emits = defineEmits<ButtonEmits>();
const slots = defineSlots();
const buttonGroupCtx = inject(BUTTON_GROUP_CTX_KEY, void 0);
const _ref = ref<HTMLButtonElement>();


const size = computed(() => buttonGroupCtx?.size ?? props.size ?? "");
const type = computed(() => buttonGroupCtx?.type ?? props.type ?? "");
const disabled = computed(
    () => props.disabled || buttonGroupCtx?.disabled || false
);

const iconStyle = computed(() => ({
    marginRight: slots.default ? "6px" : "0px",
}));

const handleBtnClick = (e: MouseEvent) => { emits("click", e) };
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration, { trailing: false });

</script>

<template>
    <component :is="tag" ref="_ref" class="g-button" :autofocus="autofocus"
        :type="tag === 'button' ? nativeType : void 0" :disabled="disabled || loading ? true : void 0" :class="{
            [`g-button--${type}`]: type,
            [`g-button--${size}`]: size,
            'is-circle': circle,
            'is-plain': plain,
            'is-disabled': disabled,
            'is-loading': loading,
            'is-round': round,
        }" @click="(e: MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)">
        <template v-if="loading">
            <slot name="loading">
                <g-icon class="loading-icon" :icon="loadingIcon ?? 'spinner'" :style='iconStyle' size="1em" />
            </slot>
        </template>
        <g-icon v-if="icon && !loading" :icon="icon" :style="iconStyle" size="1em" />
        <slot></slot>
    </component>

</template>

<style scoped>
@import './style.css';
</style>