<template>
    <g-tooltip ref="tooltip" manual content="Hello Tooltip">
        <g-button @click="toggleTooltip">Click Me</g-button>
    </g-tooltip>
</template>

<script setup>
import { ref } from "vue";

const tooltip = ref();

function toggleTooltip() {
    if (tooltip.value) {
        tooltip.value.show();
        setTimeout(() => tooltip.value.hide(), 2000);
    }
}
</script>