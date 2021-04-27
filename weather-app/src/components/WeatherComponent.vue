<template>
  <div v-if="city">
    <h3>{{ city.name }}</h3>
    <div class="info-container">
      <span
        >{{ city.weather[0].main }} :
        {{ city.weather[0].description }}
      </span>
      <img :src="getIconURL()" alt="" />
    </div>
    {{ city }}
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    city: Object
  }
})
export default class Weather extends Vue {
  getIconURL() {
    return this.$props.city
      ? `http://openweathermap.org/img/wn/${this.$props.city.weather[0].icon}@2x.png`
      : "";
  }
}
</script>

<style lang="scss">
.info-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
