<template>
  <header>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
    <h1>Thanks for your preference</h1>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppHeader extends Vue {}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("../assets/img/header-background.jpg");
  background-repeat: no-repeat;
  background-attachment: unset;
  background-position: center;
}

h1 {
  font-family: "Lobster", cursive;
}
</style>
