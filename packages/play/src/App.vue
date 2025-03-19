<script setup lang="ts">


</script>

<template>
  <g-button size="mini" round disabled icon="at" type="primary">test</g-button>
  <g-button size="mini" icon="download" circle type="primary" />
  <g-icon icon="download" color="blue" size="100"></g-icon>
  <g-icon icon="star" color="blue" size="100"></g-icon>
  <g-icon icon="star" color="red"></g-icon>

  <p>
    <g-button type="primary" icon="download" />
    <g-button type="primary" icon="at" />
    <g-button type="primary" icon="search" />
    <g-button type="primary" icon="search">Search</g-button>
    <g-button type="primary">
      Upload<g-icon icon="download" style="margin-left: 8px" size="1em" />
    </g-button>
  </p>

  <p>
    <g-breadcrumb separator=">">
      <g-breadcrumb-item><a href="/">Home1</a></g-breadcrumb-item>
      <g-breadcrumb-item to='home'>Home2</g-breadcrumb-item>
      <g-breadcrumb-item to='about'>About</g-breadcrumb-item>
      <!-- <g-breadcrumb-item>Detail</g-breadcrumb-item>
      <g-breadcrumb-item>More</g-breadcrumb-item> -->
    </g-breadcrumb>
  </p>
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
