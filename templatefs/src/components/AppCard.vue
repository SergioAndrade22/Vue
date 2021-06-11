<template>
  <div>
    <b-card :title="this.title" :sub-title="this.subTitle">
      <b-card-text>{{ this.text }}</b-card-text>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { BCard, BCardTitle, BCardSubTitle, BCardText } from "bootstrap-vue";

Vue.component("b-card", BCard);
Vue.component("b-card-title", BCardTitle);
Vue.component("b-card-sub-title", BCardSubTitle);
Vue.component("b-card-text", BCardText);

@Component
export default class AppCard extends Vue {
  @Prop(String) title: string | undefined;
  @Prop(String) subTitle: string | undefined;
  @Prop(String) text: string | undefined;

  constructor() {
    super();
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

div {
  max-width: 400px;
  margin: 5px;
}

.card {
  background-color: $app-primary;
  border: 2px solid $app-accent;
  -webkit-box-shadow: 6px 8px 18px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 6px 8px 18px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 6px 8px 18px 0px rgba(0, 0, 0, 0.5);

  &-subtitle {
    color: $app-accent !important;
  }
}
</style>
