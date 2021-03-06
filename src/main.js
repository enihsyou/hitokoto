import { populateStoreWithHitokotoApi } from "@/service/web-api";
import Vue from "vue";
import App from "./App.vue";

import router from "./router";

// Vuex
import store from "./data/store";
populateStoreWithHitokotoApi(store);
// Axios
import "./plugins/axios";

// Element UI
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/zh-CN";
import "./styles.scss";
Vue.use(ElementUI, { locale });

// FontAwesome 5
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faArrowAltCircleUp, faHeart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars, faArrowAltCircleUp, faHeart);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// Reset default browser css behaviors
import 'normalize.css'

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
