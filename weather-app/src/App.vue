<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
body {
  background-color: $color-black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $font-color-light;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $font-color-light;

    &.router-link-exact-active {
      color: $color-primary;
    }
  }
}
</style>
