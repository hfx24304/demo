import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import demoData from '@/common/av'


Vue.config.productionTip = false

new Vue({
	//demoData,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
