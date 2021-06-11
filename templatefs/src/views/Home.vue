<template>
  <section class="home">
    <AppHeader />
    <div class="card-container">
      <AppCard
        title="Not your traditional restaurant!"
        subTitle="We love eating, and we want to share the experience!"
        text="Our plates get to your table as full as you will leave!"
      />
      <AppCard
        title="You will surely come back!"
        subTitle="We have a wide range of dishes from many cultures!"
        text="This is the 21st century, you deserve to eat more and better!"
      />
      <AppCard
        title="Affordable prices!"
        subTitle="We have dishes for the kids and the parents alike!"
        text="If your family doesn't enjoy the food, we failed you!"
      />
      <AppCard
        title="Every day is special if you want it!"
        subTitle="We work hard to help you enjoy the experience!"
        text="Friday night, birthday lunch, romantic dinner, doesn't matter!"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppHeader from "@/components/AppHeader.vue";
import AppCard from "@/components/AppCard.vue";

@Component({
  components: {
    AppCard,
    AppHeader,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.home {
  display: grid;
  grid-template-rows: 45% 1fr;
}

.card-container {
  display: flex;
  flex-direction: row;
  background: linear-gradient(
    to right bottom,
    rgba($app-accent, 0.25),
    rgba($app-secondary, 0.15)
  );
}
</style>
