import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "echarts";
import ECharts from "vue-echarts";

// import "~/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import "~/styles/index.scss";
import "uno.css";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.component('v-chart', ECharts);
app.mount("#app");
