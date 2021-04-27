<template>
  <b-navbar id="nav" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand>Family Size</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-nav-form id="search-form" class="w-100">
        <b-form-input
          id="search-form__input"
          class="mr-sm-1 w-75"
          size="sm"
          placeholder="Search"
        ></b-form-input>
        <b-button
          id="search-form__button"
          size="sm"
          class="my-2 my-sm-0 w-20"
          type="submit"
          ><img class="icon" src="@/assets/loupe.svg" />Search</b-button
        >
      </b-nav-form>

      <b-navbar-nav>
        <b-link to="/">Home</b-link>
        <b-link to="/about">About</b-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BLink, BFormInput, BButton } from "bootstrap-vue";

Vue.component("b-form-input", BFormInput);
Vue.component("b-button", BButton);

Vue.component("b-link", BLink);

@Component
export default class NavBar extends Vue {}
</script>

<style lang="scss">
#search-form {
  margin: auto;
  justify-content: center;
  width: 50%;
}

.icon {
  display: inline;
  width: 1.2rem;
}
</style>
