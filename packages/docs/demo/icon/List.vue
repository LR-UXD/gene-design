<script setup>
const icons = [
    "at",
    "cloud-download",
    "code-block",
    "code-square",
    "code",
    "customer-service",
    "download",
    "export",
    "eye-invisible",
    "eye",
    "heart",
    "history",
    "home",
    "import",
    "launch",
    "list",
    "message-banned",
    "message",
    "more-vertical",
    "more",
    "poweroff",
    "refresh",
    "reply",
    "save",
    "scan",
    "search",
    "select-all",
    "send",
    "settings",
    "share-alt",
    "share-external",
    "share-internal",
    "star",
    "sync",
    "thumb-down",
    "thumb-up",
    "translate",
    "upload",
    "voice",
];
</script>

<template>
    <div class="icon-list">
        <div v-for="icon in icons" :key="icon" class="icon-item">
            <div class="icon-wrapper">
                <g-icon :icon="icon" size="24" color="#333" />
            </div>
            <span class="icon-name">{{ icon }}</span>
        </div>
    </div>
</template>

<style scoped>
.icon-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    gap: 16px;
    padding: 20px;
}

.icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.icon-wrapper {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 50%;
}

.icon-name {
    font-size: 12px;
    color: #666;
    margin-top: 6px;
    text-align: center;
    word-break: break-word;
}
</style>
