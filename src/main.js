// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import directives from './directives'
import filters from './filters'
import ElementUI from 'element-ui'
//import './assets/style/theme/index.css'
import 'element-ui/lib/theme-chalk/index.css';
import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import VueHighlightJS from 'vue-highlightjs'
import GeminiScrollbar from 'vue-gemini-scrollbar'
import "./assets/style/shake.css";
import "./assets/style/button.css";
import "./assets/js/ribbon"




Vue.config.productionTip = false

Vue.use(GeminiScrollbar)
Vue.use(directives)
Vue.use(filters)
Vue.use(ElementUI)
Vue.use(VueCodemirror)
Vue.use(mavonEditor)
Vue.use(VueHighlightJS)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})