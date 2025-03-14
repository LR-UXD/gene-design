<script setup lang="ts">
</script>

<template>
  <g-button size="mini" round disabled icon="at" type="primary">test</g-button>
  <g-button size="mini" icon="download" circle type="primary" />
  <g-icon icon="download" color="blue" size="100"></g-icon>
  <g-icon icon="star" color="blue" size="100"></g-icon>
  <g-icon icon="star" color="red" size="200"></g-icon>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
