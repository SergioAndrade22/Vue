import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { NavbarPlugin } from "bootstrap-vue";

Vue.config.productionTip = false;
Vue.use(NavbarPlugin);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
