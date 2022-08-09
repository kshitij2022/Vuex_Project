import Vue from 'vue'
// import VueRouter from 'vue-router'
import App from './App.vue'

import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
