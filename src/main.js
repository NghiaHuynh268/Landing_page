import Vue from "vue";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import VueCarousel from "vue-carousel";

import "./assets/scss/reset.scss";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueCarousel);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
