<template>
  <b-navbar id="nav" toggleable="lg" type="dark" variant="app-primary">
    <!-- <b-navbar-brand>Family Size</b-navbar-brand> -->

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
          ><img class="icon" src="@/assets/img/loupe.svg" />Search</b-button
        >
      </b-nav-form>

      <b-navbar-nav>
        <b-link class="nav-link" to="/">Home</b-link>
        <b-link class="nav-link" to="/about">About</b-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BLink, BFormInput, BButton, BNavbarBrand } from "bootstrap-vue";

Vue.component("b-form-input", BFormInput);
Vue.component("b-button", BButton);
Vue.component("b-link", BLink);
Vue.component("b-navbar-brand", BNavbarBrand);

@Component
export default class NavBar extends Vue {}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
#nav {
  padding: 0 !important;
}

#search-form {
  margin: auto;
  justify-content: center;
  width: 50%;
}

#nav-collapse {
  background-color: $app-primary;
}

.icon {
  display: inline;
  width: 1.2rem;
}

.nav-link:not(:last-child) {
  padding-right: 10px;
}
</style>
