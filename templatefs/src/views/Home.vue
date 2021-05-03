<template>
  <section class="home">
    <app-header></app-header>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppHeader from "@/components/AppHeader.vue";

Vue.component("app-header", AppHeader);

@Component({
  components: {},
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-rows: 35% 1fr;
}
</style>
