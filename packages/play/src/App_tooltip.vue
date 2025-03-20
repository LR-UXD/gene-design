<template>
    <div style="height: 200px;"></div>
    <div class="tooltip-base-box">
        <div class="row center">
            <g-tooltip class="box-item" content="Top Left prompts info" placement="top-start" size="mini">
                <g-button>top-start</g-button>
            </g-tooltip>
            <g-tooltip class="box-item" content="Top Center prompts info" placement="top">
                <g-button>top</g-button>
            </g-tooltip>
            <g-tooltip class="box-item" content="Top Right prompts info" placement="top-end">
                <g-button>top-end</g-button>
            </g-tooltip>
        </div>
        <div class="row">
            <g-tooltip class="box-item" content="Left Top prompts info" placement="left-start">
                <g-button type="primary">left-start</g-button>
            </g-tooltip>
            <g-tooltip class="box-item" content="Right Top prompts info" placement="right-start">
                <g-button>right-start</g-button>
            </g-tooltip>
        </div>
        <div class="row">
            <g-tooltip class="box-item" content="Left Center prompts info" placement="left">
                <g-button>left</g-button>
            </g-tooltip>
            <g-tooltip class="box-item" content="Right Center prompts info" placement="right">
                <g-button>right</g-button>
            </g-tooltip>
        </div>
        <div class="row">
            <g-tooltip class="box-item" content="Left Bottom prompts info" placement="left-end">
                <g-button>left-end</g-button>
            </g-tooltip>
            <g-tooltip class="box-item" content="Right Bottom prompts info" placement="right-end">
                <g-button>right-end</g-button>
            </g-tooltip>
        </div>
        <div class="row center">
            <g-tooltip class="box-item" content="Bottom Left prompts info" placement="bottom-start">
                <g-button>bottom-start</g-button>
            </g-tooltip>
            <g-tooltip class="box-item" content="Bottom Center prompts info" placement="bottom">
                <g-button>bottom</g-button>
            </g-tooltip>
            <g-tooltip class="box-item" content="Bottom Right prompts info" placement="bottom-end">
                <g-button>bottom-end</g-button>
            </g-tooltip>
        </div>
    </div>
</template>

<style>
.tooltip-base-box {
    width: 600px;
}

.tooltip-base-box .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.tooltip-base-box .center {
    justify-content: center;
}

.tooltip-base-box .box-item {
    width: 110px;
    margin-top: 10px;
}
</style>


<!-- 
<template>
    <g-tooltip ref="tooltip" manual content="Hello Tooltip" visible-change="">
        <button @click="toggleTooltip">Click Me</button>
    </g-tooltip>

    <g-tooltip content="Tooltip 内容" @visible-change="handleVisibleChange">
        <button>Hover Me</button>
    </g-tooltip>
    <g-tooltip content="Tooltip 内容" @click-outside="handleClickOutside" trigger="click">
        <button>Click Me</button>
    </g-tooltip>
</template>

<script setup>
import { ref } from "vue";

const tooltip = ref();

function toggleTooltip() {
    if (tooltip.value) {
        tooltip.value.show(); // 手动显示
        setTimeout(() => tooltip.value.hide(), 2000); // 2秒后隐藏
    }
}
function handleVisibleChange(visible) {
    console.log("Tooltip 状态改变:", visible ? "显示" : "隐藏");
}
function handleClickOutside() {
    console.log("点击了 Tooltip 外部");
}
</script>



<script setup>

  </script> -->