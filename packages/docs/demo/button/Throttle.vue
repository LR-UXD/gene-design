<script setup>
// import { gMessage } from "gene-design";
function handleBtnClick() {
    //   gMessage.info("btn click");
}
</script>

<template>
    <p>
        <g-button @click="handleBtnClick"> with throttle</g-button>
        <g-button :use-throttle="false" @click="handleBtnClick">without throttle</g-button>
    </p>
</template>