<script setup lang="ts">
import { type IconProps } from "./types";
import { ref, computed, watch } from "vue";

defineOptions({
    name: "gIcon",
    inheritAttrs: false,
});

const props = defineProps<IconProps>();
const iconStyles = computed(() => ({
    width: props.size ? `${props.size}px` : undefined,
    height: props.size ? `${props.size}px` : undefined,
    color: props.color || undefined,
    display: "inline-block",
}));

const svgContent = ref<string | null>(null);
const loadSVG = async () => {
    if (typeof props.icon === "string") {
        const icons = import.meta.glob("./icon/interaction/*.svg", { as: "raw" });
        const iconPath = `./icon/interaction/${props.icon}.svg`;

        if (icons[iconPath]) {
            let svg = await icons[iconPath]();

            svg = svg.replace(/fill="[^"]*"/g, `fill="currentColor"`);

            if (props.color) {
                svg = svg.replace(/fill="[^"]*"/g, `fill="${props.color}"`);
                svg = svg.replace("<svg", `<svg fill="${props.color}"`);
            }
            if (props.size) {
                svg = svg.replace(/width="[^"]*"/g, `width="${props.size}"`);
                svg = svg.replace(/height="[^"]*"/g, `height="${props.size}"`);
            }
            svgContent.value = svg;
        } else {
            console.warn(`SVG 文件未找到: ${iconPath}`);
            svgContent.value = null;
        }
    }
};

// **监听
watch([() => props.icon, () => props.color, () => props.size], loadSVG, {
    immediate: true,
});
</script>

<template>
    <i class="g-icon" :style="iconStyles" v-bind="$attrs" v-html="svgContent"
        :class="{ [`g-icon--${props.type}`]: props.type }" />
</template>

<style scoped>
@import "./style.css";

.g-icon svg {
    width: 100%;
    height: 100%;
    /* fill: currentColor !important; */
}
</style>
