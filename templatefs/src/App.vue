<template>
  <div id="app">
    <nav-bar />
    <router-view id="content" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar.vue";
import AppCard from "@/components/AppCard.vue";

@Component({
  components: {
    NavBar,
    AppCard,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "../src/assets/scss/main.scss";
#content {
  height: auto;
  min-height: 100% !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $app-secondary;
  display: grid;
  grid-template-rows: 4em 1fr;
  height: 100vh;
}

#nav {
  padding: 15px;

  a {
    font-weight: bold;
    color: $app-secondary;

    &.router-link-exact-active {
      color: $app-accent;
    }
  }
}
</style>
