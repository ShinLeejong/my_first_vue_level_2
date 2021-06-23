import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";

Vue.config.productionTip = false;

// global registering <!--

Vue.use(VueResource);

Vue.filter("uppercase", (e) => e.toUpperCase());
Vue.filter("slice", (e) =>
  e.length > 100 ? e.slice(0, 100) + ", More..." : e
);

// global registering -->

export const someEventBus = new Vue();

new Vue({
  render: (h) => h(App),
}).$mount("#app");
