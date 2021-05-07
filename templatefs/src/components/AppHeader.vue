<template>
  <header>
    <h1>Family Size Restaurant</h1>
    <p>Portions as big as your grandma makes them!</p>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppHeader extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

header {
  font-family: "Lobster", cursive;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      to right bottom,
      rgba($app-primary, 0.5),
      rgba($app-secondary, 0.5)
    ),
    url("../assets/img/header-background.jpg");
  background-repeat: no-repeat;
  background-attachment: unset;
  background-position: center;
}

h1 {
  font-size: 4em;
  font-weight: bolder;
  text-decoration: underline $app-accent;

  &::first-letter {
    color: $app-accent;
  }
}

p {
  margin-top: 1rem;
  font-size: 300%;
  transform: skew(15deg) rotate(-5deg);
}
</style>
