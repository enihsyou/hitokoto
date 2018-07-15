import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";
import "./plugins/axios";
import "./styles.scss";

// Element UI
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/zh-CN";

Vue.use(ElementUI, { locale });

// FontAwesome 5
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faArrowAltCircleUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars, faArrowAltCircleUp);
Vue.component("font-awesome-icon", FontAwesomeIcon);

import 'normalize.css'

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
