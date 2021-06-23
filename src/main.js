import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from 'vue-router';
import routes from './components/Router.js'

Vue.config.productionTip = true;

// global registering <!--

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'hash' // mode: 'history'로 설정 시 history mode
});

Vue.filter("uppercase", (e) => e.toUpperCase());
Vue.filter("slice", (e) =>
  e.length > 100 ? e.slice(0, 100) + ", More..." : e
);

// global registering -->

export const someEventBus = new Vue();

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app")
