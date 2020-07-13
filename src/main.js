import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ECharts from "vue-echarts";
import chinaMap from "./assets/json/shanghai.json";
ECharts.registerMap("shanghai", chinaMap);
Vue.config.productionTip = false;

Vue.component(`echarts`, ECharts);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
