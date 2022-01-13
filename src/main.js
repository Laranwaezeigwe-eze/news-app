import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import routes from './routes'
// import './input.css'
import VueRouter from "vue-router/dist/vue-router.esm.browser";
import store from "./store";


Vue.use (VueRouter)
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false
new Vue({
  vuetify,
  router,
  store,
   el: '#app',
  components: {App},
  template: '<App/>',
  render: h => h(App)

}).$mount('#app')
