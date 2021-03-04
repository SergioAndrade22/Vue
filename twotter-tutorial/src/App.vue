<template>
  <nav class="navbar">
    <ul>
      <li>
        TWOTTER
      </li>
      <img class="logo" src="./assets/logo.png" alt="Vue logo"/>
      <li class="username">
        A USER NAME
      </li>
    </ul>
  </nav>
  <user-profile></user-profile>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import UserProfile from './components/UserProfile.vue';

@Options({
  name: 'App',
  components: {
    UserProfile
  },
})
export default class App extends Vue {

  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo {
  width: 2em;
}

nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: #333;
  color: #fff;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}

li {
  padding: .6em 1em;
  background-color: #888;
}


</style>
